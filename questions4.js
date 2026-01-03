const questions4 = [

  /* =====================================================
     FOUNDATION (4 MARKS)
     ===================================================== */

  {
    topic: "Trigonometry",
    level: "Foundation",
    question: "A right-angled triangle has one angle of 30° and a hypotenuse of 10 cm. Calculate the length of the side opposite the 30° angle.",
    solution: "Use sine: sin 30° = opposite / hypotenuse. Opposite = 10 × 0.5 = 5 cm."
  },

  {
    topic: "Linear Graphs",
    level: "Foundation",
    question: "The line has equation \\( y = 2x + 1 \\). Write down the gradient. Find the value of y when x = 4.",
    solution: "The gradient is 2. Substituting x = 4 gives y = 2(4) + 1 = 9."
  },

  {
    topic: "Probability",
    level: "Foundation",
    question: "A bag contains 3 red and 5 blue counters. One counter is chosen at random, then replaced. Find the probability of picking two red counters.",
    solution: "Probability of red = 3/8. With replacement: (3/8)² = 9/64."
  },

  {
    topic: "Algebra",
    level: "Foundation",
    question: "Solve the equation \\( 4(2x - 1) = 3x + 11 \\).",
    solution: "Expand: 8x − 4 = 3x + 11. Subtract 3x and add 4: 5x = 15, so x = 3."
  },

  /* =====================================================
     CROSSOVER (4 MARKS)
     ===================================================== */

  {
    topic: "Quadratic Inequalities",
    level: "Crossover",
    question: "Solve the inequality \\( x^2 - 9 < 0 \\).",
    solution: "Factorising gives (x − 3)(x + 3) < 0, so −3 < x < 3."
  },

  {
    topic: "Pythagoras and Trigonometry",
    level: "Crossover",
    question: "A ladder leans against a wall making an angle of 70° with the ground. The ladder is 5 m long. Calculate the height the ladder reaches on the wall.",
    solution: "Use sine: height = 5 sin 70° ≈ 4.7 m."
  },

  {
    topic: "Sequences",
    level: "Crossover",
    question: "The first three terms of a sequence are 2, 6, 12. Show that the sequence is quadratic and find the nth term.",
    solution: "Differences are 4, 6 → second difference is 2. nth term is n² + n."
  },

  {
    topic: "Algebraic Fractions",
    level: "Crossover",
    question: "Simplify \\( \\frac{3x}{x^2 - x} \\). State any values of x for which the expression is undefined.",
    solution: "Factor denominator: x(x − 1). Cancels to 3/(x − 1). Undefined when x = 0 or x = 1."
  },

  /* =====================================================
     HIGHER (4 MARKS)
     ===================================================== */

  {
    topic: "Exact Trigonometry",
    level: "Higher",
    question: "Show that \\( \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\). Hence find the exact value of \\( \\tan 60^\\circ \\).",
    solution: "Using a 30–60–90 triangle gives tan 30° = 1/√3. Therefore tan 60° = √3."
  },

  {
    topic: "Perpendicular Lines and Tangents",
    level: "Higher",
    question: "The line \\( y = 3x - 4 \\) is tangent to a curve at point A. Show that the gradient of the normal at A is \\( -\\frac{1}{3} \\). Hence find the equation of the normal passing through \\( (2, 2) \\).",
    solution: "Perpendicular gradients multiply to −1, so normal gradient is −1/3. Equation: y − 2 = −1/3(x − 2)."
  },

  {
    topic: "Nth Term of a Quadratic Sequence",
    level: "Higher",
    question: "The first three terms of a sequence are 3, 8, 15. Show that the sequence is quadratic and find an expression for the nth term.",
    solution: "First differences: 5, 7 → second difference = 2. nth term is n² + 2n."
  },

  {
    topic: "Quadratic Simultaneous Equations",
    level: "Higher",
    question: "Solve the simultaneous equations \\( y = x^2 - 1 \\) and \\( y = 2x + 3 \\).",
    solution: "Equating gives x² − 1 = 2x + 3 → x² − 2x − 4 = 0 → x = 1 ± √5."
  },

  {
    topic: "Rearranging Formulae",
    level: "Higher",
    question: "Make \\( x \\) the subject of the formula \\( y = x(a + bx) \\).",
    solution: "Rearrange to bx² + ax − y = 0. Using the quadratic formula gives x = [−a ± √(a² + 4by)] / (2b)."
  },

  {
    topic: "Proof",
    level: "Higher",
    question: "Prove that the square of any odd number is also odd.",
    solution: "Let an odd number be 2n + 1. Squaring gives 4n² + 4n + 1 = 2(2n² + 2n) + 1, which is odd."
  },

  {
    topic: "Probability",
    level: "Higher",
    question: "A bag contains 4 red and 6 blue counters. Two counters are chosen at random without replacement. Show that the probability of choosing two counters of the same colour is \\( \\frac{7}{15} \\).",
    solution: "P(two red) = 4/10 × 3/9 = 2/15. P(two blue) = 6/10 × 5/9 = 5/15. Total = 7/15."
  }

];
