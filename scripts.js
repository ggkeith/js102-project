//Use this file to implement Part One of your project

var animal = {};

animal.username = "Pickles";

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


animal["tagline"] = "I love muffins!";

var noises = [];
animal.noises = noises;



/*var count = 0;
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

console.log(animals.length);

console.log(animals);