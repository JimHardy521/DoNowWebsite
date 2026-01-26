const alevelfurther = [

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find and simplify the first 4 non-zero terms in the Maclaurin series for \\(e^{2x}\\).",
    solution: "Using<br>\\(e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots\\)<br><br>Substitute \\(x \\to 2x\\):<br><br>\\(e^{2x} = 1 + 2x + 2x^2 + \\frac{4}{3}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(\\sin(2x)\\).",
    solution: "Using<br>\\(\\sin x = x - \\frac{x^3}{6} + \\dots\\)<br><br>\\(\\sin(2x) = 2x - \\frac{(2x)^3}{6} = 2x - \\frac{4}{3}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(\\ln(1+3x)\\).",
    solution: "Using<br>\\(\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots\\)<br><br>\\(\\ln(1+3x) = 3x - \\frac{9}{2}x^2 + 9x^3 - \\frac{81}{4}x^4\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find and simplify the first 4 non-zero terms in the Maclaurin series for \\(\\cos(3x)\\).",
    solution: "Using<br>\\(\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + \\dots\\)<br><br>\\(\\cos(3x) = 1 - \\frac{9}{2}x^2 + \\frac{27}{8}x^4\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(e^x\\sin x\\).",
    solution: "Using<br>\\(e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots\\)<br>\\(\\sin x = x - \\frac{x^3}{6} + \\dots\\)<br><br>Multiplying and collecting terms:<br><br>\\(e^x\\sin x = x + x^2 + \\frac{1}{2}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(e^{2x}+e^{-2x}\\).",
    solution: "Using Maclaurin expansions for \\(e^{2x}\\) and \\(e^{-2x}\\):<br><br>Odd powers cancel, giving<br><br>\\(e^{2x}+e^{-2x} = 2 + 4x^2 + \\frac{4}{3}x^4\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(x e^x\\).",
    solution: "Using<br>\\(e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots\\)<br><br>\\(x e^x = x + x^2 + \\frac{1}{2}x^3 + \\frac{1}{6}x^4\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(\\sin x + \\cos x\\).",
    solution: "Using<br>\\(\\sin x = x - \\frac{x^3}{6} + \\dots\\)<br>\\(\\cos x = 1 - \\frac{x^2}{2} + \\dots\\)<br><br>\\(\\sin x + \\cos x = 1 + x - \\frac{1}{2}x^2 - \\frac{1}{6}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find and simplify the first 4 non-zero terms in the Maclaurin series for \\((1+x)e^x\\).",
    solution: "Using<br>\\(e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots\\)<br><br>\\((1+x)e^x = 1 + 2x + \\frac{3}{2}x^2 + \\frac{2}{3}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(\\ln(1+x^2)\\).",
    solution: "Using<br>\\(\\ln(1+u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} + \\dots\\)<br>with \\(u=x^2\\):<br><br>\\(\\ln(1+x^2) = x^2 - \\frac{1}{2}x^4 + \\frac{1}{3}x^6\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find the first 4 non-zero terms, in ascending powers of \\(x\\), for \\(\\frac{\\sin x}{x}\\).",
    solution: "\\(\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + \\dots\\)<br><br>\\(\\frac{\\sin x}{x} = 1 - \\frac{x^2}{6} + \\frac{x^4}{120}\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find and simplify the first 4 non-zero terms in the Maclaurin series for \\(e^{-x}\\sin(2x)\\).",
    solution: "\\(e^{-x} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\dots\\)<br>\\(\\sin(2x) = 2x - \\frac{4}{3}x^3 + \\dots\\)<br><br>Multiplying and simplifying:<br><br>\\(2x - 2x^2 + \\frac{1}{3}x^3\\)."
  },

  {
    topic: "Maclaurin Series",
    level: "Year 12",
    question: "Find and simplify the first 4 non-zero terms in the Maclaurin series for \\(e^{3x}\\cos(-x)\\).",
    solution: "Since \\(\\cos(-x)=\\cos x\\):<br>\\(e^{3x} = 1 + 3x + \\frac{9}{2}x^2 + \\frac{9}{2}x^3 + \\dots\\)<br>\\(\\cos x = 1 - \\frac{x^2}{2} + \\dots\\)<br><br>\\(e^{3x}\\cos x = 1 + 3x + 4x^2 + 3x^3\\)."
  },


