import React, { useEffect, useState } from 'react';
import { FaPen, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import data from '../../data/resultsData.json';

import './FlightResults.scss';
import { setResults } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function filterFlights(state) {
  const { search, sortBy, filters } = state;
  let filtered = [];
  filtered = data.filter((flight) => {
    let match = false;
    const flightStr = JSON.stringify(flight);
    const departureMatch = new RegExp(search.departure).test(flightStr);
    const destinationMatch = new RegExp(search.destination).test(flightStr);
    const departureTimeMatch = new RegExp(search.departureTime).test(flightStr);
    const arrivalTimeMatch = new RegExp(search.arrivalTime).test(flightStr);
    const requiredSeats = search.adults + search.childs;

    if (departureMatch && destinationMatch) {
      match = true;
    }
    if (departureTimeMatch && arrivalTimeMatch) {
      match = true;
    }
    if (flight.availableSeats >= requiredSeats) {
      match = true;
    }
    return match;
  });
  // Do filtering
  // Do sorting
  return filtered;
}

const FlightResults = ({ formData }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.flights);

  useEffect(() => {
    const items = filterFlights(state);
    dispatch(setResults(items));
  }, []);

  function onEditOrBackButtonClick() {
    history.push('/flights');
  }

  function sortByClickHandler() {
    history.push('/flight/results/sort-by');
  }

  function filterByClickHandler() {
    history.push('/flight/results/filter-by');
  }

  function renderResult(item) {
    return (
      <div className="flight" key={item.id}>
        <div className="flight__heading flex">
          <img
            src={`${process.env.PUBLIC_URL}/${item.flightDetails.logo}`}
            alt={item.flightDetails.name}
            className="flight__heading--icon"
          />
          <span>{item.flightDetails.name}</span>
        </div>
        <div className="flight-time flex">
          <div className="flight-time__departure-info">
            <p>{item.departureTime}</p>
            <div>Dept</div>
          </div>
          <div className="flight-time__halt-info">
            <p>{item.flyingHours}</p>
            <div>1 stop add</div>
          </div>
          <div className="flight-time__destination-info">
            <p>{item.arrivalTime}</p>
            <div>arrival loc</div>
          </div>
        </div>
        <div className="flight-classes flex">
          {Object.keys(item.pricing).map((key) => (
            <div className="flight-classes__column" key={key}>
              <div>{item.pricing[key]}</div>
              <div>{key}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section>
      <header className="header">
        <div className="flex">
          <div className="back-btn">
            <button onClick={onEditOrBackButtonClick} className="btn btn-link">
              <FaArrowLeft />
            </button>
          </div>
          <div className="header__top-info">
            <div className="header__top-info__path flex">
              <p>from</p>
              <FaArrowRight />
              <p>To</p>
            </div>
            <div className="header__top-info__date flex">
              <p>Jul 24</p>
              <span>-</span>
              <p>Jul 30</p>
              <span>|</span>
              <p>1 adult</p>
            </div>
          </div>
          <button onClick={onEditOrBackButtonClick} className="btn btn-link">
            <FaPen />
          </button>
        </div>
      </header>

      <main className="flights">
        {state.results.map((item) => renderResult(item))}
      </main>

      <footer className="flex items-center">
        <button
          type="button"
          onClick={sortByClickHandler}
          className="btn btn-default"
        >
          Sort By
        </button>
        <button
          type="button"
          onClick={filterByClickHandler}
          className="btn btn-default"
        >
          Filter By
        </button>
      </footer>
    </section>
  );
};

export default FlightResults;
