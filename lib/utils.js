/**
 * Remove an array item
 * @param {array} array 
 * @param {string|number|boolean} item 
 */
function removeArrayItem (array, item) {
    var index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

/**
 * Clone an array
 * @param {array} arr 
 * @returns {array} Cloned array
 */
function cloneArray (arr) {
    return JSON.parse(JSON.stringify(arr));
}

/**
 * Get a random integetory from a range
 * @param {number} min 
 * @param {number} max 
 * @returns {number} Randomg integer
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Convert object to style properties for inline styling.
 * @param {HTML Element} ele 
 * @param {object} obj 
 */
function objToStyles(ele, obj) {
    for (var prop in obj) {
        ele.style.setProperty(prop, obj[prop], 'important');
    }
}

/**
 * Get middle value of a range
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Middle Value
 */
function middleValue(a, b) {
    return Math.round((a+b)/2);
}