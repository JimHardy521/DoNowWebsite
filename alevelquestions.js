const alevelQuestions = [

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "1) Find the unit vector parallel to \\( \\begin{pmatrix} 5 \\\\ -12 \\end{pmatrix} \\).",
  solution: "Magnitude = \\( \\sqrt{5^2+(-12)^2}=13 \\)<br><br>Unit vector:<br>\\( \\begin{pmatrix} \\frac{5}{13} \\\\ -\\frac{12}{13} \\end{pmatrix} \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "2) Find the magnitude and bearing of the vector \\( \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix} \\).",
  solution: "Magnitude:<br>\\( \\sqrt{3^2+(-4)^2}=5 \\)<br><br>Angle south of east:<br>\\( \\tan^{-1}(\\tfrac{4}{3})=53.1^\\circ \\)<br><br>Bearing:<br>\\( 90+53.1=143.1^\\circ \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "3) A man walks on a bearing of \\(300^\\circ\\) for 200 m. Write his displacement as a column vector.",
  solution: "East component:<br>\\( 200\\sin300^\\circ=-100\\sqrt3 \\)<br><br>North component:<br>\\( 200\\cos300^\\circ=100 \\)<br><br>Vector:<br>\\( \\begin{pmatrix}-100\\sqrt3 \\\\ 100\\end{pmatrix} \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "4) Find the value of \\(k\\) such that \\( \\begin{pmatrix}12\\\\-20\\end{pmatrix} \\) and \\( \\begin{pmatrix}k\\\\15\\end{pmatrix} \\) are parallel.",
  solution: "\\( \\frac{12}{k}=\\frac{-20}{15} \\Rightarrow k=-9 \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "5) A has position vector \\( 3\\mathbf{i}-\\mathbf{j} \\) and B has position vector \\( 2\\mathbf{j} \\). Find the exact distance AB.",
  solution: "A=(3,−1), B=(0,2)<br><br>AB=(−3,3)<br><br>Distance:<br>\\( \\sqrt{18}=3\\sqrt2 \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "9) Find the unit vector in the direction of \\( -3\\mathbf{i}+4\\mathbf{j} \\).",
  solution: "Magnitude = 5<br><br>Unit vector:<br>\\( -\\frac35\\mathbf{i}+\\frac45\\mathbf{j} \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "10) Points A and B have position vectors \\( \\begin{pmatrix}1\\\\2\\end{pmatrix} \\) and \\( \\begin{pmatrix}5\\\\-1\\end{pmatrix} \\). Find vector AB.",
  solution: "\\( \\mathbf{AB}=\\mathbf{b}-\\mathbf{a}=\\begin{pmatrix}4\\\\-3\\end{pmatrix} \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "12) A particle moves 3 m east and 4 m north. Write the displacement vector and find its magnitude.",
  solution: "Vector:<br>\\( \\begin{pmatrix}3\\\\4\\end{pmatrix} \\)<br><br>Magnitude:<br>\\( 5 \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "14) Show that \\( \\begin{pmatrix}-10\\\\15\\end{pmatrix} \\) and \\( \\begin{pmatrix}12\\\\-18\\end{pmatrix} \\) are parallel.",
  solution: "Both vectors have a common factor \\( \\begin{pmatrix}-2\\\\3\\end{pmatrix}\\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "15) Find the bearing of the vector \\( \\begin{pmatrix}-5\\\\12\\end{pmatrix} \\).",
  solution: "Angle west of north:<br>\\( \\tan^{-1}(\\tfrac{5}{12})=22.6^\\circ \\)<br><br>Bearing:<br>\\( 360-22.6=337.4^\\circ \\)"
},

{
  topic: "Vectors",
  level: "Year 12 - Mechanics",
  question: "16) A displacement is \\( 7\\mathbf{i}-24\\mathbf{j} \\). Find its magnitude and unit vector.",
  solution: "Magnitude:<br>\\( 25 \\)<br><br>Unit vector:<br>\\( \\frac{7}{25}\\mathbf{i}-\\frac{24}{25}\\mathbf{j} \\)"
},


  

{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 + x^2 = 6\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 1.4 and 1.5.",
  solution: "Rearrange: \\(f(x)=x^3+x^2-6\\)<br>\\(f(1.4)=-0.416\\), \\(f(1.5)=0.375\\)<br>Change of sign ⇒ \\(1.4<\\alpha<1.5\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(2x^3 - x = 4\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 1.2 and 1.3.",
  solution: "Rearrange: \\(f(x)=2x^3-x-4\\)<br>\\(f(1.2)=-1.744\\), \\(f(1.3)=0.094\\)<br>Change of sign ⇒ \\(1.2<\\alpha<1.3\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 + 3x = 10\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 1.6 and 1.7.",
  solution: "Rearrange: \\(f(x)=x^3+3x-10\\)<br>\\(f(1.6)=-0.304\\), \\(f(1.7)=0.813\\)<br>Change of sign ⇒ \\(1.6<\\alpha<1.7\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 + x = 2\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 0.8 and 0.9.",
  solution: "Rearrange: \\(f(x)=x^3+x-2\\)<br>\\(f(0.8)=-0.688\\), \\(f(0.9)=0.629\\)<br>Change of sign ⇒ \\(0.8<\\alpha<0.9\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 - 2x^2 = 1\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 2 and 2.1.",
  solution: "Rearrange: \\(f(x)=x^3-2x^2-1\\)<br>\\(f(2)=-1\\), \\(f(2.1)=0.061\\)<br>Change of sign ⇒ \\(2<\\alpha<2.1\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 + 4 = 2x^2\\) has a solution \\(x = \\alpha\\).<br>Show that \\(\\alpha\\) lies between 1.8 and 1.9.",
  solution: "Rearrange: \\(f(x)=x^3-2x^2+4\\)<br>\\(f(1.8)=0.232\\), \\(f(1.9)=-0.091\\)<br>Change of sign ⇒ \\(1.8<\\alpha<1.9\\)"
},

{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(e^x = 3x\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 1.5 and 1.6.",
  solution: "Rearrange: \\(f(x) = e^x - 3x\\)<br>\\(f(1.5) \\approx -0.018, f(1.6) \\approx 0.153\\)<br>Change of sign ⇒ \\(1.5 < \\alpha < 1.6\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x \\sin x = 0.5\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 0.7 and 0.8.",
  solution: "Rearrange: \\(f(x) = x \\sin x - 0.5\\)<br>\\(f(0.7) \\approx -0.049, f(0.8) \\approx 0.074\\)<br>Change of sign ⇒ \\(0.7 < \\alpha < 0.8\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(\\cos x = x\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 0.7 and 0.8.",
  solution: "Rearrange: \\(f(x) = \\cos x - x\\)<br>\\(f(0.7) \\approx 0.064, f(0.8) \\approx -0.104\\)<br>Change of sign ⇒ \\(0.7 < \\alpha < 0.8\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x e^{-x} = 0.1\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 2.7 and 2.8.",
  solution: "Rearrange: \\(f(x) = x e^{-x} - 0.1\\)<br>\\(f(2.7) \\approx 0.013, f(2.8) \\approx -0.009\\)<br>Change of sign ⇒ \\(2.7 < \\alpha < 2.8\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(\\ln(x) + x = 2\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 1.5 and 1.6.",
  solution: "Rearrange: \\(f(x) = \\ln x + x - 2\\)<br>\\(f(1.5) \\approx -0.095, f(1.6) \\approx 0.072\\)<br>Change of sign ⇒ \\(1.5 < \\alpha < 1.6\\)"
},
{
  topic: "Numerical Methods - Introduction",
  level: "Year 13",
  question: "The equation \\(x^3 - \\sin x = 0\\) has a solution \\(x = \\alpha\\).<br>By considering a suitable change of sign, show that \\(\\alpha\\) lies between 0.9 and 1.0.",
  solution: "Rearrange: \\(f(x) = x^3 - \\sin x\\)<br>\\(f(0.9) \\approx -0.054, f(1.0) \\approx 0.159\\)<br>Change of sign ⇒ \\(0.9 < \\alpha < 1.0\\)"
},



{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 3\\)<br>\\(u_{n+1} = -\\frac{6}{u_n}\\)<br><br>Find \\(\\sum_{n=1}^{101} u_n\\).",
  solution: "Terms: 3, -2, 3, -2, … (period 2)<br>One period sum = 1<br>101 terms = 50 periods + 1 extra term<br>Sum = 50(1) + 3 = 53"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 2\\)<br>\\(u_{n+1} = \\frac{4}{u_n}\\)<br><br>Find \\(\\sum_{n=1}^{100} u_n\\).",
  solution: "Terms: 2, 2, … (constant)<br>Sum = 100 × 2 = 200"
},

{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 4\\)<br>\\(u_{n+1} = -u_n\\)<br><br>Find \\(\\sum_{n=1}^{99} u_n\\).",
  solution: "Terms: 4, -4, … (period 2)<br>One period sum = 0<br>99 terms leaves extra +4<br>Sum = 4"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 5\\)<br>\\(u_{n+1} = 10 - u_n\\)<br><br>Find \\(\\sum_{n=1}^{60} u_n\\).",
  solution: "Terms: 5, 5, … (constant)<br>Sum = 60 × 5 = 300"
},

{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 2\\)<br>\\(u_{n+1} = 3 - u_n\\)<br><br>Find \\(\\sum_{n=1}^{100} u_n\\).",
  solution: "Terms: 2, 1, 2, 1, … (period 2)<br>One period sum = 3<br>50 periods → Sum = 150"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = -1\\)<br>\\(u_{n+1} = -u_n - 2\\)<br><br>Find \\(\\sum_{n=1}^{40} u_n\\).",
  solution: "Terms: -1, -1, … (constant)<br>Sum = 40 × (-1) = -40"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 1\\)<br>\\(u_{n+1} = -u_n + 4\\)<br><br>Find \\(\\sum_{n=1}^{100} u_n\\).",
  solution: "Terms: 1, 3, 1, 3, … (period 2)<br>One period sum = 4<br>50 periods → Sum = 200"
},

{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 2\\)<br>\\(u_{n+1} = -\\frac{4}{u_n}\\)<br><br>Find \\(\\sum_{n=1}^{101} u_n\\).",
  solution: "Terms: 2, -2, … (period 2)<br>One period sum = 0<br>Extra term = 2<br>Sum = 2"
},

{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 4\\)<br>\\(u_{n+1} = \\frac{8}{u_n}\\)<br><br>Find \\(\\sum_{n=1}^{60} u_n\\).",
  solution: "Terms: 4, 2, 4, 2, … (period 2)<br>One period sum = 6<br>30 periods → Sum = 180"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 1\\)<br>\\(u_{n+1} = \\frac{2}{u_n}\\)<br><br>Find \\(\\sum_{n=1}^{99} u_n\\).",
  solution: "Terms: 1, 2, 1, … (period 2)<br>One period sum = 3<br>99 terms = 49 periods + 1 extra term<br>Sum = 49(3) + 1 = 148"
},

{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 2\\)<br>\\(u_{n+1} = 5 - u_n\\)<br><br>Find \\(\\sum_{n=1}^{101} u_n\\).",
  solution: "Terms: 2, 3, 2, 3, … (period 2)<br>One period sum = 5<br>101 terms = 50 periods + extra 2<br>Sum = 50(5) + 2 = 252"
},
{
  topic: "Sequences - Periodic",
  level: "Year 13",
  question: "A sequence is defined by<br>\\(u_1 = 1\\), \\(u_2 = 2\\)<br>\\(u_{n+2} = 3 - u_{n+1} - u_n\\)<br><br>Find \\(\\sum_{n=1}^{80} u_n\\).",
  solution: "Terms: 1, 2, 0, 1, … (period 4)<br>One period sum = 4<br>80 terms = 20 periods<br>Sum = 80"
},

{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < 5\\) or \\(x \\ge 9\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < 5\\} \\cup \\{x\\,|\\,x \\ge 9\\}\\)"
},

{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x \\le 1\\) or \\(x > 4\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x \\le 1\\} \\cup \\{x\\,|\\,x > 4\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x \\ge -5\\) and \\(x < -1\\) using set notation.",
  solution: "\\(\\{x\\,|\\,-5 \\le x < -1\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x \\le -4\\) or \\(-1 \\le x < 3\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x \\le -4\\} \\cup \\{x\\,|\\,-1 \\le x < 3\\}\\)"
},

{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < 0\\) or \\(x \\ge 7\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < 0\\} \\cup \\{x\\,|\\,x \\ge 7\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x > -4\\) and \\(x < 1\\) using set notation.",
  solution: "\\(\\{x\\,|\\,-4 < x < 1\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < -3\\) or \\(x > 6\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < -3\\} \\cup \\{x\\,|\\,x > 6\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x \\le -2\\) and \\(x \\ge -7\\) using set notation.",
  solution: "\\(\\{x\\,|\\,-7 \\le x \\le -2\\}\\)"
},

{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < 2\\) or \\(x > 9\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < 2\\} \\cup \\{x\\,|\\,x > 9\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(-5 \\le x < -1\\) or \\(x \\ge 2\\) using set notation.",
  solution: "\\(\\{x\\,|\\,-5 \\le x < -1\\} \\cup \\{x\\,|\\,x \\ge 2\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < -2\\) or \\(3 \\le x \\le 7\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < -2\\} \\cup \\{x\\,|\\,3 \\le x \\le 7\\}\\)"
},
{
  topic: "Set Notation",
  level: "Year 12",
  question: "Write \\(x < -6\\) or \\(-2 < x < 4\\) using set notation.",
  solution: "\\(\\{x\\,|\\,x < -6\\} \\cup \\{x\\,|\\,-2 < x < 4\\}\\)"
},


