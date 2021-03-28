import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

const serviceAccount = require('../keys/whiskey-b6e58-firebase-adminsdk-alftt-d3028f1696.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://whiskey-b6e58.firebaseio.com',
});

export const db = admin.firestore();

export default admin;


// whisky_sagamore-spirit-rye-whiskey-cognac-finish
