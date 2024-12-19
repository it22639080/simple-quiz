function person(name, address) {
    this.name = name;
    this.address = address;
}

function Student(name) {
    this.name = name;
}

const kamal = new person('kamal', 'colombo');
const saman = new Student('Saman');

saman.__proto__ = kamal;

console.log(kamal);
console.log(saman);
console.log('sssss');
