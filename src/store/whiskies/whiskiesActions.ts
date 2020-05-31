import firebase from '../../config/firebase';
import { sortWhiskies } from '../../utils/baseUtils';
import {
  WHISKIES_GET_ALL_REQUESTED,
  WHISKIES_GET_ALL_SUCCEEDED,
  WHISKIES_GET_ALL_FAILED,
  WHISKIES_UPDATE_FILTERED,
  TypeWhiskiesDispatch,
} from '../../types/reducerTypes';
import { TypeWhisky } from '../../types/baseTypes';

async function handleGetAllWhiskiesAsync(): Promise<void | firebase.firestore.DocumentData> {
  const doc: void | firebase.firestore.DocumentData[] = await firebase
    .firestore()
    .collection('whiskies')
    .get()
    .then((snapshot: firebase.firestore.QuerySnapshot) => snapshot.docs.map(s => s.data()));
  return doc;
}

export function getAllWhiskies() {
  return async (dispatch: (action: TypeWhiskiesDispatch) => void) => {
    dispatch({
      type: WHISKIES_GET_ALL_REQUESTED,
    });

    try {
      const items: void | firebase.firestore.DocumentData = await handleGetAllWhiskiesAsync();
      if (items) {
        const sorted = sortWhiskies(['averageRating', 'Highest Rated', 'DESC'], items as TypeWhisky[]);
        dispatch({
          type: WHISKIES_GET_ALL_SUCCEEDED,
          payload: sorted,
        });
      } else {
        throw new Error('Could not get whiskies');
      }
    } catch (error) {
      dispatch({
        type: WHISKIES_GET_ALL_FAILED,
        error,
      });
    }
  };
}

export function updateFilteredWhiskies(whiskies: TypeWhisky[]) {
  return {
    type: WHISKIES_UPDATE_FILTERED,
    payload: whiskies,
  };
}