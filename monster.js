function Monster(name, color, scary, age){
    this.name = name;
    this.color = color;
    this.scary = scary
    this.age = age;
}

function describe(mon){
    return `${mon.name} is ${mon.color}, and ${mon.scary}, and is ${mon.age} years old.`;
}

const createThree=()=> {
    const monster1 = new Monster("Bart", "Yellow", "not scary", 10);
    const monster2 = new Monster("Zombie", "Green", "scary", -1);
    const monster3 = new Monster("Demagorgan", "Grey", "very scary", "?");


    const paragraph1 = document.getElementById("monster1");
    const paragraph2 = document.getElementById("monster2");
    const paragraph3 = document.getElementById("monster3");
        
    paragraph1.textContent = describe(monster1);
    paragraph2.textContent = describe(monster2);
    paragraph3.textContent = describe(monster3);
}
