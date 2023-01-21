import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const text1_options = [
      "turtles",
      "hey",
      "Is life actually real?",
      "yuh",
      "pog"
    ];

    const image_options = [
      "../assets/spotthecow.jpeg",
      "../assets/picoarcade.png",
      "../assets/tiltydude.png",
      "../assets/blerobot.jpg",
      "../assets/fddr.png"
    ];
    var i = 0;
    const currentOptionText1 = document.getElementById("current-option-text1");
    const currentOptionImage = document.getElementById("image");
    const carousel = document.getElementById("carousel-wrapper");
    const mainMenu = document.getElementById("menu");
    const optionPrevious = document.getElementById("previous-option");
    const optionNext = document.getElementById("next-option");
    
    if (currentOptionText1) currentOptionText1.innerHTML = text1_options[i];
    if (currentOptionImage) currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    
    if (optionNext) {
    optionNext.onclick = function () {
      i = i + 1;
      i = i % text1_options.length;
      if (currentOptionText1) currentOptionText1.dataset['nextText'] = text1_options[i];
    
      if (carousel) carousel.classList.add("anim-next");
      
      setTimeout(() => {
        if (currentOptionImage) currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
      }, 455);
      
      setTimeout(() => {
        if (currentOptionText1) currentOptionText1.innerHTML = text1_options[i];
        if (carousel) carousel.classList.remove("anim-next");
      }, 650);
    };
  }
    if (optionPrevious) {
    optionPrevious.onclick = function () {
      if (i === 0) {
        i = text1_options.length;
      }
      i = i - 1;
      if (currentOptionText1) currentOptionText1.dataset['previousText'] = text1_options[i];
    
      if (carousel) carousel.classList.add("anim-previous");
    
      setTimeout(() => {
        if (currentOptionImage) currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
      }, 455);
      
      setTimeout(() => {
        if (currentOptionText1) currentOptionText1.innerHTML = text1_options[i];
        if (carousel) carousel.classList.remove("anim-previous");
      }, 650);
    };
  }

   }

}
