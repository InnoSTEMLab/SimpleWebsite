#!/bin/bash

echo "🚀 Preparing InnoSTEMLab website for deployment..."

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local file found"
    echo "⚠️  Make sure this file is NOT committed to version control!"
else
    echo "❌ .env.local file not found"
    echo "Please create it with your RESEND_API_KEY"
fi

# Check if .gitignore includes .env files
if grep -q "\.env" .gitignore; then
    echo "✅ .env files are properly ignored in .gitignore"
else
    echo "❌ .env files are not ignored in .gitignore"
    echo "Please add '.env*' to your .gitignore file"
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please fix the errors above."
    exit 1
fi

# Test the production build
echo "🧪 Testing production build..."
npm start &
PID=$!
sleep 5

# Check if the server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Production server is running correctly"
else
    echo "❌ Production server failed to start"
fi

# Stop the test server
kill $PID

echo ""
echo "🎉 Your project is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Create a GitHub repository"
echo "2. Push your code (without .env.local)"
echo "3. Follow the DEPLOYMENT.md guide"
echo "4. Set up your IONOS hosting"
echo ""
echo "🔒 Remember: Never commit your .env.local file!" 