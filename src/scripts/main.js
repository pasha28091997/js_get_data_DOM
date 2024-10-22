'use strict';

const element = document.getElementsByClassName('population');
let allPopulationNumber = 0;

for (const key of element) {
  allPopulationNumber += +key.innerHTML.replaceAll(',', '');
}

const averagePopulation = allPopulationNumber / element.length;

const classTotalPopulation = document.querySelector('.total-population');

classTotalPopulation.innerHTML = allPopulationNumber;

const classAveragePopulation = document.querySelector('.average-population');

classAveragePopulation.innerHTML = averagePopulation;
