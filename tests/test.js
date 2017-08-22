var exercises = require('../exercises');

describe('flattening(arg)', function() {
  it('should return an array of all the subarrays of the arg', function() {
    expect(exercises.flattening([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(exercises.flattening([[]])).toEqual([]);
  });
});
describe('motherChildAgeDifference()', function() {
  it('should return the average age difference between mother and child', function() {
    expect(exercises.motherChildAgeDifference()).toEqual(31.2); // value from http://eloquentjavascript.net/code/#5.2
  });
});
describe('historicalLifeExpectancy()', function() {
  it('should return the average lifespace for each century', function() {
    expect(exercises.historicalLifeExpectancy()).toEqual(
      {
        16 : 43.5,
        17 : 51.2,
        18 : 52.8,
        19 : 54.8,
        20 : 84.7,
        21 : 94
      }); // value from http://eloquentjavascript.net/code/#5.3
  });
});