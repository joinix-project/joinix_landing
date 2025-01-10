# Git Flow and Commit Lint

This document provides a brief overview of Git Flow and Commit Lint practices to maintain a clean and organized Git workflow.

## Git Flow

Git Flow is a branching model for Git, designed to streamline collaboration and release management. Below are the key concepts:

### Branches

- **Main**: The main branch always contains production-ready code.
- **Develop**: The develop branch serves as the integration branch for features.
- **Feature Branches**: Used for developing new features. These branches are created from `develop` and merged back into `develop`.
  - Naming convention: `feature/feature-name`
- **Bugfix Branches**: Used for fixing bugs in the development cycle. Created from `develop` and merged back into `develop`.
  - Naming convention: `bugfix/bug-name`
- **Hotfix Branches**: Used to quickly fix critical bugs in production. Created from `main` and merged into both `main` and `develop`.
  - Naming convention: `hotfix/x.y.z`

### Workflow

1. **Create a Feature Branch**:
   ```bash
   git checkout develop
   git checkout -b feature/feature-name
   ```
2. **Work on the Feature**:
   - Commit changes following the commit lint guidelines.
3. **Merge Feature Back to Develop**:
   ```bash
   git checkout develop
   git merge feature/feature-name
   git branch -d feature/feature-name
   ```
4. **Create a Bugfix Branch**:
   ```bash
   git checkout develop
   git checkout -b bugfix/bug-name
   ```
5. **Work on and Merge Bugfix Back to Develop**:
   ```bash
   # Apply fixes and commit
   git checkout develop
   git merge bugfix/bug-name
   git branch -d bugfix/bug-name
   ```
6. **Hotfix Workflow**:
   ```bash
   git checkout main
   git checkout -b hotfix/x.y.z
   # Apply fixes and commit
   git checkout main
   git merge hotfix/x.y.z
   git checkout develop
   git merge hotfix/x.y.z
   git branch -d hotfix/x.y.z
   ```

---

## Commit Lint

Commit Lint ensures that all commit messages follow a standard format. This improves readability and makes it easier to generate changelogs automatically.

### Commit Message Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Example:
```
feat(auth): add user login functionality

Added API integration for user login.
Fixed edge case handling for expired tokens.

BREAKING CHANGE: Changed the authentication API endpoint.
```

### Commit Types

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation updates.
- **style**: Code style changes (non-functional, e.g., formatting).
- **refactor**: Code restructuring without changing functionality.
- **perf**: Performance improvements.
- **test**: Adding or modifying tests.
- **chore**: Maintenance tasks (e.g., build process or tool changes).
- **ci**: Changes to CI configuration files and scripts.
- **build**: Changes that affect the build system or dependencies (e.g., adding or removing packages).
- **revert**: Reverting a previous commit.
- **wip**: Work in progress commits (to be squashed before merging).

### Guidelines

1. Use the imperative mood in the subject line (e.g., "Add feature," not "Added feature").
2. Limit the subject line to 50 characters.
3. Wrap the body at 72 characters per line.
4. Use the footer for breaking changes or issue references (e.g., "BREAKING CHANGE" or "Closes #123").
