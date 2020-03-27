import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../actions/actions';

const initialValues = {
  departure: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  adults: 1,
  childs: '',
  class: 'main',
};

const validate = (values) => {
  console.log({ values });
  const errors = {};
  if (!values.departure) {
    errors.departure = 'Departure is required';
  }
  if (!values.destination) {
    errors.destination = 'Destination is Required';
  }
  if (!values.departureDate) {
    errors.departureDate = 'Departure date is required';
  }
  if (!values.adults) {
    errors.adults = 'At least 1 adult should be there';
  }
  return errors;
};

const Flights = () => {
  const history = useHistory();
  const search = useSelector((state) => state.flights.search);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(setSearch(values));
    history.push('/flight/results');
  };

  const formValues = {
    ...initialValues,
    ...search,
  };

  return (
    <div className="container">
      <Formik
        initialValues={formValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="departure">Departure</label>
                <input
                  type="text"
                  name="departure"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.departure}
                  className="form-control"
                  id="departure"
                  placeholder="Airport or city"
                />
                {errors.departure && touched.departure && (
                  <div className="error">{errors.departure}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  name="destination"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.destination}
                  className="form-control"
                  id="destination"
                  placeholder="Airport or city"
                />
                {errors.destination && touched.destination && (
                  <div className="error">{errors.destination}</div>
                )}
              </div>
            </fieldset>

            <fieldset className="flight-dates">
              <div className="flex">
                <div className="form-group flex-grow mr-15">
                  <label htmlFor="departureDate">Departure Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.departureDate}
                    className="form-control"
                    id="departureDate"
                  />
                  {errors.departureDate && touched.departureDate && (
                    <div className="error">{errors.departureDate}</div>
                  )}
                </div>

                <div className="form-group flex-grow">
                  <label htmlFor="returnDate">Return Date</label>
                  <input
                    type="date"
                    name="returnDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.returnDate}
                    className="form-control"
                    id="returnDate"
                  />
                  {errors.returnDate && touched.returnDate && (
                    <div className="error">{errors.returnDate}</div>
                  )}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Travellers</legend>
              <div className="flight-travelers flex justify-between">
                <div className="form-group flex-grow mr-15">
                  <label htmlFor="adults">Adults</label>
                  <input
                    type="number"
                    name="adults"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.adults}
                    className="form-control"
                    id="adults"
                    placeholder="Number of adults"
                  />
                  {errors.adults && touched.adults && (
                    <div className="error">{errors.adults}</div>
                  )}
                </div>

                <div className="form-group flex-grow">
                  <label htmlFor="child">Childs</label>
                  <input
                    type="number"
                    name="child"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.child}
                    className="form-control"
                    id="child"
                    placeholder="Number of childs"
                  />
                  {errors.child && touched.child && (
                    <div className="error">{errors.child}</div>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="form-group">
              <label htmlFor="passangerClass">Class</label>
              <select
                name="passangerClass"
                id="passangerClass"
                className="form-control"
              >
                <option value="basic">Basic</option>
                <option value="main">Main</option>
                <option value="economy">Economy</option>
              </select>
              {errors.passangerClass &&
                touched.passangerClass &&
                errors.passangerClass}
            </div>

            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Search Flights
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Flights;
