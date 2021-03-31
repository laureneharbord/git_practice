let starsign = ['Capricorn','Aquarius','Aries','Pices','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagitarius'];
let focus = ['strength','power','communication','breathing'];
let worry = ['love life', 'financial trouble','career','smelly toes'];
const getRandom = (array) => {
return(array[Math.floor(Math.random()*array.length)])
}

let newHoroscope = 'Wow! it looks like your moon is in ' + getRandom(starsign) +'. Take time to focus on your ' + getRandom(focus) + " and don't worry about " + getRandom(worry) + ', it will get easier.';

console.log(newHoroscope);