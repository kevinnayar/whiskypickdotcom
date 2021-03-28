import { db } from './config';

async function main() {
  const oldId = 'whisky_sagamore-spirit_rye_whiskey_cognac_finish';
  const newId = 'whisky_sagamore-spirit-rye-whiskey-cognac-finish';
  
  const oldRef = db.collection('whiskies').doc(oldId);
  const doc = await oldRef.get();

  if (!doc.exists) {
    console.log('No such document!');
  } else {
    const whisky = doc.data();
    const newRef = db.collection('whiskies').doc(newId);
    await newRef.set({ ...whisky });
    console.log(`😎 Successfully updated "${newId}" with data from "${oldId}"!`);
  }
  process.exit();
}

main();
