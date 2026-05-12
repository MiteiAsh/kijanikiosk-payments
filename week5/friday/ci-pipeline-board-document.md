# KijaniKiosk CI Pipeline – Board Document

Every time a developer pushes code, Jenkins runs this pipeline. It builds, tests, and publishes a versioned package to npm.

## The five stages
1. **Checkout** – Clones the latest code.
2. **Setup Node** – Installs Node.js 18.
3. **List** – Shows versions and files.
4. **Build** – Installs dependencies and creates the package.
5. **Verify** – Runs tests and security audit in parallel.
6. **Archive** – Saves a local copy.
7. **Publish** – Uploads to npm with a unique version like `1.0.0-5`.

## What happens on failure
- If tests fail → pipeline stops, no package published.
- If security vulnerabilities found → pipeline stops.
- If npm registry is down → package is still archived for later.

## Why versioning matters
The version includes the build number, so we can trace any package back to a specific CI run. This is essential for audit compliance.

## Scope
This pipeline does NOT deploy to production – that comes in Week 7.