{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 3x^2 + 6x + c\\)<br>The curve has a turning point at \\((1, 2)\\)<br>Find the other turning point of the curve.",
  solution: "0 = 3(1)^2 + 6(1) + c → c = -9<br>3x^2 + 6x - 9 = 0 → x = -3<br>Integrate: y = x^3 + 3x^2 - 9x + k, k = 7<br>y(-3) = 34<br>Answer: (-3, 34)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = x^2 - 4x + c\\)<br>The curve has a turning point at \\((0, 1)\\)<br>Find the other turning point of the curve.",
  solution: "0 = c → c = 0<br>x^2 - 4x = 0 → x = 4<br>Integrate: y = x^3/3 - 2x^2 + k, k = 1<br>y(4) = -29/3<br>Answer: (4, -29/3)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 2x^2 + 8x + c\\)<br>The curve has a turning point at \\((1, 0)\\)<br>Find the other turning point of the curve.",
  solution: "0 = 2 + 8 + c → c = -10<br>2x^2 + 8x - 10 = 0 → x = -5<br>Integrate: y = 2x^3/3 + 4x^2 - 10x + k, k = 20/3<br>y(-5) = 220/3<br>Answer: (-5, 220/3)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 3x^2 + 12x + c\\)<br>The curve has a turning point at \\((1, 1)\\)<br>Find the other turning point of the curve.",
  solution: "0 = 3 + 12 + c → c = -15<br>3x^2 + 12x - 15 = 0 → x = -5<br>Integrate: y = x^3 + 6x^2 - 15x + k, k = 9<br>y(-5) = 109<br>Answer: (-5, 109)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = x^2 - 6x + c\\)<br>The curve has a turning point at \\((2, 3)\\)<br>Find the other turning point of the curve.",
  solution: "0 = 4 - 12 + c → c = 8<br>x^2 - 6x + 8 = 0 → x = 4<br>Integrate: y = x^3/3 - 3x^2 + 8x + k, k = -11/3<br>y(4) = 5/3<br>Answer: (4, 5/3)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 2x^2 - 10x + c\\)<br>The curve has a turning point at \\((0, 0)\\)<br>Find the other turning point of the curve.",
  solution: "0 = c → c = 0<br>2x^2 - 10x = 0 → x = 5<br>Integrate: y = 2x^3/3 - 5x^2 + k, k = 0<br>y(5) = -125/3<br>Answer: (5, -125/3)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 3x^2 - 9x + c\\)<br>The curve has a turning point at \\((0, 1)\\)<br>Find the other turning point of the curve.",
  solution: "0 = c → c = 0<br>3x^2 - 9x = 0 → x = 3<br>Integrate: y = x^3 - 9x^2/2 + k, k = 1<br>y(3) = -25/2<br>Answer: (3, -25/2)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = x^2 + 4x + c\\)<br>The curve has a turning point at \\((-1, 2)\\)<br>Find the other turning point of the curve.",
  solution: "0 = 1 - 4 + c → c = 3<br>x^2 + 4x + 3 = 0 → x = -3<br>Integrate: y = x^3/3 + 2x^2 + 3x + k, k = 4/3<br>y(-3) = -1/3<br>Answer: (-3, -1/3)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 2x^2 + 3x + c\\)<br>The curve has a turning point at \\((0, 0)\\)<br>Find the other turning point of the curve.",
  solution: "0 = c → c = 0<br>2x^2 + 3x = 0 → x = -3/2<br>Integrate: y = 2x^3/3 + 3x^2/2 + k, k = 0<br>y(-3/2) = 9/8<br>Answer: (-3/2, 9/8)"
},
{
  topic: "Calculus - Turning Points",
  level: "Year 12",
  question: "The gradient of a curve is \\(\\frac{dy}{dx} = 3x^2 - 3x + c\\)<br>The curve has a turning point at \\((0, 0)\\)<br>Find the other turning point of the curve.",
  solution: "0 = c → c = 0<br>3x^2 - 3x = 0 → x = 1<br>Integrate: y = x^3 - 3x^2/2 + k, k = 0<br>y(1) = -1/2<br>Answer: (1, -1/2)"
},

  
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 2) and point D has coordinates (5, d).<br>The perpendicular bisector of CD has equation 2x + 3y = 21.<br>Find c and d.",
  solution: "c = 1, d = 8"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 1) and point D has coordinates (2, d).<br>The perpendicular bisector of CD has equation 3x + 2y = 3.<br>Find c and d.",
  solution: "c = −4, d = 5"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, −2) and point D has coordinates (2, d).<br>The perpendicular bisector of CD has equation 2x − 3y = 5.<br>Find c and d.",
  solution: "c = 6, d = 4"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 0) and point D has coordinates (6, d).<br>The perpendicular bisector of CD has equation 3x + 4y = 25.<br>Find c and d.",
  solution: "c = 0, d = 8"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 5) and point D has coordinates (4, d).<br>The perpendicular bisector of CD has equation 3x − 2y = −3.<br>Find c and d.",
  solution: "c = −2, d = 1"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 1) and point D has coordinates (1, d).<br>The perpendicular bisector of CD has equation 3x − 2y = 6.<br>Find c and d.",
  solution: "c = 7, d = 5"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, −1) and point D has coordinates (1, d).<br>The perpendicular bisector of CD has equation x + y = 0.<br>Find c and d.",
  solution: "c = −5, d = 5"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 6) and point D has coordinates (8, d).<br>The perpendicular bisector of CD has equation 3x − 2y = 7.<br>Find c and d.",
  solution: "c = 2, d = 2"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 4) and point D has coordinates (0, d).<br>The perpendicular bisector of CD has equation x − y = −4.<br>Find c and d.",
  solution: "c = −6, d = −2"
},
{
  topic: "Geometry - Perpendicular Bisectors 2",
  level: "Year 12",
  question: "Point C has coordinates (c, 3) and point D has coordinates (2, d).<br>The perpendicular bisector of CD has equation 4x + 3y = 24.<br>Find c and d.",
  solution: "c = 10, d = −3"
},

  
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 3\\arcsin(2x) + 1\\).",
  solution: "Domain: \\(\\{x : -\\tfrac12 \\le x \\le \\tfrac12\\}\\).<br> Range: \\(\\{y : -\\tfrac{3\\pi}{2}+1 \\le y \\le \\tfrac{3\\pi}{2}+1\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 2\\arccos(x-1)\\).",
  solution: "Domain: \\(\\{x : 0 \\le x \\le 2\\}\\).<br> Range: \\(\\{y : 0 \\le y \\le 2\\pi\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = \\arctan(3x) - 2\\).",
  solution: "Domain: \\(\\mathbb{R}\\).<br> Range: \\(\\{y : -\\tfrac{\\pi}{2}-2 < y < \\tfrac{\\pi}{2}-2\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = -\\arcsin(x+2)\\).",
  solution: "Domain: \\(\\{x : -3 \\le x \\le -1\\}\\).<br> Range: \\(\\{y : -\\tfrac{\\pi}{2} \\le y \\le \\tfrac{\\pi}{2}\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 4\\arccos(2x) + \\pi\\).",
  solution: "Domain: \\(\\{x : -\\tfrac12 \\le x \\le \\tfrac12\\}\\).<br> Range: \\(\\{y : \\pi \\le y \\le 5\\pi\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = \\tfrac12\\arcsin(4x)\\).",
  solution: "Domain: \\(\\{x : -\\tfrac14 \\le x \\le \\tfrac14\\}\\).<br> Range: \\(\\{y : -\\tfrac{\\pi}{4} \\le y \\le \\tfrac{\\pi}{4}\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 5 - \\arccos(x)\\).",
  solution: "Domain: \\(\\{x : -1 \\le x \\le 1\\}\\).<br>Range: \\(\\{y : 5-\\pi \\le y \\le 5\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 2\\arctan(x-3)\\).",
  solution: "Domain: \\(\\mathbb{R}\\).<br> Range: \\(\\{y : -\\pi < y < \\pi\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = -3\\arcsin(x/2) + 4\\).",
  solution: "Domain: \\(\\{x : -2 \\le x \\le 2\\}\\).<br> Range: \\(\\{y : 4-\\tfrac{3\\pi}{2} \\le y \\le 4+\\tfrac{3\\pi}{2}\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = \\arccos(3x-1) - 1\\).",
  solution: "Domain: \\(\\{x : 0 \\le x \\le \\tfrac23\\}\\).<br> Range: \\(\\{y : -1 \\le y \\le \\pi-1\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = 6\\arctan(2x) + \\tfrac{\\pi}{2}\\).",
  solution: "Domain: \\(\\mathbb{R}\\).<br> Range: \\(\\{y : -3\\pi+\\tfrac{\\pi}{2} < y < 3\\pi+\\tfrac{\\pi}{2}\\}\\)."
},
{
  topic: "Functions - Inverse Trig - Domain and Range",
  level: "Year 13",
  question: "Find the domain and range of \\(y = \\tfrac13\\arcsin(6x) - 2\\).",
  solution: "Domain: \\(\\{x : -\\tfrac16 \\le x \\le \\tfrac16\\}\\).<br> Range: \\(\\{y : -\\tfrac{\\pi}{6}-2 \\le y \\le \\tfrac{\\pi}{6}-2\\}\\)."
},

  {
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve the differential equation \\(\\frac{dy}{dx} = \\frac{1}{y} \\sin(2x)\\), given that \\(y = 2\\) when \\(x = \\pi/6\\).",
  solution: "Separate: \\(y \\, dy = \\sin(2x) \\, dx\\)<br>Integrate: \\(\\frac{y^2}{2} = -\\frac{1}{2} \\cos(2x) + C\\)<br>Use \\(y=2, x=\\pi/6\\): \\(y = \\sqrt{-\\cos(2x) + 9/2}\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = y \\cos(x)\\) given that \\(y = 3\\) when \\(x = 0\\).",
  solution: "Separate: \\((1/y) \\, dy = \\cos(x) \\, dx\\)<br>Integrate: \\(\\ln|y| = \\sin(x) + C\\)<br>Solution: \\(y = 3 e^{\\sin(x)}\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = 2x y^2\\) given that \\(y = 1\\) when \\(x = 0\\).",
  solution: "Separate: \\((1/y^2) \\, dy = 2x \\, dx\\)<br>Integrate: \\(-1/y = x^2 + C\\)<br>Solution: \\(y = -1/(x^2 -1)\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = e^{2x} / y\\) given that \\(y = 1\\) when \\(x = 0\\).",
  solution: "Separate: \\(y \\, dy = e^{2x} \\, dx\\)<br>Integrate: \\(y^2/2 = e^{2x}/2 + C\\)<br>Solution: \\(y = e^x\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = (2x + 1) y\\) given that \\(y = 4\\) when \\(x = 0\\).",
  solution: "Separate: \\((1/y) \\, dy = (2x+1) \\, dx\\)<br>Integrate: \\(\\ln|y| = x^2 + x + C\\)<br>Solution: \\(y = 4 e^{x^2 + x}\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = 3y/x\\) for \\(x > 0\\), given that \\(y = 2\\) when \\(x = 1\\).",
  solution: "Separate: \\((1/y) \\, dy = 3/x \\, dx\\)<br>Integrate: \\(\\ln|y| = 3 \\ln x + C\\)<br>Solution: \\(y = 2 x^3\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = y^2 \\cos(x)\\) given that \\(y = 1\\) when \\(x = 0\\).",
  solution: "Separate: \\((1/y^2) \\, dy = \\cos(x) \\, dx\\)<br>Integrate: \\(-1/y = sin(x) + C\\)<br>Solution: \\(y = 1/(1 - sin(x))\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = (x^2 + 1)/y^2\\) given that \\(y = 2\\) when \\(x = 0\\).",
  solution: "Separate: \\(y^2 \\, dy = (x^2+1) \\, dx\\)<br>Integrate: \\(y^3/3 = x^3/3 + x + C\\)<br>Solution: \\(y = (x^3 + 3x + 8)^{1/3}\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = (y+1)^2\\) given that \\(y = 0\\) when \\(x = 0\\).",
  solution: "Separate: \\((1/(y+1)^2) \\, dy = dx\\)<br>Integrate: \\(-1/(y+1) = x + C\\)<br>Solution: \\(y = -1/(x-1) -1\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = y^2 + 1\\) given that \\(y = 0\\) when \\(x = 0\\).",
  solution: "Separate: \\(1/(1+y^2) \\, dy = dx\\)<br>Integrate: arctan(y) = x + C<br>Solution: \\(y = tan(x)\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = 1/y^2 (x + 1)\\) given that \\(y = 1\\) when \\(x = 0\\).",
  solution: "Separate: \\(y^2 \\, dy = (x+1) \\, dx\\)<br>Integrate: y^3/3 = x^2/2 + x + C<br>Solution: \\(y = (3(x^2/2 + x) +1)^{1/3}\\)"
},
{
  topic: "Differential Equations",
  level: "Year 13",
  question: "Solve \\(\\frac{dy}{dx} = sin(2x)/y\\) given that \\(y = 1\\) when \\(x = 0\\).",
  solution: "Separate: \\(y \\, dy = sin(2x) \\, dx\\)<br>Integrate: y^2/2 = -cos(2x)/2 + C<br>Solution: \\(y = sqrt(-cos(2x) + 3/2)\\)"
},

  
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "The first three terms of a geometric sequence are 5, 15 and 45. Write down the common ratio and find the 6th term.",
  solution: "The common ratio is \\(r = 3\\).\\\\\nThe 6th term is \\(u_6 = 5 \\times 3^5 = 1215\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "A geometric sequence has first term 12 and common ratio \\(\\frac{1}{3}\\). Find the 10th term.",
  solution: "\\(u_{10} = 12\\left(\\frac{1}{3}\\right)^9 = \\frac{12}{19683}\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "The second term of a geometric sequence is 18 and the fifth term is 486. Find the first term and the common ratio.",
  solution: "\\(ar = 18,\\ ar^4 = 486\\).\\\\\n\\(r^3 = 27 \\Rightarrow r = 3\\), so \\(a = 6\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "Find the sum of the first 8 terms of the geometric series with first term 4 and ratio 3.",
  solution: "\\(S_8 = 4\\frac{3^8 - 1}{3 - 1} = 13120\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "In a geometric sequence \\(u_n\\), the first term is \\(7\\) and the fourth term is \\(56\\). Find the common ratio and the 8th term.",
  solution: "\\(7r^3 = 56 \\Rightarrow r = 2\\).\\\\\n\\(u_8 = 7 \\times 2^7 = 896\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "Find the sum to infinity of the geometric series 9 + 6 + 4 + …",
  solution: "\\(r = \\frac{2}{3}\\).\\\\\n\\(S_\\infty = \\frac{9}{1 - \\frac{2}{3}} = 27\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "In a geometric sequence, the first term is 5 and the third term is 20. Find the common ratio and the 7th term.",
  solution: "\\(5r^2 = 20 \\Rightarrow r = 2\\).\\\\\n\\(u_7 = 5 \\times 2^6 = 320\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "The sum of the first 5 terms of a geometric sequence is 121 and the sum to infinity is 242. Find the first term and the common ratio.",
  solution: "\\(\\frac{S_5}{S_\\infty} = \\frac{1 - r^5}{1} = \\frac{1}{2}\\).\\\\\n\\(r = \\frac{1}{2},\\ a = 121\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "Given a geometric sequence with first term 3 and common ratio 2, find the sum of the first 12 terms.",
  solution: "\\(S_{12} = 3\\frac{2^{12} - 1}{2 - 1} = 12285\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "The third term of a geometric sequence is 16 and the sixth term is 128. Find the first term and the common ratio.",
  solution: "\\(ar^2 = 16,\\ ar^5 = 128\\).\\\\\n\\(r^3 = 8 \\Rightarrow r = 2\\), so \\(a = 4\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "A geometric series has sum to infinity 54 and first term 27. Find the common ratio and the sum of the first 6 terms.",
  solution: "\\(\\frac{27}{1 - r} = 54 \\Rightarrow r = \\frac{1}{2}\\).\\\\\n\\(S_6 = 27\\frac{1 - (\\frac{1}{2})^6}{1 - \\frac{1}{2}} = 52.3125\\)."
},
{
  topic: "Sequences - Geometric",
  level: "Year 13",
  question: "The sum of the first 4 terms of a geometric sequence is 30 and the common ratio is 2. Find the first term.",
  solution: "\\(30 = a\\frac{1 - 2^4}{1 - 2} = 15a\\), so \\(a = 2\\)."
},

