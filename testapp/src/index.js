const app = require('./app');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = 3001;

const svrKeyPath = path.resolve('../orgs/myorg/privatekey.txt');
const svrCrtPath = path.resolve('../orgs/myorg/mydomain.crt');
const pfxPath = path.resolve('../orgs/myorg/key.pfx');

const options = {
    key: fs.readFileSync(svrKeyPath),
    cert: fs.readFileSync(svrCrtPath)
};

// const options = {
//     pfx: fs.readFileSync(pfxPath),
//     passphrase: 'test' 
// };

let srv = https.createServer(options, app);
srv.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`)
});

