import * as firebase from 'firebase';

export type TypeApiXferStatus = {
  requested: boolean;
  succeeded: boolean;
  failed: boolean;
  error: null | string;
};

export type TypeUser = {
  name: string;
  role: 'basic' | 'admin';
  userId: string;
};

export type TypeRating = {
  rating: number;
  user: string;
  userId: string;
};

export type TypeWhisky = {
  age: number;
  averageRating: number;
  brand: string;
  name: string;
  price: number;
  type: string;
  ratings: TypeRating[];
  whiskyId: string;
  eventDate: firebase.firestore.Timestamp;
  eventNumber: number;
  description?: string;
  profiles?: string[];
  origin?: string;
  url?: string;
};

export type TypeWhiskyWithMyRating = TypeWhisky & { myRating: number };


