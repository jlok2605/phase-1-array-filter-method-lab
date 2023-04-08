// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
   return drivers.filter(names => names.toLowerCase()=== name.toLowerCase())
}

findMatching(drivers,"Bobby")

function fuzzyMatch(drivers,letter){
  return drivers.filter(beginningLetter => beginningLetter.charAt(0) === letter.charAt(0))
}

fuzzyMatch(drivers,"S")

const driverObj = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
  ]

function matchName(driverObj, name){
  return driverObj.filter(names => names.name === name)
}

matchName(driverObj,"Bobby")