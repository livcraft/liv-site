import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Write Name
    const letters = ['o','l','i','v','i','a',' ','s','c','h','i','r','m'];
    var i = 0;
    var gitDone = 0;
    var linkDone = 0;

    function showPic() {
      const pic = document.getElementById('pic');

      if (pic) {
        pic.innerHTML += "<img src=\"../assets/livpic.png\" width=\"200px\" height=\"200px\">";
      }

      setTimeout(about, 150);
    }

    function about() {
      const abt = document.getElementById('about');

      if (abt) {
        abt.innerHTML += '<p>i\'m a senior studying <b>electrical engineering</b> and <b>computer science</b> with a history concentration at MIT</p> <p>i\’m passionate about microcontrollers, embedded systems, and creating cool projects<br>i love to talk all things computers, from upper-level software down to the chips that make it run</p> <p>outside of the classroom, i enjoy hiking, baking, watching thrillers, and traveling</p>'
      }
    }

    function showQuestions() {
      const git = document.getElementById('git');
      const linkd = document.getElementById('linkedin');
      //const prj = document.getElementById('projects-link');

      if (git && gitDone == 0) {
        git.innerHTML = "git";
        gitDone = 1;
        setTimeout(showQuestions, 150);
      } else if (linkd && linkDone == 0) {
        linkd.innerHTML = "linkedin";
        linkDone = 1;
        setTimeout(showPic, 150);
      } //else if (prj) {
       // prj.innerHTML = "projects";
        //setTimeout(showPic, 150);
      //}
    }

    function writeQuestion() {
      const name = document.getElementById('name');
      if (name) {
        name.innerHTML += letters[i];
  
        if (i < 12) {
          i++;
          setTimeout(writeQuestion, 150);
        } else {
          setTimeout(showQuestions, 150);
        }
      } 
    }

    writeQuestion();
  }

}
