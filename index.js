/*
Welcome to 'Dont Mind if I Todo', the premier 'todo' organizing appication 
for communal living situations. 
*/

// SAMPLE DATA //
const tasks = [
    {
      task: 'Feed cat',
      completed: false,
      assignedTo: ['Stan'],
      recurs: 'Weekly',
      tags: ['quick', 'physical'],
      priority: 1
    },
    {
      task: 'Get groceries',
      completed: true,
      assignedTo: ['Alex'],
      recurs: 'Weekly',
      tags: ['travel', 'long', 'physical'],
      priority: 2
    },
    {
      task: 'Order pet medication',
      completed: false,
      assignedTo: ['Stephanie'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 3
    },
    {
      task: 'Pay rent',
      completed: true,
      assignedTo: ['Alex', 'Stephanie', 'Stan', 'Kyle'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 4
    },
    {
      task: 'Do dishes',
      completed: false,
      assignedTo: ['Kyle'],
      recurs: 'Weekly',
      tags: ['physical', 'long'],
      priority: 5
    },
  ];
  
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #1 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let todos = [];
  todos.push("Clean", "Study", "Go Shopping");
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #2 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let getTaskByLength = function(array, targetLength){
 if (targetLength === "longest") {
 let longestWord = array.sort((a, b) => b.length - a.length);
 return longestWord[0];
 } else if (targetLength === "shortest") {
let shortestWord = array.sort((a, b) => a.length - b.length);
return shortestWord[0];
 }
  };
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #3 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let awardPrize = function(array){
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0){
        array[i].prizeMoney = 10;
      } else {
        array[i].prizeMoney = 0;
      }
    }
  };
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #4 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let printTaskInfo = function() {
    
  };

  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #5 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let getTaskStatus = function(){
    
  };

  
  
  ///////////////////////////////////////////////////////////////
  // PROBLEM #6 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let createString = function(){
    
  };

  ///////////////////////////////////////////////////////////////
  // PROBLEM #7 /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  
  let filterByTag = function(){
    
  };