#!/usr/bin/env bash

# Pull LFS files
git lfs install
git lfs pull

# Install dependencies and build
npm install
npm run build