{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(\\frac{x^2}{4} - \\frac{y^2}{9} = 1\\).",
  solution: "Hyperbola centered at (0,0)<br>Vertices: (±2,0)<br>Asymptotes: y = ±(3/2)x"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(y^2 = 8x\\).",
  solution: "Parabola opening right<br>Vertex at (0,0)<br>Focus: (2,0), Directrix: x = -2"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(4x^2 + 9y^2 = 36\\).",
  solution: "Ellipse centered at (0,0)<br>Vertices: (±3,0), (0,±2)"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(x^2 + 4y^2 = 16\\).",
  solution: "Ellipse centered at (0,0)<br>Vertices: (±4,0), (0,±2)"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(y^2 - 4x^2 = 16\\).",
  solution: "Hyperbola centered at (0,0) opening up-down.<br>Vertices: (0,±4)<br>Asymptotes: y = ±2x"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(y^2 = -12x\\).",
  solution: "Parabola opening left, vertex at (0,0).<br>Focus: (-3,0), Directrix: x = 3"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(9x^2 - 16y^2 = 144\\).",
  solution: "Hyperbola centered at (0,0) opening left-right<br>Vertices: (±4,0)<br>Asymptotes: y = ±(3/4)x"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(x^2 + y^2 = 25\\).",
  solution: "Circle centered at (0,0) with radius 5.<br>Vertices: (±5,0), (0,±5)"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(y^2 = 16x\\).",
  solution: "Parabola opening right, vertex at (0,0)<br>Focus: (4,0), Directrix: x = -4"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(4x^2 - y^2 = 16\\).",
  solution: "Hyperbola centered at (0,0) opening left-right.<br>Vertices: (±2,0)<br>Asymptotes: y = ±2x"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(x^2 + 9y^2 = 36\\).",
  solution: "Ellipse centered at (0,0)<br>Vertices: (±6,0), (0,±2)"
},
{
  topic: "Conics - Sketching",
  level: "Year 12",
  question: "Sketch the graph of \\(y^2 - 9x^2 = 36\\).",
  solution: "Hyperbola centered at (0,0) opening up-down<br>Vertices: (0,±6)<br>Asymptotes: y = ±3x"
},


  
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a & 4 \\\\ 2 & a - 2 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a - 2) - 8 = 0\\).<br>\\(a^2 - 2a - 8 = 0\\).<br>Answer: \\(a = 4\\) or \\(a = -2\\)."
},

{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a & 5 \\\\ 1 & 2 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(2a - 5 = 0\\).<br>\\(a = \\frac{5}{2}\\).<br>Answer: \\(a = \\frac{5}{2}\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a + 1 & 3 \\\\ 2 & a \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a + 1) - 6 = 0\\).<br>\\(a^2 + a - 6 = 0\\).<br>Answer: \\(a = 2\\) or \\(a = -3\\)."
},

{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} 4 & a \\\\ 2 & 1 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(4 - 2a = 0\\).<br>\\(a = 2\\).<br>Answer: \\(a = 2\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a & 6 \\\\ 3 & 2 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(2a - 18 = 0\\).<br>\\(a = 9\\).<br>Answer: \\(a = 9\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a + 2 & a \\\\ 1 & 3 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(3(a + 2) - a = 0\\).<br>\\(2a + 6 = 0\\).<br>Answer: \\(a = -3\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a & 3 \\\\ 2 & a - 1 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a - 1) - 6 = 0\\).<br>\\(a^2 - a - 6 = 0\\).<br>Answer: \\(a = 3\\) or \\(a = -2\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a + 1 & 4 \\\\ 1 & a \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a + 1) - 4 = 0\\).<br>\\(a^2 + a - 4 = 0\\).<br>Answer: \\(a = \\frac{-1 \\pm \\sqrt{17}}{2}\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} 2a & 5 \\\\ 1 & a - 1 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(2a(a - 1) - 5 = 0\\).<br>\\(2a^2 - 2a - 5 = 0\\).<br>Answer: \\(a = \\frac{1 \\pm \\sqrt{11}}{2}\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a - 3 & 2 \\\\ 1 & a \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a - 3) - 2 = 0\\).<br>\\(a^2 - 3a - 2 = 0\\).<br>Answer: \\(a = \\frac{3 \\pm \\sqrt{17}}{2}\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a & 6 \\\\ 2 & a + 1 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\(a(a + 1) - 12 = 0\\).<br>\\(a^2 + a - 12 = 0\\).<br>Answer: \\(a = 3\\) or \\(a = -4\\)."
},
{
  topic: "Matrices - Singular",
  level: "Year 12",
  question: "Find the values of \\(a\\) which make the matrix \\(\\begin{pmatrix} a + 4 & 3 \\\\ 2 & a - 1 \\end{pmatrix}\\) singular.",
  solution: "Determinant: \\((a + 4)(a - 1) - 6 = 0\\).<br>\\(a^2 + 3a - 10 = 0\\).<br>Answer: \\(a = 2\\) or \\(a = -5\\)."
},



