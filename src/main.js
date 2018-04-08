import {PrintTest} from './extra.js';
import '../css/styles.css';
import $ from 'jquery';

//using CopyWebpackPlugin, all images in src are now in dist when npm starts. Below JS import statements are needed anymore.

// import './img/xxlogo.svg';
// import './img/appetizing900.jpg';
// import './img/appetizing700.jpg';
// import './img/appetizing450.jpg';
// import './img/headshot450.jpg';
// import './img/headshot450.jpg';
// import './img/headshot450.jpg';
// import './img/turbo450.jpg';


PrintTest();
var appetizingImageName = $('#appetizingImageName')[0];
var curretImageSource = $('#appetizingImage')[0].currentSrc;
appetizingImageName.innerHTML = curretImageSource;
document.getElementById('appetizingImage').onload = function(){
  appetizingImageName.innerHTML = $('#appetizingImage')[0].currentSrc;
};

// var headshotImageName = $('#headshotImageName')[0];
// var headImageSource = $('#headshotImage')[0].currentSrc;
// headshotImageName.innerHTML = headImageSource;
// document.getElementById('headshotImage').onload = function(){
//   headshotImageName.innerHTML = $('#headshotImage')[0].currentSrc;
// };
//
var turboImageName = $('#turboImageName')[0];
var turboImageSource = $('#turboImage')[0].currentSrc;
turboImageName.innerHTML = turboImageSource;
document.getElementById('turboImage').onload = function(){
  turboImageName.innerHTML = $('#turboImage')[0].currentSrc;
};

var turbosunImageName = $('#turbosunImageName')[0];
var turbosunImageSource = $('#turbosunImage')[0].currentSrc;
turbosunImageName.innerHTML = turbosunImageSource;
document.getElementById('turbosunImage').onload = function(){
  turbosunImageName.innerHTML = $('#turbosunImage')[0].currentSrc;
};
