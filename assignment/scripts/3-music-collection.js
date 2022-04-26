console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, yearPublished) {
    newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newObject);
    return newObject;
}
// New object created, entire object then added to collection array

console.log(addToCollection('Nevermind', 'Nirvana', 1991))
console.log(addToCollection('Delta Kream', 'The Black Keys', 2021 ))
console.log(addToCollection('Wild', 'Spoon', 2022 ))
console.log(addToCollection('Second Nature', 'Lucius', 2022 ))
console.log(addToCollection('Good Luck', ' Broken Bells', 2019 ))
console.log(addToCollection('The Silence in Between', 'Bob Moses', 2022 ))

console.log(collection)

function showCollection(array) {
    console.log(array.length)
    for (item of array) {
        console.log(`${item.title} by ${item.artist} published in year ${item.yearPublished}`)
    }
} // call out the item by using the key-value pair rather than using an index of the item, as item is not a array but an object

showCollection(collection);

function findByArtist(artist) {
    let results = [];
    for (object of collection){
        if (artist === object.artist)
        results.push(artist);
    }
    return results;
}

console.log(findByArtist('Lucius'))
console.log(findByArtist('Pink Floyd'))