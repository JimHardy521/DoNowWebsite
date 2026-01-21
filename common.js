function createNavBar(currentPage) {

  /* ------------------------------
     Inject CSS for nav search bar
     ------------------------------ */
  const style = document.createElement("style");
  style.textContent = `
    .nav-search {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: 10px;
    }

    .nav-search input {
      padding: 5px 8px;
      font-size: 0.9rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 150px;
    }

    .nav-search input:focus {
      outline: none;
      border-color: #007acc;
    }

    .nav-search button {
      padding: 5px 10px;
      font-size: 0.9rem;
      border: none;
      border-radius: 4px;
      background-color: #007acc;
      color: white;
      cursor: pointer;
    }

    .nav-search button:hover {
      background-color: #005fa3;
    }
  `;
  document.head.appendChild(style);

  /* ------------------------------
     Build navigation bar
     ------------------------------ */
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul class="nav-bar">
      <li><a href="index.html" ${currentPage==="index.html"?"class='active'":""}>GCSE Maths</a></li>
      <li><a href="l2further.html" ${currentPage==="l2further.html"?"class='active'":""}>Level 2 Further</a></li>
      <li><a href="alevel.html" ${currentPage==="alevel.html"?"class='active'":""}>A-Level Maths</a></li>
      <li><a href="alevelfurther.html" ${currentPage==="alevelfurther.html"?"class='active'":""}>A-Level Further</a></li>
      <li><a href="about.html" ${currentPage==="about.html"?"class='active'":""}>About</a></li>
      <!-- Search bar -->
      <li class="nav-search">
        <input
          type="text"
          id="topicSearchInput"
          placeholder="Search topic…"
        >
        <button id="topicSearchBtn">Search</button>
      </li>


    </ul>
  `;

  document.body.prepend(nav);

  /* ------------------------------
     Capture & store search input
     ------------------------------ */
  const searchBtn = document.getElementById("topicSearchBtn");
  const searchInput = document.getElementById("topicSearchInput");

  searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.trim();

    // Ignore empty searches
    if (searchText === "") {
      return;
    }

    // Store search text for use on another page
    sessionStorage.setItem("topicSearch", searchText);

       // Redirect to search results page
    window.location.href = "searchResults.html";
  });
}
