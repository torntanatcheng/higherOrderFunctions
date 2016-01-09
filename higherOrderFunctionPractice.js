//HIGHER ORDER FUNCTION EACH

//declare an array to use in the collection

var array = [1,2,3,4,5]

var obj = {
	name: "jump",
	age: "22",
	gender: "male"
}

function each (collection, callback) { //each function takes two arguements, the collection and the callback
	if (Array.isArray(collection)) { //Array.isArray is a method to check for array
		for (var i = 0; i < collection.length; i++){ //if array, execute for loop for array
			callback(collection[i]);
		}
	} else { //if not array, execute for loop for object
		for (var prop in collection) { //for each property in the collection
			callback(collection[prop]); //use callback function on each property in the collection
		}
	}
}


//HIGHER ORDER FUNCTION MAP
//map returns a new collection of the array

function map (collection, callback) {
	var result = []; //declare result as an empty array to push the new value of the collection into the array
	each(collection, function(element){ //anonymous function for each will be to push the new values to the array result
		result.push(callback(element))
	});
	return result;
}


//HIGHER ORDER FUNCTION FILTER
//filter filters out values depending on the requirement

function filter(collection, callback) {
	var result = [];
	each(collection, function(element){
		if (callback(element)) {
			result.push(element)
		} 
	});
	return result;
}

//HIGHER ORDER FUNCTION REDUCE
//Think of it as adding them up together

function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

