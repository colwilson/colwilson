#!/bin/bash
echo compiling...
time harp compile
echo zipping...
tar cfz www.tgz www
echo uploading...
scp www.tgz root@${DIGITALOCEAN}:
ssh root@${DIGITALOCEAN} /bin/bash << EOF
  rm -r www
  tar xvfz www.tgz
  cp -r www /var
  chown -R www-data:www-data /var/www
EOF
