@echo off
echo Starting Kyeto Logistics Group App...
echo.
echo Navigating to project directory...
cd /d "%~dp0"
echo.
echo Installing dependencies (if needed)...
npm install
echo.
echo Starting development server...
echo.
echo Your app will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm run dev
pause

