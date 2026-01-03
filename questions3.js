const questions3 = [

  /* ---------------- EQUATIONS OF STRAIGHT LINES ---------------- */

  {
    topic: "Equations of Straight Lines",
    level: "Foundation",
    question: "Find the equation of the line with gradient 3 that passes through the point \\( (0, -2) \\).",
    solution: "Using \\( y = mx + c \\), \\( y = 3x - 2 \\)."
  },
  {
    topic: "Equations of Straight Lines",
    level: "Crossover",
    question: "Find the equation of the line with gradient \\( -2 \\) that passes through \\( (4, 1) \\).",
    solution: "\\( y - 1 = -2(x - 4) \\Rightarrow y = -2x + 9 \\)."
  },
  {
    topic: "Equations of Straight Lines",
    level: "Higher",
    question: "The line \\( y = 2x + 5 \\) intersects the y-axis at point A. Find the equation of the line parallel to this line that passes through \\( (3, -4) \\).",
    solution: "Parallel lines have the same gradient. \\( y + 4 = 2(x - 3) \\Rightarrow y = 2x - 10 \\)."
  },

  /* ---------------- PROBABILITY TREES ---------------- */

  {
    topic: "Probability Trees",
    level: "Foundation",
    question: "A bag contains 3 red and 5 blue counters. One counter is taken at random and not replaced. Find the probability that both counters are red.",
    solution: "\\( \\frac{3}{8} \\times \\frac{2}{7} = \\frac{3}{28} \\)."
  },
  {
    topic: "Probability Trees",
    level: "Crossover",
    question: "A spinner has probabilities \\( P(A)=0.6 \\) and \\( P(B)=0.4 \\). The spinner is spun twice. Find the probability of getting A followed by B.",
    solution: "\\( 0.6 \\times 0.4 = 0.24 \\)."
  },
  {
    topic: "Probability Trees",
    level: "Higher",
    question: "A box contains 5 red and 3 green balls. Two balls are taken at random without replacement. Find the probability that one ball is red and one ball is green.",
    solution: "\\( P(RG) + P(GR) = \\frac{5}{8} \\times \\frac{3}{7} + \\frac{3}{8} \\times \\frac{5}{7} = \\frac{30}{56} = \\frac{15}{28} \\)."
  },

  /* ---------------- SIMULTANEOUS EQUATIONS ---------------- */

  {
    topic: "Simultaneous Equations",
    level: "Foundation",
    question: "Solve the simultaneous equations \\( y = x + 2 \\) and \\( y = 6 \\).",
    solution: "Substitute: \\( 6 = x + 2 \\Rightarrow x = 4, y = 6 \\)."
  },
  {
    topic: "Simultaneous Equations",
    level: "Crossover",
    question: "Solve the simultaneous equations \\( y = 2x + 1 \\) and \\( y = 9 \\).",
    solution: "\\( 9 = 2x + 1 \\Rightarrow x = 4, y = 9 \\)."
  },
  {
    topic: "Simultaneous Equations",
    level: "Higher",
    question: "Solve the simultaneous equations \\( y = x^2 \\) and \\( y = 3x + 4 \\).",
    solution: "\\( x^2 = 3x + 4 \\Rightarrow x^2 - 3x - 4 = 0 \\Rightarrow (x-4)(x+1)=0 \\Rightarrow x=4 \\text{ or } -1 \\)."
  },

  /* ---------------- ITERATION ---------------- */

  {
    topic: "Iteration",
    level: "Foundation",
    question: "Use the iteration formula \\( x_{n+1} = \\frac{x_n + 5}{2} \\) with a starting value of \\( x_1 = 1 \\). Find \\( x_2 \\) and \\( x_3 \\).",
    solution: "\\( x_2 = 3,\\ x_3 = 4 \\)."
  },
  {
    topic: "Iteration",
    level: "Crossover",
    question: "Use the iteration formula \\( x_{n+1} = \\sqrt{2x_n + 3} \\) with \\( x_1 = 2 \\). Find \\( x_2 \\) and \\( x_3 \\).",
    solution: "\\( x_2 = \\sqrt{7} \\approx 2.65,\\ x_3 = \\sqrt{2(2.65)+3} \\approx 2.89 \\)."
  },
  {
    topic: "Iteration",
    level: "Higher",
    question: "Use the iteration formula \\( x_{n+1} = \\sqrt{4x_n + 1} \\) with \\( x_1 = 1 \\). Show that the iteration converges to a value between 2 and 3.",
    solution: "Substituting values gives \\( x_2=\\sqrt{5}\\approx2.24, x_3\\approx2.48 \\). Values increase but remain below 3, so convergence is between 2 and 3."
  },

  /* ---------------- ALGEBRAIC FRACTIONS ---------------- */

  {
    topic: "Algebraic Fractions",
    level: "Foundation",
    question: "Simplify \\( \\frac{4x}{2x} \\).",
    solution: "\\( 2 \\) (for \\( x \\neq 0 \\))."
  },
  {
    topic: "Algebraic Fractions",
    level: "Crossover",
    question: "Simplify \\( \\frac{6x^2}{3x} \\).",
    solution: "\\( 2x \\)."
  },
  {
    topic: "Algebraic Fractions",
    level: "Higher",
    question: "Simplify \\( \\frac{3x^2 - 12}{6x} \\).",
    solution: "\\( \\frac{3(x^2 - 4)}{6x} = \\frac{(x-2)(x+2)}{2x} \\)."
  }

];
