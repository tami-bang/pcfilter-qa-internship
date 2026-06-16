# QA Checklist Sample

This checklist is rewritten for public portfolio use.

## Before Testing

- [ ] Confirm the test objective
- [ ] Confirm the related user flow
- [ ] Prepare safe sample data
- [ ] Record OS and product build in a redacted format
- [ ] Confirm whether the related policy is enabled or disabled

## Functional Check

- [ ] Run the target user action
- [ ] Compare expected result and actual result
- [ ] Check user-facing message wording
- [ ] Check whether the result remains stable after retry
- [ ] Check whether unrelated features are unaffected

## Policy Reflection

- [ ] Change only the policy needed for the scenario
- [ ] Trigger policy synchronization
- [ ] Confirm the desktop agent reflects the changed policy
- [ ] Confirm disabled features are hidden, blocked, or explained correctly
- [ ] Restore the policy after the test if needed

## Logs And Reports

- [ ] Confirm whether the result is recorded
- [ ] Compare client-side result and admin/report result
- [ ] Check timestamps and status values
- [ ] Redact private paths, account names, and customer data before sharing

## Closeout

- [ ] Write reproduction steps clearly
- [ ] Attach or summarize evidence
- [ ] Mark unresolved questions
- [ ] Link related scenarios if this is a regression
- [ ] Remove all internal identifiers from public notes
