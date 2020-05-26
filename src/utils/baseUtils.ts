import { TypeApiXferStatus, TypeWhisky, TypeRating, TypeWhiskyWithMyRating, TypeUser } from '../types/baseTypes';

export function apiErrorToString(error: string | { message: string }): string {
  if (typeof error === 'object' && error.message && typeof error.message === 'string') {
    return error.message;
  }
  // @ts-ignore: implicitly a string
  return error;
}

export function apiXferInit(): TypeApiXferStatus {
  return {
    requested: false,
    succeeded: false,
    failed: false,
    error: null,
  };
}

export function apiXferRequested(): TypeApiXferStatus {
  return {
    requested: true,
    succeeded: false,
    failed: false,
    error: null,
  };
}

export function apiXferSucceeded(): TypeApiXferStatus {
  return {
    requested: false,
    succeeded: true,
    failed: false,
    error: null,
  };
}

export function apiXferFailed(error: string | { message: string }): TypeApiXferStatus {
  return {
    requested: false,
    succeeded: false,
    failed: true,
    error: apiErrorToString(error),
  };
}

export function getWhiskyById(whiskies: TypeWhisky[], whiskyId: string): void | TypeWhisky {
  return whiskies.find(w => w.whiskyId === whiskyId);
}

export function getUserById(users: TypeUser[], userId: string): void | TypeUser {
  return users.find(u => u.userId === userId);
}

export function getWhiskiesForUser(whiskies: TypeWhisky[], userId: string): TypeWhiskyWithMyRating[] {
  const filtered: TypeWhiskyWithMyRating[] = whiskies.reduce((acc: TypeWhiskyWithMyRating[], whisky: TypeWhisky) => {
    const users: string[] = whisky.ratings.map(r => r.userId);
    if (users.includes(userId)) {
      const myRatings: void | TypeRating = whisky.ratings.find(r => r.userId === userId);
      if (myRatings) {
        const whiskyWithMyRating: TypeWhiskyWithMyRating = {
          ...whisky,
          myRating: myRatings.rating,
        };
        acc.push(whiskyWithMyRating);
      }
    }
    return acc;
  }, []);

  const sorted: TypeWhiskyWithMyRating[] = filtered.sort((a, b) => {
    if (a.myRating > b.myRating) return -1;
    if (a.myRating < b.myRating) return 1;
    return 0;
  });

  return sorted;
}


