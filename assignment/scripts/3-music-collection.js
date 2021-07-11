console.log('***** Music Collection *****')

let collection = [];

function AddToCollection(title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(album);

}

AddToCollection('The Mollusk', 'Ween', '1997');
console.log(collection);