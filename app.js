let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.getElementById("result");

const statusBar = document.getElementById("status-bar");
const resultsHeader = document.getElementById("results-header");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value.trim();
  if (!country) return;
  console.log(country);


  statusBar.innerHTML = `<span class="dot-loader"><span></span><span></span><span></span></span> Searching universities in <strong>${country}</strong>…`;
  statusBar.className = "status-bar loading";
  list.innerHTML = "";
  resultsHeader.innerHTML = "";

  let colleges = await getCollege(country);
  show(colleges, country);
});

function show(colleges, country) {
  list.innerHTML = "";

  if (colleges.length === 0) {
    statusBar.textContent = "No results found. Try a different country name.";
    statusBar.className = "status-bar error";
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">◎</div><p>No universities found for "${country}".</p></div>`;
    resultsHeader.innerHTML = "";
    return;
  }

  statusBar.textContent = "";
  statusBar.className = "status-bar";
  resultsHeader.innerHTML = `
        <span class="country-name">${country}</span>
        <span class="count-badge">${colleges.length} institution${colleges.length !== 1 ? "s" : ""} found</span>
    `;

  for (college of colleges) {
    console.log(college.name);
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log("ERROR: ", error);
    statusBar.textContent = "Network error. Please try again.";
    statusBar.className = "status-bar error";
    return [];
  }
}
