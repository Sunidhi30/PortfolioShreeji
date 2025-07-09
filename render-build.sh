#!/usr/bin/env bash

# Install Git LFS (Render doesn’t have it pre-installed)
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
apt-get install git-lfs -y

# Pull LFS files
git lfs install
git lfs pull

# Install dependencies and build
npm install
npm run build
