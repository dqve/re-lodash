const _ = {

    clamp(number, lower, upper) {
        const lowerClampedVal = Math.max(number, lower)
        const clampedVal = Math.min(lowerClampedVal, upper)
        return clampedVal
    },

    inRange(num, start, end) {

        (end = end || start) && ((end === start) && (start = 0));
        var temp(start > end) && (temp = start, start = end, end = temp);

        return (num >= start && num < end) && true || false
    },

    words(string) {
        const word = string.split(' ');
        return word
    },

    pad(string, len) {
        var startPaddingLength, endPaddingLength, paddedString
        if (len < string.length) {
            return string
        }
        startPaddingLength = Math.floor((len - string.length) / 2)
        endPaddingLength = len - string.length - startPaddingLength
        paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
        return paddedString
    },

    has(obj, key) {
        var status(obj[key]) ? status = true : status = false
        return status
    },

    invert(obj) {
        const newObj = {};

        newKeys = Object.keys(obj)
        newValues = Object.values(obj)

        for (each in newValues) {
            newObj[newValues[each]] = newKeys[each]
        }
        return newObj
    },

    findKey(object, predicate) {
        let value, predicateReturnValue
        for (each in object) {
            value = object[each]
            predicateReturnValue = predicate(value)
            if (predicateReturnValue) {
                return each
            }
        }
        return undefined
    },

    drop(array, num) {
        let newArray;
        num ? newArray = array.slice(num) : newArray = array.slice(1);
        console.log(array)
        return newArray
    },

    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !(predicate(element, index, array))
        });
        const droppedArray = this.drop(array, dropNumber);

        return droppedArray

    },

    chunk(array, size) {
        size = size || 1
        let arrayChunk, arrayChunks = [];
        for (var i = 0; i < array.length; i = i + size) {
            arrayChunk = array.slice(i, (i + size))
            arrayChunks.push(arrayChunk)
        }
        return arrayChunks
    }

}


// Export all modules
module.exports = _;