const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");

const searchItems = [...document.querySelectorAll("[data-search]")].map(el => ({
  text: el.dataset.search,
  title: el.querySelector("h3")?.textContent || "EON story",
  element: el
}));

function renderSearch(query = "") {
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = `<p class="section-intro">Try “coal”, “electricity”, “policy”, “nuclear” or “renewables”.</p>`;
    return;
  }
  const matches = searchItems.filter(item => item.text.toLowerCase().includes(q));
  searchResults.innerHTML = matches.length
    ? matches.map(item => `<div class="search-result"><strong>${item.title}</strong><small>EON demo story</small></div>`).join("")
    : `<p class="section-intro">No matching demo stories yet.</p>`;
}

openSearch?.addEventListener("click", () => {
  searchModal.classList.add("open");
  searchModal.setAttribute("aria-hidden", "false");
  renderSearch();
  setTimeout(() => searchInput.focus(), 50);
});
closeSearch?.addEventListener("click", () => {
  searchModal.classList.remove("open");
  searchModal.setAttribute("aria-hidden", "true");
});
searchInput?.addEventListener("input", e => renderSearch(e.target.value));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") searchModal?.classList.remove("open");
});

document.querySelectorAll(".like-btn").forEach(btn => {
  const key = `eon-like-${btn.dataset.like}`;
  let liked = localStorage.getItem(key) === "1";
  if (liked) btn.firstChild.textContent = "♥ ";
  btn.addEventListener("click", () => {
    liked = !liked;
    localStorage.setItem(key, liked ? "1" : "0");
    btn.firstChild.textContent = liked ? "♥ " : "♡ ";
    const count = btn.querySelector("span");
    count.textContent = String(Math.max(0, Number(count.textContent) + (liked ? 1 : -1)));
  });
});

document.querySelectorAll(".comment-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.comment);
    const text = prompt("Add your comment:");
    if (!text?.trim()) return;
    const div = document.createElement("div");
    div.className = "comment";
    div.textContent = text.trim();
    target.appendChild(div);
  });
});

document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.dataset.share;
    if (navigator.share) {
      try { await navigator.share({ title: "EON — Energy Outlook Nexus", text, url: location.href }); }
      catch (_) {}
    } else {
      try { await navigator.clipboard.writeText(text); alert("Post text copied. You can paste it on another platform."); }
      catch (_) { alert(text); }
    }
  });
});

const form = document.getElementById("writeForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const post = {
    author: document.getElementById("authorName").value.trim(),
    email: document.getElementById("authorEmail").value.trim(),
    title: document.getElementById("postTitle").value.trim(),
    category: document.getElementById("postCategory").value,
    body: document.getElementById("postBody").value.trim()
  };
  const saved = JSON.parse(localStorage.getItem("eon-submissions") || "[]");
  saved.unshift(post);
  localStorage.setItem("eon-submissions", JSON.stringify(saved));
  alert("Thanks! Your submission is saved in this demo and would go to EON moderation in production.");
  form.reset();
});
