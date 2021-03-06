import { put, call, take, fork, takeLatest, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { cloneableGenerator, createMockTask } from 'redux-saga/utils';
import {
  fetchConstraints,
  fetchOffer,
  watchAmountChange,
  handleAmountChange,
  watchTermChange,
  handleTermChange,
  root
} from './index';
import * as actions from '../actions';
import { selectedAmount, selectedTerm } from '../reducers/selectors';
import api from '../api/api';

const amount = 303;
const term = 23;

describe('fetchConstraints saga', () => {
  const generator = cloneableGenerator(fetchConstraints)();

  it('Dispatches FETCH_CONSTRAINTS_REQUEST action', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('Calls the api', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('Dispatches FETCH_CONSTRAINTS_SUCCESS on success', () => {
    const clone = generator.clone();
    const constraints = {
      amountInterval: { min: 10, max: 2000, step: 10, defaultValue: 400 },
      termInterval: { min: 3, max: 30, step: 1, defaultValue: 15 }
    };
    expect(clone.next(constraints).value).toMatchSnapshot();
  });

  it('Dispatches FETCH_CONSTRAINTS_FAIL on fail', () => {
    const clone = generator.clone();
    const error = new Error('Fetching constraints failed');
    expect(clone.throw(error).value).toMatchSnapshot();
  });
});

describe('fetchOffer saga', () => {
  const generator = cloneableGenerator(fetchOffer)(amount, term);

  it('Dispatches FECTH_OFFER_REQUEST action', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('Calls the api', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('Dispatches FETCH_OFFER_FAIL on fail', () => {
    const clone = generator.clone();
    const error = new Error('Fetching offer failed');
    expect(clone.throw(error).value).toMatchSnapshot();
  });

  it('Dispatches FETCH_OFFER_SUCCESS on success', () => {
    const clone = generator.clone();
    const offer = {
      totalPrincipal: '400',
      term: '15',
      totalCostOfCredit: 40,
      totalRepayableAmount: 480,
      monthlyPayment: 32
    };
    expect(clone.next(offer).value).toMatchSnapshot();
  });
});

describe('watchAmountChange saga', () => {
  const generator = watchAmountChange();

  it('takes SELECT_AMOUNT action', () => {
    expect(generator.next().value).toMatchSnapshot();
  });
});

describe('handleAmountChange saga', () => {
  const generator = handleAmountChange();

  it('delays for 200ms', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('selects amount and term from state', () => {
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(amount).value).toMatchSnapshot();
  });

  it('calls the fetchOfferSaga', () => {
    expect(generator.next(term).value).toMatchSnapshot();
  });
});

describe('watchTermChange saga', () => {
  const generator = watchTermChange();

  it('takes SELECT_TERM action', () => {
    expect(generator.next().value).toMatchSnapshot();
  });
});

describe('handleTermChange saga', () => {
  const generator = handleTermChange();

  it('delays for 200ms', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('selects amount and term from state', () => {
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(amount).value).toMatchSnapshot();
  });

  it('calls the fetchOfferSaga', () => {
    expect(generator.next(term).value).toMatchSnapshot();
  });
});

describe('root saga', () => {
  const generator = root();

  it('calls fetchConstraints saga', () => {
    expect(generator.next().value).toMatchSnapshot();
  });

  it('selects amount and term from state', () => {
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(amount).value).toMatchSnapshot();
  });

  it('calls fetchOffer saga', () => {
    expect(generator.next(term).value).toMatchSnapshot();
  });

  it('forks watchAmountChange and watchTermChange sagas', () => {
    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().value).toMatchSnapshot();
  });
});
