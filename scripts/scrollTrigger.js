// @ts-nocheck

// Handle header background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > header?.offsetHeight) {
    header?.setAttribute("data-background", "true");
  } else {
    header?.setAttribute("data-background", "false");
  }
});

// Scroll animation

//Intersection Observer
const itemsToAnimate = document.querySelectorAll("[data-animated]");

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-animated", "true");
      } else {
        entry.target.setAttribute("data-animated", "false");
      }
    });
  },
  {
    rootMargin: "-10% 0px 0px 0px",
  }
);

for (const item of itemsToAnimate) {
  animationObserver.observe(item);
}

//Mutation Observer
// Define the elements to observe
const elementsToObserve = [".skills__categories"];

// Create a MutationObserver instance
const mutationObserver = new MutationObserver((mutations) => {
  // Loop over each mutation that just occured
  for (let mutation of mutations) {
    // Check if any nodes were added
    if (mutation.addedNodes.length) {
      // Loop over each added node
      for (let node of mutation.addedNodes) {
        // Check if the added node is an element and if it has the 'data-animated' attribute
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.hasAttribute("data-animated")
        ) {
          // Observe this element with the IntersectionObserver
          animationObserver.observe(node);
        }
      }
    }
  }
});

// Start observing
for (let selector of elementsToObserve) {
  const element = document.querySelector(selector);
  if (element) {
    mutationObserver.observe(element, { childList: true, subtree: true });
  }
}
