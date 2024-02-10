#!/bin/bash

openssl genrsa -out privatekey.txt 2048
openssl req -new -config csr-request.conf -out mydomain.csr
