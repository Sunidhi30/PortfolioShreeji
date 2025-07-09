#!/usr/bin/env bash
# Enable Git LFS and pull large files
git lfs install
git lfs pull

# Then build your project
npm install
npm run build
