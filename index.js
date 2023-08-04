// Code your solution here
function findMatching(drivers, search_string) {
    search_string = search_string.toLowerCase();
    const matchingDrivers = drivers.filter(driver => 
        driver.toLowerCase().includes(search_string));
        return matchingDrivers;
}

function fuzzyMatch(drivers, match_string) {
    match_string = match_string.toLowerCase();
    const sameLetters = drivers.filter(driver => 
        driver.toLowerCase().startsWith(match_string));
         return sameLetters;
}

function matchName(drivers, match_string) {
  const matchingDrivers = [];
 
  for (let i = 0; i < drivers.length; i++) {
    let currentDriver = drivers[i];

    if(currentDriver.name === match_string) {
        matchingDrivers.push(currentDriver);
    }
  }
  return matchingDrivers;
}
