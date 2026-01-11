// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const navMobile = document.querySelector(".nav-mobile")

if (mobileMenuToggle && navMobile) {
  mobileMenuToggle.addEventListener("click", () => {
    const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true"
    mobileMenuToggle.setAttribute("aria-expanded", !isExpanded)
    navMobile.classList.toggle("active")
  })

  // Close mobile menu when clicking a link
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      navMobile.classList.remove("active")
    })
  })
}

// Accordion Functionality
function initAccordion(containerSelector, headerSelector, contentSelector) {
  const items = document.querySelectorAll(containerSelector)

  items.forEach((container) => {
    const headers = container.querySelectorAll(headerSelector)

    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const isExpanded = header.getAttribute("aria-expanded") === "true"
        const content = header.nextElementSibling

        // Close all other items in this accordion
        headers.forEach((otherHeader) => {
          if (otherHeader !== header) {
            otherHeader.setAttribute("aria-expanded", "false")
            otherHeader.nextElementSibling.classList.remove("active")
          }
        })

        // Toggle current item
        header.setAttribute("aria-expanded", !isExpanded)
        content.classList.toggle("active")
      })
    })
  })
}

// Initialize all accordions
initAccordion(".accordion", ".accordion-header", ".accordion-content")
initAccordion(".faq-accordion", ".faq-question", ".faq-answer")

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element)
})

// Forms are now handled by Google Forms - no local form processing needed

// Smooth scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")

    // Skip if it's just '#' or empty
    if (href === "#" || href === "") return

    e.preventDefault()
    const target = document.querySelector(href)

    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background on scroll
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"
  } else {
    header.style.boxShadow = ""
  }

  lastScroll = currentScroll
})

// Language functionality
let currentLanguage = "en"

function translatePage(lang) {
  currentLanguage = lang
  const elements = document.querySelectorAll("[data-en][data-zh]")

  elements.forEach((element) => {
    const text = lang === "zh" ? element.getAttribute("data-zh") : element.getAttribute("data-en")
    if (text) {
      // For input elements, update placeholder
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = text
      }
      // For select options
      else if (element.tagName === "OPTION") {
        element.textContent = text
      }
      // For other elements, update text content
      else {
        element.textContent = text
      }
    }
  })

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  if (lang === "en") {
    document.getElementById("langEN")?.classList.add("active")
    document.getElementById("langENMobile")?.classList.add("active")
  } else {
    document.getElementById("langZH")?.classList.add("active")
    document.getElementById("langZHMobile")?.classList.add("active")
  }

  // Store language preference
  localStorage.setItem("preferredLanguage", lang)
}

// Language buttons (desktop and mobile)
document.getElementById("langEN")?.addEventListener("click", () => translatePage("en"))
document.getElementById("langZH")?.addEventListener("click", () => translatePage("zh"))
document.getElementById("langENMobile")?.addEventListener("click", () => translatePage("en"))
document.getElementById("langZHMobile")?.addEventListener("click", () => translatePage("zh"))

// Load saved language preference
const savedLanguage = localStorage.getItem("preferredLanguage")
if (savedLanguage) {
  translatePage(savedLanguage)
}
