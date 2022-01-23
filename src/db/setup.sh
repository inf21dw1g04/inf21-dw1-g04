#!/bin/bash
set -e
service mysql start
mysql < /db/biblioteca.sql #app/biblioteca.sql?
service mysql stop