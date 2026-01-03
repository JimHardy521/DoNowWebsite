function createNavBar(currentPage) {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul class="nav-bar">
      <li><a href="index.html" ${currentPage==="index.html"?"class='active'":""}>GCSE Maths</a></li>
      <li><a href="l2further.html" ${currentPage==="l2further.html"?"class='active'":""}>Level 2 Further Maths</a></li>
      <li><a href="alevel.html" ${currentPage==="al12.html"?"class='active'":""}>A-Level Maths</a></li>
      <li><a href="alevelfurther.html" ${currentPage==="alfurther12.html"?"class='active'":""}>A-Level Further Maths</a></li>
    </ul>
  `;
  document.body.prepend(nav);
}
