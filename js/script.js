// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a triangle.
 */
function calculateVolumeOfPyramid() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)
  // process
  const volumeOfPyramid = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "Area is: " + `${volumeOfPyramid.toFixed(2)}` + " cm²"
}
