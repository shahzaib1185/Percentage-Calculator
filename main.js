#! /usr/bin/env node
// Percentage calculator
// Subject
let mathMarks = 85;
let englishMarks = 80;
let biologyMarks = 75;
let chemistryMarks = 70;
let physicMarks = 75;
//total marks
let totalMarks = 500;
// result to show pecentage all subjects
let finalResult = ((mathMarks + englishMarks + biologyMarks + chemistryMarks + physicMarks) / totalMarks) * 100;
console.log(" you are got", finalResult, "%");
export {};
