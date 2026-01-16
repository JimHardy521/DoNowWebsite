const alevelQuestions = [
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
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(4\\theta) + 2\\sin(3\\theta) - \\tan(2\\theta) \\approx A + B\\theta + C\\theta^2 \\]<br>where \\( A \\), \\( B \\) and \\( C \\) are constants to be found.",
  solution: "\\[ \\approx 1 + 4\\theta - 8\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(2\\theta) + \\cos(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + 2\\theta - \\tfrac{1}{2}\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 3\\tan(\\theta) - \\cos(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -1 + 3\\theta + 2\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(\\theta) + \\tan(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 3\\theta \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(3\\theta) - \\sin(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 - \\theta - \\tfrac{9}{2}\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 2\\cos(\\theta) + \\tan(3\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 2 + 3\\theta - \\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(3\\theta) - \\cos(2\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -1 + 3\\theta + 2\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\tan(\\theta) + \\cos(4\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + \\theta - 8\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\sin(2\\theta) - 2\\cos(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx -2 + 2\\theta + \\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\cos(\\theta) + \\tan(\\theta) - 1 \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx \\theta - \\tfrac{1}{2}\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ 2\\sin(\\theta) + \\cos(3\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx 1 + 2\\theta - \\tfrac{9}{2}\\theta^2 \\]"
},
{
  topic: "Small Angle Approximations",
  level: "Year 13",
  question: "Show that, for small values of \\( \\theta \\) (measured in radians):<br>\\[ \\tan(2\\theta) - \\sin(\\theta) \\approx A + B\\theta + C\\theta^2 \\].",
  solution: "\\[ \\approx \\theta \\]"
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
  solution: "\\(x = 0.71\\)"
},
{
  topic: "Solving Exponentials",
  level: "Year 12",
  question: "Solve to 2 d.p.:<br>\\[5^{x+1} = 2^{3x}\\]",
  solution: "\\(x = 1.44\\)"
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
  question: "Find the exact distance between:<br>\\[(-4, 5)\\]<br>and the midpoint of \\[(1, 4)\\] and \\[(7, 8)\\]",
  solution: "Midpoint: (4, 6)<br>Exact distance: \\(\\sqrt{65}\\)"
},
{
  topic: "Geometry - Distances Two Coords",
  level: "Year 12",
  question: "Find the exact distance between:<br>\\[(2, -1)\\]<br>and the midpoint of \\[(4, 3)\\] and \\[(8, 7)\\]",
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
  }
  
  ];
  
