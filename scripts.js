//Use this file to implement Part One of your project

var animal = {};

animal.username = "Pickles";

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

animal.noises = noiseArray;
//console.log(animal);

var animals = [];

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

console.log(animals);