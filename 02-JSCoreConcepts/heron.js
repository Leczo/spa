// boki trójkąta
a = 3;
b = 4;
c = 5;

let p = (a, b, c) / 2
const heron = (a, b, c, p) => Math.sqrt(p * (p - a) * (p - b) * (p - c));
// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let area = () => ` Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ` + heron(a, b, c, p);

console.log(area());
