const reviews = [
    // Original reviews
    { company: "Apple", review: "iOS Development Intern: Incredible opportunity to work on real iOS apps. The mentorship was outstanding, and I learned so much about Swift and iOS development." },
    { company: "Meta", review: "Frontend Engineering Intern: Great work environment and amazing perks. The codebase is massive but well-documented. Learned a ton about React and large-scale applications." },
    { company: "Netflix", review: "Backend Engineering Intern: Worked on real production systems that serve millions of users. The culture is amazing and everyone is super helpful." },
    { company: "Spotify", review: "Machine Learning Intern: Fascinating work on recommendation systems. Great work-life balance and amazing office culture." },
    { company: "JPMorgan Chase", review: "Investment Banking Analyst Intern: Incredible exposure to high-profile deals and excellent mentorship. The learning curve was steep but rewarding. Great networking opportunities." },
    { company: "Procter & Gamble", review: "Brand Management Intern: Worked on real brand strategy projects that impacted millions of consumers. Strong focus on leadership development and innovation." },
    { company: "Boeing", review: "Engineering Intern: Hands-on experience with cutting-edge aerospace technology. Amazing safety culture and emphasis on quality. Great work-life balance." },
    { company: "IBM", review: "Cloud Solutions Intern: Worked with enterprise clients on cloud migration projects. Strong emphasis on AI and hybrid cloud solutions. Great learning environment." },
    { company: "3M", review: "R&D Intern: Innovative environment with access to cutting-edge research. Worked on real product development projects. Excellent mentorship program." },
    { company: "Caterpillar", review: "Manufacturing Engineering Intern: Hands-on experience with heavy machinery and manufacturing processes. Strong focus on safety and efficiency. Great team environment." },
    // Additional reviews with different job titles
    { company: "IBM", review: "Product Management Intern: Excellent exposure to enterprise software development and stakeholder management." },
    { company: "IBM", review: "Cloud Engineering Intern: Great opportunity to work with cutting-edge cloud technologies and microservices." },
    { company: "Microsoft", review: "Software Engineering Intern: Fantastic mentorship program and modern development practices." },
    { company: "Microsoft", review: "Data Science Intern: Amazing opportunity to work with large-scale data and AI projects." },
    { company: "Amazon", review: "Frontend Development Intern: Great experience with modern web technologies and user experience design." },
    { company: "Amazon", review: "Backend Development Intern: Excellent exposure to distributed systems and cloud architecture." }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const list = document.getElementById("reviewsList");
  
    function getLogoUrl(company) {
      // Special cases for companies with spaces or special characters
      const logoMap = {
        "JPMorgan Chase": "jpmorganchase.com",
        "Procter & Gamble": "pg.com",
        "3M": "3m.com"
      };
      
      const domain = logoMap[company] || company.toLowerCase().replace(/[^a-z0-9]/g, '') + ".com";
      return `https://logo.clearbit.com/${domain}`;
    }

    function displayReviews(reviewsToShow) {
      list.innerHTML = "";
      reviewsToShow.forEach(r => {
        const card = document.createElement("div");
        card.className = "card review-card";
        
        const logo = document.createElement("img");
        logo.src = getLogoUrl(r.company);
        logo.alt = `${r.company} Logo`;
        logo.className = "company-logo";
        
        const company = document.createElement("div");
        company.className = "company";
        company.textContent = r.company;
        
        const review = document.createElement("p");
        review.textContent = r.review;
        
        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(review);
        list.appendChild(card);
      });
    }

    if (input) {
      input.addEventListener("input", () => {
        const term = input.value.toLowerCase();
        const filtered = reviews.filter(r => r.company.toLowerCase().includes(term));
        displayReviews(filtered);
      });
    }

    // Display all reviews initially
    displayReviews(reviews);
  });
  