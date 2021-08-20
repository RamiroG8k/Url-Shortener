import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

let client, sessionData;

const SESSION_PATH = './session.json';

const withSession = () => {
    
};

const withoutSession = () => {
    client = new Client();

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
    })
};


// export const connectApi = async (req, res) => {
//     await client.on('qr', (qr) => {
//         qrcode.generate(qr, { small: true });
//         res.send({ message: 'QR Generated'});
//     });
// }

// client.initialize();