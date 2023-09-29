
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// ----------------------------------------------------

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// { Developer: 12, Designer: 4 } <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }

  return acc;
}, {});
console.log(experienceByProfession);

// More tasks

// Goal: Grouping by a property and collecting names
// Want an object that contains professions as keys (as above),
// but where values are arrays of team member names rather than years of experience

let membersByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }

  return acc;
}, {});
console.log(membersByProfession);

// Goal: Filter out employees from each profession with the most experience
// Desired output: an object with profession keys and values of object
// with employee name and years of experience

let mostExperiencedByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = {name: curr.name, yrsExperience: curr.yrsExperience};
  } else {
    if (curr.yrsExperience > acc[curr.profession].yrsExperience) {
      acc[key] = {name: curr.name, yrsExperience: curr.yrsExperience};
    }
  }

  return acc;
}, {});
console.log(mostExperiencedByProfession);

// Goal: Create a function that finds the most experienced employee of the passed profession

let findMostExperiencedByProfession = profession => {
  let byProfession = teamMembers.filter(employee => employee.profession === profession);
  let mostExperienced = byProfession.reduce((acc, curr) => {
    if (Object.keys(acc).length === 0) {
      acc = {name: curr.name, yrsExperience: curr.yrsExperience};
    } else {
      if (curr.yrsExperience > acc.yrsExperience) {
        acc = {name: curr.name, yrsExperience: curr.yrsExperience};
      }
    }

    return acc;
  }, {})

  return mostExperienced;
}
console.log("Most experienced designer:", findMostExperiencedByProfession("Designer"));
