# Bug Report Sample

This is an anonymous, portfolio-safe bug report example. It is not copied from a real internal ticket.

## Summary

Quick scan completes successfully, but the exported report does not include the latest scan result.

## Environment

- Product: PCFILTER desktop agent
- OS: macOS test environment
- Build: Redacted
- Account/customer: Redacted

## Preconditions

- Desktop agent is installed and running
- Scan policy is enabled
- Report export is available
- Test file is prepared with safe sample data

## Steps To Reproduce

1. Open the file context menu.
2. Run quick scan on the prepared sample file.
3. Confirm that the scan result appears in the desktop agent.
4. Open the report/export area.
5. Export the latest scan report.
6. Compare the exported report with the desktop agent result.

## Expected Result

The exported report includes the latest quick-scan result with matching time, file count, and result status.

## Actual Result

The desktop agent shows the latest scan result, but the exported report only includes older records.

## Evidence

- Redacted screen note: latest result visible in agent
- Redacted report summary: latest result missing from export
- Timestamp comparison: agent result time is later than newest exported row

## Impact

Users may believe a scan result was not recorded, or administrators may review incomplete evidence.

## QA Notes

- Reproduced twice with the same sample file
- Needs comparison with full scan and selected scan flows
- Needs confirmation whether this is export filtering, synchronization timing, or report query behavior
