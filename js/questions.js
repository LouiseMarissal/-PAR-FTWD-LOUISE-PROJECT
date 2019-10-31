const myQuestions = [
  {
    question:
      "Whom does the Death Eater Bellatrix Lestrange,<br> the most loyal maid of the Dark Master, <br>be the cousin?",
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
      d: "Death Eaters' enemy"
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
  },
  {
    question: "Who was the Potters' secret keeper<br> before they died? ",
    answers: {
      a: "Peter Pettigrew",
      b: "Sirius Black",
      c: "Albus Dumbledore",
      d: "Remus Lupin"
    },
    correctAnswer: "a",
    level: "hard"
  },
  {
    question:
      "What are the last words of Severus Snape <br>in The Deathly Hallows?",
    answers: {
      a: "Not Harry! Please..",
      b: "Look.. at me",
      c: "You could do better..",
      d: "Avada Kedavra"
    },
    correctAnswer: "b",
    level: "hard"
  },
  {
    question:
      "At Ollivander, Harry Potter will find his first wand.<br> Or rather, the wand will choose it.<br> What is it?",
    answers: {
      a: "Willow wood and unicorn hair",
      b: "In vine wood and dragon ventricle",
      c: "In elderwood and hair of oval",
      d: "In holly wood and phoenix feather"
    },
    correctAnswer: "d",
    level: "hard"
  },
  {
    question:
      "Albus Dumbledore claims to have a scar above his left knee. <br> What does it look like ?",
    answers: {
      a: "This is the spitting portrait of the Mona Lisa",
      b: "It's a perfect plan of the London underground",
      c: "Merlin's Portrait",
      d: "The portrait of GrindenWald"
    },
    correctAnswer: "b",
    level: "hard"
  },
  {
    question: "In order of birth, who are the seven weasley siblings?",
    answers: {
      a: "Percy, Ron, Bill, Fred, Ginny, Georges, Charlie",
      b: "Bill, Charlie, Percy, Fred, George, Ron, Ginny",
      c: "Fred, George, Ginny, Ron, Bill, Charlie, Percy",
      d: "Bill, Charlie, Percy, George, Fred, Ron, Ginny"
    },
    correctAnswer: "b",
    level: "hard"
  },
  {
    question: "Who first shows the diary <br>of Tom Riddle ?",
    answers: {
      a: "Moaning Myrtle",
      b: "Ginny Weasley",
      c: "Nearly Headless Nick",
      d: "Hermione Granger"
    },
    correctAnswer: "a",
    level: "hard"
  },
  {
    question:
      "What's the name of the fairy-talebook that Dumbledore <br>bequeaths to Hermione in 'The Deathly Hallows'?",
    answers: {
      a: "The Tales of Beedle the Bard",
      b: "The Tales of Crookshanks the cat",
      c: "The Tales of Gilderoy the Great",
      d: "The Tales of The Wonderfull Voldy"
    },
    correctAnswer: "a",
    level: "hard"
  }
];
