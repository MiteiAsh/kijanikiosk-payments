| Fault Injected | Stage | Observed Behaviour | Design Rationale |
|----------------|-------|--------------------|--------------------|
| Missing package.json | Build | Build stage failed with "ENOENT" error | Cannot build without manifest; fail fast is correct |
| Deliberate test failure (exit 1) | Test | Test branch failed, Security Audit continued, pipeline stopped | Security scan still runs but overall pipeline fails |
| Critical vulnerability added to dependencies | Security Audit | Audit stage failed, pipeline stopped | Financial platform cannot publish vulnerable code |
| Invalid npm token (wrong credentialsId) | Publish | Publish stage failed with 403 Forbidden | Artifact archived locally, no data lost, credentials never exposed |
