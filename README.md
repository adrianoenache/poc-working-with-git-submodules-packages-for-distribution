# Proof of concept (POC) of working with Git submodules - Packages for distribution

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository is a compiled assets distribution package. It holds the CSS bundle, JS bundle, Web Components bundle and Stylus core config published by three generator repositories — [`poc-working-with-git-submodules-compiled-css`](https://github.com/adrianoenache/poc-working-with-git-submodules-compiled-css), [`poc-working-with-git-submodules-compiled-js`](https://github.com/adrianoenache/poc-working-with-git-submodules-compiled-js) and [`poc-working-with-git-submodules-elena-progressive-web-components`](https://github.com/adrianoenache/poc-working-with-git-submodules-elena-progressive-web-components) — via a git submodule linked at their respective `distribution/` directories. The main project consumes this repository as a git submodule at `submodules-git/ui-kit-packages/`.

## Table of Contents

- [Project structure](#project-structure)
- [How it works](#how-it-works)
- [Installation](#installation)
- [Versioning / Tags](#versioning--tags)
- [Updating the submodule](#updating-the-submodule)
- [Related repositories](#related-repositories)
- [License](#license)
- [References](#references)

## Project structure

| File / Directory | Purpose |
|---|---|
| `css/main.css` | Compiled CSS ready for consumption |
| `css/main.css.map` | Source map for the compiled CSS |
| `js/main.js` | Compiled JavaScript bundle ready for consumption |
| `stylus-core-config/` | Stylus core config exported by `poc-working-with-git-submodules-compiled-css` |
| `elena-progressive-web-components/` | Web Components build output published by `poc-working-with-git-submodules-elena-progressive-web-components` |

## How it works

This repository sits in the middle of a multi-repository pipeline:

```
poc-working-with-git-submodules-compiled-css
  └── compiles Stylus → CSS
  └── commits css/ + stylus-core-config/ into distribution/ (which points here)

poc-working-with-git-submodules-compiled-js
  └── compiles JavaScript → JS bundle via Webpack
  └── commits js/ into distribution/ (which points here)

poc-working-with-git-submodules-elena-progressive-web-components
  └── compiles Web Components via Elena bundler
  └── commits elena-progressive-web-components/ into distribution/ (which points here)
        ↓
poc-working-with-git-submodules-packages-for-distribution  ← this repository
  └── holds css/main.css, css/main.css.map, js/main.js, stylus-core-config/, elena-progressive-web-components/
        ↓
poc-working-with-git-submodules
  └── consumes this repository as a submodule at submodules-git/ui-kit-packages/
```

## Installation

To add this repository as a git submodule in a consuming project:

> **Branch note:** `develop` is the active development branch. `main` is the stable branch intended for consumption by other projects — always use `-b main` when adding this submodule.

```bash
git submodule add -b main git@github.com:adrianoenache/poc-working-with-git-submodules-packages-for-distribution.git submodules-git/ui-kit-packages
```

After running the command, a `.gitmodules` file is created (or updated) in the root of the repository with the following content:

```ini
[submodule "submodules-git/ui-kit-packages"]
    path = submodules-git/ui-kit-packages
    url = git@github.com:adrianoenache/poc-working-with-git-submodules-packages-for-distribution.git
    branch = main
```

When cloning a project that already has this submodule configured, initialize and fetch it with:

```bash
git submodule update --init --recursive
```

## Versioning / Tags

This repository uses tags to allow consuming projects to lock on a specific released version of the assets.

To lock a consuming project to a specific tag, navigate into the submodule directory and check out the desired tag:

```bash
cd submodules-git/ui-kit-packages/

git fetch --all --prune

git checkout v0.0.1-alpha

cd ../..

git add submodules-git/ui-kit-packages

git commit -m "Lock the git submodule on the tag v0.0.1-alpha"

git push origin main
```

## Updating the submodule

**Update to the latest commit on the tracked branch (`main`):**

```bash
git fetch --all --prune

git pull origin main

git submodule update --remote --recursive submodules-git/ui-kit-packages

git add submodules-git/ui-kit-packages

git commit -m "Update ui-kit-packages submodule to latest main"

git push origin main
```

**Update to a specific tag** — follow the same steps described in [Versioning / Tags](#versioning--tags).

## Related repositories

| Repository | Role |
|---|---|
| [poc-working-with-git-submodules-compiled-css](https://github.com/adrianoenache/poc-working-with-git-submodules-compiled-css) | Generates and publishes the compiled CSS and Stylus core config into this repository |
| [poc-working-with-git-submodules-compiled-js](https://github.com/adrianoenache/poc-working-with-git-submodules-compiled-js) | Generates and publishes the compiled JS bundle into this repository |
| [poc-working-with-git-submodules-elena-progressive-web-components](https://github.com/adrianoenache/poc-working-with-git-submodules-elena-progressive-web-components) | Generates and publishes the compiled Web Components bundle into this repository |
| [poc-working-with-git-submodules](https://github.com/adrianoenache/poc-working-with-git-submodules) | Consumes this repository as a git submodule |

## License

[MIT](LICENSE)

## References

- [Git Tools Submodules - git-scm](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Git submodules - Atlassian](https://www.atlassian.com/br/git/tutorials/git-submodule)
- [Working with submodules](https://github.blog/open-source/git/working-with-submodules/)
