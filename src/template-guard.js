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
      reasons.push(`Required section is missing: ${title}`);
    }
  }

  if (hasCompletionMarker(blocks)) {
    reasons.push("Automation completion marker already exists.");
  }

  if (blocks.some((block) => USER_OWNED_BLOCK_TYPES.has(block.type))) {
    reasons.push("User-owned rich content exists.");
  }

  if (
    blocks.some(
      (block) =>
        block.owner === "user" &&
        String(block.text || "").trim().length > 0,
    )
  ) {
    reasons.push("User-authored text exists.");
  }

  return {
    ok: reasons.length === 0,
    reasons,
  };
}

export { COMPLETION_MARKER_PREFIX, validateTemplateState };
