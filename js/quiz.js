// build my Quiz
(function() {
  const myQuestions = [
    {
      question: "Who was the Potters' secret keeper before they died? ",
      answers: {
        a: "Peter Petigrew",
        b: "Sirius Black",
        c: "Albus Dumbledore",
        d: "Remus Lupin"
      },
      correctAnswer: "b"
    },
    {
      question: "Who is Kreacher?",
      answers: {
        a: "The horrible house-elf of Black's family",
        b: "Dobby's Best friend",
        c: "Harry's Owl",
        d: "Dudley's dog"
      },
      correctAnswer: "a"
    },
    {
      question:
        "Whom does the Death Eater Bellatrix Lestrange, the most loyal maid of the Dark Master, be the cousin?",
      answers: {
        a: "Neville LongBottom",
        b: "Sirius Black",
        c: "Draco Malfoy",
        d: "Severus Snape"
      },
      correctAnswer: "b"
    },
    {
      question:
        "What are the last words of Severus Snape in The Deathly Hallows?",
      answers: {
        a: "Not Harry! Please..",
        b: "Look.. at me",
        c: "You could do better..",
        d: "Avada Kedavra"
      },
      correctAnswer: "b"
    },
    {
      question:
        "At Ollivander, Harry Potter will find his first wand. Or rather, the wand will choose it. What is it?",
      answers: {
        a: "Willow wood and unicorn hair",
        b: "In vine wood and dragon ventricle",
        c: "In elderwood and hair of oval",
        d: "In holly wood and phoenix feather"
      },
      correctAnswer: "d"
    },
    {
      question: "Who were Harry Parents?",
      answers: {
        a: "Minerva and Craig Potter",
        b: "James and Lily Potter",
        c: "Athur and Molly Potter",
        d: "Robert and Maggie"
      },
      correctAnswer: "b"
    },
    {
      question:
        "Who are the muggle aunt and unclethat Harry must live with every summer?",
      answers: {
        a: "Ned and Camilia Diddly",
        b: "Vernon and Petunia Dursley",
        c: "Ralph and Magnolia Dudley",
        d: "Peter and Mary Durdlay"
      },
      correctAnswer: "b"
    },
    {
      question:
        "Albus Dumbledore claims to have a scar above his left knee. What does it look like ?",
      answers: {
        a: "This is the spitting portrait of the Mona Lisa",
        b: "It's a perfect plan of the London underground",
        c: "Merlin's Portrait",
        d: "The portrait of GrindenWald"
      },
      correctAnswer: "b"
    },
    {
      question: "In order of birth, who are the seven weasley siblings?",
      answers: {
        a: "Percy, Ron, Bill, Fred, Ginny, Georges, Charlie",
        b: "Bill, Charlie, Percy, Fred, George, Ron, Ginny",
        c: "Fred, George, Ginny, Ron, Bill, Charlie, Percy",
        d: "Bill, Charlie, Percy, George, Fred, Ron, Ginny"
      },
      correctAnswer: "b"
    },
    {
      question: "What are the three Unforgivable Curse ?",
      answers: {
        a: "Impedimenta, Incarcerous and Incendio",
        b: "Avada Kedavra, Crucio and Imperio",
        c: "Expelliarmus, Expecto Patronum and Lumos",
        d: "Wingardium Leviosa, Diffindo and Reducto"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of these Hogwarts Teachers teaches Transfiguration?",
      answers: {
        a: "Professor McGonagall",
        b: "Professor Binns",
        c: "Professor Snape",
        d: "Professor Hagrid"
      },
      correctAnswer: "a"
    },
    {
      question:
        "At the end of 'Harry Potter and the Philosopher's Stone', whoch professor removes his turban to reveal Lord Voldemort on the back of his head ?",
      answers: {
        a: "Professor Lockhart",
        b: "Professor Quirrell",
        c: "Professor Sprout",
        d: "Professor Trelawney"
      },
      correctAnswer: "b"
    },
    {
      question: "Who first shows the diary of Tom Riddle ?",
      answers: {
        a: "Moaning Myrtle",
        b: "Ginny Weasley",
        c: "Nearly Headless Nick",
        d: "Hermione Granger"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was Tom Marvolo Riddle ",
      answers: {
        a: "The ghost of Sirius Black",
        b: "Harry's best friend",
        c: "Lord Voldemort",
        d: "Death Eaters' enemy"
      },
      correctAnswer: "c"
    },
    {
      question:
        "What's the only book ine the Harry Potter serie that doesn't feature Lord Voldemort ?",
      answers: {
        a: "The Prisoner of Azkaban",
        b: "The Deathly Hallows",
        c: "The Goblet of Fire",
        d: "The Half Blood Prince"
      },
      correctAnswer: "a"
    },
    {
      question:
        "Which Hogwarts student is killed in Little Hangelton graveyard at the end of 'The Goblet of Fire' ?",
      answers: {
        a: "Draco Malfoy",
        b: "Cedric Diggory",
        c: "Ronald Weasley",
        d: "Deans Thomas"
      },
      correctAnswer: "b"
    },
    {
      question: "In wich House is Luna Lovegood?",
      answers: {
        a: "Hufflepuff",
        b: "Slytherin",
        c: "Ravenclaw",
        d: "Gryffindor"
      },
      correctAnswer: "c"
    },
    {
      question: "When is Harry's birthday?",
      answers: {
        a: "31 July",
        b: "2 September",
        c: "25 January",
        d: "New Year's Day"
      },
      correctAnswer: "a"
    },
    {
      question:
        "In the Chamber of Secrets book, Mrs Weasley magically fixes Harry’s broken glasses. Who repairs them in Diagon Alley in the film?",
      answers: {
        a: "Lockhart",
        b: "Hermione",
        c: "Ron",
        d: "Neville"
      },
      correctAnswer: "b"
    },
    {
      question:
        "What's the name of the fairy-talebook that Dumbledore bequeaths to Hermione in 'The Deathly Hallows'?",
      answers: {
        a: "The Tales of Beedle the Bard",
        b: "The Tales of Crookshanks the cat",
        c: "The Tales of Gilderoy the Great",
        d: "The Tales of The Wonderfull Voldy"
      },
      correctAnswer: "a"
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
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
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

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
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

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
