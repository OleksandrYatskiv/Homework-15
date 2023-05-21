sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

winterSports = sports.slice(0,5);
summerSports = sports.slice(5);

fruits = winterSports.splice(2,1).concat(summerSports.splice(2,2));

console.log('*** Winter sports ***');
for (i = 0; i < winterSports.length; i++) {
    console.log(winterSports[i].join(' : '));
}

console.log('\n*** Summer sports ***');
for (i = 0; i < summerSports.length; i++) {
    console.log(summerSports[i].join(' : '));
}

console.log('\n*** Fruits ***');
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(' : '));
}