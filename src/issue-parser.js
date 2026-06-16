const QA_TARGETS = [
  {
    id: "quick-scan",
    keywords: ["quick scan", "context menu", "scan result"],
    title: "간편 검사 동작 확인",
    place: "데스크톱 에이전트 > 파일 우클릭 메뉴",
    steps: [
      "테스트 조건에 맞는 안전한 샘플 파일을 준비합니다.",
      "파일 우클릭 메뉴에서 간편 검사를 실행합니다.",
      "완료 상태, 검출 결과, 사용자 안내 문구를 확인합니다.",
    ],
  },
  {
    id: "policy-sync",
    keywords: ["policy", "sync", "not applied", "refresh"],
    title: "정책 동기화 확인",
    place: "관리자 설정 및 데스크톱 에이전트",
    steps: [
      "시나리오와 관련된 정책만 변경합니다.",
      "데스크톱 에이전트에서 정책 동기화를 실행합니다.",
      "변경된 동작이 관련 없는 설정에 영향 없이 반영되는지 확인합니다.",
    ],
  },
  {
    id: "report-export",
    keywords: ["report", "export", "log", "record"],
    title: "로그 및 리포트 일관성 확인",
    place: "데스크톱 에이전트 로그 및 관리자 리포트",
    steps: [
      "재현 단계에 따라 결과를 생성합니다.",
      "데스크톱 에이전트 결과와 리포트 기록을 비교합니다.",
      "리포트를 내보낸 뒤 시간, 상태, 건수의 일관성을 확인합니다.",
    ],
  },
];

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function inferTargets(text) {
  const normalized = normalizeText(text);

  return QA_TARGETS.filter((target) =>
    target.keywords.some((keyword) => normalized.includes(keyword)),
  );
}

function fallbackTarget() {
  return {
    id: "core-flow",
    title: "핵심 사용자 흐름 확인",
    place: "데스크톱 에이전트 및 관련 정책 설정",
    steps: [
      "이슈에 설명된 사용자 흐름을 재현합니다.",
      "실제 결과와 기대 결과를 비교합니다.",
      "영향 범위와 후속 확인에 필요한 증거를 기록합니다.",
    ],
  };
}

function parseIssue(issue) {
  const summary = String(issue.summary || "").trim();
  const description = String(issue.description || "").trim();
  const targets = inferTargets(`${summary}\n${description}`);
  const selectedTargets = targets.length > 0 ? targets : [fallbackTarget()];

  return {
    sourceKey: issue.key || "QA-SAMPLE",
    overview: summary || "요약 검토 필요",
    priority: issue.priority || "미지정",
    scenarios: selectedTargets.map((target, index) => ({
      id: `A${index + 1}`,
      title: target.title,
      place: target.place,
      steps: target.steps,
    })),
  };
}

export { inferTargets, parseIssue };
