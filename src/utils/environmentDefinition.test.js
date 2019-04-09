import getEnvironmentInfo from './environmentDefinition';

describe('getEnvironmentInfo', () => {
  describe('Given a valid env', () => {
    it('should return its color and label data', () => {
      const expectedValue = getEnvironmentInfo('DEV');
      expect(expectedValue).toEqual({
        label: 'DEV',
        color: 'blue',
      });
    });
  });

  describe('Given an invalid env', () => {
    it('should return undefined', () => {
      const expectedValue = getEnvironmentInfo('NOT_FOUND');
      expect(expectedValue).toBeUndefined();
    });
  });
});
