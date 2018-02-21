import reducer from './index';
import {
  FETCH_CONSTRAINTS_REQUEST,
  FETCH_CONSTRAINTS_SUCCESS,
  FETCH_CONSTRAINTS_FAIL,
  FETCH_OFFER_REQUEST,
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
  SELECT_AMOUNT,
  SELECT_TERM
} from '../actions';

const defaultState = {
  amountInterval: null,
  termInterval: null,
  amount: 0,
  term: 0,
  totalCostOfCredit: 0,
  totalRepayableAmount: 0,
  monthlyPayment: 0,
  isFetchingConstraints: true,
  isFetchingOffer: true,
  error: null
};

const constraints = {
  amountInterval: { min: 10, max: 2000, step: 10, defaultValue: 400 },
  termInterval: { min: 3, max: 30, step: 1, defaultValue: 15 }
};

const offer = {
  totalPrincipal: '400',
  term: '15',
  totalCostOfCredit: 40,
  totalRepayableAmount: 480,
  monthlyPayment: 32
};

describe('Reducer', () => {
  it('Returns default state', () => {
    expect(reducer(undefined)).toEqual(defaultState);
  });

  it('Handles action FETCH_CONSTRAINTS_REQUEST', () => {
    const action = { type: FETCH_CONSTRAINTS_REQUEST };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('Handles action FETCH_CONSTRAINTS_SUCCESS', () => {
    const action = { type: FETCH_CONSTRAINTS_SUCCESS, constraints };
    expect(
      reducer({ ...defaultState, isFetchingConstraints: true }, action)
    ).toMatchSnapshot();
  });

  it('Handles action FETCH_CONSTRAINTS_FAIL', () => {
    const error = new Error('Fetching constraints failed');
    const action = { type: FETCH_CONSTRAINTS_FAIL, error };
    expect(
      reducer({ ...defaultState, isFetchingConstraints: true }, action)
    ).toMatchSnapshot();
  });

  it('Handles action FETCH_OFFER_REQUEST', () => {
    const action = { type: FETCH_OFFER_REQUEST };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('Handles action FETCH_OFFER_SUCCESS', () => {
    const action = { type: FETCH_OFFER_SUCCESS, offer };
    expect(
      reducer({ ...defaultState, isFetchingOffer: true }, action)
    ).toMatchSnapshot();
  });

  it('Handles action FETCH_OFFER_FAIL', () => {
    const error = new Error('Fetching offer failed');
    const action = { type: FETCH_OFFER_FAIL, error };
    expect(
      reducer({ ...defaultState, isFetchingOffer: true }, action)
    ).toMatchSnapshot();
  });

  it('Handles action SELECT_AMOUNT', () => {
    const amount = 301;
    const action = { type: SELECT_AMOUNT, amount };
    expect(reducer(defaultState, action)).toMatchSnapshot();
  });

  it('Handles action SELECT_TERM', () => {
    const term = 30;
    const action = { type: SELECT_TERM, term };
    expect(reducer(defaultState, action)).toMatchSnapshot();
  });
});
