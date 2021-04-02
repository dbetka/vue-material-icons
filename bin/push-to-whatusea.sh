#!/bin/bash
#dry_run=--dry-run
dry_run=""

vagrant_base=/home/vagrant/sites/dev.whatusea.com/app/webroot/html-api
local_dist=./
vagrant_dist=${vagrant_base}/js/app/vendors/material-icons/

local_fonts=./demo/public/html-api/fonts/material-icons/
vagrant_fonts=${vagrant_base}/fonts/material-icons/

rsync -ave "ssh -p 2222" $dry_run \
--exclude='node_modules' \
--exclude='.git' \
--exclude='.idea' \
--delete \
$local_dist vagrant@localhost:$vagrant_dist

rsync -ave "ssh -p 2222" $dry_run \
--delete \
$local_fonts vagrant@localhost:$vagrant_fonts
