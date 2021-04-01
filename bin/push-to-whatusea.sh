#!/bin/bash
#dry_run=--dry-run
dry_run=""
exclude="--exclude={'/.git/', '/.idea/'}"
vagrant_base=/home/vagrant/sites/dev.whatusea.com/app/webroot/html-api
local_dist=../
vagrant_dist=${vagrant_base}/js/app/vendors/material-icons/

rsync -ave "ssh -p 2222" "$dry_run" "$exclude" --delete $local_dist vagrant@localhost:$vagrant_dist
