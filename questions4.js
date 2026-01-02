const questions4 = [

/* =========================
   EXACT TRIGONOMETRY
========================= */
{
  topic: "Exact Trigonometry",
  question: "Solve \\(\\sin x = \\tfrac{\\sqrt{3}}{2}\\) for \\(0^\\circ \\le x < 360^\\circ\\).",
  solution: "\\(x = 60^\\circ, 120^\\circ\\)"
},
{
  topic: "Exact Trigonometry",
  question: "Solve \\(2\\cos x = 1\\) for \\(0^\\circ \\le x < 360^\\circ\\).",
  solution: "\\(x = 60^\\circ, 300^\\circ\\)"
},
{
  topic: "Exact Trigonometry",
  question: "Solve \\(\\tan x = -1\\) for \\(0^\\circ \\le x < 360^\\circ\\).",
  solution: "\\(x = 135^\\circ, 315^\\circ\\)"
},
{
  topic: "Exact Trigonometry",
  question: "Solve \\(\\sin x = -\\tfrac{1}{2}\\) for \\(0^\\circ \\le x < 360^\\circ\\).",
  solution: "\\(x = 210^\\circ, 330^\\circ\\)"
},

/* =========================
   PERPENDICULAR LINES & TANGENTS
========================= */
{
  topic: "Perpendicular Lines & Tangents",
  question: "The curve has equation \\(y = x^2 - 4x + 1\\). Find the equation of the tangent at the point where \\(x = 3\\).",
  solution: "Gradient \\(= 2x - 4 = 2\\). Point \\((3, -2)\\). Tangent: \\(y = 2x - 8\\)"
},
{
  topic: "Perpendicular Lines & Tangents",
  question: "Find the equation of the line perpendicular to \\(y = -\\tfrac{1}{2}x + 7\\) that passes through \\((4,1)\\).",
  solution: "Gradient \\(= 2\\). Equation: \\(y = 2x - 7\\)"
},
{
  topic: "Perpendicular Lines & Tangents",
  question: "The gradient of a tangent to the curve \\(y = x^2 + 2x\\) is 6. Find the coordinates of the point of contact.",
  solution: "Solve \\(2x + 2 = 6\\). \\(x = 2\\). \\(y = 8\\). Point \\((2,8)\\)"
},
{
  topic: "Perpendicular Lines & Tangents",
  question: "Find the equation of the normal to the curve \\(y = x^2\\) at the point \\((1,1)\\).",
  solution: "Tangent gradient = 2, normal gradient = \\(-\\tfrac{1}{2}\\). Equation: \\(y - 1 = -\\tfrac{1}{2}(x - 1)\\)"
},

/* =========================
   QUADRATIC INEQUALITIES
========================= */
{
  topic: "Quadratic Inequalities",
  question: "Solve the inequality \\(x^2 - 5x + 6 \\le 0\\).",
  solution: "Roots: \\(x=2,3\\). Solution: \\(2 \\le x \\le 3\\)"
},
{
  topic: "Quadratic Inequalities",
  question: "Solve \\(x^2 + 4x - 5 > 0\\).",
  solution: "Roots: \\(x=-5,1\\). Solution: \\(x < -5\\) or \\(x > 1\\)"
},
{
  topic: "Quadratic Inequalities",
  question: "Solve \\(2x^2 - 3x - 2 < 0\\).",
  solution: "Roots: \\(x = -\\tfrac{1}{2}, 2\\). Solution: \\(-\\tfrac{1}{2} < x < 2\\)"
},
{
  topic: "Quadratic Inequalities",
  question: "Solve \\((x-1)(x+4) \\ge 0\\).",
  solution: "\\(x \\le -4\\) or \\(x \\ge 1\\)"
},

/* =========================
   NTH TERM OF A QUADRATIC SEQUENCE
========================= */
{
  topic: "Quadratic Sequences",
  question: "The sequence is \\(2, 7, 16, 29, \\dots\\). Find an expression for the nth term.",
  solution: "\\(n^2 + 1\\)"
},
{
  topic: "Quadratic Sequences",
  question: "The sequence is \\(1, 6, 15, 28, \\dots\\). Find the nth term.",
  solution: "\\(n^2 + n\\)"
},
{
  topic: "Quadratic Sequences",
  question: "The sequence is \\(3, 10, 21, 36, \\dots\\). Find the nth term.",
  solution: "\\(n^2 + 2n\\)"
},
{
  topic: "Quadratic Sequences",
  question: "The nth term of a sequence is \\(an^2 + bn + c\\). The first three terms are 4, 11, 22. Find \\(a,b,c\\).",
  solution: "\\(a=2, b=1, c=1\\)"
},

/* =========================
   QUADRATIC SIMULTANEOUS EQUATIONS
========================= */
{
  topic: "Quadratic Simultaneous Equations",
  question: "Solve the simultaneous equations \\(y = x^2 - 1\\) and \\(y = 3x - 5\\).",
  solution: "Solve \\(x^2 - 1 = 3x - 5\\). \\(x^2 - 3x + 4 = 0\\). \\(x=1,4\\)"
},
{
  topic: "Quadratic Simultaneous Equations",
  question: "Solve \\(y = x^2\\) and \\(y = 4x - 3\\).",
  solution: "Solve \\(x^2 = 4x - 3\\). \\(x=1,3\\)"
},
{
  topic: "Quadratic Simultaneous Equations",
  question: "Solve \\(y = x^2 + x\\) and \\(y = 6\\).",
  solution: "Solve \\(x^2 + x - 6 = 0\\). \\(x=2,-3\\)"
},
{
  topic: "Quadratic Simultaneous Equations",
  question: "Solve \\(y = x^2 - 4x\\) and \\(y = -x\\).",
  solution: "Solve \\(x^2 - 3x = 0\\). \\(x=0,3\\)"
},

/* =========================
   INVERSE & COMPOSITE FUNCTIONS
========================= */
{
  topic: "Functions",
  question: "Given \\(f(x)=2x+5\\), find \\(f^{-1}(x)\\).",
  solution: "\\(f^{-1}(x)=\\tfrac{x-5}{2}\\)"
},
{
  topic: "Functions",
  question: "Given \\(f(x)=x^2+1\\) for \\(x \\ge 0\\), find \\(f^{-1}(x)\\).",
  solution: "\\(f^{-1}(x)=\\sqrt{x-1}\\)"
},
{
  topic: "Functions",
  question: "Given \\(f(x)=3x-2\\) and \\(g(x)=x^2\\), find \\(f(g(x))\\).",
  solution: "\\(3x^2 - 2\\)"
},
{
  topic: "Functions",
  question: "Find \\(g(f(x))\\) where \\(f(x)=x+1\\) and \\(g(x)=2x\\).",
  solution: "\\(2x + 2\\)"
},

/* =========================
   REARRANGING FORMULAE (FACTORISING)
========================= */
{
  topic: "Rearranging Formulae",
  question: "Make \\(x\\) the subject of \\(y = x(x + 4)\\).",
  solution: "\\(x^2 + 4x - y = 0\\), solve using quadratic formula"
},
{
  topic: "Rearranging Formulae",
  question: "Make \\(r\\) the subject of \\(A = \\pi r(r + h)\\).",
  solution: "Rearrange to quadratic in \\(r\\), then solve"
},
{
  topic: "Rearranging Formulae",
  question: "Make \\(x\\) the subject of \\(y = 3x(2x - 1)\\).",
  solution: "Quadratic in \\(x\\), solve using formula"
},
{
  topic: "Rearranging Formulae",
  question: "Make \\(t\\) the subject of \\(s = ut + at(t-1)\\).",
  solution: "Expand, rearrange, solve quadratic"
},

/* =========================
   PROOF
========================= */
{
  topic: "Proof",
  question: "Prove that the sum of two consecutive odd numbers is always a multiple of 4.",
  solution: "Let numbers be \\(2n+1\\) and \\(2n+3\\). Sum = \\(4n+4 = 4(n+1)\\)"
},
{
  topic: "Proof",
  question: "Prove that \\(n^2 - n\\) is always even.",
  solution: "\\(n(n-1)\\), one factor is even"
},
{
  topic: "Proof",
  question: "Prove that the product of two consecutive integers is always even.",
  solution: "One must be even"
},
{
  topic: "Proof",
  question: "Prove that the square of an odd number is odd.",
  solution: "\\((2n+1)^2 = 4n^2 + 4n + 1\\)"
},

/* =========================
   PROBABILITY & EQUATIONS
========================= */
{
  topic: "Probability",
  question: "A bag contains red and blue counters. The probability of picking a red counter is \\(\\tfrac{2}{5}\\). There are 6 blue counters. Find the number of red counters.",
  solution: "Let red = x. \\(\\tfrac{x}{x+6}=\\tfrac{2}{5}\\). \\(x=4\\)"
},
{
  topic: "Probability",
  question: "The probability of winning a game is \\(p\\). The probability of losing is \\(2p\\). Find \\(p\\).",
  solution: "\\(p + 2p = 1\\). \\(p=\\tfrac{1}{3}\\)"
},
{
  topic: "Probability",
  question: "A spinner has probabilities \\(x\\), \\(2x\\) and \\(3x\\). Find the probability of the largest outcome.",
  solution: "\\(6x=1\\). Largest = \\(\\tfrac{1}{2}\\)"
},
{
  topic: "Probability",
  question: "The probability of rain on Monday is \\(p\\). On Tuesday it is \\(p+0.2\\). The total probability is 1. Find \\(p\\).",
  solution: "\\(2p+0.2=1\\). \\(p=0.4\\)"
}

];
