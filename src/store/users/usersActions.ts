import firebase from '../../config/firebase';
import {
  USERS_GET_ALL_REQUESTED,
  USERS_GET_ALL_SUCCEEDED,
  USERS_GET_ALL_FAILED,
  TypeUsersDispatch,
} from '../../types/reducerTypes';

async function handleGetAllUsersAsync(): Promise<void | firebase.firestore.DocumentData> {
  const doc: void | firebase.firestore.DocumentData[] = await firebase
    .firestore()
    .collection('users')
    .get()
    .then((snapshot: firebase.firestore.QuerySnapshot) => snapshot.docs.map(s => s.data()));
  return doc;
}

export function getAllUsers() {
  return async (dispatch: (action: TypeUsersDispatch) => void) => {
    dispatch({
      type: USERS_GET_ALL_REQUESTED,
    });

    try {
      const items: void | firebase.firestore.DocumentData = await handleGetAllUsersAsync();
      if (items) {
        dispatch({
          type: USERS_GET_ALL_SUCCEEDED,
          payload: items,
        });
      } else {
        throw new Error('Could not get users');
      }
    } catch (error) {
      dispatch({
        type: USERS_GET_ALL_FAILED,
        error,
      });
    }
  };
}
