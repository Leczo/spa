names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];
const getFirst = (n, arr) => {
    return arr.slice(0, n)
}

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter) {
        let startWith = []
        this.names.forEach(element => {
            if (element[0] === letter) {
                startWith.push(element)
            }
        })
        return startWith
    }


    get() {
        return this.names
    }

}

students = new Students(names);
console.log(students.get());
console.log(students.get().sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(getFirst(4, students.get().sort()));
console.log(getFirst(2, students.startWith('M').sort()));
console.log(students.get());
