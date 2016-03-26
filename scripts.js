//Use this file to implement Part One of your project

var animal = {};

animal.username = "Pickles";



animal["tagline"] = "I love muffins!";


var noiseArray = ["purr", "oink"];

noiseArray.unshift("fart");
noiseArray.push("peep");
noiseArray[3] = "meow";


animal["tagline"] = "I love muffins!";

var noises = [];
animal.noises = noises;


/*
var count = 0;
for (var key in animal) {
    count++;
    if (key === "username") {
        console.log("Hi my name is " + animal[key]);
    } else if (key === "tagline") {
        console.log("I like to say " + animal[key]);
    }
}*/

animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = {
	username: "Daffy Duck",
	tagline: "Yipeee!",
	noises : ["quack", "honk", "sneeze", "growl"]
}

animals[animals.length] = quackers;

var dog = {
	username: "Desi",
	tagline: "I bark, therefore I am",
	noises: ["ruff", "squeal", "ribbit"]
}

var ferret = {
	username: "Zoltan",
	tagline: "I steal shit",
	noise: ["sqeak", "chirp", "nomnomnom"]
}
animals[animals.length] = dog;
animals[animals.length] = ferret;


var AnimalMaker = function(name) {
    return {
        speak: function() {
            console.log('My name is', name);
        },
        name: name,
        owner: 'George'
        
    };
}; 

var animalNames = ['Lollipop', 'Desi', 'Paris'];

var farm = [];

for(var i = 0; i < animalNames.length; i++) {
	var animal = AnimalMaker(animalNames[i]);
	farm.push(animal);
}
/*
for(var i = 0; i < farm.length; i++) {
	farm[i].speak();
}
*/

var AnimalTestUser = function(username) {
	var args = arguments.length;
	var otherArgs = [];
	if (args > 1) {
		for(var i = 1; i < args; i++) {
			otherArgs.push(arguments[i]);
		}
	}
	return {
		username: username,
		otherArgs: otherArgs
	};
};

var testCow = AnimalTestUser('Donald');
console.log(testCow.username.length);

var AnimalCreator = function(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises : noises,
        friends: []
    };
};


var addFriend = function(animal, friend) {

}