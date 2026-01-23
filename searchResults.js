// Build the nav bar
createNavBar("searchResults.html");

// Get stored search term
const searchTerm = sessionStorage.getItem("topicSearch");
const searchSummary = document.getElementById("searchSummary");
const resultsList = document.getElementById("resultsList");

// ------------------ HELPER: get example question ------------------
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

  // ------------------ GCSE ------------------
  const gcseMatches = new Set();
  gcseQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      gcseMatches.add(`${q.level}||${q.topic}`);
    }
  });

  gcseMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `practice2.html?source=gcse&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`;
    a.textContent = `GCSE Maths – ${level} – ${topic}`;
    a.style.textDecoration = "none";
    a.style.color = "#007acc";

    const preview = document.createElement("span");
    preview.className = "preview-cell";
    preview.innerHTML = `
      <span class="preview-icon">👁️</span>
      <div class="tooltip">
        ${getExampleQuestion("gcse", topic, level)}
      </div>
    `;

    li.appendChild(a);
    li.appendChild(preview);
    resultsList.appendChild(li);
  });

  // ------------------ L2 Further ------------------
  const l2Matches = new Set();
  l2FurtherQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      l2Matches.add(q.topic);
    }
  });

  l2Matches.forEach(topic => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `practice2.html?source=l2further&topic=${encodeURIComponent(topic)}`;
    a.textContent = `Level 2 Further – ${topic}`;
    a.style.textDecoration = "none";
    a.style.color = "#007acc";

    const preview = document.createElement("span");
    preview.className = "preview-cell";
    preview.innerHTML = `
      <span class="preview-icon">👁️</span>
      <div class="tooltip">
        ${getExampleQuestion("l2further", topic)}
      </div>
    `;

    li.appendChild(a);
    li.appendChild(preview);
    resultsList.appendChild(li);
  });

  // ------------------ A Level ------------------
  const alevelMatches = new Set();
  alevelQuestions.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      alevelMatches.add(`${q.level}||${q.topic}`);
    }
  });

  alevelMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `practice2.html?source=alevel&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`;
    a.textContent = `A Level – ${level} – ${topic}`;
    a.style.textDecoration = "none";
    a.style.color = "#007acc";

    const preview = document.createElement("span");
    preview.className = "preview-cell";
    preview.innerHTML = `
      <span class="preview-icon">👁️</span>
      <div class="tooltip">
        ${getExampleQuestion("alevel", topic, level)}
      </div>
    `;

    li.appendChild(a);
    li.appendChild(preview);
    resultsList.appendChild(li);
  });

  // ------------------ A Level Further ------------------
  const alevelFurtherMatches = new Set();
  alevelfurther.forEach(q => {
    if (q.topic.toLowerCase().includes(searchLower)) {
      alevelFurtherMatches.add(`${q.level}||${q.topic}`);
    }
  });

  alevelFurtherMatches.forEach(entry => {
    const [level, topic] = entry.split("||");
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `practice2.html?source=alevelfurther&topic=${encodeURIComponent(topic)}&year=${encodeURIComponent(level)}`;
    a.textContent = `A Level Further – ${level} – ${topic}`;
    a.style.textDecoration = "none";
    a.style.color = "#007acc";

    const preview = document.createElement("span");
    preview.className = "preview-cell";
    preview.innerHTML = `
      <span class="preview-icon">👁️</span>
      <div class="tooltip">
        ${getExampleQuestion("alevelfurther", topic, level)}
      </div>
    `;

    li.appendChild(a);
    li.appendChild(preview);
    resultsList.appendChild(li);
  });

  // ------------------ No results ------------------
  if (resultsList.children.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No matching topics found.";
    resultsList.appendChild(li);
  }

  // ✅ MathJax fix (same as revision.html)
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}
