// string
let valkai = "nothing";
let manasu = "soldrathuku illa";
let luck = "irukanu therla";
let kastam = "unlimited";
let work = "yeppo kedaikum therla";
console.log(valkai);
console.log(manasu);
console.log(luck);
console.log(kastam);
console.log(work);

// numbers
let regNo = 923321106033;
let rollNo = 21 + "EC" + 33;
let luckyno = 7;
let birthdate = 27;
let birthmonth = 5;
console.log(regNo);
console.log(rollNo);
console.log(luckyno);
console.log(birthdate);
console.log(birthmonth);

// bigint
let yetho = 1123444456765432345n;
let sum = 12345678987654321n + 12345678987654321n;
let sub = 123456765432134567n - 123456543212n;
let product = 12345676543345n * 1234567823456n;
let div = 12345671234568n / 244n;
console.log(yetho);
console.log(sum);
console.log(sub);
console.log(product);
console.log(div);

// null
let vaalumasai = null;
let enampoolvaalkai = null;
let asaipatadhaseiyanum = null;
let kaasu = null;
let mentalhealth = null;
console.log(vaalumasai);
console.log(enampoolvaalkai);
console.log(asaipatadhaseiyanum);
console.log(kaasu);
console.log(mentalhealth);

// Boolean
let depression = true;
let stress = true;
let mindhealth = false;
let bodyhealth = false;
let engapoguthunetherla = true;
console.log(depression);
console.log(stress);
console.log(mindhealth);
console.log(bodyhealth);
console.log(engapoguthunetherla);

// undefined
let life, mind, health, bike, ps5;
console.log(life);
console.log(mind);
console.log(health);
console.log(bike);
console.log(ps5);

// Symbols
let vaalkai1 = Symbol("ennanetherla");
let vaalkai2 = Symbol("ennanetherla");
console.log(vaalkai1 === vaalkai2);
let laip = Symbol("poguthu");
let badluck = Symbol("poguthu");
console.log(laip === badluck);

//Above are primitive data types

// object
let Rishi = {
  character: "therlasir",
  velai: "illasir",
};

let friends = {
  characteristics: "mananilai paathikapatoor",
  otherthanthat: "onnum illa",
};

let parents = {
  paasam: Infinity,
  kovam: Infinity,
};

let car = {
  first: "bike ke vazhi illanga",
  second: "sothukum vazhi ilaa",
};

let dreams = {
  childhooddream: "mudive panla",
  adulthooddream: "appove panla",
};
console.log(Rishi);
console.log(friends);
console.log(parents);
console.log(car);
console.log(dreams);

// arrays
let pudchathu = ["thinganum", "thoonganum", "game aadanum", "again rotation"];
console.log(pudchathu[3]);
let pudikathathu = ["padikanum", "crowdplaces", "overattiitude people"];
console.log(pudikathathu[1]);
let pudchamanhwa = [
  "solo levelling",
  "solo-max lev newbie",
  "lookism",
  "nano machine",
  "return of the blood hound",
];
console.log(pudchamanhwa);
let hobbies = ["playing mobile games", "reading stories", "sleeping"];
console.log(hobbies);
let kanavugal = ["vaazhanum", "earn pannanum"];
console.log(kanavugal);

// functions
function add(a, b) {
  return a + b;
}
console.log(add(4, 3));
function minus(a, b) {
  return a - b;
}
console.log(minus(10, 3));

function mul(a, b) {
  return a * b;
}
console.log(mul(7, 1));

function divi(a, b) {
  return a / b;
}
console.log(divi(14, 2));

function remainder(a, b) {
  return a % b;
}
console.log(remainder(55, 8));