import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

interface IReducerShape {
  testField: boolean;
}

const initialState: IReducerShape = {
  testField: true,
};

export default reducerWithInitialState<IReducerShape>(initialState).case(
  actions.testAction,
  (state): IReducerShape => ({
    ...state,
    testField: false,
  }),
);
