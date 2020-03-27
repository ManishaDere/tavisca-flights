import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSortByOption } from '../actions/actions';
import { useHistory } from 'react-router-dom';

const sortOptions = [
  {
    key: 'price:low:high',
    displayText: 'Price(Low to High)',
  },
  {
    key: 'price:high:low',
    displayText: 'Price(High to Low)',
  },
  {
    key: 'duration:shortest:longest',
    displayText: 'Duration(Shortest to Longest)',
  },
  {
    key: 'duration:longest:shortest',
    displayText: 'Duration(Longest to Shortest)',
  },
  {
    key: 'departure:earliest:latest',
    displayText: 'Departure (Earliest to Latest)',
  },
  {
    key: 'arrival:earliest:latest',
    displayText: 'Arrival (Earliest to Latest)',
  },
  {
    key: 'airline:a:z',
    displayText: 'Airline (A to Z)',
  },
  {
    key: 'airline:z:a',
    displayText: 'Airline (Z to A)',
  },
];

const SortBy = ({ title = 'Sort By' }) => {
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSortByOption(sortBy));
    history.push('/flight/results');
  };

  const onChangeHandler = (e) => {
    setSortBy(e.target.value);
  };

  const backButtonHandler = () => {
    history.push('/flight/results');
  };

  return (
    <section>
      <header className="header">
        <div className="container flex items-center">
          <button
            onClick={backButtonHandler}
            type="button"
            className="btn btn-link"
          >
            <FaLongArrowAltLeft />
          </button>
          <div className="header__title">{title}</div>
        </div>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <ul>
              {sortOptions.map((option) => {
                return (
                  <li key={option.key}>
                    <label
                      htmlFor={`sort-by-${option.key}`}
                      className="flex items-center"
                    >
                      <input
                        id={`sort-by-${option.key}`}
                        type="radio"
                        name="sort"
                        value={option.key}
                        onChange={onChangeHandler}
                      />
                      <span className="flex-grow">{option.displayText}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <footer className="form-group">
            <button type="submit" className="btn btn-primary">
              Done
            </button>
          </footer>
        </form>
      </main>
    </section>
  );
};

export default SortBy;
