import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('filters');

export const testAction = actionCreator<any>('CHANGE_FILTER');
