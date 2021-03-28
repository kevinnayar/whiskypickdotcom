import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import firebase from '../../config/firebase';
import { getAllWhiskies } from '../../store/whiskies/whiskiesActions';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky, TypeRating } from '../../types/baseTypes';

function InputSection(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
}) {
  return (
    <div className="input-section">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={(e) => props.onBlur && props.onBlur(e.target.value)}
      />
    </div>
  );
}

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  getAllWhiskies: () => void;
};

const placeholderWhisky: TypeWhisky = {
  age: 0,
  averageRating: 0,
  brand: '',
  name: '',
  price: 0,
  type: '',
  ratings: [],
  whiskyId: '',
  eventDate: firebase.firestore.Timestamp.fromDate(new Date()),
  eventNumber: 0,
  description: '',
  profiles: [],
  origin: '',
  url: '',
};

function getLatestEventNumber(whiskies: TypeWhisky[]): number {
  let num = 0;
  for (let i = 0; i < whiskies.length; i += 1) {
    const whisky = whiskies[i];
    if (whisky.eventNumber > num) num = whisky.eventNumber;
    if (i === whiskies.length - 1) num += 1;
  }
  return num;
}

function getWhiskyId(brandIn: string, nameIn: string): string {
  const brand = brandIn.toLowerCase().replace(/\s/g, '-');
  const name = nameIn.toLowerCase().replace(/\s/g, '-');
  return `whisky_${brand}-${name}`;
}

function AdminContainer(props: TypeProps) {
  if (process.env.NODE_ENV !== 'development') return <Redirect to="/whiskies" />

  useEffect(() => {
    if (
      !props.getWhiskiesAllXferStatus.requested &&
      !props.getWhiskiesAllXferStatus.failed &&
      !props.getWhiskiesAllXferStatus.succeeded
    ) {
      props.getAllWhiskies();
    }
  }, [props.whiskiesAll]);
  

  const [whisky, setWhisky] = useState<TypeWhisky>(placeholderWhisky);
  const [age, setAge] = useState('0');
  const [averageRating, setAverageRating] = useState('0');
  const [price, setPrice] = useState('0');
  const [eventNumber, setEventNumber] = useState('0');

  const [profiles, setProfiles] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [ratings, setRatings] = useState('');

  const handleSubmit = () => {};

  let latestEventNumber = 0;

  if (props.whiskiesAll.length && eventNumber === '0') {
    latestEventNumber = getLatestEventNumber(props.whiskiesAll);
    setEventNumber(latestEventNumber.toString());
  }

  return (
    <div className="list admin">
      <form onSubmit={handleSubmit}>
        <InputSection
          label="age"
          value={age}
          onChange={(age: string) => setAge(age)}
          onBlur={() => {
            const updated = { ...whisky, age: parseFloat(age) };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="averageRating"
          value={averageRating}
          onChange={(averageRating: string) => setAverageRating(averageRating)}
          onBlur={() => {
            const updated = { ...whisky, averageRating: parseFloat(averageRating) };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="brand"
          value={whisky.brand}
          onChange={(brand: string) => {
            const updatedWhiskyId = getWhiskyId(brand, whisky.name);
            const updated = { ...whisky, whiskyId: updatedWhiskyId, brand };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="name"
          value={whisky.name}
          onChange={(name: string) => {
            const updatedWhiskyId = getWhiskyId(whisky.brand, name);
            const updated = { ...whisky, whiskyId: updatedWhiskyId, name };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="price"
          value={price}
          onChange={(price: string) => setPrice(price)}
          onBlur={() => {
            const updated = { ...whisky, price: parseFloat(price) };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="type"
          value={whisky.type}
          onChange={(type: string) => {
            const updated = { ...whisky, type };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="whiskyId"
          value={whisky.whiskyId}
          onChange={(whiskyId: string) => {
            const updated = { ...whisky, whiskyId };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="eventDate"
          value={eventDate}
          onChange={(eventDate: string) => {
            setEventDate(eventDate);
            const asNum = parseInt(eventDate, 10);
            const asDate = firebase.firestore.Timestamp.fromMillis(asNum);
            const updated = { ...whisky, eventDate: asDate };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="eventNumber"
          value={eventNumber}
          onChange={(eventNumber: string) => setEventNumber(eventNumber)}
          onBlur={() => {
            const updated = { ...whisky, eventNumber: parseFloat(eventNumber) };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="description"
          value={whisky.description}
          onChange={(description: string) => {
            const updated = { ...whisky, description };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="profiles"
          value={profiles}
          onChange={(profiles: string) => setProfiles(profiles)}
          onBlur={() => {
            const updatedProfiles = profiles.split(',').map((item) => item.trim());
            const updated = { ...whisky, profiles: updatedProfiles };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="origin"
          value={whisky.origin}
          onChange={(origin: string) => {
            const updated = { ...whisky, origin };
            setWhisky(updated);
          }}
        />
        <InputSection
          label="url"
          value={whisky.url}
          onChange={(url: string) => {
            const updated = { ...whisky, url };
            setWhisky(updated);
          }}
        />
        <div className="input-section">
          <label>ratings</label>
          <textarea
            value={ratings}
            onChange={(e: any) => setRatings(e.target.value)}
            onBlur={() => {
              const split = ratings.split('\n');
              const updatedRatings: TypeRating[] = [];
              for (const values of split) {
                const [name, _score] = values.split(',');
                const score = parseInt(_score.trim());

                if (!Number.isNaN(score)) {
                  updatedRatings.push({
                    rating: score,
                    user: name.trim(),
                    userId: `user_${name.trim().toLowerCase().replace(' ', '-').replace("'", '')}`,
                  });
                }
              }
              const updated = { ...whisky, ratings: updatedRatings };
              setWhisky(updated);
            }}
          />
        </div>
      </form>
      <pre>{JSON.stringify(whisky, null, 2)}</pre>
    </div>
  );
}

function mapStateToProps(state: TypeAppState) {
  return {
    getWhiskiesAllXferStatus: state.whiskies.getWhiskiesAllXferStatus,
    whiskiesAll: state.whiskies.all,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => {
      dispatch(getAllWhiskies());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);

// age
// 0
// averageRating
// 58.18
// brand
// "Redemption"
// description
// "A spice-forward rye combined with Plantation's sweet sugar cane notes for a unique flavor and experience."
// eventDate
// November 6, 2020 at 12:00:00 AM UTC-6
// eventNumber
// 38
// name
// "Rye Rum Cask Finish"
// origin
// "USA"
// price
// 45
// profiles
// 0
// "spicy"
// 1
// "sweet"
// type
// "Rye"
// url
// "https://www.redemptionwhiskey.com/our-whiskey"
// whiskyId
// "whisky_redemption-rye-rum-cask-finish"

// export type TypeWhisky = {
//   age: number;
//   averageRating: number;
//   brand: string;
//   name: string;
//   price: number;
//   type: string;
//   ratings: TypeRating[];
//   whiskyId: string;
//   eventDate: firebase.firestore.Timestamp;
//   eventNumber: number;
//   description?: string;
//   profiles?: string[];
//   origin?: string;
//   url?: string;
// };
