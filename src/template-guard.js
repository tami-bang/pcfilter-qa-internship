const COMPLETION_MARKER_PREFIX = "QA_GUIDE_AUTOFILL_DONE";
const REQUIRED_SECTIONS = ["Details", "Scenarios", "Test results"];
const USER_OWNED_BLOCK_TYPES = new Set(["image", "video", "file", "code", "table"]);

function hasCompletionMarker(blocks) {
  return blocks.some((block) =>
    String(block.text || "").startsWith(COMPLETION_MARKER_PREFIX),
  );
}

function validateTemplateState(document) {
  const reasons = [];
  const blocks = Array.isArray(document.blocks) ? document.blocks : [];
  const sectionTitles = new Set(
    blocks
      .filter((block) => block.type === "heading")
      .map((block) => block.text),
  );

  for (const title of REQUIRED_SECTIONS) {
    if (!sectionTitles.has(title)) {
      reasons.push(`필수 섹션이 없습니다: ${title}`);
    }
  }

  if (hasCompletionMarker(blocks)) {
    reasons.push("자동화 완료 마커가 이미 존재합니다.");
  }

  if (blocks.some((block) => USER_OWNED_BLOCK_TYPES.has(block.type))) {
    reasons.push("사용자 소유의 리치 콘텐츠가 존재합니다.");
  }

  if (
    blocks.some(
      (block) =>
        block.owner === "user" &&
        String(block.text || "").trim().length > 0,
    )
  ) {
    reasons.push("사용자가 작성한 텍스트가 존재합니다.");
  }

  return {
    ok: reasons.length === 0,
    reasons,
  };
}

export { COMPLETION_MARKER_PREFIX, validateTemplateState };
