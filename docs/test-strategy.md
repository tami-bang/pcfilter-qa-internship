# Test Strategy Sample

## Goal

Verify that PCFILTER user-facing behavior matches the configured policy and that the result is traceable through logs or reports.

## QA Perspective

The test is organized around four questions:

1. What user action triggers the behavior?
2. Which policy or condition should affect the behavior?
3. What should the user see?
4. What evidence proves the result?

## Test Layers

| Layer | What To Check | Example Evidence |
|---|---|---|
| User flow | Menu, button, popup, result message | Screen note or reproduction step |
| Policy | Whether the related setting is enabled or disabled | Policy state summary |
| Client behavior | Scan, block, encrypt, delete, or allow result | Result message and timestamp |
| Record | Log, report, or admin history consistency | Redacted log/report summary |

## Scenario Design

Each scenario should include:

- Preconditions
- Test data
- Steps
- Expected result
- Actual result
- Evidence
- Follow-up decision

## Regression Focus

Regression tests should prioritize:

- Existing flows affected by the changed policy
- Boundary states such as disabled features, empty results, and missing permissions
- Cross-surface consistency between desktop agent, admin settings, and reports
- User-facing messages that could confuse non-technical users

## Exit Criteria

A test can be closed when:

- The reproduction path is clear
- The expected and actual results are compared
- Evidence is attached or summarized
- Any remaining risk is written down
- Sensitive information is removed from public-facing notes
