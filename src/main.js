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
// var appetizingImageName = document.getElementById('appetizingImageName');
var appetizingImageName = $('#appetizingImageName')[0];
var curretImageSource = $('#appetizingImage')[0].currentSrc;
appetizingImageName.innerHTML = curretImageSource;
// currentImageSource.onload = function(){
//     console.log( "Src changed to ");
// }