{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The first three terms of an arithmetic sequence are 7, 11 and 15. Find the 20th term.",
  solution: "\\(83\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "An arithmetic sequence has first term 12 and common difference \\(-3\\). Find the 15th term.",
  solution: "\\(-30\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "In an arithmetic sequence, the 5th term is 23 and the 10th term is 48. Find the first term and the common difference.",
  solution: "\\(a = 3,\\ d = 5\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The nth term of an arithmetic sequence is given by \\(u_n = 5n - 8\\). Find the sum of the first 30 terms.",
  solution: "\\(2085\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "In an arithmetic sequence, the 2nd term is 14 and the 5th term is 32. Find the 40th term.",
  solution: "\\(242\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The first term of an arithmetic sequence is 7 and the sum of the first 20 terms is 710. Find the common difference.",
  solution: "\\(3\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The first term of an arithmetic sequence is 8 and the sum of the first 15 terms is 285. Find the common difference.",
  solution: "\\(\\frac{11}{7}\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "In an arithmetic sequence, the 3rd term is 18 and the 8th term is 33. Find the sum of the first 25 terms.",
  solution: "\\(1200\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "In an arithmetic sequence, the 7th term is 49 and the 12th term is 79. Find the first term and the common difference.",
  solution: "\\(a = 13,\\ d = 6\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The nth term of an arithmetic sequence is \\(u_n = 3n + 14\\). Find the sum of the first 35 terms.",
  solution: "\\(2380\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "The sum of the first 10 terms of an arithmetic sequence is \\(-15\\) and the sum of the first 20 terms is 70. Find the first term and the common difference.",
  solution: "\\(a = -6,\\ d = 1\\)"
},
{
  topic: "Sequences – Arithmetic",
  level: "Year 13",
  question: "In an arithmetic sequence, the 4th term is 21 and the 10th term is 39. Find the 60th term.",
  solution: "\\(189\\)"
},

 {
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A chord AB intersects a circle of radius 5 cm at points A and B. The angle AOB is \\( \\frac{\\pi}{3} \\) radians. Find the area of the minor segment formed.",
  solution: "2.3 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "Points A and B lie on the circumference of a circle of radius 8 cm. The angle AOB is \\( \\frac{\\pi}{4} \\) radians. Find the perimeter of the minor sector AOB.",
  solution: "22.3 cm"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A circle has radius 6 cm. The angle subtended at the centre by arc AB is \\( \\frac{2\\pi}{3} \\) radians. Find the area of the major sector.",
  solution: "75.4 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A chord PQ of a circle of radius 7 cm subtends an angle of \\( \\frac{\\pi}{2} \\) radians at the centre. Find the area of the minor segment.",
  solution: "14.0 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A circle has radius 10 cm. The angle subtended by arc AB at the centre is \\( \\frac{3\\pi}{5} \\) radians. Find the perimeter of the sector.",
  solution: "38.8 cm"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A sector of a circle has radius 9 cm and angle \\( \\frac{5\\pi}{6} \\) radians. Find the area of the sector.",
  solution: "106.0 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A chord AB divides a circle of radius 4 cm into a minor and a major segment. The angle AOB is \\( \\frac{2\\pi}{5} \\) radians. Find the area of the major segment.",
  solution: "47.8 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A circle has centre O and radius 12 cm. Points A and B lie on the circumference such that the angle AOB is \\( \\frac{\\pi}{6} \\) radians. Find the perimeter of the minor segment.",
  solution: "12.5 cm"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A sector of a circle has radius 5 cm and angle θ radians. The area of the sector is 20 cm². Find the value of θ.",
  solution: "1.6 radians"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A circle has radius 8 cm. A chord subtends an angle of \\( \\frac{3\\pi}{4} \\) radians at the centre. Find the area of the minor segment.",
  solution: "52.8 cm²"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "The perimeter of a sector of a circle is 26 cm. The radius of the circle is 7 cm. Find the angle of the sector in radians.",
  solution: "1.7 radians"
},
{
  topic: "Radians – Circle Geometry",
  level: "Year 13",
  question: "A circle of radius 6 cm is divided by a chord into a minor and a major segment. The angle subtended by the chord at the centre is \\( \\frac{4\\pi}{3} \\) radians. Find the area of the minor segment.",
  solution: "22.1 cm²"
},



 {
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{3x^2+7x-1}{(x-1)(x+2)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x-1}+\\frac{2}{x+2}+\\frac{1}{(x+2)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{2x^2+9x-1}{(x-2)(x+3)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x-2}+\\frac{1}{x+3}+\\frac{2}{(x+3)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{6x+5}{(x+1)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{6}{x+1}-\\frac{1}{(x+1)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{3x^2+5x+4}{(x-1)(x^2+3)}$$<br>in partial fractions.",
  solution: "$$\\frac{3}{x-1}+\\frac{5}{x^2+3}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{2x^2+6x+9}{(x+4)(x^2+1)}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x+4}+\\frac{x+2}{x^2+1}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{2x^2-4x+10}{(x+1)(x-3)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x+1}+\\frac{1}{x-3}+\\frac{4}{(x-3)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{2x^2+4x+9}{(x+2)(x^2+5)}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x+2}+\\frac{x+2}{x^2+5}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{x^2+16x+4}{(2x-1)(x+3)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{2x-1}+\\frac{5}{(x+3)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{6x^2+3x+21}{(x-1)(x^2+4)}$$<br>in partial fractions.",
  solution: "$$\\frac{6}{x-1}+\\frac{3}{x^2+4}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{9x+4}{(x+5)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{9}{x+5}-\\frac{41}{(x+5)^2}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{2x^2+7x-12}{(x-2)(x^2+1)}$$<br>in partial fractions.",
  solution: "$$\\frac{2}{x-2}+\\frac{7}{x^2+1}$$"
},
{
  topic: "Partial Fractions",
  level: "Year 13",
  question: "Express<br>$$\\frac{x^3+5x^2+4x+9}{(x^2+2)(x+1)^2}$$<br>in partial fractions.",
  solution: "$$\\frac{1}{x^2+2}+\\frac{1}{x+1}+\\frac{3}{(x+1)^2}$$"
},


  
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms, in ascending powers of x, of the binomial expansion of<br>\\[ \\frac{1}{\\sqrt{9+x}} \\]",
    solution: "\\[ \\frac{1}{\\sqrt{9+x}} = \\frac{1}{3}\\left(1+\\frac{x}{9}\\right)^{-\\frac12} = \\frac{1}{3} - \\frac{x}{54} + \\frac{x^2}{324} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ (4-2x)^{\\frac12} \\]",
    solution: "\\[ (4-2x)^{\\frac12} = 2\\left(1-\\frac{x}{2}\\right)^{\\frac12} = 2 - \\frac{x}{2} - \\frac{x^2}{16} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\frac{1}{(1-3x)^{\\frac12}} \\]",
    solution: "\\[ (1-3x)^{-\\frac12} = 1 + \\frac{3}{2}x + \\frac{27}{8}x^2 \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ (5+2x)^{-1} \\]",
    solution: "\\[ (5+2x)^{-1} = \\frac{1}{5}\\left(1+\\frac{2x}{5}\\right)^{-1} = \\frac{1}{5} - \\frac{2x}{25} + \\frac{4x^2}{125} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\sqrt{8-4x} \\]",
    solution: "\\[ \\sqrt{8-4x} = 2\\sqrt2\\left(1-\\frac{x}{2}\\right)^{\\frac12} = 2\\sqrt2 - \\sqrt2 x - \\frac{\\sqrt2}{4}x^2 \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\frac{1}{\\sqrt{16-2x}} \\]",
    solution: "\\[ \\frac{1}{\\sqrt{16-2x}} = \\frac14\\left(1-\\frac{x}{8}\\right)^{-\\frac12} = \\frac14 + \\frac{x}{64} + \\frac{3x^2}{1024} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ (6+x)^{\\frac12} \\]",
    solution: "\\[ (6+x)^{\\frac12} = \\sqrt6\\left(1+\\frac{x}{6}\\right)^{\\frac12} = \\sqrt6 + \\frac{x}{2\\sqrt6} - \\frac{x^2}{24\\sqrt6} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\frac{1}{(9-3x)^2} \\]",
    solution: "\\[ (9-3x)^{-2} = \\frac{1}{81}\\left(1-\\frac{x}{3}\\right)^{-2} = \\frac{1}{81} + \\frac{2x}{243} + \\frac{x^2}{81} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\sqrt{2x+10} \\]",
    solution: "\\[ \\sqrt{2x+10} = \\sqrt{10}\\left(1+\\frac{x}{5}\\right)^{\\frac12} = \\sqrt{10} + \\frac{x}{\\sqrt{10}} - \\frac{x^2}{20\\sqrt{10}} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\frac{1}{\\sqrt{25+x}} \\]",
    solution: "\\[ \\frac{1}{\\sqrt{25+x}} = \\frac15\\left(1+\\frac{x}{25}\\right)^{-\\frac12} = \\frac15 - \\frac{x}{250} + \\frac{3x^2}{12500} \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ (12-3x)^{\\frac12} \\]",
    solution: "\\[ (12-3x)^{\\frac12} = 2\\sqrt3\\left(1-\\frac{x}{4}\\right)^{\\frac12} = 2\\sqrt3 - \\frac{\\sqrt3}{4}x - \\frac{\\sqrt3}{64}x^2 \\]"
  },
  {
    topic: "General Binomial Expansion",
    level: "Year 13",
    question: "Find the first three terms of the binomial expansion of<br>\\[ \\frac{1}{(7+x)^{\\frac12}} \\]",
    solution: "\\[ \\frac{1}{(7+x)^{\\frac12}} = \\frac{1}{\\sqrt7}\\left(1+\\frac{x}{7}\\right)^{-\\frac12} = \\frac{1}{\\sqrt7} - \\frac{x}{14\\sqrt7} + \\frac{3x^2}{196\\sqrt7} \\]"
  },

{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
  question: "On the same axes, sketch the graphs of:<br><br> \\(y = |2x - 3|\\) and \\(y = |x|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |2x - 3| \\le |x| \\).",
  solution: "\\( x \\in [1,3] \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
  question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x + 2|\\) and \\(y = |3x - 1|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x + 2| \\ge |3x - 1| \\).",
  solution: "\\( x \\le -\\tfrac14 \\text{ or } x \\ge \\tfrac32 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x - 1|\\) and \\(y = |2x + 1|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x - 1| < |2x + 1| \\).",
  solution: "\\( x < -2 \\text{ or } x > 0 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x|\\) and \\(y = |x - 4|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x| \\ge |x - 4| \\).",
  solution: "\\( x \\ge 2 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x + 3|\\) and \\(y = |2x - 1|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x + 3| \\le |2x - 1| \\).",
  solution: "\\( x \\le -\\tfrac23 \\text{ or } x \\ge 4 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x - 2|\\) and \\(y = |x + 1|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x - 2| < |x + 1| \\).",
  solution: "\\( x > \\tfrac12 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |3x - 4|\\) and \\(y = |x + 2|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |3x - 4| \\ge |x + 2| \\).",
  solution: "\\( x \\le \\tfrac12 \\text{ or } x \\ge 3 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x + 1|\\) and \\(y = |x - 2|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x + 1| \\le |x - 2| \\).",
  solution: "\\( x \\le \\tfrac12 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
  question: "On the same axes, sketch the graphs of:<br><br> \\(y = |2x + 1|\\) and \\(y = |x - 3|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |2x + 1| < |x - 3| \\).",
  solution: "\\( -4 < x < \\tfrac23 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x - 3|\\) and \\(y = |x + 2|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x - 3| \\ge |x + 2| \\).",
  solution: "\\( x \\le \\tfrac12 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br><br> \\(y = |x + 4|\\) and \\(y = |2x - 1|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x + 4| \\le |2x - 1| \\).",
  solution: "\\( x \\le -1 \\text{ or } x \\ge 5 \\)."
},
{
  topic: "Graphs - Mod. Inequalities",
  level: "Year 13",
 question: "On the same axes, sketch the graphs of:<br> <br>\\(y = |x - 1|\\) and \\(y = |3x + 2|\\).<br><br>Find the x-ordinates of intersection.<br><br>Hence, solve:\\( |x - 1| < |3x + 2| \\).",
  solution: "\\( x < -\\tfrac32 \\text{ or } x > -\\tfrac14 \\)."
},




  {
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 5\\sin\\left(3x + \\tfrac{\\pi}{6}\\right) \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{\\pi}{9}, 5\\right)\\), min at \\(\\left(\\tfrac{4\\pi}{9}, -5\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 4\\cos\\left(2x - \\tfrac{\\pi}{3}\\right) + 1 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{\\pi}{6}, 5\\right)\\), min at \\(\\left(\\tfrac{2\\pi}{3}, -3\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 3\\sin\\left(4x + \\tfrac{\\pi}{2}\\right) - 2 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{3\\pi}{4}, 1\\right)\\), min at \\(\\left(\\tfrac{\\pi}{4}, -5\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 6\\cos\\left(3x + \\tfrac{\\pi}{4}\\right) - 1 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{7\\pi}{12}, 5\\right)\\), min at \\(\\left(\\tfrac{\\pi}{4}, -7\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 2\\sin\\left(5x - \\tfrac{\\pi}{2}\\right) + 3 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{2\\pi}{5}, 5\\right)\\), min at \\(\\left(\\tfrac{\\pi}{5}, 1\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 7\\cos\\left(2x + \\tfrac{\\pi}{2}\\right) \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{3\\pi}{4}, 7\\right)\\), min at \\(\\left(\\tfrac{\\pi}{4}, -7\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 5\\sin(2x - \\pi) + 4 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{3\\pi}{4}, 9\\right)\\), min at \\(\\left(\\tfrac{\\pi}{4}, -1\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 4\\cos\\left(5x - \\tfrac{\\pi}{2}\\right) - 2 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{3\\pi}{10}, 2\\right)\\), min at \\(\\left(\\tfrac{\\pi}{10}, -6\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 3\\sin\\left(6x + \\tfrac{\\pi}{6}\\right) + 1 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{\\pi}{18}, 4\\right)\\), min at \\(\\left(\\tfrac{2\\pi}{9}, -2\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 8\\cos\\left(4x - \\tfrac{\\pi}{2}\\right) \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{\\pi}{8}, 8\\right)\\), min at \\(\\left(\\tfrac{3\\pi}{8}, -8\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 6\\sin\\left(3x - \\tfrac{\\pi}{2}\\right) - 2 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{\\pi}{3}, 4\\right)\\), min at \\(\\left(\\tfrac{2\\pi}{3}, -8\\right)\\)."
},
{
  topic: "Trig - Harmonic Identities - Max and Min",
  level: "Year 13",
  question: "Find the maximum and minimum values of<br>\\[ y = 5\\cos\\left(6x + \\tfrac{\\pi}{3}\\right) + 2 \\]<br>and the first value of \\(x>0\\) at which each occurs.",
  solution: "Max at \\(\\left(\\tfrac{5\\pi}{18}, 7\\right)\\), min at \\(\\left(\\tfrac{2\\pi}{9}, -3\\right)\\)."
},

  {
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(4\\theta) + 2\\sin(3\\theta) - \\tan(2\\theta) \\approx A + B\\theta + C\\theta^2 \\]<br>where \\( A \\), \\( B \\) and \\( C \\) are constants to be found.",
  solution: "\\[ \\approx 1 + 4\\theta - 8\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(2\\theta) + \\cos(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + 2\\theta - \\tfrac{1}{2}\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 3\\tan(\\theta) - \\cos(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -1 + 3\\theta + 2\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(\\theta) + \\tan(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 3\\theta \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(3\\theta) - \\sin(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 - \\theta - \\tfrac{9}{2}\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 2\\cos(\\theta) + \\tan(3\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 2 + 3\\theta - \\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(3\\theta) - \\cos(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -1 + 3\\theta + 2\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\tan(\\theta) + \\cos(4\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + \\theta - 8\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(2\\theta) - 2\\cos(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -2 + 2\\theta + \\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(\\theta) + \\tan(\\theta) - 1 \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx \\theta - \\tfrac{1}{2}\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 2\\sin(\\theta) + \\cos(3\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + 2\\theta - \\tfrac{9}{2}\\theta^2 \\]"
},
{
  topic: "Trig - Small Angle Approx.",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\tan(2\\theta) - \\sin(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx \\theta \\]"
},

  
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = |x|\\) to \\(y = |2x - 5|\\).",
    solution: "A stretch parallel to the x-axis by SF= \\(1/2\\), then a translation \\(\\begin{bmatrix} 5/2 \\\\ 0 \\end{bmatrix}\\)."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(f(x) = x^2\\) to \\(g(x) = 4x^2 + 8x + 4\\).",
    solution: "A translation \\(\\begin{bmatrix} -1 \\\\ 0 \\end{bmatrix}\\), then a stretch parallel to the y-axis by SF = 4."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = \\sin x\\) to \\(y = 2\\sin(x - \\pi)\\).",
    solution: "A translation \\(\\begin{bmatrix} \\pi \\\\ 0 \\end{bmatrix}\\), then a stretch parallel to the y-axis by SF = 2."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = x^3\\) to \\(y = -(x - 2)^3\\).",
    solution: "A translation \\(\\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix}\\), then a reflection in the x-axis."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = e^x\\) to \\(y = e^{2x} - 3\\).",
    solution: "A stretch parallel to the x-axis by SF = 1/2, then a translation \\(\\begin{bmatrix} 0 \\\\ -3 \\end{bmatrix}\\)."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = \\ln x\\) to \\(y = \\ln(3x) + 1\\).",
    solution: "A stretch parallel to the x-axis by SF = 1/3, then a translation \\(\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}\\)."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = \\cos x\\) to \\(y = -\\cos(x + \\pi/2)\\).",
    solution: "A translation \\(\\begin{bmatrix} -\\pi/2 \\\\ 0 \\end{bmatrix}\\), then a reflection in the x-axis."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = \\sqrt{x}\\) to \\(y = \\sqrt{-x - 4} + 2\\).",
    solution: "A reflection in the y-axis, then a translation \\(\\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix}\\)."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = x^2\\) to \\(y = (0.5x + 3)^2 - 5\\).",
    solution: "A translation \\(\\begin{bmatrix} -3 \\\\ -5 \\end{bmatrix}\\), then a stretch parallel to the x-axis by SF = 2."
  },
  {
    topic: "Graphs - Transformations",
    level: "Year 13",
    question: "Describe a sequence of transformations mapping \\(y = 1/x\\) to \\(y = -1/(x - 2)\\).",
    solution: "A translation \\(\\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix}\\), then a reflection in the x-axis."
  },
 

  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 5\\sin x + 12\\cos x \\]<br>in the form \\( R\\sin(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 13\\sin(x + 67.4^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 5\\cos x + \\sin x \\]<br>in the form \\( R\\cos(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{26}\\cos(x - 11.3^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 3\\sin x - 4\\cos x \\]<br>in the form \\( R\\sin(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 5\\sin(x - 53.1^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 7\\cos x - 2\\sin x \\]<br>in the form \\( R\\cos(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{53}\\cos(x + 15.9^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 6\\sin x + 8\\cos x \\]<br>in the form \\( R\\sin(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 10\\sin(x + 53.1^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 9\\cos x + 12\\sin x \\]<br>in the form \\( R\\cos(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 15\\cos(x - 53.1^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 4\\sin x - 3\\cos x \\]<br>in the form \\( R\\sin(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 5\\sin(x - 36.9^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 8\\cos x + 15\\sin x \\]<br>in the form \\( R\\sin(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( 17\\sin(x + 28.1^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 10\\sin x + 3\\cos x \\]<br>in the form \\( R\\sin(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{109}\\sin(x + 16.7^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 11\\cos x - 5\\sin x \\]<br>in the form \\( R\\cos(x + \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{146}\\cos(x + 24.4^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 2\\sin x + 7\\cos x \\]<br>in the form \\( R\\cos(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{53}\\cos(x - 15.9^\\circ) \\)"
  },
  {
    topic: "Trig - Harmonic Identities",
    level: "Year 13",
    question: "Write<br>\\[ 13\\sin x - 12\\cos x \\]<br>in the form \\( R\\sin(x - \\alpha) \\), where \\( R>0 \\) and \\( 0<\\alpha<90 \\).",
    solution: "\\( \\sqrt{313}\\sin(x - 42.5^\\circ) \\)"
  },

  
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = x^5 + 2 \\),<br>\\[ \\int_0^1 \\frac{x^9}{(x^5 + 2)^3}\\,dx = \\tfrac{1}{180} \\].",
  solution: "Let \\(u = x^5 + 2\\), so \\(du = 5x^4 dx\\).<br>\\[ = \\tfrac{1}{5}\\int_2^3 \\frac{u-2}{u^3}\\,du \\]<br>\\[ = \\tfrac{1}{5}\\int_2^3 (u^{-2} - 2u^{-3})\\,du \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, letting \\( u = 2^x \\),<br>\\[ \\int_0^1 (3 + 2^x)^{1/2}\\,2^x\\ln 2\\,dx = 2(\\sqrt{5} - 2) \\].",
  solution: "Let \\(u = 2^x\\), so \\(du = 2^x\\ln2\\,dx\\).<br>\\[ = \\int_1^2 (3+u)^{1/2}\\,du \\]<br>\\[ = \\left[ \\tfrac{2}{3}(3+u)^{3/2} \\right]_1^2 \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = x^2 + 1 \\),<br>\\[ \\int_0^1 \\frac{x}{(x^2 + 1)^2}\\,dx = \\tfrac{1}{4} \\].",
  solution: "Let \\(u = x^2 + 1\\), so \\(du = 2x dx\\).<br>\\[ = \\tfrac{1}{2}\\int_1^2 u^{-2}\\,du \\] \\[ = \\tfrac{1}{2}\\left[-u^{-1}\\right]_1^2 \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, letting \\( u = e^x \\),<br>\\[ \\int_0^1 \\frac{e^x}{2 + e^x}\\,dx = \\ln\\left(\\tfrac{3}{2}\\right) \\].",
  solution: "Let \\(u = e^x\\), so \\(du = e^x dx\\).<br>\\[ = \\int_1^e \\frac{1}{2+u}\\,du \\]<br>\\[ = \\left[ \\ln(2+u) \\right]_1^e \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = \\sqrt{x} \\),<br>\\[ \\int_0^1 \\sqrt{x}(1 + \\sqrt{x})^2\\,dx = \\tfrac{7}{15} \\].",
  solution: "Let \\(u = \\sqrt{x}\\), so \\(x = u^2\\) and \\(dx = 2u\\,du\\).<br>\\[ = 2\\int_0^1 u^2(1+u)^2\\,du \\]<br>\\[ = 2\\int_0^1 (u^2 + 2u^3 + u^4)\\,du \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, letting \\( u = 1 - x^2 \\),<br>\\[ \\int_0^1 \\frac{x}{\\sqrt{1 - x^2}}\\,dx = 1 \\].",
  solution: "Let \\(u = 1 - x^2\\), so \\(du = -2x dx\\).<br>\\[ = -\\tfrac{1}{2}\\int_1^0 u^{-1/2}\\,du \\]<br>\\[ = \\tfrac{1}{2}\\int_0^1 u^{-1/2}\\,du \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = 2x - 1 \\),<br>\\[ \\int_1^2 x\\sqrt{2x - 1}\\,dx = \\tfrac{19}{15} \\].",
  solution: "Let \\(u = 2x - 1\\), so \\(dx = \\tfrac{1}{2}du\\).<br>\\[ = \\tfrac{1}{4}\\int_1^3 (u+1)u^{1/2}\\,du \\]<br>\\[ = \\tfrac{1}{4}\\int_1^3 (u^{3/2} + u^{1/2})\\,du \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, letting \\( u = \\ln x \\),<br>\\[ \\int_1^e \\frac{\\ln x}{x}\\,dx = \\tfrac{1}{2} \\].",
  solution: "Let \\(u = \\ln x\\), so \\(du = \\tfrac{1}{x}dx\\).<br>\\[ = \\int_0^1 u\\,du \\]<br>\\[ = \\left[ \\tfrac{1}{2}u^2 \\right]_0^1 \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = x^3 \\),<br>\\[ \\int_0^1 x^2\\sqrt{1 + x^3}\\,dx = \\tfrac{2}{9}(2\\sqrt{2} - 1) \\].",
  solution: "Let \\(u = x^3\\), so \\(du = 3x^2 dx\\).<br>\\[ = \\tfrac{1}{3}\\int_0^1 \\sqrt{1+u}\\,du \\]<br>\\[ = \\tfrac{1}{3}\\int_1^2 t^{1/2}\\,dt \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, letting \\( u = 5 - 2x \\),<br>\\[ \\int_1^2 \\frac{1}{\\sqrt{5 - 2x}}\\,dx = \\sqrt{3} - 1 \\].",
  solution: "Let \\(u = 5 - 2x\\), so \\(dx = -\\tfrac{1}{2}du\\).<br>\\[ = -\\tfrac{1}{2}\\int_3^1 u^{-1/2}\\,du \\]<br>\\[ = \\tfrac{1}{2}\\int_1^3 u^{-1/2}\\,du \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = x^2 + x \\),<br>\\[ \\int_0^1 (2x + 1)\\sqrt{x^2 + x}\\,dx = \\tfrac{2}{3} \\].",
  solution: "Let \\(u = x^2 + x\\), so \\(du = (2x+1)dx\\).<br>\\[ = \\int_0^2 u^{1/2}\\,du \\]<br>\\[ = \\left[ \\tfrac{2}{3}u^{3/2} \\right]_0^2 \\]"
},
{
  topic: "Integration - By Substitution",
  level: "Year 13",
  question: "Show that, using the substitution \\( u = 3x + 1 \\),<br>\\[ \\int_0^1 x(3x + 1)^4\\,dx = \\tfrac{7}{6} \\].",
  solution: "Let \\(u = 3x + 1\\), so \\(x = \\tfrac{u-1}{3}\\) and \\(dx = \\tfrac{1}{3}du\\).<br>\\[ = \\tfrac{1}{9}\\int_1^4 (u-1)u^4\\,du \\]<br>\\[ = \\tfrac{1}{9}\\int_1^4 (u^5 - u^4)\\,du \\]"
},


{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi/2} x\\sin(4x)\\,dx = -\\tfrac{\\pi}{8} \\].",
  solution: "Let \\(u = x\\), \\(dv = \\sin(4x)dx\\).<br>\\[ = \\left[-\\tfrac{1}{4}x\\cos(4x)\\right]_0^{\\pi/2} + \\tfrac{1}{4}\\int_0^{\\pi/2}\\cos(4x)\\,dx \\]<br>\\[ = \\left[-\\tfrac{1}{4}x\\cos(4x) + \\tfrac{1}{16}\\sin(4x)\\right]_0^{\\pi/2} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi} x\\cos x\\,dx = -2 \\].",
  solution: "Let \\(u = x\\), \\(dv = \\cos x\\,dx\\).<br>\\[ = \\left[x\\sin x\\right]_0^{\\pi} - \\int_0^{\\pi}\\sin x\\,dx \\]<br>\\[ = \\left[x\\sin x + \\cos x\\right]_0^{\\pi} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi} x\\sin x\\,dx = \\pi \\].",
  solution: "Let \\(u = x\\), \\(dv = \\sin x\\,dx\\).<br>\\[ = \\left[-x\\cos x\\right]_0^{\\pi} + \\int_0^{\\pi}\\cos x\\,dx \\]<br>\\[ = \\left[-x\\cos x + \\sin x\\right]_0^{\\pi} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{1} x e^x\\,dx = 1 \\].",
  solution: "Let \\(u = x\\), \\(dv = e^x dx\\).<br>\\[ = \\left[xe^x\\right]_0^1 - \\int_0^1 e^x\\,dx \\]<br>\\[ = \\left[xe^x - e^x\\right]_0^1 \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{1} x e^{2x}\\,dx = \\tfrac{1}{4}(e^2 - 1) \\].",
  solution: "Let \\(u = x\\), \\(dv = e^{2x}dx\\).<br>\\[ = \\left[\\tfrac{1}{2}xe^{2x}\\right]_0^1 - \\tfrac{1}{2}\\int_0^1 e^{2x}\\,dx \\]<br>\\[ = \\left[\\tfrac{1}{2}xe^{2x} - \\tfrac{1}{4}e^{2x}\\right]_0^1 \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_1^{e} \\ln x\\,dx = 1 \\].",
  solution: "Let \\(u = \\ln x\\), \\(dv = dx\\).<br>\\[ = \\left[x\\ln x\\right]_1^e - \\int_1^e 1\\,dx \\]<br>\\[ = \\left[x\\ln x - x\\right]_1^e \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{1} x\\ln x\\,dx = -\\tfrac{1}{4} \\].",
  solution: "Let \\(u = \\ln x\\), \\(dv = xdx\\).<br>\\[ = \\left[\\tfrac{1}{2}x^2\\ln x\\right]_0^1 - \\tfrac{1}{2}\\int_0^1 x\\,dx \\]<br>\\[ = \\left[\\tfrac{1}{2}x^2\\ln x - \\tfrac{1}{4}x^2\\right]_0^1 \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi} x\\sin(2x)\\,dx = -\\tfrac{\\pi}{2} \\].",
  solution: "Let \\(u = x\\), \\(dv = \\sin(2x)dx\\).<br>\\[ = \\left[-\\tfrac{1}{2}x\\cos(2x)\\right]_0^{\\pi} + \\tfrac{1}{2}\\int_0^{\\pi}\\cos(2x)\\,dx \\]<br>\\[ = \\left[-\\tfrac{1}{2}x\\cos(2x) + \\tfrac{1}{4}\\sin(2x)\\right]_0^{\\pi} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi} x\\cos(2x)\\,dx = 0 \\].",
  solution: "Let \\(u = x\\), \\(dv = \\cos(2x)dx\\).<br>\\[ = \\left[\\tfrac{1}{2}x\\sin(2x)\\right]_0^{\\pi} - \\tfrac{1}{2}\\int_0^{\\pi}\\sin(2x)\\,dx \\]<br>\\[ = \\left[\\tfrac{1}{2}x\\sin(2x) + \\tfrac{1}{4}\\cos(2x)\\right]_0^{\\pi} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{\\pi/2} x\\cos(3x)\\,dx = -\\tfrac{\\pi}{6} \\].",
  solution: "Let \\(u = x\\), \\(dv = \\cos(3x)dx\\).<br>\\[ = \\left[\\tfrac{1}{3}x\\sin(3x)\\right]_0^{\\pi/2} - \\tfrac{1}{3}\\int_0^{\\pi/2}\\sin(3x)\\,dx \\]<br>\\[ = \\left[\\tfrac{1}{3}x\\sin(3x) + \\tfrac{1}{9}\\cos(3x)\\right]_0^{\\pi/2} \\]"
},
{
  topic: "Integration - By Parts",
  level: "Year 13",
  question: "Show that<br>\\[ \\int_0^{1} x^2 e^x\\,dx = e - 2 \\].",
  solution: "Let \\(u = x^2\\), \\(dv = e^x dx\\).<br>\\[ = \\left[x^2 e^x\\right]_0^1 - \\int_0^1 2x e^x\\,dx \\]<br>\\[ = e - 2 \\]"
},
  {
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (x^3 + 5x)^7 \\]",
  solution: "Let \\( u = x^3 + 5x \\).<br>\\( \\dfrac{dy}{du} = 7u^6 \\)<br>\\( \\dfrac{du}{dx} = 3x^2 + 5 \\)<br>\\[ \\dfrac{dy}{dx} = 7(x^3 + 5x)^6(3x^2 + 5) \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (2x - 1)^5 \\]",
  solution: "Let \\( u = 2x - 1 \\).<br>\\( \\dfrac{dy}{du} = 5u^4 \\)<br>\\( \\dfrac{du}{dx} = 2 \\)<br>\\[ \\dfrac{dy}{dx} = 10(2x - 1)^4 \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (x^2 + 4)^9 \\]",
  solution: "Let \\( u = x^2 + 4 \\).<br>\\( \\dfrac{dy}{du} = 9u^8 \\)<br>\\( \\dfrac{du}{dx} = 2x \\)<br>\\[ \\dfrac{dy}{dx} = 18x(x^2 + 4)^8 \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = \\sqrt{3x^2 - x + 1} \\]",
  solution: "Rewrite as \\( y = (3x^2 - x + 1)^{1/2} \\).<br>Let \\( u = 3x^2 - x + 1 \\).<br>\\( \\dfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2} \\)<br>\\( \\dfrac{du}{dx} = 6x - 1 \\)<br>\\[ \\dfrac{dy}{dx} = \\dfrac{6x - 1}{2\\sqrt{3x^2 - x + 1}} \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (5 - x^4)^6 \\]",
  solution: "Let \\( u = 5 - x^4 \\).<br>\\( \\dfrac{dy}{du} = 6u^5 \\)<br>\\( \\dfrac{du}{dx} = -4x^3 \\)<br>\\[ \\dfrac{dy}{dx} = -24x^3(5 - x^4)^5 \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (x^2 - 3x + 1)^{-4} \\]",
  solution: "Let \\( u = x^2 - 3x + 1 \\).<br>\\( \\dfrac{dy}{du} = -4u^{-5} \\)<br>\\( \\dfrac{du}{dx} = 2x - 3 \\)<br>\\[ \\dfrac{dy}{dx} = -4(2x - 3)(x^2 - 3x + 1)^{-5} \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = e^{4x^2 - 7} \\]",
  solution: "Let \\( u = 4x^2 - 7 \\).<br>\\( \\dfrac{dy}{du} = e^u \\)<br>\\( \\dfrac{du}{dx} = 8x \\)<br>\\[ \\dfrac{dy}{dx} = 8xe^{4x^2 - 7} \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = \\ln(3x^2 + 2x + 1) \\]",
  solution: "Let \\( u = 3x^2 + 2x + 1 \\).<br>\\( \\dfrac{dy}{du} = \\dfrac{1}{u} \\)<br>\\( \\dfrac{du}{dx} = 6x + 2 \\)<br>\\[ \\dfrac{dy}{dx} = \\dfrac{6x + 2}{3x^2 + 2x + 1} \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (\\sin x)^5 \\]",
  solution: "Let \\( u = \\sin x \\).<br>\\( \\dfrac{dy}{du} = 5u^4 \\)<br>\\( \\dfrac{du}{dx} = \\cos x \\)<br>\\[ \\dfrac{dy}{dx} = 5(\\sin x)^4\\cos x \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = \\cos(2x^3) \\]",
  solution: "Let \\( u = 2x^3 \\).<br>\\( \\dfrac{dy}{du} = -\\sin u \\)<br>\\( \\dfrac{du}{dx} = 6x^2 \\)<br>\\[ \\dfrac{dy}{dx} = -6x^2\\sin(2x^3) \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = (1 + e^x)^4 \\]",
  solution: "Let \\( u = 1 + e^x \\).<br>\\( \\dfrac{dy}{du} = 4u^3 \\)<br>\\( \\dfrac{du}{dx} = e^x \\)<br>\\[ \\dfrac{dy}{dx} = 4e^x(1 + e^x)^3 \\]"
},
{
  topic: "Differentiation - Chain Rule",
  level: "Year 13",
  question: "Use the chain rule to find \\( \\dfrac{dy}{dx} \\) when<br>\\[ y = \\sqrt{1 - \\cos x} \\]",
  solution: "Rewrite as \\( y = (1 - \\cos x)^{1/2} \\).<br>Let \\( u = 1 - \\cos x \\).<br>\\( \\dfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2} \\)<br>\\( \\dfrac{du}{dx} = \\sin x \\)<br>\\[ \\dfrac{dy}{dx} = \\dfrac{\\sin x}{2\\sqrt{1 - \\cos x}} \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\). Simplify your answer.<br>\\[ y = e^{-x}(\\sin x + \\cos x) \\]",
  solution: "Let \\( u = e^{-x} \\), \\( v = \\sin x + \\cos x \\).<br>\\[ \\dfrac{dy}{dx} = -2e^{-x}\\sin x \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Given that<br>\\[ y = x^4\\tan(2x) \\]<br>find \\( \\dfrac{dy}{dx} \\).",
  solution: "Let \\( u = x^4 \\), \\( v = \\tan(2x) \\).<br>\\[ \\dfrac{dy}{dx} = 4x^3\\tan(2x) + 2x^4\\sec^2(2x) \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x^2 e^{3x} \\]",
  solution: "Let \\( u = x^2 \\), \\( v = e^{3x} \\).<br>\\[ \\dfrac{dy}{dx} = 2xe^{3x} + 3x^2e^{3x} \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x\\ln x \\]",
  solution: "Let \\( u = x \\), \\( v = \\ln x \\).<br>\\[ \\dfrac{dy}{dx} = \\ln x + 1 \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x^3\\sin x \\]",
  solution: "Let \\( u = x^3 \\), \\( v = \\sin x \\).<br>\\[ \\dfrac{dy}{dx} = 3x^2\\sin x + x^3\\cos x \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = (2x - 1)e^x \\]",
  solution: "Let \\( u = 2x - 1 \\), \\( v = e^x \\).<br>\\[ \\dfrac{dy}{dx} = (2x + 1)e^x \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x^2\\ln(3x) \\]",
  solution: "Let \\( u = x^2 \\), \\( v = \\ln(3x) \\).<br>\\[ \\dfrac{dy}{dx} = 2x\\ln(3x) + x \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x\\cos(2x) \\]",
  solution: "Let \\( u = x \\), \\( v = \\cos(2x) \\).<br>\\[ \\dfrac{dy}{dx} = \\cos(2x) - 2x\\sin(2x) \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = (x^2 + 1)\\ln x \\]",
  solution: "Let \\( u = x^2 + 1 \\), \\( v = \\ln x \\).<br>\\[ \\dfrac{dy}{dx} = 2x\\ln x + x + \\dfrac{1}{x} \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = xe^{-2x} \\]",
  solution: "Let \\( u = x \\), \\( v = e^{-2x} \\).<br>\\[ \\dfrac{dy}{dx} = e^{-2x}(1 - 2x) \\]"
},
{
  topic: "Differentiation - Product Rule",
  level: "Year 13",
  question: "Use the product rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = x^2\\sin^2 x \\]",
  solution: "Let \\( u = x^2 \\), \\( v = \\sin^2 x \\).<br>\\[ \\dfrac{dy}{dx} = 2x\\sin^2 x + 2x^2\\sin x\\cos x \\]"
},

{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Given that \\[ y = \\dfrac{x^3}{\\sin x} \\]<br>find \\( \\dfrac{dy}{dx} \\).",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{3x^2\\sin x - x^3\\cos x}{\\sin^2 x} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Given that \\[ y = \\text{cosec }x \\]<br>use the quotient rule to show that<br>\\( \\dfrac{dy}{dx} = -\\text{cosec }x\\cot x \\).",
  solution: "\\[ \\dfrac{dy}{dx} = -\\text{cosec }x\\cot x \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Given that \\[ y = \\dfrac{x}{\\sqrt{2x - 2}} \\]<br>use the quotient rule to show that<br>\\( \\dfrac{dy}{dx} = \\dfrac{x - 2}{(2x - 2)^{3/2}} \\).",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{x - 2}{(2x - 2)^{3/2}} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{e^x}{x^2} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{xe^x - 2e^x}{x^3} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{\\ln x}{x} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{1 - \\ln x}{x^2} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{x^2 + 1}{x - 1} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{x^2 - 2x - 1}{(x - 1)^2} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{\\sin x}{x} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{x\\cos x - \\sin x}{x^2} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{x}{e^{2x}} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{1 - 2x}{e^{2x}} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{\\cos x}{x^2} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{-x\\sin x - 2\\cos x}{x^3} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{x^2}{\\ln x} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{x(2\\ln x - 1)}{(\\ln x)^2} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{\\tan x}{x} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{x\\sec^2 x - \\tan x}{x^2} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Use the quotient rule to find \\( \\dfrac{dy}{dx} \\).<br>\\[ y = \\dfrac{1}{x\\sin x} \\]",
  solution: "\\[ \\dfrac{dy}{dx} = -\\dfrac{\\sin x + x\\cos x}{x^2\\sin^2 x} \\]"
},


  

{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 3x^2 - 5x\\]",
  solution: "\\[\\frac{dy}{dx} = 6x - 5\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 2x^2 + 7x\\]",
  solution: "\\[\\frac{dy}{dx} = 4x + 7\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = x^2 - 4x\\]",
  solution: "\\[\\frac{dy}{dx} = 2x - 4\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 5x^2 - x\\]",
  solution: "\\[\\frac{dy}{dx} = 10x - 1\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 7x^2 + 3x\\]",
  solution: "\\[\\frac{dy}{dx} = 14x + 3\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = x^2 + 9x\\]",
  solution: "\\[\\frac{dy}{dx} = 2x + 9\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 6x^2 - 3x\\]",
  solution: "\\[\\frac{dy}{dx} = 12x - 3\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 2x^2 + 5x\\]",
  solution: "\\[\\frac{dy}{dx} = 4x + 5\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 9x^2 - 2x\\]",
  solution: "\\[\\frac{dy}{dx} = 18x - 2\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = x^2 - x\\]",
  solution: "\\[\\frac{dy}{dx} = 2x - 1\\]"
},
{
  topic: "Differentiation - First Principles",
  level: "Year 12",
  question: "Differentiate, from first principles:<br>\\[y = 4x^2 - 6x\\]",
  solution: "\\[\\frac{dy}{dx} = 8x - 6\\]"
},

  
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(x-3)(x+4)}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = x^{3/2} + x^{1/2} - 12x^{-1/2}\\]<br>\\[f'(x) = \\tfrac{3}{2}x^{1/2} + \\tfrac{1}{2}x^{-1/2} + 6x^{-3/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(2x+1)(x-5)}{x}\\]",
  solution: "\\[f(x) = 2x - 9 - 5x^{-1}\\]<br>\\[f'(x) = 2 + 5x^{-2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(x+2)^2}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = x^{3/2} + 4x^{1/2} + 4x^{-1/2}\\]<br>\\[f'(x) = \\tfrac{3}{2}x^{1/2} + 2x^{-1/2} - 2x^{-3/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(x-1)(x-2)}{x}\\]",
  solution: "\\[f(x) = x - 3 + 2x^{-1}\\]<br>\\[f'(x) = 1 - 2x^{-2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(3x-1)(x+2)}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = 3x^{3/2} + 5x^{1/2} - 2x^{-1/2}\\]<br>\\[f'(x) = \\tfrac{9}{2}x^{1/2} + \\tfrac{5}{2}x^{-1/2} + x^{-3/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{x(x-4)}{x^2}\\]",
  solution: "\\[f(x) = 1 - 4x^{-1}\\]<br>\\[f'(x) = 4x^{-2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{x^2 + 5x}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = x^{3/2} + 5x^{1/2}\\]<br>\\[f'(x) = \\tfrac{3}{2}x^{1/2} + \\tfrac{5}{2}x^{-1/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{2x^2 - 3x + 6}{x}\\]",
  solution: "\\[f(x) = 2x - 3 + 6x^{-1}\\]<br>\\[f'(x) = 2 - 6x^{-2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(x+5)(x-1)}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = x^{3/2} + 4x^{1/2} - 5x^{-1/2}\\]<br>\\[f'(x) = \\tfrac{3}{2}x^{1/2} + 2x^{-1/2} + \\tfrac{5}{2}x^{-3/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(2x-3)^2}{x}\\]",
  solution: "\\[f(x) = 4x - 12 + 9x^{-1}\\]<br>\\[f'(x) = 4 - 9x^{-2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{x^2 - 9}{\\sqrt{x}}\\]",
  solution: "\\[f(x) = x^{3/2} - 9x^{-1/2}\\]<br>\\[f'(x) = \\tfrac{3}{2}x^{1/2} + \\tfrac{9}{2}x^{-3/2}\\]"
},
{
  topic: "Differentiation - 1",
  level: "Year 12",
  question: "Find \\(f'(x)\\) when:<br>\\[f(x) = \\frac{(x+1)(x+3)}{x}\\]",
  solution: "\\[f(x) = x + 4 + 3x^{-1}\\]<br>\\[f'(x) = 1 - 3x^{-2}\\]"
},

{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - 3x)^4\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.994)^4\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 12x + 54x^2\\)<br>Using \\(x = 0.002\\)<br>Approximation: \\(0.9763\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + 2x)^5\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.02)^5\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 10x + 40x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(1.1041\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - 4x)^3\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.992)^3\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 12x + 48x^2\\)<br>Using \\(x = 0.002\\)<br>Approximation: \\(0.9762\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + 5x)^4\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.015)^4\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 20x + 150x^2\\)<br>Using \\(x = 0.003\\)<br>Approximation: \\(1.0614\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - 2x)^6\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.996)^6\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 12x + 60x^2\\)<br>Using \\(x = 0.002\\)<br>Approximation: \\(0.9761\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + 3x)^5\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.03)^5\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 15x + 90x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(1.1593\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - x)^8\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.99)^8\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 8x + 28x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(0.9227\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + 4x)^3\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.04)^3\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 12x + 48x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(1.1248\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - 5x)^4\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.975)^4\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 20x + 150x^2\\)<br>Using \\(x = 0.005\\)<br>Approximation: \\(0.9037\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + x)^6\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.01)^6\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 6x + 15x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(1.0615\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 - 3x)^5\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((0.985)^5\\) to 4 decimal places.",
  solution: "Expansion: \\(1 - 15x + 90x^2\\)<br>Using \\(x = 0.005\\)<br>Approximation: \\(0.9276\\)"
},
{
  topic: "Binomial Expansion - 2",
  level: "Year 12",
  question: "Find the first three terms in the expansion of: \\[(1 + 2x)^4\\] in ascending powers of \\(x\\).Use your expansion to approximate \\((1.02)^4\\) to 4 decimal places.",
  solution: "Expansion: \\(1 + 8x + 24x^2\\)<br>Using \\(x = 0.01\\)<br>Approximation: \\(1.0824\\)"
},

