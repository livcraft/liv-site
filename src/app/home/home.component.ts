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
      "<u>spot the cow</u> <br> a final project for computational design and fabrication focused on reducing time and material waste when 3D printing support points <br> <br> with tree support structure, saw a 50% decrease in print time and 70.76% decrease in support material used",
      "<u>pico arcade</u> <br> designed a through-hole PCB board with Altium for a Raspberry Pi Pico arcade game and strategized routing layout with product design to maximize the player experience <br> <br> developed game scripts in MicroPython, including two-player ping pong and memorization game",
      "<u>tilty dude</u> <br> designed and developed a tilting-based game with PSoC Creator powered by a PSoC 5LP stick <br> <br> wrote an I2C library for the MPU6050 accelerometer and implemented SPI communication for the TFT screen",
      "<u>bluetooth controlled car</u> <br> made during a seminar hosted by Infineon at MIT Jan. 2022 focused on playing with the PSoC 6 <br> <br> first experience with BLE, used MIT's quick app service to create remote controller for the phone to drive car",
      "<u>finger dance dance revolution</u> <br> a final project made by my small group in an Interconnected Embedded Systems class <br><br> made using an ESP32 microcontroller, joystick shield, speaker, and LCD screen, with minimal HTML and CSS site coding, and loads of C++"
    ];

    const image_options = [
      "~/../assets/spotthecow.jpeg",
      "~/../assets/picoarcade.png",
      "~/../assets/tiltydude.png",
      "~/../assets/blerobot.jpg",
      "~/../assets/fddr.png"
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
