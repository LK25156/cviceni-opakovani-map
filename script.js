const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];


//1.Z pole weekdays vyrobte pole obsahující všechny názvy dnů napsané VELKÝMI PÍSMENY.

const dnyVTydnu = weekdays.map((day) => day.toUpperCase());
console.log(dnyVTydnu)

//2.Z pole weekdays vyrobte pole obsahující pouze první dvě písmena každého dne, tedy

const tyden = weekdays.map((day) => day.slice(0,2));
console.log(tyden);

//3. Z pole months vyrobte pole obsahující pouze počty dní v každém měsíci.

const mesice = months.map((month) => month.days());
/*const monthDays = months.map(month => month.days);*/
console.log(mesice); // [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]*/


//4. Z pole months vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy
const firstDayDates = months.map(month => `1. ${month.name} 2020`);
console.log(firstDayDates); // ['1. leden 2020', '1. únor 2020', '1. březen 2020', atd.]