{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 1)\\) and \\((x + 2)\\) are factors of: \\[f(x) = x^3 + px^2 - 5x + q\\]<Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x - 1)(x + 2)(x - 3)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x + 1)\\) and \\((x - 4)\\) are factors of: \\[f(x) = 2x^3 + px^2 + x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(2x - 3)(x + 1)(x - 4)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x + 3)\\) and \\((x - 2)\\) are factors of: \\[f(x) = x^3 + px^2 - 11x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x + 3)(x - 2)(x - 5)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 2)\\) and \\((x + 4)\\) are factors of: \\[f(x) = 3x^3 + px^2 - 22x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(3x + 1)(x - 2)(x + 4)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 4)\\) and \\((x + 1)\\) are factors of: \\[f(x) = x^3 + px^2 - 22x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x - 4)(x + 1)(x + 6)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 1)\\) and \\((x - 3)\\) are factors of: \\[f(x) = 2x^3 + px^2 - 14x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(2x + 5)(x - 1)(x - 3)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x + 2)\\) and \\((x + 3)\\) are factors of: \\[f(x) = x^3 + px^2 - 14x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x + 2)(x + 3)(x - 4)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x + 1)\\) and \\((x - 5)\\) are factors of: \\[f(x) = 3x^3 + px^2 - 7x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(3x - 2)(x + 1)(x - 5)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 2)\\) and \\((x - 3)\\) are factors of: \\[f(x) = x^3 + px^2 + qx + 30\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x - 2)(x - 3)(x + 5)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x + 2)\\) and \\((x - 3)\\) are factors of: \\[f(x) = 2x^3 + px^2 + qx - 6\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(2x + 1)(x + 2)(x - 3)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 1)\\) and \\((x - 2)\\) are factors of: \\[f(x) = x^3 + px^2 - 10x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(x + 4)(x - 1)(x - 2)"
},
{
  topic: "Factor Theorem - 2",
  level: "Year 12",
  question: "Knowing that \\((x - 1)\\) and \\((x + 3)\\) are factors of: \\[f(x) = 3x^3 + px^2 - 5x + q\\]Find the values of \\(p\\) and \\(q\\), and fully factorise \\(f(x)\\).",
  solution: "(3x + 2)(x - 1)(x + 3)"
},

  
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 2x^3 + 5x^2 + ax - a\\]<br>If \\(x - 5\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = -75\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = x^3 - 4x^2 + ax + 6\\]<br>If \\(x + 2\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = -9\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 3x^3 + ax^2 - 7x - 6\\]<br>If \\(x - 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 10\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = x^3 + ax^2 - 9x + 5\\]<br>If \\(x + 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 3\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 2x^3 - ax^2 + 4x - 8\\]<br>If \\(x - 2\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 4\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = x^3 - 5x^2 + ax + 4\\]<br>If \\(x - 4\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = -4\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 4x^3 + x^2 - ax - 6\\]<br>If \\(x + 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 9\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = x^3 + 2x^2 + ax - 4\\]<br>If \\(x - 2\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = -6\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 3x^3 - 2x^2 + ax - 1\\]<br>If \\(x + 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 6\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 2x^3 + ax^2 - 3x - 4\\]<br>If \\(x - 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 5\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = x^3 - ax^2 + 6x - 8\\]<br>If \\(x - 2\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 4\\)"
},
{
  topic: "Factor Theorem",
  level: "Year 12",
  question: "The function \\(f(x)\\) is defined by:<br>\\[f(x) = 5x^3 + x^2 + ax - 7\\]<br>If \\(x + 1\\) is a factor of \\(f(x)\\), find \\(a\\).",
  solution: "\\(a = 11\\)"
},

  
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\cos^2(x) - 3\\sin(x) = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x \\approx 18°, 162°\\]"
},