{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4 - 2\\cos\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{6}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{6}\\), \\(r = 4 - \\sqrt{3}\\).<br>\\(x = 2\\sqrt{3} - \\frac{3}{2}\\), \\(y = 2 - \\frac{\\sqrt{3}}{2}\\).<br>Coordinate: \\(\\left(2\\sqrt{3} - \\frac{3}{2},\\, 2 - \\frac{\\sqrt{3}}{2}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 6\\sin\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{3}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{3}\\), \\(r = 3\\sqrt{3}\\).<br>\\(x = \\frac{3\\sqrt{3}}{2}\\), \\(y = \\frac{9}{2}\\).<br>Coordinate: \\(\\left(\\frac{3\\sqrt{3}}{2},\\, \\frac{9}{2}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2 + 2\\sin\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{2}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{2}\\), \\(r = 4\\).<br>\\(x = 0\\), \\(y = 4\\).<br>Coordinate: \\((0, 4)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 5\\cos\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{4}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{4}\\), \\(r = \\frac{5\\sqrt{2}}{2}\\).<br>\\(x = \\frac{5}{2}\\), \\(y = \\frac{5}{2}\\).<br>Coordinate: \\(\\left(\\frac{5}{2},\\, \\frac{5}{2}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3 - \\sin\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{6}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{6}\\), \\(r = \\frac{5}{2}\\).<br>\\(x = \\frac{5\\sqrt{3}}{4}\\), \\(y = \\frac{5}{4}\\).<br>Coordinate: \\(\\left(\\frac{5\\sqrt{3}}{4},\\, \\frac{5}{4}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2\\cos\\theta + 2\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{3}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{3}\\), \\(r = 3\\).<br>\\(x = \\frac{3}{2}\\), \\(y = \\frac{3\\sqrt{3}}{2}\\).<br>Coordinate: \\(\\left(\\frac{3}{2},\\, \\frac{3\\sqrt{3}}{2}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4\\sin\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{4}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{4}\\), \\(r = 2\\sqrt{2}\\).<br>\\(x = 2\\), \\(y = 2\\).<br>Coordinate: \\((2, 2)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 1 + \\cos\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{3}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{3}\\), \\(r = \\frac{3}{2}\\).<br>\\(x = \\frac{3}{4}\\), \\(y = \\frac{3\\sqrt{3}}{4}\\).<br>Coordinate: \\(\\left(\\frac{3}{4},\\, \\frac{3\\sqrt{3}}{4}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2 - \\cos\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{6}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{6}\\), \\(r = 2 - \\frac{\\sqrt{3}}{2}\\).<br>\\(x = \\sqrt{3} - \\frac{3}{4}\\), \\(y = 1 - \\frac{\\sqrt{3}}{4}\\).<br>Coordinate: \\(\\left(\\sqrt{3} - \\frac{3}{4},\\, 1 - \\frac{\\sqrt{3}}{4}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3\\sin\\theta + 1\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{2}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{2}\\), \\(r = 4\\).<br>\\(x = 0\\), \\(y = 4\\).<br>Coordinate: \\((0, 4)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2\\cos\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{3}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{3}\\), \\(r = 1\\).<br>\\(x = \\frac{1}{2}\\), \\(y = \\frac{\\sqrt{3}}{2}\\).<br>Coordinate: \\(\\left(\\frac{1}{2},\\, \\frac{\\sqrt{3}}{2}\\right)\\)."
},
{
  topic: "Polar Coordinates - Cartesian Point",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4 - 2\\sin\\theta\\). Find the exact Cartesian coordinates of the point where \\(\\theta = \\frac{\\pi}{2}\\).",
  solution: "When \\(\\theta = \\frac{\\pi}{2}\\), \\(r = 2\\).<br>\\(x = 0\\), \\(y = 2\\).<br>Coordinate: \\((0, 2)\\)."
},




// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}2\\\\-5\\\\0\\end{pmatrix} + \\lambda \\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix} + \\mu \\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(4, -3, 2)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-2\\\\-0.5\\\\-2\\end{pmatrix} + \\lambda \\begin{pmatrix}-2\\\\1\\\\-1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-2\\\\0.5\\\\-2\\end{pmatrix} + \\mu \\begin{pmatrix}-2\\\\1\\\\-1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(-6, 1.5, -4)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}5.5\\\\-3\\\\1\\end{pmatrix} + \\lambda \\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}5.5\\\\-3\\\\1\\end{pmatrix} + \\mu \\begin{pmatrix}1\\\\0.5\\\\2\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(7.5, -2, 5)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-1\\\\-2.5\\\\4\\end{pmatrix} + \\lambda \\begin{pmatrix}-1\\\\-1\\\\1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-5\\\\-6.5\\\\8\\end{pmatrix} + \\mu \\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(-3, -4.5, 6)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}2\\\\6\\\\-9\\end{pmatrix} + \\lambda \\begin{pmatrix}-1\\\\-2\\\\1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}2\\\\6\\\\-9\\end{pmatrix} + \\mu \\begin{pmatrix}-1\\\\-2\\\\1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(0, 2, -7)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}1.5\\\\1\\\\-4.5\\end{pmatrix} + \\lambda \\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}1.5\\\\1\\\\-4.5\\end{pmatrix} + \\mu \\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(5.5, 4, -1.5)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-6\\\\1\\\\1.5\\end{pmatrix} + \\lambda \\begin{pmatrix}-1\\\\1\\\\-2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-6\\\\1\\\\1.5\\end{pmatrix} + \\mu \\begin{pmatrix}-1\\\\1\\\\-2\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(-8, 3, -2.5)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-1.5\\\\-3\\\\8\\end{pmatrix} + \\lambda \\begin{pmatrix}2\\\\-1\\\\-2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-1.5\\\\-3\\\\8\\end{pmatrix} + \\mu \\begin{pmatrix}2\\\\-1\\\\-2\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(2.5, -6, 4)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-5\\\\1.5\\\\-2\\end{pmatrix} + \\lambda \\begin{pmatrix}2\\\\2\\\\1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-5\\\\1.5\\\\-2\\end{pmatrix} + \\mu \\begin{pmatrix}2\\\\2\\\\1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(-1, 7.5, 0)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}2\\\\-2\\\\-6\\end{pmatrix} + \\lambda \\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}2\\\\-2\\\\-6\\end{pmatrix} + \\mu \\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(6, -5, -3)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}-2.5\\\\1\\\\2\\end{pmatrix} + \\lambda \\begin{pmatrix}-1\\\\-1\\\\2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}-2.5\\\\1\\\\2\\end{pmatrix} + \\mu \\begin{pmatrix}-1\\\\-1\\\\2\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(-4.5, -1, 8)"
// },
// {
//   topic: "Vectors - Coords of Intersection",
//   level: "Year 12",
//   question: "Line L has the vector equation<br>$$\\mathbf{r}_1 = \\begin{pmatrix}5\\\\-4\\\\-5\\end{pmatrix} + \\lambda \\begin{pmatrix}2\\\\1\\\\2\\end{pmatrix}$$<br>and Line 1 has the vector equation<br>$$\\mathbf{r}_2 = \\begin{pmatrix}5\\\\-4\\\\-5\\end{pmatrix} + \\mu \\begin{pmatrix}2\\\\1\\\\2\\end{pmatrix}$$<br>Find the coordinates of the point of intersection of the two lines, and hence find a.",
//   solution: "(9, -2.5, 1)"
// },

{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(4w - 3 = 3w^* + 28i\\)<br>Find w.",
  solution: "w = 3 + 4i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(2w - 15 = 5w^* + 14i\\)<br>Find w.",
  solution: "w = -5 + 2i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(3w + 7 = 4w^* - 42i\\)<br>Find w.",
  solution: "w = 7 - 6i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(2w - 4 = 3w^* - 45i\\)<br>Find w.",
  solution: "w = -4 - 9i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(5w - 24 = 2w^* + 7i\\)<br>Find w.",
  solution: "w = 8 + i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(4w + 2 = 3w^* + 49i\\)<br>Find w.",
  solution: "w = -2 + 7i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(5w - 18 = 2w^* - 21i\\)<br>Find w.",
  solution: "w = 6 - 3i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(2w - 27 = 5w^* + 35i\\)<br>Find w.",
  solution: "w = -9 + 5i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(3w + 1 = 4w^* - 56i\\)<br>Find w.",
  solution: "w = 1 - 8i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(5w + 18 = 2w^* + 28i\\)<br>Find w.",
  solution: "w = -6 + 4i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(4w - 9 = 3w^* - 14i\\)<br>Find w.",
  solution: "w = 9 - 2i"
},
{
  topic: "Complex Numbers - Conjugates",
  level: "Year 12",
  question: "The complex number w satisfies:<br>\\(6w + 21 = 3w^* - 9i\\)<br>Find w.",
  solution: "w = -7 - i"
},

  
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3 + 2\\cos\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(5\\), minimum value is \\(1\\). The curve is a limacon symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4 - \\cos\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(5\\), minimum value is \\(3\\). The curve is a limacon symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2\\cos\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(2\\), minimum value is \\(-2\\). The curve is a circle passing through the pole, symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3\\cos(2\\theta)\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(3\\), minimum value is \\(-3\\). The curve is a rose curve with 4 petals, symmetric about the coordinate axes."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4\\sin(2\\theta)\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(4\\), minimum value is \\(-4\\). The curve is a rose curve with 4 petals, symmetric about the lines \\(\\theta = \\tfrac{\\pi}{4}\\) and \\(\\theta = \\tfrac{3\\pi}{4}\\)."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 5\\cos(3\\theta)\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(5\\), minimum value is \\(-5\\). The curve is a rose curve with 3 petals, symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3\\sin(3\\theta)\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(3\\), minimum value is \\(-3\\). The curve is a rose curve with 3 petals, symmetric about the line \\(\\theta = \\tfrac{\\pi}{6}\\)."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 1 + 2\\cos\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(3\\), minimum value is \\(-1\\). The curve is a limacon with an inner loop, symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 6 - 2\\sin\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(8\\), minimum value is \\(4\\). The curve is a limacon symmetric about the line \\(\\theta = \\tfrac{\\pi}{2}\\)."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 2 + \\cos\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(3\\), minimum value is \\(1\\). The curve is a limacon symmetric about the initial line."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 4 + 3\\sin\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(7\\), minimum value is \\(1\\). The curve is a limacon symmetric about the line \\(\\theta = \\tfrac{\\pi}{2}\\)."
},
{
  topic: "Polar Coordinates",
  level: "Year 12",
  question: "A curve has polar equation \\(r = 3 + \\sin\\theta\\), where \\(0 \\le \\theta \\le 2\\pi\\). State the maximum and minimum values of \\(r\\), and sketch the curve.",
  solution: "Maximum value of \\(r\\) is \\(4\\), minimum value is \\(2\\). The curve is a limacon symmetric about the line \\(\\theta = \\tfrac{\\pi}{2}\\)."
},

{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A rotation of \\(180^\\circ\\) about the x-axis."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}-1&0&0\\\\0&1&0\\\\0&0&-1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A rotation of \\(180^\\circ\\) about the y-axis."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}-1&0&0\\\\0&-1&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A rotation of \\(180^\\circ\\) about the z-axis."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A reflection in the xz-plane."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}-1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A reflection in the yz-plane."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&-1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A reflection in the xy-plane."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "An enlargement by scale factor 2 in the x-direction."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&3&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "An enlargement by scale factor 3 in the y-direction."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&\\tfrac{1}{2}\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "An enlargement by scale factor \\(\\tfrac{1}{2}\\) in the z-direction."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}-1&0&0\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "An enlargement with scale factor \\(-1\\), equivalent to a reflection in the origin."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}1&0&0\\\\0&0&-1\\\\0&1&0\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A rotation of \\(90^\\circ\\) about the x-axis in an anticlockwise direction."
},
{
  topic: "Matrices - 3D Transformations",
  level: "Year 12",
  question: "The matrix \\(M = \\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}\\) represents a transformation in 3D space. Describe this transformation.",
  solution: "A rotation of \\(90^\\circ\\) about the z-axis in an anticlockwise direction."
},

