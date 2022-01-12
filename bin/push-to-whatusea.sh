#!/bin/bash
#dry_run=--dry-run
dry_run=""

whatusea_base=~/Advanced-Tracking-SDK/Code/Full-stack/dev.whatusea.com/app/webroot/html-api
local_dist=./
whatusea_dist=${whatusea_base}/js/app/vendors/material-icons/

rsync -av $dry_run \
--exclude='node_modules' \
--exclude='.git' \
--exclude='.idea' \
--exclude='temp' \
--delete \
$local_dist $whatusea_dist

local_fonts=./demo/public/html-api/fonts/material-icons/
whatusea_fonts=${whatusea_base}/fonts/material-icons/

rsync -av $dry_run \
--delete \
$local_fonts $whatusea_fonts