{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[2\\tan^2(x) - 5\\tan(x) + 2 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x \\approx 27°, 63°, 207°, 243°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\sin^2(x) + 3\\cos(x) - 1 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 90°, 270°\\]"
},

{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\sin^2(x) - 4\\sin(x) + 3 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 90°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\tan^2(x) + 3\\tan(x) - 4 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x \\approx 45°, 104°, 225°, 284°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[1 - \\cos^2(x) - 2\\sin(x) + 1 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 90°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\tan^2(x) - 3\\tan(x) + 2 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x \\approx 45°, 63°, 225°, 243°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\cos^2(x) - 0.5\\cos(x) - 0.5 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 120°, 240°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\sin^2(x) - \\cos(x) - 1 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 90°, 180°, 270°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[2\\sin^2(x) - 5\\sin(x) + 2 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 30°, 150°\\]"
},
{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\tan^2(x) - 4\\tan(x) + 3 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x \\approx 45°, 72°, 225°, 252°\\]"
},

{
  topic: "Trig Equations",
  level: "Year 12",
  question: "Find all solutions of:<br>\\[\\sin^2(x) + 3\\sin(x) - 4 = 0\\]<br>for \\(0 < x < 360\\)°, giving your answers to the nearest degree.",
  solution: "\\[x = 90°\\]"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (0, 6) and the midpoint of (-2, 2) and (4, 10).",
  solution: "Midpoint: (1, 6)<br>Exact distance: 1"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (6, 3) and the midpoint of (1, -2) and (9, 6).",
  solution: "Midpoint: (5, 2)<br>Exact distance: √2"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (-3, -4) and the midpoint of (1, 0) and (7, 6).",
  solution: "Midpoint: (4, 3)<br>Exact distance: 7√2"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (4, -1) and the midpoint of (2, -6) and (10, 2).",
  solution: "Midpoint: (6, -2)<br>Exact distance: √5"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (3, 5) and the midpoint of (-3, 3) and (5, 11).",
  solution: "Midpoint: (1, 7)<br>Exact distance: 2√2"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (-2, 1) and the midpoint of (4, -3) and (8, 5).",
  solution: "Midpoint: (6, 1)<br>Exact distance: 8"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (3, -5) and the midpoint of (-1, -1) and (7, 3).",
  solution: "Midpoint: (3, 1)<br>Exact distance: 6"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (0, 0) and the midpoint of (6, 2) and (10, 6).",
  solution: "Midpoint: (8, 4)<br>Exact distance: 4√5"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (-5, 4) and the midpoint of (-1, 0) and (7, 8).",
  solution: "Midpoint: (3, 4)<br>Exact distance: 8"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between (4, 1) and the midpoint of (-2, -3) and (6, 5).",
  solution: "Midpoint: (2, 1)<br>Exact distance: 2"
},
  
  
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = x^2 - 2x + 3 \\quad \\text{and} \\quad x + y = 5\\]",
  solution: "\\[(-1.00, 6.00) \\text{ and } (2.00, 3.00)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = 2x^2 - 3x + 1 \\quad \\text{and} \\quad y = x + 2\\]",
  solution: "\\[(-0.22, 1.78) \\text{ and } (2.22, 4.22)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = x^2 + x - 2 \\quad \\text{and} \\quad y = 2x + 1\\]",
  solution: "\\[(-1.30, -1.61) \\text{ and } (2.30, 5.61)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = -x^2 + 4x - 1 \\quad \\text{and} \\quad y = x + 1\\]",
  solution: "\\[(1.00, 2.00) \\text{ and } (2.00, 3.00)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = x^2 + 3x + 2 \\quad \\text{and} \\quad y = 2x + 3\\]",
  solution: "\\[(0.62, 4.24) \\text{ and } (-1.62, -0.24)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = 3x^2 - 2x + 1 \\quad \\text{and} \\quad y = x + 5\\]",
  solution: "\\[(-0.76, 4.24) \\text{ and } (1.76, 6.76)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[x^2 + y^2 = 25 \\quad \\text{and} \\quad y = x + 1\\]",
  solution: "\\[(4.42, 5.42) \\text{ and } (-5.42, -4.42)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[x^2 + y^2 = 20 \\quad \\text{and} \\quad y = 2x - 2\\]",
  solution: "\\[(3.80, 5.59) \\text{ and } (-5.80, -13.59)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[x^2 + y^2 = 10 \\quad \\text{and} \\quad y = x - 1\\]",
  solution: "\\[(2.85, 1.85) \\text{ and } (-3.85, -4.85)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = -x^2 + 6 \\quad \\text{and} \\quad y = 2x + 1\\]",
  solution: "\\[(1.45, 3.90) \\text{ and } (-3.45, -5.90)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[y = x^2 - 4x + 3 \\quad \\text{and} \\quad y = 2\\]",
  solution: "\\[(0.27, 2.00) \\text{ and } (3.73, 2.00)\\]"
},
{
  topic: "Simultaneous Equations",
  level: "Year 12",
  question: "Find the coordinates of intersection:<br>\\[x^2 + y^2 = 13 \\quad \\text{and} \\quad y = x - 1\\]",
  solution: "\\[(3.27, 2.27) \\text{ and } (-4.27, -5.27)\\]"
},

