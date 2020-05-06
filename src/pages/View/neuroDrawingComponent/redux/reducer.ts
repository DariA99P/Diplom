import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import { OpenWindowType, TypeDrawing } from '../../../Models/enum';
import { IReducerShape } from '../../../Models/interfaces';

const initialState: IReducerShape = {
  openWindow: OpenWindowType.Editor,
  imageCanvasUrl: null,
  typeDrawing: TypeDrawing.canvas,
  subscribers: [
    'Adam Colins',
    'Elise Cuper',
    'Mary Colins',
    'Lory Lom',
    'Igor Venger',
    'Sonya Storyna',
  ],
  subscriptions: ['Lucy Can', 'Van Ravenhorst', 'Nina Raisanen', 'Roman Morys'],
};

export default reducerWithInitialState<IReducerShape>(initialState)
  .case(
    actions.changeOptions,
    (state, payload): IReducerShape => ({
      ...state,
      openWindow: +payload,
    }),
  )
  .case(actions.saveImage, (state, payload) => ({
    ...state,
    imageCanvasUrl: payload,
  }))
  .case(actions.changeTypeDrawing, (state, payload) => ({
    ...state,
    typeDrawing: payload,
  }))
  .case(actions.removeSubscribers, (state, payload) => {
    const user = state.subscribers.find((item, index) => index === payload);
    return {
      ...state,
      subscribers: state.subscribers.filter((item, index) => index !== payload),
      subscriptions: [...state.subscriptions, user],
    };
  })
  .case(actions.removeSubscriptions, (state, payload) => {
    const user = state.subscriptions.find((item, index) => index === payload);
    return {
      ...state,
      subscriptions: state.subscriptions.filter(
        (item, index) => index !== payload,
      ),
      subscribers: [...state.subscribers, user],
    };
  });
