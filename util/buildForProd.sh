#!/usr/bin/env bash

# Preparamos el node modules que luego cogerá Electron para las dependencias
npm install
npm install react-scripts
npm install react-dom

# Remove existing production folder
rm -rf ./build/

# Transpile .ts to .js
tsc --sourceMap false

### Bundle FrontEnd ###

# Create the directory for React
mkdir -p ./build

# Build React code
react-scripts build
npm run dist