{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = x\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 3\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(9\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 2x\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 2\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(\\frac{32\\pi}{3}\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = \\sqrt{x}\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 4\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(8\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 3\\), the x-axis, and the lines \\(x = 1\\) and \\(x = 4\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(27\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = x + 1\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 2\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(\\frac{26\\pi}{3}\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 4 - x\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 4\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(\\frac{64\\pi}{3}\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = x^2\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 2\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(\\frac{32\\pi}{5}\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 2\\sqrt{x}\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 1\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(2\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 5\\), the x-axis, and the lines \\(x = 2\\) and \\(x = 6\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(100\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 3x\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 1\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(3\\pi\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 1 + \\sqrt{x}\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 1\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(\\frac{17\\pi}{6}\\)"
},
{
  topic: "Integration - Volumes of Revolution",
  level: "Year 12",
  question: "The region bounded by the curve \\(y = 2\\), the x-axis, and the lines \\(x = 0\\) and \\(x = 5\\) is rotated through \\(2\\pi\\) radians about the x-axis. Find the volume generated.",
  solution: "\\(20\\pi\\)"
},

{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z - 2i| = 2\\).",
  solution: "A circle with centre \\((0,2)\\) and radius \\(2\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z - 3| = 1\\).",
  solution: "A circle with centre \\((3,0)\\) and radius \\(1\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z + 1 + 2i| = 3\\).",
  solution: "A circle with centre \\((-1,-2)\\) and radius \\(3\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z - i| = 4\\).",
  solution: "A circle with centre \\((0,1)\\) and radius \\(4\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z + 5| = 2\\).",
  solution: "A circle with centre \\((-5,0)\\) and radius \\(2\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(|z - (4 - i)| = 3\\).",
  solution: "A circle with centre \\((4,-1)\\) and radius \\(3\\)."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(\\arg(z + 2i) = \\frac{\\pi}{2}\\).",
  solution: "A vertical half-line starting at \\((0,-2)\\) extending upwards."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(\\arg(z - 3 - i) = \\frac{5\\pi}{6}\\).",
  solution: "A half-line starting at \\((3,1)\\) making an angle of \\(\\frac{5\\pi}{6}\\) with the positive real axis."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(\\arg(z + 4) = \\pi\\).",
  solution: "A horizontal half-line starting at \\((-4,0)\\) extending to the left."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(\\arg(z - 2 + 3i) = -\\frac{\\pi}{4}\\).",
  solution: "A half-line starting at \\((2,-3)\\) making an angle of \\(-\\frac{\\pi}{4}\\) with the positive real axis."
},
{
  topic: "Complex Number - Argand Diagrams",
  level: "Year 12",
  question: "Sketch on an Argand diagram the locus of points satisfying the equation \\(\\arg(z - 5) = \\frac{\\pi}{2}\\).",
  solution: "A vertical half-line starting at \\((5,0)\\) extending upwards."
},

  
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^2\\) for \\(1 \\le x \\le 3\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{13}{3}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x\\) for \\(2 \\le x \\le 6\\). Find the mean value of the function over this interval.",
  solution: "\\(4\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^3\\) for \\(0 \\le x \\le 2\\). Find the mean value of the function over this interval.",
  solution: "\\(2\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^{1/2}\\) for \\(0 \\le x \\le 4\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{4}{3}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = \\frac{1}{x}\\) for \\(1 \\le x \\le e\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{1}{e - 1}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^{-2}\\) for \\(1 \\le x \\le 2\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{1}{2}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = 3x\\) for \\(0 \\le x \\le 5\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{15}{2}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = 2x^2\\) for \\(1 \\le x \\le 4\\). Find the mean value of the function over this interval.",
  solution: "\\(14\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^{3/2}\\) for \\(0 \\le x \\le 4\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{16}{5}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = 5\\) for \\(2 \\le x \\le 9\\). Find the mean value of the function over this interval.",
  solution: "\\(5\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = x^{-1/2}\\) for \\(1 \\le x \\le 9\\). Find the mean value of the function over this interval.",
  solution: "\\(\\frac{1}{2}\\)"
},
{
  topic: "Integration - Mean Value",
  level: "Year 12",
  question: "A function is defined by \\(f(x) = 4x^3\\) for \\(0 \\le x \\le 1\\). Find the mean value of the function over this interval.",
  solution: "\\(1\\)"
},

  
{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}1\\\\ -3\\\\ a\\end{pmatrix}\\) and \\(\\begin{pmatrix}7\\\\ 4\\\\ 1\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = 5\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}2\\\\ a\\\\ -1\\end{pmatrix}\\) and \\(\\begin{pmatrix}3\\\\ 4\\\\ 5\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -\\tfrac{1}{4}\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}a\\\\ 1\\\\ 2\\end{pmatrix}\\) and \\(\\begin{pmatrix}4\\\\ -3\\\\ 2\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -\\tfrac{1}{4}\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}3\\\\ -2\\\\ a\\end{pmatrix}\\) and \\(\\begin{pmatrix}5\\\\ 1\\\\ 4\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -\\tfrac{13}{4}\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}a\\\\ 2\\\\ -3\\end{pmatrix}\\) and \\(\\begin{pmatrix}1\\\\ -4\\\\ 2\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = 14\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}4\\\\ a\\\\ 1\\end{pmatrix}\\) and \\(\\begin{pmatrix}-2\\\\ 3\\\\ 6\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -\\tfrac{2}{3}\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}-1\\\\ 5\\\\ a\\end{pmatrix}\\) and \\(\\begin{pmatrix}2\\\\ 1\\\\ 3\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -1\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}a\\\\ -4\\\\ 2\\end{pmatrix}\\) and \\(\\begin{pmatrix}3\\\\ 1\\\\ 5\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -2\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}6\\\\ 1\\\\ a\\end{pmatrix}\\) and \\(\\begin{pmatrix}-1\\\\ 2\\\\ 4\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = 1\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}2\\\\ 3\\\\ a\\end{pmatrix}\\) and \\(\\begin{pmatrix}5\\\\ -1\\\\ 4\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = -\\tfrac{7}{4}\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}a\\\\ -1\\\\ 4\\end{pmatrix}\\) and \\(\\begin{pmatrix}2\\\\ 6\\\\ -3\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = 9\\)"
},

