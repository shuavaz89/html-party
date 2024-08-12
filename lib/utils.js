function removeArrayItem (array, item) {
    var index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

function cloneArray (arr) {
    return JSON.parse(JSON.stringify(arr));
}