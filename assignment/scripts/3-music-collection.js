console.log('***** Music Collection *****')

let collection = [];

/*
* Add to Collection
* Adds objects into an array
*/
function AddToCollection(title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(album);
}

AddToCollection('The Mollusk', 'Ween', '1997');
AddToCollection('Pure Guava', 'Ween', '1992');
AddToCollection('American Beauty', 'Grateful Dead', '1970');
AddToCollection('Rift', 'Phish', '1993');
AddToCollection('Animals', 'Pink Floyd', '1977');
AddToCollection('All Things Must Pass', 'George Harrison', '1970');
AddToCollection('Trans-Continental Hustle', 'Gogol Bordello', '2010');

console.log(collection);

/*
* Show Collection
* Requests a specific object
*/

function showCollection(array) {
  console.log(array.length);
  for (const item of array){
    console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
  } 
}

showCollection(collection);

/*
* Find By Arrist
* 
*/

function findByArtist(artistName) {
  let foundArtist = [];
  for(const item of collection) {
    if(artistName === item.artist) {
      foundArtist.push(item);
    }
  } 
  return foundArtist;
}

console.log(findByArtist('Ween'));

// Add a function named findByArtist. This function should:

// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.