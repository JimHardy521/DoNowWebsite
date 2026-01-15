const alevelQuestions = [
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
  question: "Given that<br>\\[ y = \\dfrac{x^3}{\\sin x} \\]<br>find \\( \\dfrac{dy}{dx} \\).",
  solution: "\\[ \\dfrac{dy}{dx} = \\dfrac{3x^2\\sin x - x^3\\cos x}{\\sin^2 x} \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Given that<br>\\[ y = \\cosec x \\]<br>use the quotient rule to show that<br>\\( \\dfrac{dy}{dx} = -\\cosec x\\cot x \\).",
  solution: "\\[ \\dfrac{dy}{dx} = -\\cosec x\\cot x \\]"
},
{
  topic: "Differentiation - Quotient Rule",
  level: "Year 13",
  question: "Given that<br>\\[ y = \\dfrac{x}{\\sqrt{2x - 2}} \\]<br>use the quotient rule to show that<br>\\( \\dfrac{dy}{dx} = \\dfrac{x - 2}{(2x - 2)^{3/2}} \\).",
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
}



  ];
  
