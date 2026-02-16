createNavBar("searchResults.html");

const searchTerm = sessionStorage.getItem("topicSearch");
const searchSummary = document.getElementById("searchSummary");
const resultsList = document.getElementById("resultsList");

function getExampleQuestion(source, topic, level) {
  let data = [];

  if (source === "gcse") data = gcseQuestions;
  if (source === "l2further") data = l2FurtherQuestions;
  if (source === "alevel") data = alevelQuestions;
  if (source === "alevelfurther") data = alevelfurther;

  const match = data.find(q =>
    q.topic === topic &&
    (!level || q.level === level)
  );

  return match ? match.question : "Preview coming soon.";
}

if (!searchTerm) {
  searchSummary.textContent = "No search term found.";
} else {

  searchSummary.textContent = `Results for "${searchTerm}"`;
  const searchLower = searchTerm.toLowerCase();
  const results = [];

  const levelOrder = {
    "Foundation": 1,
    "Crossover": 2,
    "Higher": 3,
    "Year 12": 5,
    "Year 13": 6
  };

  const groupOrder = {
    "GCSE": 1,
    "Level 2 Further": 2,
    "A Level": 3,
    "A Level Further": 4
  };

  // GCSE
  const gcseMatches = new Set();
  gcseQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      gcseMatches.add(`${q.level}||${q.topic}`);
    }
  });

  gcseMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    results.push({
      group: "GCSE",
      level,
      topic,
      source: "gcse",
      url: `practice2.html?source=gcse&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`
    });
  });

  // Level 2 Further
  const l2Matches = new Set();
  l2FurtherQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      l2Matches.add(q.topic);
    }
  });

  l2Matches.forEach(topic => {
    results.push({
      group: "Level 2 Further",
      level: "",
      topic,
      source: "l2further",
      url: `practice2.html?source=l2further&topic=${encodeURIComponent(topic)}`
    });
  });

  // A Level
  const alevelMatches = new Set();
  alevelQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      alevelMatches.add(`${q.level}||${q.topic}`);
    }
  });

  alevelMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    results.push({
      group: "A Level",
      level,
      topic,
      source: "alevel",
      url: `practice2.html?source=alevel&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`
    });
  });

  // A Level Further
  const alevelFurtherMatches = new Set();
  alevelfurther.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      alevelFurtherMatches.add(`${q.level}||${q.topic}`);
    }
  });

  alevelFurtherMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    results.push({
      group: "A Level Further",
      level,
      topic,
      source: "alevelfurther",
      url: `practice2.html?source=alevelfurther&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`
    });
  });

  // SORT
  results.sort((a, b) => {
    const groupDiff = groupOrder[a.group] - groupOrder[b.group];
    if (groupDiff !== 0) return groupDiff;

    if (a.level && b.level) {
      const levelDiff = (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99);
      if (levelDiff !== 0) return levelDiff;
    }

    return a.topic.localeCompare(b.topic);
  });

  // RENDER
  if (results.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No matching topics found.";
    resultsList.appendChild(li);
  } else {

    results.forEach(result => {

      const li = document.createElement("li");
      li.classList.add(result.group.toLowerCase().replace(/\s+/g, "-"));

      const a = document.createElement("a");
      a.href = result.url;

      if (result.level) {
        a.textContent = `${result.group} – ${result.level} – ${result.topic}`;
      } else {
        a.textContent = `${result.group} – ${result.topic}`;
      }

      const preview = document.createElement("span");
      preview.className = "preview-cell";
      preview.innerHTML = `
        <span class="preview-icon">👁️</span>
        <div class="tooltip">
          ${getExampleQuestion(result.source, result.topic, result.level)}
        </div>
      `;

      li.appendChild(a);
      li.appendChild(preview);
      resultsList.appendChild(li);
    });
  }

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}
