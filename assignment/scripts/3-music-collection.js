console.log('***** Music Collection *****')

let collection = [];

/*
* Add to Collection
* Adds objects into an array
*/
function AddToCollection(title, artist, yearPublished, tracks) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  };

  collection.push(album);
}
let array = [{'test': 'test'}]
AddToCollection('The Mollusk', 'Ween', '1997', [{name: 'Im Dancing in the show Tonight', duration: 3}, {name: 'The Mollusk', duration: 2}, {name: 'Polka Dot Tail', duration:5}]);
AddToCollection('Pure Guava', 'Ween', '1992', [{name: 'Little Birdy', duration: 2}, {name: 'Sarah', duration: 4}]);
AddToCollection('American Beauty', 'Grateful Dead', '1970', [{name: 'Ripple', duration: 3}]);
AddToCollection('Rift', 'Phish', '1993');
AddToCollection('Animals', 'Pink Floyd', '1977', ['Pigs on the Wing', 'Dogs', 'Sheep']);
AddToCollection('All Things Must Pass', 'George Harrison', '1970');
AddToCollection('Trans-Continental Hustle', 'Gogol Bordello', '2010');

// console.log(collection);

/*
* Show Collection
* Requests a specific object
*/

function showCollection(array) {
  console.log(array.length);
  for (const item of array){
    console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
    console.log(item.tracks);
    for(let i = 0; i < item.tracks.length; i++) {
      console.log(i+1, item.tracks[i].name, ':', item.tracks[i].duration);
    }
    for (const tract of item.tracks) {
      console.log(tract);
    }
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
    console.log(collection.tracks);
    if(key.artist === find.artist && key.yearPublished === find.yearPublished && collection.tracks.includes(find.track)) {
      finalValue.push(key);
    }
  }
  return finalValue;
}

const findObj = {
  artist: 'Ween',
  yearPublished: '1992',
  track: 'The Mollusk'
};

const empty = {};

console.log(search(findObj));
