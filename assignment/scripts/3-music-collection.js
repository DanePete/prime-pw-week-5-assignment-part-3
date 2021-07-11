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




// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.