/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

generateListings(20);

const newArray = generateListings(37);

// Create 37 listings and log out every listings size

newArray.forEach((elem) =>
  // console.log(elem)
  console.log(elem.size)
);

// Create an array that contains all the 37 listing prices.
const newPrices = newArray.map((elem) => elem.price);
console.log(newPrices);

// Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object

const cheap = newArray.filter((elem) => elem.price < 3200);
console.log('cheap', cheap);

// Create an array of expensive listings prices. Each item in this array should be of type number

const expensItems = newArray.filter((elem) => {  
    return elem.price>8000; });
const expensivePrices = expensItems.map(elem => elem.price);
console.log("exp", expensivePrices);

// Create an array of listings that have parking. Each item in this array should be of type object
const parlingList = newArray.filter((elem) =>
  elem.facilities.includes("Parkering")
);
console.log(parlingList);

// Listing project
// Filter listings

function filterListings(listings, filter) {
    let result = listings;
    const { type, facilities, price, hasGarden, size, img } = filter;
    if (type) {
          result = result.filter((item) => item.type === type);
    } 

    if (facilities) {
            result = result.filter((elem) =>
              elem.facilities.includes(facilities)
            );
    }

    if (price) {
           result = result.filter((elem) => elem.price > price);
    }
    if (hasGarden!=='') {
        // console.log(hasGarden.toString());
        result = result.filter((elem) => elem.hasGarden == hasGarden);
    }

    return result;
}

const listings = generateListings(20);
console.log('listing', listings)
const filter2 = {
  type: "Farm",
  price: 4000,
//   hasGarden: false,
};

const cheapFarmListings = filterListings(listings, filter2);

console.log(cheapFarmListings);