const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: '2008', 
    isbn: '978-0596517748'
};

function displayProperty(obj, propertyName){
    console.log(obj[propertyName]);
}

function updateProperty(obj, propertyName, newValue){
    obj[propertyName] = newValue;
}

console.log("Original Book");
displayProperty(book, 'title');
displayProperty(book, 'year');
displayProperty(book, 'author');
displayProperty(book, 'isbn');

console.log("\nUpdated Book");
updateProperty(book, 'year', 2024);
updateProperty(book, 'title', 'JavaScript: The Good Parts (Revised)');
updateProperty(book, 'author', 'Douglas Crockford (Revised)');
updateProperty(book, 'isbn', '978-0596517748 (revised)');

displayProperty(book, 'title');
displayProperty(book, 'author');
displayProperty(book, 'year');
displayProperty(book, 'isbn');
