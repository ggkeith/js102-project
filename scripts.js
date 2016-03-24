//Use this file to implement Part One of your project

var animal = {};

animal.username = "Pickles";
<<<<<<< HEAD
//console.log(animal.username);

animal["tagline"] = "I love muffins!";
//console.log(animal["tagline"]);

/*var noises = [];
animal[noises] = noises;
//console.log(animal);

  for(var key in animal) {
	
}*/

var noiseArray = ["purr", "oink"];

noiseArray.unshift("fart");
noiseArray.push("peep");
noiseArray[3] = "meow";

//console.log(noiseArray.length);
=======

animal["tagline"] = "I love muffins!";

var noises = [];
animal.noises = noises;

//console.log(animal);

/*var count = 0;
for (var key in animal) {
    count++;
    if (key === "username") {
        console.log("Hi my name is " + animal[key]);
    } else if (key === "tagline") {
        console.log("I like to say " + animal[key]);
    }
}*/


var noiseArray = [];

noiseArray.unshift("fart");
noiseArray.push("neigh");

noiseArray[3] = "burp";

/*
console.log(noiseArray);
console.log(noiseArray.length);
console.log(noiseArray[-1]);
*/
>>>>>>> 00a43e8c580f79477fb8cd4afeb8b4f7dab431b9

animal.noises = noiseArray;
//console.log(animal);

var animals = [];

<<<<<<< HEAD
animals.push(animal);
//console.log(animals);

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

console.log(animals.length);
=======
animals.animal = animal;

var quackers = {
    username: "Daffy Duck",
    tagline: "Yipeee!",
    noises: ["quack", "honk", "sneeze", "growl"]
};

animals[animal.length
] = quackers;

//console.log(animals);

var dog = {
    username: "Desi",
    tagline: "I bark, therefore I am",
    noises: ["bark", "whine", "grunt"]
};

var ferret = {
	username: "Buster",
	tagline: "I steal shit",
	noises: ["squeak", "squeal", "nomnomnom"]
};

animals["dog"] = dog;
animals["ferret"] = ferret;

>>>>>>> 00a43e8c580f79477fb8cd4afeb8b4f7dab431b9
console.log(animals);