{
  topic: "Vectors - Perpendicular",
  level: "Year 12",
  question: "Find the value of \\(a\\) such that the vectors<br>\\(\\begin{pmatrix}1\\\\ a\\\\ 5\\end{pmatrix}\\) and \\(\\begin{pmatrix}4\\\\ -2\\\\ 3\\end{pmatrix}\\) are perpendicular.",
  solution: "\\(a = \\tfrac{19}{2}\\)"
},

  
  {
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}1 & 4\\\\ 3 & 2\\end{pmatrix}\\)<br>is applied to \\(A\\) to give the new coordinate\\(B = \\begin{pmatrix}13\\\\ 9\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}1\\\\ 3\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}2 & -1\\\\ 5 & 3\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}7\\\\ 23\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}4\\\\ 1\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}-1 & 3\\\\ 2 & 4\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}-5\\\\ 0\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}2\\\\ -1\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}4 & 0\\\\ -2 & 1\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}-12\\\\ 11\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}-3\\\\ 5\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}1 & -2\\\\ 3 & 1\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}8\\\\ 17\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}6\\\\ -1\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}0 & 5\\\\ 1 & -3\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}20\\\\ -10\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}2\\\\ 4\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}3 & 1\\\\ -4 & 2\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}1\\\\ -8\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}1\\\\ -2\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}-2 & 3\\\\ 5 & -1\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}-2\\\\ 18\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}4\\\\ 2\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}1 & 1\\\\ 1 & -1\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}10\\\\ 4\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}7\\\\ 3\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}6 & -2\\\\ 1 & 3\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}2\\\\ 17\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}2\\\\ 5\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}-3 & 4\\\\ 2 & 1\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}-15\\\\ -1\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}1\\\\ -3\\end{pmatrix}\\)"
},

