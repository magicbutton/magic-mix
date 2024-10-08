<#---
title: Get Hub Sites
tag: hubsites

connection: sharepoint
output: hubsites.json
---
#>



if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir

<#
Here we get the hub sites
#>

[array]$hubsites = @()
$hubsitesResponse = Get-PnPHubSite

foreach ($hubsite in $hubsitesResponse) {
    write-host "Processing hub site $($hubsite.Title) $($hubsite.Id)"
    $hubsiteName = $hubsite.Title
    $Id = $hubsite.Id
    $hubsiteUrl = $hubsite.SiteUrl
    $hubsiteData = @{
        "Title"      = $hubsiteName
        "Id"         = $Id
        "SiteUrl"    = $hubsiteUrl        
        "ChildSites" = @()
    }

    $childSites = $hubsite | Get-PnPHubSiteChild #-Identity $Id
    
    foreach ($childSite in $childSites) {
        Connect-PnPOnline -Url $childSite  -ClientId $PNPAPPID -Tenant $PNPTENANTID -CertificatePath "$PNPCERTIFICATEPATH"

        $site = Get-PnPSite -Includes RootWeb, ServerRelativeUrl
        
        $web = $site.RootWeb
    
        $childSiteData = @{
            "Title"   = $web.Title
            "Id"      = $web.Id
            "SiteUrl" = $childSite
            
        }
        $hubsiteData.ChildSites += $childSiteData
    }

    $hubsites += $hubsiteData
}

$outfile = join-path $workdir "hubsites.json"
ConvertTo-Json  -InputObject $hubsites -Depth 10
| Out-File -FilePath $outfile -Encoding:utf8NoBOM

magic-files import $outfile