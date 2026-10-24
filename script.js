document.getElementById("analyzeBtn").addEventListener("click", function () {
  const url = document.getElementById("url").value.trim();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const content = document.getElementById("content").value.trim();
  const keyword = document.getElementById("keyword").value.trim();

  if (!title || !description || !content || !keyword) {
    alert("Please fill in the title, description, content and keyword.");
    return;
  }

  let score = 0;
  const findings = [];
  const text = content.toLowerCase();
  const target = keyword.toLowerCase();

  if (url.startsWith("https://")) {
    score += 10;
    findings.push("HTTPS URL provided: good.");
  } else {
    findings.push("Use an HTTPS website URL.");
  }

  if (title.length >= 30 && title.length <= 60) {
    score += 20;
    findings.push("Title length is within a common SEO guideline.");
  } else {
    findings.push("Aim for a title around 30–60 characters.");
  }

  if (description.length >= 120 && description.length <= 160) {
    score += 20;
    findings.push("Meta description length looks good.");
  } else {
    findings.push("Aim for a meta description around 120–160 characters.");
  }

  if (text.includes(target)) {
    score += 25;
    findings.push("Target keyword appears in your content.");
  } else {
    findings.push("Include your target keyword naturally in the content.");
  }

  if (title.toLowerCase().includes(target)) {
    score += 10;
    findings.push("Target keyword appears in the title.");
  } else {
    findings.push("Consider including the target keyword in the title.");
  }

  if (content.split(/\s+/).filter(Boolean).length >= 300) {
    score += 15;
    findings.push("Content has at least 300 words.");
  } else {
    findings.push("Consider adding useful, relevant content.");
  }

  document.getElementById("score").textContent = score;
  document.getElementById("analysis").innerHTML = "";

  findings.forEach(function (finding) {
    const li = document.createElement("li");
    li.textContent = finding;
    document.getElementById("analysis").appendChild(li);
  });

  const suggestedTitle =
    keyword + " | Complete Guide";

  const suggestedDescription =
    "Discover " + keyword +
    " with helpful tips, practical advice and a complete guide. Explore the details today.";

  document.getElementById("suggestedTitle").textContent =
    suggestedTitle;

  document.getElementById("suggestedDescription").textContent =
    suggestedDescription;

  document.getElementById("keywords").textContent =
    [keyword, keyword + " guide", "best " + keyword].join(", ");
});

