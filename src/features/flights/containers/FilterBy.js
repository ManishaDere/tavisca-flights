import React, { useReducer } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setFilterByOption } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { localeCurrenciesMap } from '../../../app/constants';
import { getCurrency } from '../../../utils/helpers';

const initialState = {
  minPrice: '',
  maxPrice: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'min-price':
      return {
        ...state,
        minPrice: action.value,
      };
    case 'max-price':
      return {
        ...state,
        maxPrice: action.value,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const FilterBy = ({ title = 'Filter By' }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const intl = useIntl();
  const currency = getCurrency(intl.locale);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilterByOption(state));
    history.push('/flight/results');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setState({
      type: 'reset',
    });
    dispatch(setFilterByOption({}));
  };

  const backButtonHandler = () => {
    history.push('/flight/results');
  };

  const handlePriceChange = (e) => {
    setState({
      type: e.target.name,
      value: e.target.value,
    });
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
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="min-price">Minimum price</label>
            <div className="flex">
              <span>{currency.symbol}</span>
              <input
                type="number"
                name="min-price"
                id="min-price"
                className="form-control"
                onChange={handlePriceChange}
                value={state.minPrice}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="max-price">Minimum price</label>
            <div className="flex">
              <span>{currency.symbol}</span>
              <input
                type="number"
                name="max-price"
                id="max-price"
                className="form-control"
                onChange={handlePriceChange}
                value={state.maxPrice}
              />
            </div>
          </div>
          <footer className="form-group">
            <button type="reset" className="btn">
              Reset all
            </button>
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </footer>
        </form>
      </main>
    </section>
  );
};

export default FilterBy;
