// A Level Maths – Do Now Question Bank
// Each question is worth about 5 marks
// level: "Year 12" or "Year 13"

const alevelQuestions = [

  /* =========================
     YEAR 12
     ========================= */
  
  /* ---- Factor Theorem ---- */
  {
    question: "Show that \\((x - 2)\\) is a factor of \\(x^3 - 5x^2 + 2x + 4\\), and hence factorise the cubic fully.",
    solution: "Substitute x = 2 to show f(2) = 0. Dividing gives (x − 2)(x² − 3x − 2).",
    topic: "Factor Theorem",
    level: "Year 12"
  },
  {
    question: "Given that \\((x + 1)\\) is a factor of \\(2x^3 + ax^2 - 5x - 2\\), find the value of a.",
    solution: "Substitute x = −1 and solve to find a = 3.",
    topic: "Factor Theorem",
    level: "Year 12"
  },
  {
    question: "Use the Factor Theorem to factorise \\(x^3 - 4x^2 - x + 4\\).",
    solution: "Testing integer values gives x = 1. Factorisation: (x − 1)(x² − 3x − 4).",
    topic: "Factor Theorem",
    level: "Year 12"
  },
  {
    question: "Show that \\((x - 3)\\) is a factor of \\(x^3 - 7x^2 + 9x + 27\\), and hence solve the equation \\(x^3 - 7x^2 + 9x + 27 = 0\\).",
    solution: "After factorising, solutions are x = 3, x = 3 ± √6.",
    topic: "Factor Theorem",
    level: "Year 12"
  },
  {
    question: "Given that \\((x + 2)\\) is a factor of \\(x^3 + ax^2 + bx - 4\\), find a and b.",
    solution: "Substitute x = −2 and compare coefficients to find a = −1, b = −2.",
    topic: "Factor Theorem",
    level: "Year 12"
  },
  
  /* ---- Binomial Expansion ---- */
  {
    question: "Expand \\((2x - 3)^4\\) and simplify your answer.",
    solution: "16x⁴ − 96x³ + 216x² − 216x + 81",
    topic: "Binomial Expansion",
    level: "Year 12"
  },
  {
    question: "Find the coefficient of \\(x^3\\) in the expansion of \\((x + 2)^5\\).",
    solution: "Coefficient is 80.",
    topic: "Binomial Expansion",
    level: "Year 12"
  },
  {
    question: "Expand \\((1 - 3x)^5\\) up to and including the term in \\(x^3\\).",
    solution: "1 − 15x + 90x² − 270x³",
    topic: "Binomial Expansion",
    level: "Year 12"
  },
  {
    question: "Expand \\((2x + 1)^6\\) and write your answer in descending powers of x.",
    solution: "64x⁶ + 192x⁵ + 240x⁴ + 160x³ + 60x² + 12x + 1",
    topic: "Binomial Expansion",
    level: "Year 12"
  },
  {
    question: "Find the term independent of x in the expansion of \\((x^2 + \\frac{1}{x})^6\\).",
    solution: "The constant term is 20.",
    topic: "Binomial Expansion",
    level: "Year 12"
  },
  
  /* ---- Quadratic Inequalities ---- */
  {
    question: "Solve the inequality \\(x^2 - 5x + 4 < 0\\).",
    solution: "Solution is 1 < x < 4.",
    topic: "Quadratic Inequalities",
    level: "Year 12"
  },
  {
    question: "Solve \\(2x^2 - 7x - 4 \\ge 0\\).",
    solution: "x ≤ −½ or x ≥ 4.",
    topic: "Quadratic Inequalities",
    level: "Year 12"
  },
  {
    question: "Solve \\(x(x - 3)(x + 2) < 0\\).",
    solution: "−2 < x < 0 or 0 < x < 3.",
    topic: "Quadratic Inequalities",
    level: "Year 12"
  },
  {
    question: "Solve the inequality \\(x^2 + 6x + 5 > 0\\).",
    solution: "x < −5 or x > −1.",
    topic: "Quadratic Inequalities",
    level: "Year 12"
  },
  {
    question: "Solve \\(3x^2 - x - 2 ≤ 0\\).",
    solution: "−⅔ ≤ x ≤ 1.",
    topic: "Quadratic Inequalities",
    level: "Year 12"
  },
  
  /* ---- Differentiation ---- */
  {
    question: "Differentiate \\(y = 4x^3 - 7x^2 + 5x - 1\\).",
    solution: "y′ = 12x² − 14x + 5.",
    topic: "Differentiation",
    level: "Year 12"
  },
  {
    question: "Find the gradient of the curve \\(y = x^4 - 3x\\) at x = 2.",
    solution: "Gradient = 29.",
    topic: "Differentiation",
    level: "Year 12"
  },
  {
    question: "Find the equation of the tangent to \\(y = x^3 + x\\) at the point where x = 1.",
    solution: "y = 4x − 2.",
    topic: "Differentiation",
    level: "Year 12"
  },
  {
    question: "Find the stationary points of \\(y = x^3 - 6x^2 + 9x\\).",
    solution: "Stationary points at x = 1 and x = 3.",
    topic: "Differentiation",
    level: "Year 12"
  },
  {
    question: "Show that the curve \\(y = x^3 - 3x + 1\\) has a stationary point at x = 1.",
    solution: "dy/dx = 3x² − 3, which equals 0 when x = 1.",
    topic: "Differentiation",
    level: "Year 12"
  },
  
  /* =========================
     YEAR 13
     ========================= */
  
  /* ---- Partial Fractions ---- */
  {
    question: "Express \\(\\frac{3x + 5}{(x - 1)(x + 2)}\\) as partial fractions.",
    solution: "A = 2, B = 1 → 2/(x−1) + 1/(x+2).",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Decompose \\(\\frac{5x - 1}{(x + 1)(x - 2)}\\) into partial fractions.",
    solution: "2/(x−2) + 3/(x+1).",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Express \\(\\frac{4x^2 + 1}{x(x^2 + 1)}\\) in partial fractions.",
    solution: "4 + 1/x − 4x/(x² + 1).",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Use partial fractions to integrate \\(\\int \\frac{2x + 3}{(x + 1)(x + 2)} dx\\).",
    solution: "ln|x+1| + ln|x+2| + C.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Find the constants A and B such that \\(\\frac{7}{x^2 - 1} = \\frac{A}{x - 1} + \\frac{B}{x + 1}\\).",
    solution: "A = 3.5, B = −3.5.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  
  /* ---- Small Angle Approximations ---- */
  {
    question: "Use small angle approximations to find \\(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\).",
    solution: "Limit is 1.",
    topic: "Small Angle Approximations",
    level: "Year 13"
  },
  {
    question: "Show that for small values of x, \\(\\tan x - \\sin x \\approx \\frac{x^3}{2}\\).",
    solution: "Using approximations gives x + x³/3 − (x − x³/6) = x³/2.",
    topic: "Small Angle Approximations",
    level: "Year 13"
  },
  {
    question: "Use small angle approximations to solve \\(\\sin x = 0.2\\).",
    solution: "x ≈ 0.2 radians.",
    topic: "Small Angle Approximations",
    level: "Year 13"
  },
  {
    question: "Show that \\(\\frac{1 - \\cos x}{x^2} \\to \\frac{1}{2}\\) as x → 0.",
    solution: "Using cos x ≈ 1 − x²/2.",
    topic: "Small Angle Approximations",
    level: "Year 13"
  },
  {
    question: "Find the approximate value of \\(\\sin 0.05\\).",
    solution: "≈ 0.05.",
    topic: "Small Angle Approximations",
    level: "Year 13"
  },

  {
    question: "Find the set of values of k for which the equation \\(x^2 + kx + 9 = 0\\) has no real solutions.",
    solution: "Using b² − 4ac < 0 gives k² − 36 < 0, so −6 < k < 6.",
    topic: "Use of Discriminant",
    level: "Year 12"
  },
  {
    question: "Show that the equation \\(2x^2 + (k - 3)x + 4 = 0\\) has exactly one real solution when k = 7.",
    solution: "Discriminant = 0 when k = 7, so exactly one real solution.",
    topic: "Use of Discriminant",
    level: "Year 12"
  },
  {
    question: "Find the values of p for which the equation \\(px^2 - 4x + 1 = 0\\) has two distinct real solutions.",
    solution: "Discriminant > 0 gives p > 0 and p ≠ 0.",
    topic: "Use of Discriminant",
    level: "Year 12"
  },
  {
    question: "Hence find the range of values of a for which \\(x^2 + ax + 5 = 0\\) has real roots.",
    solution: "a² − 20 ≥ 0, so a ≤ −√20 or a ≥ √20.",
    topic: "Use of Discriminant",
    level: "Year 12"
  },
  {
    question: "Show that the quadratic equation \\(x^2 - 6x + k = 0\\) has no real roots when k > 9.",
    solution: "Discriminant = 36 − 4k < 0 when k > 9.",
    topic: "Use of Discriminant",
    level: "Year 12"
  },
  
  {
    question: "Find the equation of the circle with centre (2, −3) and radius 5.",
    solution: "(x − 2)² + (y + 3)² = 25.",
    topic: "Equations of Circles",
    level: "Year 12"
  },
  {
    question: "Show that the equation \\(x^2 + y^2 − 6x + 4y − 12 = 0\\) represents a circle, and find its centre and radius.",
    solution: "Centre (3, −2), radius 5.",
    topic: "Equations of Circles",
    level: "Year 12"
  },
  {
    question: "Find the equation of the circle with diameter joining A(2, 1) and B(6, 5).",
    solution: "Centre (4, 3), radius √8, equation (x − 4)² + (y − 3)² = 8.",
    topic: "Equations of Circles",
    level: "Year 12"
  },
  {
    question: "Determine whether the point (1, 2) lies inside, on, or outside the circle \\(x^2 + y^2 = 5\\).",
    solution: "Substitute gives 5, so the point lies on the circle.",
    topic: "Equations of Circles",
    level: "Year 12"
  },
  {
    question: "Find the equation of the circle which passes through (1, 2) and has centre on the y-axis and radius 5.",
    solution: "Centre (0, 2), equation x² + (y − 2)² = 25.",
    topic: "Equations of Circles",
    level: "Year 12"
  },
  
  {
    question: "Solve \\(\\sin x = \\frac{1}{2}\\) for 0° ≤ x < 360°.",
    solution: "x = 30°, 150°.",
    topic: "Solving Trigonometry Equations",
    level: "Year 12"
  },
  {
    question: "Solve \\(2\\cos x = 1\\) for 0 ≤ x < 2π.",
    solution: "x = π/3, 5π/3.",
    topic: "Solving Trigonometry Equations",
    level: "Year 12"
  },
  {
    question: "Solve \\(\\sin 2x = \\sin x\\) for 0° ≤ x ≤ 360°.",
    solution: "x = 0°, 60°, 180°.",
    topic: "Solving Trigonometry Equations",
    level: "Year 12"
  },
  {
    question: "Solve \\(\\tan x = 1\\) for −180° ≤ x ≤ 180°.",
    solution: "x = −135°, 45°.",
    topic: "Solving Trigonometry Equations",
    level: "Year 12"
  },
  {
    question: "Solve \\(2\\sin x = \\sqrt{3}\\) for 0 ≤ x < 2π.",
    solution: "x = π/3, 2π/3.",
    topic: "Solving Trigonometry Equations",
    level: "Year 12"
  },
  
  {
    question: "Using first principles, find the derivative of \\(f(x) = x^2\\).",
    solution: "Using the limit definition gives f′(x) = 2x.",
    topic: "Differentiation from First Principles",
    level: "Year 12"
  },
  {
    question: "Using first principles, differentiate \\(f(x) = 3x^2 + 1\\).",
    solution: "f′(x) = 6x.",
    topic: "Differentiation from First Principles",
    level: "Year 12"
  },
  {
    question: "Prove using first principles that the derivative of \\(f(x) = x^2 + 4x\\) is \\(2x + 4\\).",
    solution: "Applying the limit definition gives 2x + 4.",
    topic: "Differentiation from First Principles",
    level: "Year 12"
  },
  {
    question: "Differentiate \\(f(x) = 5x^2 − 3x\\) from first principles.",
    solution: "Derivative is 10x − 3.",
    topic: "Differentiation from First Principles",
    level: "Year 12"
  },
  {
    question: "Show from first principles that the gradient of \\(y = x^2\\) at x = 3 is 6.",
    solution: "Derivative is 2x, so gradient at x = 3 is 6.",
    topic: "Differentiation from First Principles",
    level: "Year 12"
  },
  
  {
    question: "Find \\(\\int (3x^2 - 4x + 1) \\, dx\\).",
    solution: "x³ − 2x² + x + C.",
    topic: "Integration",
    level: "Year 12"
  },
  {
    question: "Find the area under the curve \\(y = x^2\\) between x = 0 and x = 3.",
    solution: "Area = 9.",
    topic: "Integration",
    level: "Year 12"
  },
  {
    question: "Evaluate \\(\\int_1^4 (2x - 1) dx\\).",
    solution: "Result is 12.",
    topic: "Integration",
    level: "Year 12"
  },
  {
    question: "Find the value of k if \\(\\int_0^2 (kx + 1) dx = 10\\).",
    solution: "k = 4.",
    topic: "Integration",
    level: "Year 12"
  },
  {
    question: "Find the area enclosed by the curve \\(y = 4 - x^2\\) and the x-axis.",
    solution: "Area = 32/3.",
    topic: "Integration",
    level: "Year 12"
  },
  
  {
    question: "Prove that the square of any odd integer is odd.",
    solution: "Let n = 2k + 1. Then n² = 4k² + 4k + 1, which is odd.",
    topic: "Proof",
    level: "Year 12"
  },
  {
    question: "Prove that the sum of two consecutive integers is always odd.",
    solution: "Let integers be n and n+1. Sum = 2n+1, which is odd.",
    topic: "Proof",
    level: "Year 12"
  },
  {
    question: "Show that if n is even, then n² is divisible by 4.",
    solution: "Let n = 2k. Then n² = 4k².",
    topic: "Proof",
    level: "Year 12"
  },
  {
    question: "Prove that the difference of the squares of two consecutive integers is always odd.",
    solution: "(n+1)² − n² = 2n + 1, which is odd.",
    topic: "Proof",
    level: "Year 12"
  },
  {
    question: "Express \\(\\frac{5x + 3}{(x - 1)(x + 2)}\\) as partial fractions.",
    solution: "A/(x − 1) + B/(x + 2) gives A = 8/3, B = 7/3.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Express \\(\\frac{2x - 1}{(x + 1)^2}\\) as partial fractions.",
    solution: "A/(x + 1) + B/(x + 1)² gives A = 2, B = −3.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Express \\(\\frac{3x^2 + 7x + 2}{(x - 1)(x + 1)}\\) in the form \\(A + \\frac{B}{x - 1} + \\frac{C}{x + 1}\\).",
    solution: "A = 3, B = 6, C = 2.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Hence find \\(\\int \\frac{5x + 3}{(x - 1)(x + 2)} \\, dx\\).",
    solution: "Integral = (8/3)ln|x − 1| + (7/3)ln|x + 2| + C.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Show that \\(\\frac{x^2 + 1}{(x + 1)^2}\\) can be written in the form \\(1 + \\frac{A}{x + 1} + \\frac{B}{(x + 1)^2}\\), and find A and B.",
    solution: "A = −2, B = 2.",
    topic: "Partial Fractions",
    level: "Year 13"
  },
  {
    question: "Given x = 2t² and y = 4t, find \\(\\frac{dy}{dx}\\) in terms of t.",
    solution: "dy/dx = (4)/(4t) = 1/t.",
    topic: "Parametric Equations",
    level: "Year 13"
  },
  {
    question: "For x = t² + 1 and y = 2t³, find \\(\\frac{dy}{dx}\\) when t = 1.",
    solution: "dy/dx = 6t² / (2t) = 3t, so gradient = 3.",
    topic: "Parametric Equations",
    level: "Year 13"
  },
  {
    question: "Show that the curve defined by x = t² − 1, y = 2t is a parabola and find its equation.",
    solution: "Eliminating t gives x = y²/4 − 1.",
    topic: "Parametric Equations",
    level: "Year 13"
  },
  {
    question: "Given x = 3t − 1 and y = t² + 2, find the equation of the tangent at t = 1.",
    solution: "Gradient = 2/3, equation y − 3 = (2/3)(x − 2).",
    topic: "Parametric Equations",
    level: "Year 13"
  },
  {
    question: "Hence find the coordinates of the point where the tangent is parallel to the x-axis.",
    solution: "dy/dx = 0 when t = 0.",
    topic: "Parametric Equations",
    level: "Year 13"
  },
  {
    question: "Find the 20th term of an arithmetic sequence with first term 3 and common difference 5.",
    solution: "a₂₀ = 3 + 19×5 = 98.",
    topic: "Arithmetic Sequences",
    level: "Year 13"
  },
  {
    question: "Find the sum of the first 30 terms of an arithmetic sequence with first term 7 and common difference 2.",
    solution: "S₃₀ = 15×(14 + 66) = 1200.",
    topic: "Arithmetic Sequences",
    level: "Year 13"
  },
  {
    question: "The 5th term of an arithmetic sequence is 12 and the 12th term is 33. Find the first term and common difference.",
    solution: "a = 2, d = 3.",
    topic: "Arithmetic Sequences",
    level: "Year 13"
  },
  {
    question: "Show that the sum of the first n terms of the sequence 4, 7, 10, … is \\(\\frac{n}{2}(8 + 3(n - 1))\\).",
    solution: "Using Sₙ = n/2(2a + (n−1)d).",
    topic: "Arithmetic Sequences",
    level: "Year 13"
  },
  {
    question: "Find the value of n for which the sum of the first n terms of an arithmetic sequence is 210.",
    solution: "n = 14.",
    topic: "Arithmetic Sequences",
    level: "Year 13"
  },
  {
    question: "Find the 8th term of a geometric sequence with first term 5 and common ratio 2.",
    solution: "a₈ = 5 × 2⁷ = 640.",
    topic: "Geometric Sequences",
    level: "Year 13"
  },
  {
    question: "Find the sum of the first 10 terms of a geometric sequence where a = 3 and r = 1/2.",
    solution: "S₁₀ = 3(1 − (1/2)¹⁰)/(1 − 1/2).",
    topic: "Geometric Sequences",
    level: "Year 13"
  },
  {
    question: "The second term of a geometric sequence is 6 and the fifth term is 48. Find the first term and common ratio.",
    solution: "a = 3, r = 2.",
    topic: "Geometric Sequences",
    level: "Year 13"
  },
  {
    question: "Show that the sum to infinity of the geometric series 5 + 2.5 + 1.25 + … is 10.",
    solution: "S∞ = a/(1 − r) = 5/(1 − 0.5) = 10.",
    topic: "Geometric Sequences",
    level: "Year 13"
  },
  {
    question: "Hence find the smallest value of n such that the sum of the first n terms exceeds 9.9.",
    solution: "n = 7.",
    topic: "Geometric Sequences",
    level: "Year 13"
  },
  {
    question: "Expand \\((1 + 2x)^{1/2}\\) up to and including the x² term.",
    solution: "1 + x − x²/2.",
    topic: "General Binomial Expansion",
    level: "Year 13"
  },
  {
    question: "Expand \\((1 - x)^{-1}\\) up to and including the x³ term.",
    solution: "1 + x + x² + x³.",
    topic: "General Binomial Expansion",
    level: "Year 13"
  },
  {
    question: "Find the coefficient of x² in the expansion of \\((1 + 3x)^{1/2}\\).",
    solution: "Coefficient = −9/8.",
    topic: "General Binomial Expansion",
    level: "Year 13"
  },
  {
    question: "Show that \\((1 + x)^n ≈ 1 + nx + \\frac{n(n − 1)}{2}x^2\\) for small x.",
    solution: "Using the general binomial expansion.",
    topic: "General Binomial Expansion",
    level: "Year 13"
  },
  {
    question: "Hence approximate \\(\\sqrt{1.04}\\) correct to 3 decimal places.",
    solution: "Approximation = 1.020.",
    topic: "General Binomial Expansion",
    level: "Year 13"
  }
  
  
  
  
  
  
  ];
  