{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 + 8x + 3\\]",
  solution: "\\[y = 2(x + 2)^2 - 5\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 - 12x + 7\\]",
  solution: "\\[y = 2(x - 3)^2 - 11\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 + 6x - 4\\]",
  solution: "\\[y = 3(x + 1)^2 - 7\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 - 18x + 5\\]",
  solution: "\\[y = 3(x - 3)^2 - 22\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 + 4x - 9\\]",
  solution: "\\[y = 2(x + 1)^2 - 11\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 + 12x + 1\\]",
  solution: "\\[y = 3(x + 2)^2 - 11\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 - 6x - 4\\]",
  solution: "\\[y = 2\\left(x - \\frac{3}{2}\\right)^2 - \\frac{17}{2}\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 - 4x + 6\\]",
  solution: "\\[y = 3\\left(x - \\frac{2}{3}\\right)^2 + \\frac{14}{3}\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 + 10x + 1\\]",
  solution: "\\[y = 2\\left(x + \\frac{5}{2}\\right)^2 - \\frac{23}{2}\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 + 2x - 1\\]",
  solution: "\\[y = 3\\left(x + \\frac{1}{3}\\right)^2 - \\frac{4}{3}\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 2x^2 - 2x + 5\\]",
  solution: "\\[y = 2\\left(x - \\frac{1}{2}\\right)^2 + \\frac{9}{2}\\]"
},
{
  topic: "Quadratics - Completing the Square",
  level: "Year 12",
  question: "Complete the square for:<br>\\[y = 3x^2 - 10x + 2\\]",
  solution: "\\[y = 3\\left(x - \\frac{5}{3}\\right)^2 - \\frac{19}{3}\\]"
},

