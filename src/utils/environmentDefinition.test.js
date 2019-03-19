import getEnvironemntInfo from './environmentDefinition';

describe('getEnvironemntInfo', () => {
  describe('Given a valid env', () => {
    it('should return its color and label data', () => {
      const expectedValue = getEnvironemntInfo('DEV');
      expect(expectedValue).toEqual({
        label: 'DEV',
        color: 'blue',
      });
    });
  });

  describe('Given an invalid env', () => {
    it('should return undefined', () => {
      const expectedValue = getEnvironemntInfo('NOT_FOUND');
      expect(expectedValue).toBeUndefined();
    });
  });
});
