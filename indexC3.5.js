class ElectroTech{
    constructor(name,power){
        this.name = name;
        this.power = power;
        this.plugged = false;
    }

    inPlugged(){
        console.log(this.name+" включен");
        this.plugged = true;
    }
    unplugged(){
        console.log(this.name+" выключен");
        this.plugged = false;
    }
}
class Computer extends ElectroTech{
    constructor(name, power, brend, color){
        super(name, power);    
        this.name = name;
        this.power = power;
        this.brend = brend;
        this.color = color;
        this.plugged = false;
}
}

class Teapot extends ElectroTech{
    constructor(name, power, brend, color){
        super(name, power);    
        this.name = name;
        this.power = power;
        this.brend = brend;
        this.color = color;
        this.plugged = false;
    }
}

const homePC = new Computer("PC", 120, "Intell", "grey");
const eKettle = new Teapot("electric kettle", 300, "Bosch", "red");
homePC.inPlugged()
eKettle.inPlugged()
console.log(homePC);
console.log(eKettle);