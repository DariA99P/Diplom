import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import { OpenWindowType, TypeDrawing } from '../../../Models/enum';
import { IReducerShape } from '../../../Models/interfaces';
import {
  getOrganizationsList,
  initializeData,
} from '../../Auth/reducer/actions';
import { getListUsers, subscribersToUsers } from './actions';

const initialState: IReducerShape = {
  openWindow: OpenWindowType.Editor,
  imageCanvasUrl: null,
  typeDrawing: TypeDrawing.canvas,
  user: null,
  subscribers: [
    'Adam Colins',
    'Elise Cuper',
    'Mary Colins',
    'Lory Lom',
    'Igor Venger',
    'Sonya Storyna',
  ],
  subscriptions: ['Lucy Can', 'Van Ravenhorst', 'Nina Raisanen', 'Roman Morys'],
  organizationsList: [],
  listUsers: [],
};

export default reducerWithInitialState<IReducerShape>(initialState)
  .case(initializeData.done, (state, payload) => ({
    ...state,
    user: payload.result.user,
    organizationsList: payload.result.organizationsList,
    listUsers: payload.result.listUsers.filter(
      item => item.id !== payload.result.user.id,
    ),
  }))
  .case(subscribersToUsers.done, (state, payload) => ({
    ...state,
    user: payload.result,
  }))
  .case(getOrganizationsList.done, (state, payload) => ({
    ...state,
    organizationsList: payload.result,
  }))
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
  })
  .case(actions.saveImageToDB.done, (state, payload) => ({
    ...state,
    user: payload.result,
  }))
  .case(actions.removeImageFromDB.done, (state, payload) => ({
    ...state,
    user: payload.result,
  }));