{
  topic: "Matrices - Finding Original Coordinate",
  level: "Year 12",
  question: "The transformation matrix<br>\\(M = \\begin{pmatrix}2 & 5\\\\ -1 & 4\\end{pmatrix}\\)<br>is applied to \\(A\\) to give\\(B = \\begin{pmatrix}11\\\\ 14\\end{pmatrix}\\).<br>Find \\(A\\).",
  solution: "\\(A = \\begin{pmatrix}-2\\\\ 3\\end{pmatrix}\\)"
},

  
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}3 i & -2\\\\4 & - i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}4 & 5\\\\- 2 i & -1\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}16 i & 2 + 15 i\\\\14 & 20 + i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}1 & i\\\\2 & 3 i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}i & 2\\\\3 & - i\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}4 i & 3\\\\11 i & 7\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}2 i & 1\\\\- i & 3\\end{pmatrix}\\), \\(B=\\begin{pmatrix}1 & - i\\\\2 & i\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}2 + 2 i & 2 + i\\\\6 - i & -1 + 3 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}1 - i & 2\\\\3 & i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}i & 1\\\\-1 & 2\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}-1 + i & 5 - i\\\\2 i & 3 + 2 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}2 & i\\\\- i & 1\\end{pmatrix}\\), \\(B=\\begin{pmatrix}3 & - 2 i\\\\i & 4\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}5 & 0\\\\- 2 i & 2\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}1 & 2 i\\\\- i & 3\\end{pmatrix}\\), \\(B=\\begin{pmatrix}2 & i\\\\-1 & 1 - i\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}2 - 2 i & 2 + 3 i\\\\-3 - 2 i & 4 - 3 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}i & 1\\\\2 & - i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}-1 & 2 i\\\\i & 3\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}0 & 1\\\\-1 & i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}3 & - i\\\\i & 2\\end{pmatrix}\\), \\(B=\\begin{pmatrix}1 & 2\\\\i & -1\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}4 & 6 + i\\\\3 i & -2 + 2 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}1 & i\\\\3 i & 2\\end{pmatrix}\\), \\(B=\\begin{pmatrix}2 & - i\\\\i & 1\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}1 & 0\\\\8 i & 5\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}2 & - i\\\\1 & i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}1 & 2 i\\\\- i & 3\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}1 & i\\\\2 & 5 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}i & 2\\\\-1 & 3 i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}3 & - i\\\\i & 1\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}5 i & 3\\\\-6 & 4 i\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Multiplication",
  level: "Year 12",
  question: "Let \\(A=\\begin{pmatrix}1 & - i\\\\2 & i\\end{pmatrix}\\), \\(B=\\begin{pmatrix}i & 3\\\\-2 & 1\\end{pmatrix}\\).<br><br>Find \\((AB)\\).",
  solution: "\\(\\begin{pmatrix}3 i & 3 - i\\\\0 & 6 + i\\end{pmatrix}\\)"
},


