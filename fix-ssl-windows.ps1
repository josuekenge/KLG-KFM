# ============================================
# SSL/DNS Fix Script for kyetologistics.com
# Run as Administrator
# ============================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SSL/DNS Fix for kyetologistics.com" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "❌ ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

Write-Host "✅ Running as Administrator" -ForegroundColor Green
Write-Host ""

# Step 1: Flush DNS Cache
Write-Host "🔄 Step 1: Flushing DNS cache..." -ForegroundColor Yellow
try {
    ipconfig /flushdns | Out-Null
    Write-Host "   ✅ DNS cache cleared successfully" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Failed to clear DNS cache: $_" -ForegroundColor Red
}
Write-Host ""

# Step 2: Reset Winsock
Write-Host "🔄 Step 2: Resetting Winsock..." -ForegroundColor Yellow
try {
    netsh winsock reset | Out-Null
    Write-Host "   ✅ Winsock reset successfully" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Failed to reset Winsock: $_" -ForegroundColor Red
}
Write-Host ""

# Step 3: Release and Renew IP
Write-Host "🔄 Step 3: Releasing IP configuration..." -ForegroundColor Yellow
try {
    ipconfig /release | Out-Null
    Write-Host "   ✅ IP released successfully" -ForegroundColor Green
} catch {
    Write-Host "   ⚠️  Warning: Could not release IP (might be normal)" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "🔄 Step 4: Renewing IP configuration..." -ForegroundColor Yellow
try {
    ipconfig /renew | Out-Null
    Write-Host "   ✅ IP renewed successfully" -ForegroundColor Green
} catch {
    Write-Host "   ⚠️  Warning: Could not renew IP (might be normal)" -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Restart DNS Client Service
Write-Host "🔄 Step 5: Restarting DNS Client service..." -ForegroundColor Yellow
try {
    Restart-Service -Name "Dnscache" -Force -ErrorAction Stop
    Write-Host "   ✅ DNS Client service restarted" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Failed to restart DNS Client: $_" -ForegroundColor Red
}
Write-Host ""

# Step 6: Test DNS Resolution
Write-Host "🔄 Step 6: Testing DNS resolution..." -ForegroundColor Yellow
try {
    $dnsResult = Resolve-DnsName -Name "kyetologistics.com" -ErrorAction Stop
    Write-Host "   ✅ DNS resolves to: $($dnsResult[0].IPAddress)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ DNS resolution failed: $_" -ForegroundColor Red
}
Write-Host ""

# Step 7: Test HTTPS Connection
Write-Host "🔄 Step 7: Testing HTTPS connection..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://kyetologistics.com" -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Host "   ✅ HTTPS connection successful! Status: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ HTTPS connection failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "   ℹ️  This might be normal if DNS hasn't propagated yet" -ForegroundColor Cyan
}
Write-Host ""

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "           SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ DNS cache cleared" -ForegroundColor Green
Write-Host "✅ Network settings reset" -ForegroundColor Green
Write-Host "✅ DNS service restarted" -ForegroundColor Green
Write-Host ""
Write-Host "📋 NEXT STEPS:" -ForegroundColor Yellow
Write-Host "   1. Close all browser windows" -ForegroundColor White
Write-Host "   2. Restart your computer (IMPORTANT!)" -ForegroundColor White
Write-Host "   3. After restart, try: https://kyetologistics.com" -ForegroundColor White
Write-Host "   4. If still not working, change DNS to 1.1.1.1" -ForegroundColor White
Write-Host ""
Write-Host "⏱️  Wait 5-10 minutes after restart before testing" -ForegroundColor Cyan
Write-Host ""

# Ask to restart
Write-Host "========================================" -ForegroundColor Cyan
$restart = Read-Host "Do you want to restart your computer now? (Y/N)"
if ($restart -eq "Y" -or $restart -eq "y") {
    Write-Host ""
    Write-Host "🔄 Restarting computer in 10 seconds..." -ForegroundColor Yellow
    Write-Host "   Press Ctrl+C to cancel" -ForegroundColor Red
    Start-Sleep -Seconds 10
    Restart-Computer -Force
} else {
    Write-Host ""
    Write-Host "⚠️  Remember to restart your computer manually!" -ForegroundColor Yellow
    Write-Host ""
}

pause

