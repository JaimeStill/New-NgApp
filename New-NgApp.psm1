function New-NgApp {
  param(
    [Parameter(Mandatory)]
    $Destination,
    [switch]$Install
  )

  if ($null -ne $Destination) {
    if ((Test-Path -Path $Destination -PathType Container) -eq $false) {
      New-Item -ItemType Directory -Force -Path $Destination | Out-Null
    }

    $start = Get-Location
    $excludes = "node_modules", "New-NgApp.psm1"

    Get-ChildItem $PSScriptRoot
      | Where-Object{$_.Name -notin $excludes}
      | Copy-Item -Destination $Destination -Recurse -Force

    if ($Install.IsPresent) {
      Set-Location $Destination
      yarn install

      Set-Location $start
    }
  } else {
    Write-Error "You must provide a destination for the Angular project"
  }
}
