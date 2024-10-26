"use strict";

// src/myLibrary.js

(function (global) {
  var myLibrary = {};

  // A simple utility function to add two numbers
  myLibrary.add = function (a, b) {
    return a + b;
  };

  // A simple utility function to subtract two numbers
  myLibrary.subtract = function (a, b) {
    return a - b;
  };

  // Expose the library to the global object (window)
  global.myLibrary = myLibrary;
})(void 0);
