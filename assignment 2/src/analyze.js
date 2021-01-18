/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *       Name: Dhruv Bipinbhai Patel
 *      Student ID: 142572197
 *      Date: 10/19/20
 *
 * Please finish working on cases.js BEFORE you start this problem.
 */

/*******************************************************************************
 * Part 2: using our cases functions to write an analysis program.
 *
 * Welcome to Assignment 2 Part II! In this second part of the assignment, you're
 * going to be using the functions you wrote in cases.js to create a simple
 * command line program that can do analysis on COVID cases in Toronto.
 *
 * This time, we won't use unit tests.  Instead, you will be asked to use
 * the functions you already wrote (and know are working thanks to the tests)
 * to complete the following program.
 *
 * This program allows the user to do an analysis of case data for FSA,
 * Neighbourhood, or all data.  The user decides how much data to analyze by
 * including command line arguments
 *
 * To see an analysis of all data, you would do:
 *
 *    npm run analyze
 *
 * To see an analysis of the MJ6 forward sortation area (FSA), you would do:
 *
 *    npm run analyze -- --fsa="MJ6"
 *
 * To see an analysis of the data with 'park' in the Neighbourhood Name, you would do:
 *
 *    npm run analyze -- --neighbourhood="park"
 *
 * Most of the program is written below, but it needs you to fix the parts that
 * are indicated with TODO in the comments.
 *
 *  - getCasesByFSA()
 *  - getCasesByNeighbourhood()
 *  - getAgeGroupSummary()
 *
 * They have been included below from `cases.js`, so you don't need to rewrite them.
 ******************************************************************************/

// We include the functions we wrote in cases.js so we can use them here
const { getCasesByFSA, getCasesByNeighbourhood, getAgeGroupSummary } = require('./cases');

// We'll use the https://yargs.js.org/ package to deal with command line arguments
const { argv } = require('yargs');

function formatAsPercentage(number) {
  if (!number) return 0;
  return parseFloat(number * 100).toFixed(2) + '%';
}

function formatNumber(number) {
  return Intl.NumberFormat('en-ca').format(number);
}

function loadCaseData() {
  console.log('Loading data...');
  // We need to import the case data from `toronto-covid-cases-full.json`
  return require('../toronto-covid-cases-full.json');
}

function analyzeData(data) {
  console.log('Analyzing data...');

  if (argv.fsa) {
    console.log(`Using FSA='${argv.fsa}' to limit the data`);
    data = getCasesByFSA(argv);
    return data;
  }

  if (argv.neighbourhood) {
    console.log(`Using Neighbourhood='${argv.neighbourhood}' with a fuzzy match to limit the data`);
    data = getCasesByNeighbourhood(argv);
    return data;
  }

  console.log('Using all case data');
  return data;
}

function summarizeData(data) {
  const summary = getAgeGroupSummary(data);

  console.log('\nSummary');
  console.log('--------------------------');

  Object.keys(summary).forEach(ageGroup => {
    console.log(
      `${ageGroup} ` +
        formatNumber(`${summary[ageGroup].total}`) +
        ' (' +
        formatAsPercentage(`${summary[ageGroup].percent}`) +
        ')'
    );
  });

  console.log('--------------------------');
}

function main() {
  const allCases = loadCaseData();
  const data = analyzeData(allCases);
  summarizeData(data);
}

main();
