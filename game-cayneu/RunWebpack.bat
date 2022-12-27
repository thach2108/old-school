#!/bin/zsh
pathNC='/Users/dodangthach/Desktop/game_cayneu'
src='/public/'
remote='/frontend.3fgroup.vn/GameDemo2'
cd $pathNC$src
ftp -i -n 45.118.145.20 <<END_SCRIPT
quote USER "root"
quote PASS "xAPdAr4D6ULAVG3q"
binary
cd $remote
mput *
lcd "./js"
cd "./js"
mput *
END_SCRIPT
exit 0