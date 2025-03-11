function countProperties(obj) {
    const propertyNames = Object.keys(obj); // Get an array of property names
    return propertyNames.length; // Return the number of properties
}

// Example usage:
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject)); // Output: 3
