#!/bin/bash

openssl genrsa -out private/ca-privatekey.txt 2048
openssl req -x509 -new -key private/ca-privatekey.txt -out ca.crt -days 7300
