// build my Quiz
// change data medium
(function() {
  const myQuestions = [
    {
      question: "Who is Kreacher?",
      answers: {
        a: "The horrible house-elf of Black's family",
        b: "Dobby's Best friend",
        c: "Harry's Owl",
        d: "Dudley's dog"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question: "What is the name of Harry's owl ?",
      answers: {
        a: "Errol",
        b: "Hedwige",
        c: "Buck",
        d: "Owly"
      },
      correctAnswer: "b",
      level: "medium"
    },
    {
      question:
        "In 'The Philosopher's Stone', <br>what is the name of Hagrid's Dragon ?",
      answers: {
        a: "Norbert",
        b: "Hubert",
        c: "Robert",
        d: "Ruppert"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question:
        "Which curse Ron used against the Troll<br> in 'The Philosopher's Stone' ?",
      answers: {
        a: "Wingardium Leviosa",
        b: "Petrificus totalus",
        c: "Despacito",
        d: "Alohomora"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question: "What are the three Unforgivable Curse ?",
      answers: {
        a: "Impedimenta, Incarcerous and Incendio",
        b: "Avada Kedavra, Crucio and Imperio",
        c: "Expelliarmus, Expecto Patronum and Lumos",
        d: "Wingardium Leviosa, Diffindo and Reducto"
      },
      correctAnswer: "b",
      level: "medium"
    },
    {
      question: "Which of these Hogwarts Teachers<br> teaches Transfiguration?",
      answers: {
        a: "Professor McGonagall",
        b: "Professor Binns",
        c: "Professor Snape",
        d: "Professor Hagrid"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question:
        "What's the only book in the Harry Potter serie <br>that doesn't feature Lord Voldemort ?",
      answers: {
        a: "The Prisoner of Azkaban",
        b: "The Deathly Hallows",
        c: "The Goblet of Fire",
        d: "The Half Blood Prince"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question:
        "Which Hogwarts student is killed in Little Hangelton graveyard <br>at the end of 'The Goblet of Fire' ?",
      answers: {
        a: "Draco Malfoy",
        b: "Cedric Diggory",
        c: "Ronald Weasley",
        d: "Deans Thomas"
      },
      correctAnswer: "b",
      level: "medium"
    },
    {
      question: "When is Harry's birthday?",
      answers: {
        a: "31 July",
        b: "2 September",
        c: "25 January",
        d: "New Year's Day"
      },
      correctAnswer: "a",
      level: "medium"
    },
    {
      question:
        "In the Chamber of Secrets book, <br>Mrs Weasley magically fixes Harry’s broken glasses. <br>Who repairs them in Diagon Alley in the film?",
      answers: {
        a: "Lockhart",
        b: "Hermione",
        c: "Ron",
        d: "Neville"
      },
      correctAnswer: "b",
      level: "medium"
    }
  ];

  function buildQuiz() {
    const output = [];
    var letter = [];
    // var level = [];
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
               <div class="question" style="font-family:'Harry Potter Regular';font-weight:normal;font-size:42px"> ${
                 currentQuestion.question
               } </div>
               <div class="answers" > ${answers.join("")} </div>
             </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

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
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Your score is :<br>${numCorrect} out of ${myQuestions.length}`;
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

  const quizContainer = document.querySelector("#quiz");
  const resultsContainer = document.querySelector("#results");
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
