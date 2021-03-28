import admin, { db } from './config';
import { TypeWhisky } from '../src/types/baseTypes';

async function main() {
  const whisky: TypeWhisky = {
    age: 4,
    averageRating: 68.18,
    brand: 'Sagamore',
    name: ' Spirit Rye Whiskey Cognac Finish',
    price: 62,
    type: 'Rye',
    ratings: [
      { rating: 7, user: 'Alex Zelenak', userId: 'user_alex-zelenak' },
      { rating: 9, user: 'Bryan Peterson', userId: 'user_bryan-peterson' },
      { rating: 8, user: 'Craig Palumbo', userId: 'user_craig-palumbo' },
      { rating: 6, user: 'Isaac Oster', userId: 'user_isaac-oster' },
      { rating: 4, user: 'Jason Smith', userId: 'user_jason-smith' },
      { rating: 6, user: 'Joe Boutros', userId: 'user_joe-boutros' },
      { rating: 7, user: 'Kevin Nayar', userId: 'user_kevin-nayar' },
      { rating: 8, user: 'Oscar Aparicio', userId: 'user_oscar-aparicio' },
      { rating: 8, user: "Carolyn O'Connor", userId: 'user_carolyn-oconnor' },
      { rating: 6, user: 'Vivek Goel', userId: 'user_vivek-goel' },
      { rating: 6, user: 'Lindsay Braun', userId: 'user_lindsay-braun' },
    ],
    whiskyId: 'whisky_sagamore-spirit_rye_whiskey_cognac_finish',
    eventDate: admin.firestore.Timestamp.fromMillis(1604678060092),
    eventNumber: 39,
    description:
      'Fruit forward with apple, smooth vanilla, and brown sugar. Warm oak finish with lingering, velvety spice.',
    profiles: ['spicy', 'sweet'],
    origin: 'USA',
    url: 'https://sagamorespirit.com/spirits/cognac-finish/',
  };

  const ref = db.collection('whiskies').doc(whisky.whiskyId);

  await ref.set({ ...whisky });

  console.log(`😎 Successfully updated "${whisky.whiskyId}"!`);
  
  process.exit();
}

main();
