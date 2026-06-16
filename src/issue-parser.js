const QA_TARGETS = [
  {
    id: "quick-scan",
    keywords: ["quick scan", "context menu", "scan result"],
    title: "Quick scan behavior",
    place: "Desktop agent > File context menu",
    steps: [
      "Prepare a safe sample file that matches the test condition.",
      "Run quick scan from the file context menu.",
      "Confirm completion state, detection result, and user-facing message.",
    ],
  },
  {
    id: "policy-sync",
    keywords: ["policy", "sync", "not applied", "refresh"],
    title: "Policy synchronization",
    place: "Admin setting and desktop agent",
    steps: [
      "Change only the policy related to the scenario.",
      "Trigger synchronization on the desktop agent.",
      "Confirm that changed behavior is reflected without affecting unrelated settings.",
    ],
  },
  {
    id: "report-export",
    keywords: ["report", "export", "log", "record"],
    title: "Log and report consistency",
    place: "Desktop agent logs and admin report",
    steps: [
      "Create a result using the reproduction steps.",
      "Compare the desktop-agent result with the report record.",
      "Export the report and confirm timestamp, status, and count consistency.",
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
    title: "Core user flow",
    place: "Desktop agent and related policy setting",
    steps: [
      "Reproduce the user flow described in the issue.",
      "Compare the actual result with the expected result.",
      "Record affected areas and evidence needed for follow-up.",
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
    overview: summary || "Summary requires review",
    priority: issue.priority || "Unspecified",
    scenarios: selectedTargets.map((target, index) => ({
      id: `A${index + 1}`,
      title: target.title,
      place: target.place,
      steps: target.steps,
    })),
  };
}

export { inferTargets, parseIssue };