{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}5 & 2 \\\\ -3 & 4\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 26; \\(A^{-1} = \\frac{1}{26} \\begin{pmatrix}4 & -2 \\\\ 3 & 5\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}2 & 3 \\\\ 1 & 4\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 5; \\(A^{-1} = \\frac{1}{5} \\begin{pmatrix}4 & -3 \\\\ -1 & 2\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}1 & 2 \\\\ 3 & 5\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = -1; \\(A^{-1} = \\begin{pmatrix}-5 & 2 \\\\ 3 & -1\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}4 & 1 \\\\ 2 & 3\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 10; \\(A^{-1} = \\frac{1}{10} \\begin{pmatrix}3 & -1 \\\\ -2 & 4\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}3 & -2 \\\\ 5 & 1\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 13; \\(A^{-1} = \\frac{1}{13} \\begin{pmatrix}1 & 2 \\\\ -5 & 3\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}6 & 1 \\\\ -2 & 3\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 20; \\(A^{-1} = \\frac{1}{20} \\begin{pmatrix}3 & -1 \\\\ 2 & 6\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}2 & 5 \\\\ 1 & 3\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 1; \\(A^{-1} = \\begin{pmatrix}3 & -5 \\\\ -1 & 2\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}7 & 2 \\\\ 3 & 4\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 22; \\(A^{-1} = \\frac{1}{22} \\begin{pmatrix}4 & -2 \\\\ -3 & 7\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}1 & -1 \\\\ 2 & 3\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 5; \\(A^{-1} = \\frac{1}{5} \\begin{pmatrix}3 & 1 \\\\ -2 & 1\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}4 & 3 \\\\ 2 & 5\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 14; \\(A^{-1} = \\frac{1}{14} \\begin{pmatrix}5 & -3 \\\\ -2 & 4\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}3 & 1 \\\\ -4 & 2\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 10; \\(A^{-1} = \\frac{1}{10} \\begin{pmatrix}2 & -1 \\\\ 4 & 3\\end{pmatrix}\\)"
},
{
  topic: "Matrices - Finding the Inverse",
  level: "Year 12",
  question: "Matrix A = \\(\\begin{pmatrix}5 & -1 \\\\ 2 & 3\\end{pmatrix}\\). Find det(A) and hence find \\(A^{-1}\\).",
  solution: "det(A) = 17; \\(A^{-1} = \\frac{1}{17} \\begin{pmatrix}3 & 1 \\\\ -2 & 5\\end{pmatrix}\\)"
},

  
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((2 + i)^3\\).",
  solution: "2 + 11i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((1 + 2i)^3\\).",
  solution: "-11 + 2i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((3 - i)^3\\).",
  solution: "18 - 26i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((1 - i)^3\\).",
  solution: "-2 - 2i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((2 - 3i)^3\\).",
  solution: "-46 - 9i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((1 + 3i)^3\\).",
  solution: "-26 + 10i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((2 + 2i)^3\\).",
  solution: "-16 + 24i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((3 + i)^3\\).",
  solution: "18 + 26i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((1 - 2i)^3\\).",
  solution: "-11 - 2i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((2 - i)^3\\).",
  solution: "2 - 11i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((1 + i)^3\\).",
  solution: "-2 + 2i"
},
{
  topic: "Complex Numbers - Expand and Simplify",
  level: "Year 12",
  question: "Expand and simplify \\((3 - 2i)^3\\).",
  solution: "9 - 46i"
},

{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{2x - 10}{3x - 5}\\). <br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 5/3; Horizontal asymptote: y = 2/3"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{x + 1}{x - 2}\\). <br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 2; Horizontal asymptote: y = 1"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{3x + 4}{x + 2}\\). <br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = -2; Horizontal asymptote: y = 3"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{5x - 3}{2x + 1}\\).<br><br> Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = -1/2; Horizontal asymptote: y = 5/2"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{4x + 5}{x + 3}\\).<br><br> Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = -3; Horizontal asymptote: y = 4"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{3x - 1}{x - 4}\\).<br><br> Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 4; Horizontal asymptote: y = 3"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{2x + 7}{x - 1}\\).<br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 1; Horizontal asymptote: y = 2"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{5x + 2}{x + 4}\\).<br><br> Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = -4; Horizontal asymptote: y = 5"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{x - 5}{x - 3}\\). <br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 3; Horizontal asymptote: y = 1"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{6x + 1}{2x - 3}\\).<br><br> Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 3/2; Horizontal asymptote: y = 3"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{7x - 2}{x + 5}\\). <br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = -5; Horizontal asymptote: y = 7"
},
{
  topic: "Rational Functions",
  level: "Year 12",
  question: "Curve C has the equation \\(y = \\frac{4x - 7}{x - 2}\\).<br><br>Sketch C, and write down the equations of its asymptotes.",
  solution: "Vertical asymptote: x = 2; Horizontal asymptote: y = 4"
},


{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\cosh x = 2\\), giving your answers in exact form.",
  solution: "\\(x = \\pm \\ln(2 + \\sqrt{3})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\sinh x = 3\\), giving your answer in exact form.",
  solution: "\\(x = \\ln(3 + \\sqrt{10})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\tanh x = 0.5\\), giving your answer in exact form.",
  solution: "\\(x = \\ln(\\sqrt{3})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\cosh x = 5\\), giving your answers in exact form.",
  solution: "\\(x = \\pm \\ln(5 + 2\\sqrt{6})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\sinh x = -2\\), giving your answer in exact form.",
  solution: "\\(x = \\ln(-2 + \\sqrt{5})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\tanh x = 0.8\\), giving your answer in exact form.",
  solution: "\\(x = \\ln(3)\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(2\\cosh x = 6\\), giving your answers in exact form.",
  solution: "\\(x = \\pm \\ln(3 + 2\\sqrt{2})\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\sinh x = 0.5\\), giving your answer in exact form.",
  solution: "\\(x = \\ln\\!\\left(0.5 + \\frac{\\sqrt{5}}{2}\\right)\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\cosh x = 1.5\\), giving your answers in exact form.",
  solution: "\\(x = \\pm \\ln\\!\\left(\\frac{3}{2} + \\frac{\\sqrt{5}}{2}\\right)\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\tanh x = -0.6\\), giving your answer in exact form.",
  solution: "\\(x = \\ln\\frac{1}{2}\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(3\\sinh x = 4\\), giving your answer in exact form.",
  solution: "\\(x = \\ln(3)\\)"
},
{
  topic: "Hyperbolics - 1",
  level: "Year 12",
  question: "Solve the equation \\(\\cosh x = 10\\), giving your answers in exact form.",
  solution: "\\(x = \\pm \\ln(10 + 3\\sqrt{11})\\)"
},


