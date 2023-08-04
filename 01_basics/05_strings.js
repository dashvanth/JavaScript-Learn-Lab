const user = "dashvanth";
const repoCount = 12;

// console.log(user + repoCount + " Value"); badpractice

    console.log(`my username is ${user} and my repo count is ${repoCount}`);

    const gameName = new String("dashhc");

    console.log(gameName[0]);
    console.log(gameName.__proto__);

    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('s'));

    const newString = gameName.substring(0,4); //can't use - values
    console.log(newString);

    const anotherString = gameName.slice(-6,4) //can use - values 
    console.log(anotherString);

    const newStrinOne = "    dashvanth   ";
    console.log(newStrinOne);
    console.log(newStrinOne.trim());

    const url = "https://dashvanth.com/dashvanth%22rajhc";

 
    console.log(url.replace('%22', '--'));

    console.log(url.includes('dashu'));

    const myName = "dashvanthrajhc";
    console.log(myName.split('-'));