{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[2^{x+3} = 5^{x-1}\\]",
  solution: "\\(x = 4.03\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[3^{x} = 7^{2x-1}\\]",
  solution: "\\(x = 0.69\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[5^{x+1} = 2^{3x}\\]",
  solution: "\\(x = 3.42\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[4^{x} = 10^{x-2}\\]",
  solution: "\\(x = 3.09\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[7^{x+2} = 3^{2x}\\]",
  solution: "\\(x = 2.68\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[9^{x-1} = 2^{x+3}\\]",
  solution: "\\(x = 3.38\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[6^{2x} = 5^{x+1}\\]",
  solution: "\\(x = 1.11\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[8^{x} = 3^{x+2}\\]",
  solution: "\\(x = 2.10\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[10^{x-1} = 4^{x+1}\\]",
  solution: "\\(x = 2.56\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[5^{2x-1} = 7^{x}\\]",
  solution: "\\(x = 1.84\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[3^{x+2} = 11^{x}\\]",
  solution: "\\(x = 1.29\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[4^{x-2} = 9^{x}\\]",
  solution: "\\(x = 0.62\\)"
},

{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between:<br>(-4, 5) and the midpoint of (1, 4) and (7, 8)",
  solution: "Midpoint: (4, 6)<br>Exact distance: \\(\\sqrt{65}\\)"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between:<br>(2, -1) and the midpoint of (4, 3) and (8, 7)",
  solution: "Midpoint: (6, 5)<br>Exact distance: \\(2\\sqrt{13}\\)"
},

{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{2}(x - 2) - \\log_{2}\\left(\\frac{1}{x}\\right) = 3\\]",
  solution: "\\[x = 4\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{3}(x) + \\log_{3}(x - 2) = 2\\]",
  solution: "\\[x = 1 + \\sqrt{10}\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{5}(2x - 1) = 1 + \\log_{5}(x)\\]",
  solution: "\\[\\text{No solution}\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{4}(x + 3) - \\log_{4}(x) = 1\\]",
  solution: "\\[x = 1\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{2}(3x - 1) + \\log_{2}(x) = 3\\]",
  solution: "\\[x = \\frac{1 + \\sqrt{97}}{6}\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{7}(x - 1) = \\log_{7}(2x - 5)\\]",
  solution: "\\[x = 4\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{3}(x + 1) - \\log_{3}(x - 1) = 1\\]",
  solution: "\\[x = 2\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{2}(x^{2} - 1) = 3\\]",
  solution: "\\[x = \\pm 3\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{5}(x) + \\log_{5}(x - 4) = 1\\]",
  solution: "\\[x = 5\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{4}(x) - \\log_{4}(x - 3) = 2\\]",
  solution: "\\[x = \\frac{16}{5}\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{2}(x + 1) + \\log_{2}(x - 1) = 4\\]",
  solution: "\\[x = \\sqrt{17}\\]"
},
{
  topic: "Logs - Solving",
  level: "Year 12",
  question: "Solve for x:<br>\\[\\log_{3}(2x) - \\log_{3}(x - 1) = 1\\]",
  solution: "\\[x = 3\\]"
},


{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{81} 27 \\times \\log_{16} 4\\]",
  solution: "3/8"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{8} 4 + \\log_{9} 3\\]",
  solution: "7/6"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{27} 9 - \\log_{16} 2\\]",
  solution: "5/12"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{32} 4 \\times \\log_{4} 8\\]",
  solution: "3/5"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{125} 5 + \\log_{25} 5\\]",
  solution: "5/6"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{16} 8 - \\log_{4} 2\\]",
  solution: "1/4"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{64} 16 \\times \\log_{8} 2\\]",
  solution: "2/9"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{49} 7 + \\log_{81} 9\\]",
  solution: "1"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{9} 27 \\div \\log_{3} 9\\]",
  solution: "3/4"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{4} 32 - \\log_{2} 4\\]",
  solution: "1/2"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{16} 2 \\times \\log_{8} 4\\]",
  solution: "1/6"
},
{
  topic: "Logs - Introduction",
  level: "Year 12",
  question: "Without using a calculator, evaluate:<br>\\[\\log_{27} 3 + \\log_{32} 2\\]",
  solution: "8/15"
},

{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{3}{1 + \\sqrt{2}}\\]",
  solution: "\\[-3 + 3\\sqrt{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{5}{2 - \\sqrt{3}}\\]",
  solution: "\\[10 + 5\\sqrt{3}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{7}{\\sqrt{3} + \\sqrt{2}}\\]",
  solution: "\\[7\\sqrt{3} - 7\\sqrt{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{4}{1 - \\sqrt{5}}\\]",
  solution: "\\[-1 - \\sqrt{5}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{6}{\\sqrt{6} + \\sqrt{2}}\\]",
  solution: "\\[\\frac{3\\sqrt{6}}{2} - \\frac{3\\sqrt{2}}{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{2}{3 + \\sqrt{7}}\\]",
  solution: "\\[3 - \\sqrt{7}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{5}{\\sqrt{5} - \\sqrt{3}}\\]",
  solution: "\\[\\frac{5\\sqrt{5}}{2} + \\frac{5\\sqrt{3}}{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{3}{1 + \\sqrt{3}}\\]",
  solution: "\\[-\\frac{3}{2} + \\frac{3\\sqrt{3}}{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{8}{2 - \\sqrt{2}}\\]",
  solution: "\\[8 + 4\\sqrt{2}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{7}{\\sqrt{2} + \\sqrt{5}}\\]",
  solution: "\\[-\\frac{7\\sqrt{2}}{3} + \\frac{7\\sqrt{5}}{3}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{9}{1 - \\sqrt{6}}\\]",
  solution: "\\[-\\frac{9}{5} - \\frac{9\\sqrt{6}}{5}\\]"
},
{
  topic: "Surds - Rationalising the Denominator",
  level: "Year 12",
  question: "Rationalise the denominator:<br>\\[\\frac{4}{\\sqrt{3} + \\sqrt{6}}\\]",
  solution: "\\[-\\frac{4\\sqrt{3}}{3} + \\frac{4\\sqrt{6}}{3}\\]"
},
  
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 2(x + 3)(x - 2)^2\\]",
  solution: "Cubic graph with roots x = -3, x = 2 (Turning Point), y-intercept = 24"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = (x - 1)(x + 2)(x - 3)\\]",
  solution: "Cubic graph with roots x = 1, x = -2, x = 3, y-intercept = 6"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = (x - 2)^2(x + 1)\\]",
  solution: "Cubic graph with roots x = 2 (Turning Point), x = -1, y-intercept = 4"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 2(x + 1)(x - 3)^2\\]",
  solution: "Cubic graph with roots x = -1, x = 3, y-intercept = 18"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = (x - 1)(x + 2)(x - 2)(x + 1)\\]",
  solution: "Quartic graph with roots x = 1, x = -2, x = 2, x = -1, y-intercept = 4"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = (x - 3)^2(x + 2)^2\\]",
  solution: "Quartic graph with roots x = 3 (Turning Point), x = -2 (Turning Point), y-intercept = 36"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 3(x + 1)^2(x - 2)\\]",
  solution: "Cubic graph with roots x = -1 (Turning Point), x = 2, y-intercept = -6"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 5(3x - 2)(x + 1)^2\\]",
  solution: "Cubic graph with roots x = 2/3, x = -1 (Turning Point), y-intercept = -10"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 2(x - 4)(x + 1)(x - 1)\\]",
  solution: "Cubic graph with roots x = 4, x = -1, x = 1, y-intercept = 8"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 5(x + 2)^2(x - 3)\\]",
  solution: "Cubic graph with roots x = -2 (Turning Point), x = 3, y-intercept = -60"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 3(x + 1)^2(x - 2)^2\\]",
  solution: "Quartic graph with roots x = -1 (Turning Point), x = 2 (Turning Point), y-intercept = 12"
},
{
  topic: "Graph Sketching",
  level: "Year 12",
  question: "Sketch the graph of:<br>\\[y = 5(x - 1)^2(x + 3)\\]",
  solution: "Cubic graph with roots x = 1 (Turning Point), x = -3, y-intercept = 15"
},

  
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the first three terms in the expansion of:<br>\\[(1 + 2x)^5\\]",
  solution: "1 + 10x + 40x^2"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the coefficient of \\(x^3\\) in the expansion of:<br>\\[(2 - 3x)^6\\]",
  solution: "-540"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the first four terms in the expansion of:<br>\\[(1 - x)^7\\]",
  solution: "1 - 7x + 21x^2 - 35x^3"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the coefficient of \\(x^4\\) in the expansion of:<br>\\[(3 + x)^6\\]",
  solution: "405"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Expand fully:<br>\\[(1 + x)^4\\]",
  solution: "1 + 4x + 6x^2 + 4x^3 + x^4"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the first three terms in the expansion of:<br>\\[(2 + x)^5\\]",
  solution: "32 + 80x + 80x^2"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the coefficient of \\(x^2\\) in the expansion of:<br>\\[(1 - 2x)^5\\]",
  solution: "40"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Expand fully:<br>\\[(2 + x)^3\\]",
  solution: "8 + 12x + 6x^2 + x^3"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the coefficient of \\(x^3\\) in the expansion of:<br>\\[(1 + 3x)^5\\]",
  solution: "405"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the first four terms in the expansion of:<br>\\[(1 + 2x)^4\\]",
  solution: "1 + 8x + 24x^2 + 32x^3"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Expand fully:<br>\\[(x + 1)^5\\]",
  solution: "x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1"
},
{
  topic: "Binomial Expansion",
  level: "Year 12",
  question: "Find the coefficient of \\(x^2\\) in the expansion of:<br>\\[(3 - x)^4\\]",
  solution: "54"
},