{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} - \\mathbf{j} - 5\\mathbf{k}\\).<br><br>Calculate the acute angle between \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\), giving your answer to the nearest degree.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 12\\).<br><br>\\(|\\mathbf{a}| = \\sqrt{29}\\), \\(|\\mathbf{b}| = \\sqrt{30}\\).<br><br>\\(\\cos\\theta = \\dfrac{12}{\\sqrt{29}\\sqrt{30}} \\approx 0.407 \\Rightarrow \\theta \\approx 66^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}\\).<br><br>Find the acute angle between the vectors, to the nearest degree.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 4\\).<br><br>\\(|\\mathbf{a}| = 3\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{4}{9} \\Rightarrow \\theta \\approx 64^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Given \\(\\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}\\) and \\(\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}\\), calculate the acute angle between them.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 2\\).<br><br>\\(|\\mathbf{a}| = \\sqrt{21}\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{2}{3\\sqrt{21}} \\approx 0.145 \\Rightarrow \\theta \\approx 82^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}\\) and \\(\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}\\).<br><br>Find the acute angle between the vectors.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 8\\).<br><br>\\(|\\mathbf{a}| = 7\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{8}{21} \\approx 0.381 \\Rightarrow \\theta \\approx 68^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Given \\(\\mathbf{a} = 5\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}\\), calculate the acute angle between them.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 10\\).<br><br>\\(|\\mathbf{a}| = \\sqrt{45}\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{10}{3\\sqrt{45}} \\approx 0.497 \\Rightarrow \\theta \\approx 60^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = 3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}\\).<br><br>Find the acute angle between the vectors.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 0\\).<br><br>The vectors are perpendicular \\(\\Rightarrow \\theta = 90^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Given \\(\\mathbf{a} = 6\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}\\) and \\(\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}\\), calculate the acute angle between them.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 4\\).<br><br>\\(|\\mathbf{a}| = 7\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{4}{21} \\approx 0.191 \\Rightarrow \\theta \\approx 79^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = 2\\mathbf{i} - 5\\mathbf{j} + 4\\mathbf{k}\\) and \\(\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}\\).<br><br>Find the acute angle between the vectors.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = -22\\).<br><br>Use the acute angle, so take the absolute value.<br><br>\\(|\\mathbf{a}| = \\sqrt{45}\\), \\(|\\mathbf{b}| = \\sqrt{29}\\).<br><br>\\(\\cos\\theta = \\dfrac{22}{\\sqrt{45}\\sqrt{29}} \\approx 0.609 \\Rightarrow \\theta \\approx 52^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Given \\(\\mathbf{a} = 4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}\\), calculate the acute angle between them.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 12\\).<br><br>\\(|\\mathbf{a}| = \\sqrt{21}\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{12}{3\\sqrt{21}} \\approx 0.873 \\Rightarrow \\theta \\approx 29^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = \\mathbf{i} + 4\\mathbf{j} + 8\\mathbf{k}\\) and \\(\\mathbf{b} = 2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}\\).<br><br>Find the acute angle between the vectors.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 50\\).<br><br>\\(|\\mathbf{a}| = 9\\), \\(|\\mathbf{b}| = 6\\).<br><br>\\(\\cos\\theta = \\dfrac{50}{54} \\approx 0.926 \\Rightarrow \\theta \\approx 22^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Given \\(\\mathbf{a} = 7\\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}\\) and \\(\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}\\), calculate the acute angle between them.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 9\\).<br><br>\\(|\\mathbf{a}| = \\sqrt{62}\\), \\(|\\mathbf{b}| = 3\\).<br><br>\\(\\cos\\theta = \\dfrac{9}{3\\sqrt{62}} \\approx 0.381 \\Rightarrow \\theta \\approx 68^\\circ\\)."
},
{
  topic: "Vectors - Finding Angles",
  level: "Year 12",
  question: "Let \\(\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}\\) and \\(\\mathbf{b} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}\\).<br><br>Find the acute angle between the vectors.",
  solution: "\\(\\mathbf{a}\\cdot\\mathbf{b} = 8\\).<br><br>\\(|\\mathbf{a}| = 2\\sqrt{3}\\), \\(|\\mathbf{b}| = \\sqrt{14}\\).<br><br>\\(\\cos\\theta = \\dfrac{8}{2\\sqrt{42}} \\approx 0.617 \\Rightarrow \\theta \\approx 52^\\circ\\)."
},


     {
      topic: "Placeholders - Year 13 Further",
      level: "Year 13",
      question: "I'm currently building the Year 13 Further set of questions - come back soon",
      solution: "Thanks!"
    }
   
  ];
  
