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
AddToCollection('Pure Guava', 'Ween', '1992');
AddToCollection('American Beauty', 'Grateful Dead', '1970');
AddToCollection('Rift', 'Phish', '1993');
AddToCollection('Animals', 'Pink Floyd', '1977');
AddToCollection('All Things Must Pass', 'George Harrison', '1970');
AddToCollection('Trans-Continental Hustle', 'Gogol Bordello', '2010');

console.log(collection);