{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(-2, 8) \\text{ and } (2, 0)\\]",
  solution: "\\(y = \\frac{1}{2}x + 4\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(0, 4) \\text{ and } (6, 2)\\]",
  solution: "\\(y = 3x - 6\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(1, -3) \\text{ and } (5, 5)\\]",
  solution: "\\(y = -\\frac{1}{2}x + \\frac{5}{2}\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(-4, 1) \\text{ and } (2, 7)\\]",
  solution: "\\(y = -x + 3\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(3, 2) \\text{ and } (7, 2)\\]",
  solution: "\\(x = 5\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(-1, -2) \\text{ and } (-1, 6)\\]",
  solution: "\\(y = 2\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(2, -4) \\text{ and } (6, 4)\\]",
  solution: "\\(y = -\\frac{1}{2}x + 2\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(-6, 3) \\text{ and } (-2, -1)\\]",
  solution: "\\(y = x + 5\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(4, -2) \\text{ and } (8, 6)\\]",
  solution: "\\(y = -\\frac{1}{2}x + 5\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(-3, 5) \\text{ and } (1, 1)\\]",
  solution: "\\(y = x + 4\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(0, -2) \\text{ and } (4, 6)\\]",
  solution: "\\(y = -\\frac{1}{2}x + 3\\)"
},
{
  topic: "Geometry - Perpendicular Bisectors",
  level: "Year 12",
  question: "Find the perpendicular bisector of the line joining:\n\n\\[(5, 1) \\text{ and } (9, -3)\\]",
  solution: "\\(y = x - 8\\)"
},


  {
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of the circle:\n\n\\[x^2 + y^2 + 6x - 8y - 20 = 0\\]",
  solution: "Centre: (-3, 4), Radius: \\(3\\sqrt{5}\\)"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 - 4x + 10y + 9 = 0\\]",
  solution: "Centre: (2, -5), Radius: \\(\\sqrt{20}\\)"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the equation of a circle with centre (1, -2) and radius 5",
  solution: "\\[(x - 1)^2 + (y + 2)^2 = 25\\]"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 - 2x - 4y - 11 = 0\\]",
  solution: "Centre: (1, 2), Radius: 4"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the equation of a circle with centre (-3, 0) and radius \\(\\sqrt{10}\\)",
  solution: "\\[(x + 3)^2 + y^2 = 10\\]"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 + 8x + 6y + 9 = 0\\]",
  solution: "Centre: (-4, -3), Radius: 4"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the equation of a circle with centre (0, -1) and radius 3",
  solution: "\\[x^2 + (y + 1)^2 = 9\\]"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 - 10x + 2y + 13 = 0\\]",
  solution: "Centre: (5, -1), Radius: \\(\\sqrt{13}\\)"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the equation of a circle with centre (2, 3) and radius \\(\\sqrt{13}\\)",
  solution: "\\[(x - 2)^2 + (y - 3)^2 = 13\\]"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 + 12x - 16y + 64 = 0\\]",
  solution: "Centre: (-6, 8), Radius: 6"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the equation of a circle with centre (-1, -2) and radius 7",
  solution: "\\[(x + 1)^2 + (y + 2)^2 = 49\\]"
},
{
  topic: "Geometry - Equations of Circles",
  level: "Year 12",
  question: "Find the centre and radius (in exact form) of:\n\n\\[x^2 + y^2 - 14x + 10y + 49 = 0\\]",
  solution: "Centre: (7, -5), Radius: 5"
},

 
  {
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[x^2 - 5x + 6 > 0\\]",
  solution: "\\[x < 2 \\text{ or } x > 3\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[2x^2 - 7x + 3 \\le 0\\]",
  solution: "\\[\\frac{1}{2} \\le x \\le 3\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[x^2 + x - 6 \\ge 0\\]",
  solution: "\\[x \\le -3 \\text{ or } x \\ge 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[3x^2 - 5x - 2 < 0\\]",
  solution: "\\[-\\frac{1}{3} < x < 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[2x^2 - 3x - 2 > 0\\]",
  solution: "\\[x < -\\frac{1}{2} \\text{ or } x > 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[x^2 - 4x + 3 < 0\\]",
  solution: "\\[1 < x < 3\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[2x^2 + x - 6 \\ge 0\\]",
  solution: "\\[x \\le -2 \\text{ or } x \\ge \\frac{3}{2}\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[3x^2 - 4x - 4 < 0\\]",
  solution: "\\[-\\frac{2}{3} < x < 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[x^2 + 2x - 8 > 0\\]",
  solution: "\\[x < -4 \\text{ or } x > 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[2x^2 - 5x + 2 \\le 0\\]",
  solution: "\\[\\frac{1}{2} \\le x \\le 2\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[x^2 - 7x + 12 < 0\\]",
  solution: "\\[3 < x < 4\\]"
},
{
  topic: "Quadratic Inequalities",
  level: "Year 12",
  question: "Solve the inequality:\n\n\\[3x^2 + 2x - 8 \\ge 0\\]",
  solution: "\\[x \\le -2 \\text{ or } x \\ge \\frac{4}{3}\\]"
},


  {
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{(2x^{1/2})^3}{4x^2}\\]",
  solution: "\\[2x^{-1/2}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[(3x^{2})^{3} \\div x^{4}\\]",
  solution: "\\[27x^{2}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{5x^{3}y^{-2}}{10x^{-1}y^{4}}\\]",
  solution: "\\[\\frac{x^{4}}{2y^{6}}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[(4x^{1/3})^{6}\\]",
  solution: "\\[4096x^{2}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{(2x^{2}y)^{2}}{8xy^{3}}\\]",
  solution: "\\[\\frac{x^{3}}{2y}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[(x^{3/2})^{4} \\div x^{3}\\]",
  solution: "\\[x^{3}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[9x^{5} \\times 3x^{-2}\\]",
  solution: "\\[27x^{3}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{(6x^{1/2})^{2}}{3x}\\]",
  solution: "\\[12\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[(x^{-1}y^{2})^{3}\\]",
  solution: "\\[\\frac{y^{6}}{x^{3}}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{x^{4} \\times x^{1/2}}{x^{3/2}}\\]",
  solution: "\\[x^{3}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[(2x^{3/4})^{4}\\]",
  solution: "\\[16x^{3}\\]"
},
{
  topic: "Algebra - Simplifying Powers",
  level: "Year 12",
  question: "Simplify:\n\n\\[\\frac{a^{5/2}b^{-1}}{a^{1/2}b^{3}}\\]",
  solution: "\\[\\frac{a^{2}}{b^{4}}\\]"
},

  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(3x - 2)(x - 5)^2\\]",
    solution: "\\[3x^3 - 32x^2 + 95x - 50\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(x + 4)(2x - 3)^2\\]",
    solution: "\\[4x^3 + 4x^2 - 39x + 36\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(2x - 1)(x + 3)(x - 4)\\]",
    solution: "\\[2x^3 - 3x^2 - 19x + 12\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(x - 5)(x^2 + 2x - 3)\\]",
    solution: "\\[x^3 - 3x^2 - 13x + 15\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(4x + 1)(x - 2)^2\\]",
    solution: "\\[4x^3 - 15x^2 + 12x + 4\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(x + 1)^2(2x - 3)\\]",
    solution: "\\[2x^3 + x^2 - 4x - 3\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(3x - 4)(x^2 - x + 5)\\]",
    solution: "\\[3x^3 - 7x^2 + 19x - 20\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(2x + 5)(x - 1)(x + 2)\\]",
    solution: "\\[2x^3 + 7x^2 - x - 10\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(x - 3)^2(x + 4)\\]",
    solution: "\\[x^3 - 2x^2 - 15x + 36\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(5x - 2)(x^2 - 4)\\]",
    solution: "\\[5x^3 - 2x^2 - 20x + 8\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(x + 6)(x - 2)^2\\]",
    solution: "\\[x^3 + 2x^2 - 20x + 24\\]"
  },
  {
    topic: "Algebra - Expanding and Simplifying",
    level: "Year 12",
    question: "Expand and simplify:\n\n\\[(3x + 1)(x + 2)(x - 1)\\]",
    solution: "\\[3x^3 + 4x^2 - x - 2\\]"
  },

  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 4y - 3x = -7 \\]Point P is \\( (10,0) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y = -\\tfrac{4}{3}(x - 10) \\)<br>Shortest distance: \\( \\tfrac{13}{5} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 2x + y = 5 \\]Point P is \\( (1,4) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 4 = \\tfrac{1}{2}(x - 1) \\)<br>Shortest distance: \\( \\tfrac{1}{\\sqrt{5}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 3x - 4y + 12 = 0 \\]Point P is \\( (-2,1) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 1 = -\\tfrac{4}{3}(x + 2) \\)<br>Shortest distance: \\( \\tfrac{14}{5} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ x - 2y + 6 = 0 \\]Point P is \\( (4,1) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 1 = -2(x - 4) \\)<br>Shortest distance: \\( \\tfrac{4}{\\sqrt{5}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 5x + 12y - 1 = 0 \\]Point P is \\( (1,-2) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y + 2 = \\tfrac{12}{5}(x - 1) \\)<br>Shortest distance: \\( \\tfrac{28}{13} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ y = 3x - 4 \\]Point P is \\( (2,5) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 5 = -\\tfrac{1}{3}(x - 2) \\)<br>Shortest distance: \\( \\tfrac{2}{\\sqrt{10}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ y = -2x + 1 \\]Point P is \\( (3,-1) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y + 1 = \\tfrac{1}{2}(x - 3) \\)<br>Shortest distance: \\( \\tfrac{4}{\\sqrt{5}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 7x - y + 2 = 0 \\]Point P is \\( (0,3) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 3 = -\\tfrac{1}{7}x \\)<br>Shortest distance: \\( \\tfrac{5}{\\sqrt{50}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ x + y - 8 = 0 \\]Point P is \\( (6,1) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 1 = x - 6 \\)<br>Shortest distance: \\( \\tfrac{1}{\\sqrt{2}} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 4x + 3y = 12 \\]Point P is \\( (0,0) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y = \\tfrac{3}{4}x \\)<br>Shortest distance: \\( \\tfrac{12}{5} \\)"
  },
  {
    topic: "Geometry - Shortest Distances",
    level: "Year 12",
    question: "Line L has equation<br>\\[ 6x - 8y + 15 = 0 \\]Point P is \\( (1,2) \\).<br>Find the equation of the line perpendicular to L through P, and hence find the shortest distance from P to L.",
    solution: "Perpendicular line: \\( y - 2 = -\\tfrac{4}{3}(x - 1) \\)<br>Shortest distance: \\( \\tfrac{7}{5} \\)"
  },
  {
  topic: "Exponential Models",
  level: "Year 12",
  question: "A population of bacteria is modelled by \\(N = Ae^{kt}\\), where \\(t\\) is measured in hours. At \\(t=0\\), the population is 500. The population is increasing at a rate of 75 bacteria per hour when \\(t=0\\). Find the values of \\(A\\) and \\(k\\).",
  solution: "At \\(t=0\\), \\(A=500\\).<br>\\(\\frac{dN}{dt} = kAe^{kt}\\).<br>So \\(75 = 500k\\), giving \\(k=0.15\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "The mass of a radioactive substance is modelled by \\(M = Ae^{kt}\\), where \\(t\\) is in years. Initially the mass is 80g. After 5 years, the mass is 60g. Find the value of \\(k\\).",
  solution: "At \\(t=0\\), \\(A=80\\).<br>\\(60 = 80e^{5k}\\).<br>So \\(e^{5k}=0.75\\), hence \\(k=\\frac{\\ln(0.75)}{5}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A population is modelled by \\(P = Ae^{kt}\\). When \\(t=0\\), \\(P=1200\\). When \\(t=4\\), \\(P=1800\\). Find the value of \\(k\\).",
  solution: "Here \\(A=1200\\).<br>\\(1800 = 1200e^{4k}\\).<br>So \\(e^{4k}=1.5\\) and \\(k=\\frac{\\ln(1.5)}{4}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A quantity grows exponentially according to \\(Q = Ae^{kt}\\). Initially \\(Q=300\\). The rate of increase at \\(t=0\\) is 45 per unit time. Find \\(k\\).",
  solution: "At \\(t=0\\), \\(A=300\\).<br>\\(\\frac{dQ}{dt}=kAe^{kt}\\).<br>So \\(45=300k\\), giving \\(k=0.15\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A population is modelled by \\(N = Ae^{kt}\\). At \\(t=0\\), \\(N=2000\\). The population doubles after 6 years. Find the value of \\(k\\).",
  solution: "Here \\(A=2000\\).<br>\\(4000 = 2000e^{6k}\\).<br>So \\(e^{6k}=2\\) and \\(k=\\frac{\\ln 2}{6}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "The number of users of an app is modelled by \\(U = Ae^{kt}\\). Initially there are 1500 users. After 3 months there are 2100 users. Find \\(k\\).",
  solution: "At \\(t=0\\), \\(A=1500\\).<br>\\(2100 = 1500e^{3k}\\).<br>So \\(e^{3k}=1.4\\) and \\(k=\\frac{\\ln(1.4)}{3}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A quantity is modelled by \\(Q = Ae^{kt}\\). At \\(t=0\\), \\(Q=90\\). The rate of change at \\(t=0\\) is 9 units per hour. Find the value of \\(k\\).",
  solution: "Here \\(A=90\\).<br>\\(\\frac{dQ}{dt}=kAe^{kt}\\).<br>So \\(9=90k\\), giving \\(k=0.1\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "The value of a car is modelled by \\(V = Ae^{kt}\\), where \\(t\\) is in years. Initially the car is worth £18,000. After 4 years it is worth £12,000. Find \\(k\\).",
  solution: "At \\(t=0\\), \\(A=18000\\).<br>\\(12000 = 18000e^{4k}\\).<br>So \\(e^{4k}=\\frac{2}{3}\\) and \\(k=\\frac{\\ln(2/3)}{4}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A culture grows according to \\(N = Ae^{kt}\\). When \\(t=0\\), \\(N=400\\). When \\(t=2\\), \\(N=500\\). Find the value of \\(k\\).",
  solution: "Here \\(A=400\\).<br>\\(500 = 400e^{2k}\\).<br>So \\(e^{2k}=1.25\\) and \\(k=\\frac{\\ln(1.25)}{2}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A population follows the model \\(P = Ae^{kt}\\). At \\(t=0\\), the population is 1000 and the rate of increase is 120 per year. Find \\(k\\).",
  solution: "At \\(t=0\\), \\(A=1000\\).<br>\\(\\frac{dP}{dt}=kAe^{kt}\\).<br>So \\(120=1000k\\), giving \\(k=0.12\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "The number of bacteria is modelled by \\(N = Ae^{kt}\\). Initially there are 800 bacteria. After 10 hours there are 1000 bacteria. Find the value of \\(k\\).",
  solution: "Here \\(A=800\\).<br>\\(1000 = 800e^{10k}\\).<br>So \\(e^{10k}=1.25\\) and \\(k=\\frac{\\ln(1.25)}{10}\\)."
},

{
  topic: "Exponential Models",
  level: "Year 12",
  question: "A quantity is modelled by \\(Q = Ae^{kt}\\). At \\(t=0\\), \\(Q=250\\). The quantity is increasing at a rate of 50 units per hour at \\(t=0\\). Find \\(k\\).",
  solution: "At \\(t=0\\), \\(A=250\\).<br>\\(\\frac{dQ}{dt}=kAe^{kt}\\).<br>So \\(50=250k\\), giving \\(k=0.2\\)."
},



  {
    topic: "Data Presentation",
    level: "Year 12 - Stats",
    question: "I am currently building the Year 12 set of statistics questions.",
    solution: "The solution will be shown here."
  },
  {
    topic: "Moments",
    level: "Year 13 - Mechanics",
    question: "I am currently building the Year 13 set of mechanics questions.",
    solution: "The solution will be shown here."
  },
  {
    topic: "Normal Hypothesis Tests",
    level: "Year 13 - Stats",
    question: "I am currently building the Year 13 set of statistics questions.",
    solution: "The solution will be shown here."
  },

  
  ];
  
