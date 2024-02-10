# openssl-certkit-quick
A quick openssl ssl certification generation kit for local development and testing. **Do not use this as is for production and/or live deployments. Strictly for local testing and education purposes**.

This kit can be used to quickly setup certificate authority (CA) and start issuing certificates. Use this when you need multiple self signed certificates or need signed certificates from a ca. You can generate a CA certificate and add that to the trusted root certification list and then all certificates signed by this kit becomes trusted and you can use them for various development tasks.

Assumes openssl has already installed. Shell files (.sh files) runs on linux or mac. If using Windows, refer the commands in "openssl command line.txt" file and manually issue them in powershell or cmd.

1. Download the kit.
2. Duplicate myorg folder and rename to needed domain (Lets say yourfolder).
3. Update csr-request.conf in that folder with domain info.
4. Run create-csr.sh shell file.
5. Goto "ca" folder and run create-ca.sh. This will create ca.crt and private key file in private folder.
6. Run "sign.sh ../orgs/yourfolder/mydomain.csr" and new certificate will be created in newcerts folder with serialnumber.pem filename.
7. Copy the .pem file and rename to .crt file to view or use as is for web server. (If you need privatekey for this file, take from yourfolder/privatekey.txt).
8. You can create as many certs by looping 2 to 4 and 6 (5 is needed only once).

A sample NodeJs webapp created for testing the file. That's in testapp folder. Refer src/index.js. The config is set to myorg folder crt and key file. Change it to your files and run the app. This app will run https on 3001 port. If browser says cannot verify, try add the ca.crt to trusted root certification list. Retry and clear cache if needed and you'll have https.

I will describe more in upcoming days.
