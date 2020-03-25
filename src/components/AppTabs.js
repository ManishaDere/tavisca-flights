import React from 'react';
import Tabs from './tavisca-tabs';
import Flights from '../features/flights/Flights';
import Hotels from '../features/hotels/Hotels';
import Cars from '../features/cars/Cars';
import Activities from '../features/activities/Activities';
import AppHeader from './AppHeader';
import { FaPlane, FaHotel, FaCar, FaRegFlag } from 'react-icons/fa';

const AppTabs = () => {
  const tabs = [
    {
      id: 'flights',
      header: (
        <>
          <FaPlane />
          <h3>Flights</h3>
        </>
      ),
      content: <Flights />,
    },
    {
      id: 'hotels',
      header: (
        <>
          <FaHotel />
          <h3>Hotels</h3>
        </>
      ),
      content: <Hotels />,
    },
    {
      id: 'cars',
      header: (
        <>
          <FaCar />
          <h3>Car</h3>
        </>
      ),
      content: <Cars />,
    },
    {
      id: 'activities',
      header: (
        <>
          <FaRegFlag />
          <h3>Activity</h3>
        </>
      ),
      content: <Activities />,
    },
  ];
  return (
    <div>
      <AppHeader />
      <Tabs tabs={tabs} />
    </div>
  );
};

AppTabs.propTypes = {};

export default AppTabs;
