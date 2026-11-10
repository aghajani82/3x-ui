# 3x-ui fork: sponsor-free builds

This repository is a customized fork of [MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui).
The paid sponsor placements are disabled in the fork's **frontend** (all slots),
and the frontend does not request paid sponsor data. Authentication, Xray and
subscription configuration are not changed by this customization.

**Do not use MHSanaei's original installer or published Docker images to install this fork.**
The URL from which you download an installer is not sufficient unless its release
downloads, updater and compiled panel also come from this repository.

## Fresh install: Linux binary package

After the fork's `main` release workflow has **successfully published**
`dev-latest` with `x-ui-linux-<architecture>.tar.gz` plus checksum:

```bash
curl -fL https://raw.githubusercontent.com/aghajani82/3x-ui/main/install.sh -o /tmp/3x-ui-fork-install.sh
sudo bash /tmp/3x-ui-fork-install.sh dev
```

This explicitly selects the fork's own rolling `dev-latest` release.
Do not run it before that asset is published. Check
https://github.com/aghajani82/3x-ui/releases/tag/dev-latest first.

For later updates from the same fork, use the installed menu's **Update to Dev
Channel**, or `sudo x-ui update-dev`. Regular **Update** requires a stable release
published by this fork; it must not silently fall back to upstream.

## Fresh install: Docker build from source

After the tested changes are merged into `main`:

```bash
git clone --branch main https://github.com/aghajani82/3x-ui.git
cd 3x-ui
docker compose up -d --build
```

The bundled Compose file builds from the checked-out fork, not an upstream image.
For subsequent updates, back up persistent data, pull reviewed changes and
rebuild the image. Never blindly recreate an existing production container.

The fork's Docker workflow also targets `ghcr.io/aghajani82/3x-ui` rather than
publishing into upstream or another author's Docker Hub account. Verify that
its own image build has completed before pulling a remote image.

## Keeping the fork updated

The fork is intentionally based on newer upstream source, but its sponsor-free
frontend code, tests and fork-specific installation targets must be preserved on
every upstream synchronization. Run CI and a fresh-install smoke test before
publishing a new release. A GitHub source checkout by itself is **not** an
installed binary; new installs must use the fork's own compiled artifacts.
