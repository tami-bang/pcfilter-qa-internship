import test from "node:test";
import assert from "node:assert/strict";

import { parseIssue } from "../src/issue-parser.js";
import {
  COMPLETION_MARKER_PREFIX,
  validateTemplateState,
} from "../src/template-guard.js";

function emptyTemplate(extraBlocks = []) {
  return {
    blocks: [
      { type: "heading", text: "Details", owner: "template" },
      { type: "heading", text: "Scenarios", owner: "template" },
      { type: "heading", text: "Test results", owner: "template" },
      ...extraBlocks,
    ],
  };
}

test("이슈 키워드에서 QA 시나리오를 생성한다", () => {
  const parsed = parseIssue({
    key: "QA-1042",
    summary: "Quick scan result is missing from exported report",
    description: "Compare the desktop agent log and exported report.",
    priority: "High",
  });

  assert.equal(parsed.sourceKey, "QA-1042");
  assert.deepEqual(
    parsed.scenarios.map((scenario) => scenario.title),
    ["간편 검사 동작 확인", "로그 및 리포트 일관성 확인"],
  );
});

test("비어 있는 템플릿은 자동 작성을 허용한다", () => {
  assert.deepEqual(validateTemplateState(emptyTemplate()), {
    ok: true,
    reasons: [],
  });
});

test("사용자가 작성한 텍스트가 있으면 자동 작성을 차단한다", () => {
  const result = validateTemplateState(
    emptyTemplate([{ type: "paragraph", text: "Existing note", owner: "user" }]),
  );

  assert.equal(result.ok, false);
  assert.match(result.reasons.join("\n"), /사용자가 작성한 텍스트/);
});

test("자동화 완료 마커가 있으면 반복 실행을 차단한다", () => {
  const result = validateTemplateState(
    emptyTemplate([
      {
        type: "paragraph",
        text: `${COMPLETION_MARKER_PREFIX}:QA-1042`,
        owner: "automation",
      },
    ]),
  );

  assert.equal(result.ok, false);
  assert.match(result.reasons.join("\n"), /완료 마커/);
});
