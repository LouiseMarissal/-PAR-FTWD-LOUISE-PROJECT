// build my Quiz
// 10 EASY questions
(function() {
  const myQuestions = [
    {
      question:
        "Whom does the Deatheater Bellatrix Lestrange,<br> the most loyal maid of the Dark Master, <br>be the cousin?",
      answers: {
        a: "Neville LongBottom",
        b: "Sirius Black",
        c: "Draco Malfoy",
        d: "Severus Snape"
      },
      correctAnswer: "b",
      level: "easy"
    },
    {
      question: "Who were Harry Parents?",
      answers: {
        a: "Minerva and Craig Potter",
        b: "James and Lily Potter",
        c: "Athur and Molly Potter",
        d: "Robert and Maggie"
      },
      correctAnswer: "b",
      level: "easy"
    },
    {
      question:
        "Who are the muggle aunt and uncle that <br>Harry must live with every summer?",
      answers: {
        a: "Ned and Camilia Diddly",
        b: "Vernon and Petunia Dursley",
        c: "Ralph and Magnolia Dudley",
        d: "Peter and Mary Durdlay"
      },
      correctAnswer: "b",
      level: "easy"
    },
    {
      question:
        "At the end of 'Harry Potter and the Philosopher's Stone',<br>which professor removes his turban to reveal <br>Lord Voldemort on the back of his head ?",
      answers: {
        a: "Professor Lockhart",
        b: "Professor Quirrell",
        c: "Professor Sprout",
        d: "Professor Trelawney"
      },
      correctAnswer: "b",
      level: "easy"
    },
    {
      question: "Who was Tom Marvolo Riddle ? ",
      answers: {
        a: "The ghost of Sirius Black",
        b: "Harry's best friend",
        c: "Lord Voldemort",
        d: "Deatheaters' enemy"
      },
      correctAnswer: "c",
      level: "easy"
    },
    {
      question: "In wich House is Luna Lovegood?",
      answers: {
        a: "Hufflepuff",
        b: "Slytherin",
        c: "Ravenclaw",
        d: "Gryffindor"
      },
      correctAnswer: "c",
      level: "easy"
    },
    {
      question:
        "Which Hogwart's Student says, <br>'I don't go looking for trouble,<br> trouble usually find me' ?",
      answers: {
        a: "Draco Malfoy",
        b: "George Weasley",
        c: "Harry Potter",
        d: "Ron Weasley"
      },
      correctAnswer: "c",
      level: "easy"
    },
    {
      question: "Who is Rubeus Hagrid ?",
      answers: {
        a: "The Keeper of Key of Hogwarts",
        b: "An House-elf",
        c: "A Troll",
        d: "Story of Magic's professor"
      },
      correctAnswer: "a",
      level: "easy"
    },
    {
      question:
        "In 'The Azkaban Prisoner',<br> Who saved Harry from the dementors in the Hogwarts Express ?",
      answers: {
        a: "Regulus Black",
        b: "Remus Lupin",
        c: "Peter Pettigrew",
        d: "Albus Dumbledore"
      },
      correctAnswer: "b",
      level: "easy"
    },
    {
      question: "Whose Draco Malfoy never separates ?",
      answers: {
        a: "His mommy",
        b: "Vincent Crabbe and Gregory Goyle",
        c: "Dobby his House-elf",
        d: "Moaning Myrtle"
      },
      correctAnswer: "b",
      level: "easy"
    }
  ];

  function buildQuiz() {
    const output = [];
    var letter = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
          
             </label>`
        );
      }

      output.push(
        `<div class="slide">
             <div class="question" style="font-family:'Harry Potter Regular';font-weight:normal;font-size:32px"> ${
               currentQuestion.question
             } </div>
             <div class="answers" > ${answers.join("")} </div>
           </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    // set automatique answer according to the user result
    let answers = "";
    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }
      if (numCorrect < 5) {
        resultsContainer.classList.add("loser");
        answers = "Stupid Muggle!";
      }
      if (numCorrect >= 5) {
        answers = "Not so bad little Squib";
        resultsContainer.classList.add("squib");
      }
      if (numCorrect === 10) {
        answers = "Good job!<br> You're a PotterHead";
        resultsContainer.classList.add("expert");
      }
    });

    resultsContainer.innerHTML = `<div class="active bounce" style="font-family:'Harry Potter Regular';font-weight:normal;font-size:42px">Your Score is <br>${numCorrect} out of ${myQuestions.length} <br>${answers}</div> <button><a href="/html/choose-level/level-index.html">Go Back</a></button>`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  //set a timer
  var sec = 60;
  var time = setInterval(myTimer, 1000);

  function myTimer() {
    document.getElementById("timer").innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
      clearInterval(time);
      alert("Time out! You Lose Muggle!");
    }
  }

  const quizContainer = document.querySelector("#quiz");
  const resultsContainer = document.querySelector("#pop-up");
  const submitButton = document.querySelector("#submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
