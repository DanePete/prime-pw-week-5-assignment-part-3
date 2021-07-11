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

/*
* Search
*
*/

function search(find = {}) {
  if(Object.keys(find).length === 0) {
    return collection;
  }

  let finalValue = [];

  for(const key of collection) {
    console.log(key.artist);
    if(key.artist === find.artist && key.yearPublished === find.yearPublished) {
      finalValue.push(key);
    }
  }

  return finalValue;
}

const findObj = {
  artist: 'Ween',
  yearPublished: '1992'
};

const empty = {};

console.log(search(empty));
