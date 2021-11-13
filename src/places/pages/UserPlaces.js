import PlaceList from '../components/PlaceList';
import React from 'react';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 'id1',
      image:
        'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/12/27/49c06b64-9a36-47be-a076-267d51072555-1609005709038-0a0a93cda7c45d51811716ce43747d8b.jpg',
      title: 'Empire State Building',
      description: 'Excelency of New York',
      address: '20 W 34th St, New York, NY 10001, United States',
      creatorId: 'u1',
      coordinates: {
        lat: 40.7484405,
        long: -73.9878531,
      },
    },
    {
      id: 'id1',
      image:
        'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/12/27/49c06b64-9a36-47be-a076-267d51072555-1609005709038-0a0a93cda7c45d51811716ce43747d8b.jpg',
      title: 'Empire State Building',
      description: 'Excelency of New York',
      address: '20 W 34th St, New York, NY 10001, United States',
      creatorId: 'u1',
      coordinates: {
        lat: 40.7484405,
        long: -73.9878531,
      },
    },
  ];

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
