const reviews = [
    { company: "Shopify", review: "Great culture, lots of learning." },
    { company: "Google", review: "Amazing mentorship and perks." },
    { company: "Meta", review: "High pressure but rewarding." },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const list = document.getElementById("reviewsList");
  
    if (input) {
      input.addEventListener("input", () => {
        const term = input.value.toLowerCase();
        list.innerHTML = "";
        const filtered = reviews.filter(r => r.company.toLowerCase().includes(term));
        filtered.forEach(r => {
          const li = document.createElement("li");
          li.textContent = `${r.company}: ${r.review}`;
          list.appendChild(li);
        });
      });
    }
  });
  