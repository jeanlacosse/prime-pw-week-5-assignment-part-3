console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, yearPublished, tracks) {
    newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
    }
    collection.push(newObject);
    return newObject;
}
// New object created, entire object then added to collection array

console.log(addToCollection('Nevermind', 'Nirvana', 1991, ['Smells like Teen Spirit: 5:20']))
console.log(addToCollection('Bleach', 'Nirvana', 1991, ['Love Buzz: 4:15']))
console.log(addToCollection('Delta Kream', 'The Black Keys', 2021, ['Wild Child: 3:44'] ))
console.log(addToCollection('Wild', 'Spoon', 2022, ['My Babe: 3:36'] ))
console.log(addToCollection('Second Nature', 'Lucius', 2022, ['24: 5:01'] ))
console.log(addToCollection('Good Luck', ' Broken Bells', 2019, ['Good Luck: 4:19'] ))
console.log(addToCollection('The Silence in Between', 'Bob Moses', 2022, ['Haze: 4:23'] ))

console.log(collection)

function showCollection(array) {
    console.log(array.length)
    for (item of array) {
        console.log(`${item.title} by ${item.artist} published in year: ${item.yearPublished}. 1. ${item.tracks[0]}`) // only listing first song in album as time constrained
    }
} // call out the item by using the key-value pair rather than using an index of the item, as item is not a array but an object

showCollection(collection);

function findByArtist(artist) {
    let results = [];
    for (object of collection){
        if (artist === object.artist){
        results.push(artist);
        }
    }
    return results;
}

console.log(findByArtist('Lucius'))
console.log(findByArtist('Pink Floyd'))
console.log(findByArtist('Nirvana'))

// Stretch goals below

function search(artist, year, trackName) {
    let results = [];
    for (object of collection){
        if (artist === object.artist && year === object.yearPublished && trackName === object.tracks){
        results.push(artist, year, trackName);
        } else if (artist === '' || year === '' || trackName === '') {
            return collection.title;
        } 
    } 
    return results;
}

console.log(search('Spoon', 2022, 'My Babe: 3:36'))
console.log(search('Spoon', 2021)) // returns empty array
// I am unable to figure out how to return the collection of album titles when the arguments of search are empty

