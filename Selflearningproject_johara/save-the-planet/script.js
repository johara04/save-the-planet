// Intersection Observer (ADVANCED)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(el => observer.observe(el));
  
  
  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;
  
    document.getElementById("progress-bar").style.width = scrolled + "%";
  });
  
  
  // Dynamic background color shift
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const body = document.body;
  
    if (scrollY < 500) {
      body.style.backgroundColor = "#d4f7dc";
    } else if (scrollY < 1200) {
      body.style.backgroundColor = "#777";
    } else {
      body.style.backgroundColor = "#cce5ff";
    }
  });