# TypeScript移行スクリプト (PowerShell)
# 全ての .js ファイルを .ts にリネーム

$srcDir = "$PSScriptRoot\..\src"
$renamedCount = 0
$errorCount = 0

function Rename-JsToTs {
    param([string]$Path)
    
    $items = Get-ChildItem -Path $Path -Recurse
    
    foreach ($item in $items) {
        if ($item.PSIsContainer) {
            continue
        }
        
        # .js ファイルを処理
        if ($item.Name -match '\.js$') {
            $newName = $item.Name -replace '\.js$', '.ts'
            $newPath = Join-Path $item.DirectoryName $newName
            
            try {
                Rename-Item -Path $item.FullName -NewName $newName -ErrorAction Stop
                Write-Host "✓ Renamed: $($item.Name) → $newName" -ForegroundColor Green
                $script:renamedCount++
            }
            catch {
                Write-Host "✗ Failed to rename $($item.Name): $_" -ForegroundColor Red
                $script:errorCount++
            }
        }
    }
}

Write-Host "🔄 Starting TypeScript migration...`n" -ForegroundColor Cyan
Rename-JsToTs -Path $srcDir
Write-Host "`n✅ Migration complete!" -ForegroundColor Green
Write-Host "Renamed: $renamedCount files" -ForegroundColor Cyan
if ($errorCount -gt 0) {
    Write-Host "Errors: $errorCount files" -ForegroundColor Yellow
}
