var ANCESTRY_FILE = require('./ancestry.js');

function flattening(arr) {
  return arr.reduce(function(result,innerArr){
    return result.concat(innerArr);
  },[]);
}
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function mother(p, byName) {
  var mom = p.mother;
  return byName[mom];
}
function motherChildAgeDifference() {
  var ancestry = JSON.parse(ANCESTRY_FILE);
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  return Number(average(
  ancestry.filter(function(p){
    return mother(p,byName) != undefined;
  }).map(function(mp){
    var mom = mother(mp,byName);
    return mp.born - mom.born;
  })).toFixed(1));
}
function groupBy(array,f) {
    var result = {};
    array.forEach(function(obj) {
      var groupName = f(obj);
      if (result[groupName] === undefined)
        {
          result[groupName] = [obj];
        }
        else {
          result[groupName].push(obj);
        }
    });
    return result;
}

function historicalLifeExpectancy() {
  var ancestry = JSON.parse(ANCESTRY_FILE);
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  var groups = groupBy(ancestry,function(person){
    var century = Math.ceil(person.died / 100);
    return century;
  });
  var result = {};
  for (var prop in groups) {
    result[prop] = Number(((groups[prop]).reduce(function(total, person) {
          return total += (person.died - person.born);
    },0)/groups[prop].length).toFixed(1));
  }
  return result;
}
module.exports = {
  flattening: flattening,
  motherChildAgeDifference: motherChildAgeDifference,
  historicalLifeExpectancy: historicalLifeExpectancy
};
