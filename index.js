// Code your solution here
const findMatching = (listOfDriverNames,q) => listOfDriverNames.filter(driver => q.toLowerCase() === driver.toLowerCase())

function fuzzyMatch(listOfDriverNames,query){
    return listOfDriverNames.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()))
}
const matchName = function(listOfObjDrivers, q){
    return listOfObjDrivers.filter(({name,hometown}) => name.toLowerCase() === q.toLowerCase())
}