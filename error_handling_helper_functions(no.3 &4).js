// collection of helper functions for string Manipulation
const stringHelpers = {
  capitalize: function(str) {
    if (typeof str !== 'string') throw new Error("Input must be a string");
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  reverseString: function(str) {
    if (typeof str !== 'string') throw new Error("Input must be a string");
    return str.split('').reverse().join('');
  },
  countWords: function(str) {
    if (typeof str !== 'string') throw new Error("Input must be a string"); 
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
};
console.log("capitalize:", stringHelpers.capitalize("Lisekho"));
console.log("reverse:", stringHelpers.reverseString("Error"));
console.log("count:", stringHelpers.countWords("TaShepsta"))
// Helper functions for array operations
const arrayHelpers = {
  sumArray: function(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    return arr.reduce((sum,num) => {
      if (typeof num !== 'number') throw new TypeError("Array must only include numbers");
      return sum + num;
    }, 0);
  },
  findMax: function(arr) {
    if(!Array.isArray(arr) || arr.length === 0) throw new Error("Array must not be empty");
    return Math.max(...arr);
  },
  removeDoubles: function(arr) {
    if (!Array.isArray(arr)) throw new Error("Input has to be an array");
    return [...new Set(arr)];
  }
};
console.log("Addition:", arrayHelpers.sumArray([1,2,3,4,5]));
console.log("Maximum:", arrayHelpers.findMax([2,4,6,8,10]));
console.log("No Doubles:", arrayHelpers.removeDoubles([1,1,2,2,3,3,4,4,5,6,8]));