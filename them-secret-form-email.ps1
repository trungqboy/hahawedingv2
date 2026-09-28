# Mo trang tao secret + copy key tu site/.env (chi chay tren may ban)
$envFile = Join-Path $PSScriptRoot "site\.env"
if (-not (Test-Path $envFile)) {
  Write-Host "Khong thay site/.env — tao file va dat PUBLIC_WEB3FORMS_ACCESS_KEY=..." -ForegroundColor Yellow
  exit 1
}
$line = Get-Content $envFile | Where-Object { $_ -match '^\s*PUBLIC_WEB3FORMS_ACCESS_KEY\s*=' } | Select-Object -First 1
if (-not $line) {
  Write-Host "Khong tim thay PUBLIC_WEB3FORMS_ACCESS_KEY trong site/.env" -ForegroundColor Yellow
  exit 1
}
$key = ($line -split '=', 2)[1].Trim().Trim('"')
Set-Clipboard -Value $key
Write-Host "Da copy key vao clipboard." -ForegroundColor Green
Write-Host "Tren trinh duyet:"
Write-Host "  Secret name: PUBLIC_WEB3FORMS_ACCESS_KEY"
Write-Host "  Secret value: Ctrl+V"
Start-Process "https://github.com/trungqboy/hahawedingv2/settings/secrets/actions/new"
