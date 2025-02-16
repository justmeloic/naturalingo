#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ netlify-cli is not installed. Installing globally..."
    npm install -g netlify-cli
fi

# Check if user is logged into Netlify
if ! netlify status &> /dev/null; then
    echo "❌ Not logged into Netlify. Please log in..."
    netlify login
fi

# Clean up build directories
echo "🧹 Cleaning up build directories..."
if [ -d ".next" ]; then
    echo "Removing .next directory..."
    rm -rf .next
fi

if [ -d "out" ]; then
    echo "Removing out directory..."
    rm -rf out
fi

# Clear npm cache if it exists
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "✅ Running type check..."
npx tsc --noEmit

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the application
echo "🏗️  Building the application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --prod

echo "✨ Deployment process completed!"
