# PCFILTER QA Internship

Public QA work sample based on an 8-week QA internship at Jiransoft.

This repository documents how I approached QA work for PCFILTER, a deployed endpoint security product, while keeping internal company information private. The materials here are rewritten as portfolio-safe samples. They do not include internal URLs, customer names, real tickets, credentials, logs, build files, or screenshots from private systems.

## What This Repository Shows

- How I understood a security product through user flows, admin policies, and logs
- How I converted issue descriptions into reproducible QA scenarios
- How I wrote test notes with clear conditions, expected results, actual results, and evidence
- How I improved repetitive QA documentation work with a small automation sample
- How I handled public documentation while protecting company and customer information

## Internship Scope

During the internship, I worked on QA tasks around a desktop security agent and its related admin settings. My work focused on verifying user-facing behavior, checking policy reflection, reproducing issues, and organizing test results so that developers and QA reviewers could follow the evidence.

Representative areas:

- Personal data scan flows
- File context-menu actions such as scan, encryption, and secure deletion
- Policy synchronization between admin settings and the desktop agent
- Log and report consistency checks
- Media, print, file attachment, and software execution control scenarios
- Regression checks after product changes

## Repository Structure

```text
pcfilter-qa-internship/
├── README.md
├── SECURITY_AND_PRIVACY.md
├── docs/
│   ├── bug-report-sample.md
│   ├── checklist-sample.md
│   └── test-strategy.md
├── src/
│   ├── issue-parser.js
│   └── template-guard.js
├── test/
│   └── automation.test.js
└── package.json
```

## Work Sample: QA Guide Automation

One repeated task was turning issue descriptions into test-guide drafts. The sample code in this repository recreates the idea in a safe, small form:

```text
Issue summary and description
  -> Keyword-based QA target selection
  -> Scenario draft generation
  -> Template safety check
  -> Test-guide output ready for human review
```

The automation sample intentionally avoids real Jira, Notion, or internal product data. It only demonstrates the logic pattern.

## Run The Sample

```bash
npm test
```

Node.js 18 or higher is enough. No external package installation is required.

## Public Case Study

This repository is designed to be linked from:

- GitHub profile: `https://github.com/tami-bang`
- Portfolio case study: `https://tami-bang.github.io/projects/pcfilter-qa-case-study/`

## What I Learned

QA is not only checking whether a button works. It is the process of connecting user behavior, policy conditions, logs, and evidence into a reproducible story. Through this internship, I learned to write clearer test records, reduce repeated manual work, and protect sensitive operational details when communicating publicly.
