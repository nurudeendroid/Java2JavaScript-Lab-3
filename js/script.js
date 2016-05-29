" use strict ";
var phoneEntries = [];
var phoneNumbers = [];
phoneEntries["Nurudeen"] =[555,5555];
phoneEntries["BLoop"] = [444,4444];

function PhoneBook(){
};

function listAllNames() {
  // code to list all names
  var output = "";
  for (var i in phoneEntries) {
    output+=i + "<br/>";
  }
  display.innerHTML = output;
};

function listAllNumbers() {
  // code to list all numbers
  var output = "";
  for (var i in phoneEntries) {
    output += i + "<br/>"+phoneEntries[i] + "<br/>";
  }
  display.innerHTML = output;
};


function showAddContact() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneEntries [name].push(number);
};
function showAddNumber(){
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneEntries[name] = [];
  phoneEntries[name].push(number);
};

function showRemoveContact() {
  var remove = prompt("Enter name to remove");
  delete phoneEntries[remove];
};
function showRemoveNumber() {
  var remove = prompt("Enter a number to remove");
  var empty;
  for (var i in phoneEntries) {
    for (var j = 0; j< phoneEntries[i].length; j++) {
    if (phoneEntries[i][j]==remove) {
      phoneEntries[i].splice(empty,1);
      }
    }
  }
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  if (phoneEntries[lookup]!=undefined) {
    display.innerHTML = phoneEntries[lookup];
  }
  else {
    display.innerHTML = "Contact not found";
  }
};

function reverseLookup(){
  var lookup = prompt("Enter a number to lookup");
  var output = "";
  for (var i in phoneEntries) {
    for (var j = 0; j < phoneEntries[i].length; j++) {
    if (phoneEntries[i][j]==lookup) {
      output= i;
      }
    }
  }
if (output != "") {
  display.innerHTML = output;
}
else {
  display.innerHTML = "Number not found";
}
};

var display = document.getElementById("display");
