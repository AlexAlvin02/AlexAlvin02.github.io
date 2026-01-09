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

// Form Submission Handlers
function generateEnquirySummary(formData) {
  let summary = ""
  for (const [key, value] of formData.entries()) {
    if (value && key !== "consent") {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
      summary += `<p><strong>${label}:</strong> ${value}</p>`
    }
  }
  return summary
}

function generateMailtoLink(formData, subject) {
  const body = Array.from(formData.entries())
    .filter(([key, value]) => value && key !== "consent")
    .map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
      return `${label}: ${value}`
    })
    .join("\n")

  return `mailto:khoohunkhiang@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function showModal(summary, mailtoLink) {
  const modal = document.getElementById("formModal")
  const modalBody = document.getElementById("modalBody")
  const copyButton = document.getElementById("copyButton")
  const mailtoButton = document.getElementById("mailtoButton")

  modalBody.innerHTML = summary
  mailtoButton.href = mailtoLink
  modal.classList.add("active")
  modal.setAttribute("aria-hidden", "false")

  // Copy to clipboard functionality
  copyButton.onclick = () => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = summary
    const text = tempDiv.textContent || tempDiv.innerText

    navigator.clipboard
      .writeText(text)
      .then(() => {
        const originalText = copyButton.textContent
        copyButton.textContent = "Copied!"
        copyButton.style.background = "#16a34a"

        setTimeout(() => {
          copyButton.textContent = originalText
          copyButton.style.background = ""
        }, 2000)
      })
      .catch((err) => {
        console.error("[v0] Failed to copy:", err)
        alert("Failed to copy to clipboard. Please try the email draft option.")
      })
  }
}

function closeModal() {
  const modal = document.getElementById("formModal")
  modal.classList.remove("active")
  modal.setAttribute("aria-hidden", "true")
}

// Close modal on background click or close button
document.getElementById("formModal")?.addEventListener("click", (e) => {
  if (e.target.id === "formModal" || e.target.classList.contains("modal-close")) {
    closeModal()
  }
})

// Contact Form
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const summary = generateEnquirySummary(formData)
    const mailtoLink = generateMailtoLink(formData, "New Enquiry from Website")

    showModal(summary, mailtoLink)
    contactForm.reset()
  })
}

// Join Form
const joinForm = document.getElementById("joinForm")
if (joinForm) {
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(joinForm)
    const summary = generateEnquirySummary(formData)
    const mailtoLink = generateMailtoLink(formData, "Agent Application from Website")

    showModal(summary, mailtoLink)
    joinForm.reset()
  })
}

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

// Language toggle functionality
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

  // Store language preference
  localStorage.setItem("preferredLanguage", lang)
}

// Language toggle button
const languageToggle = document.getElementById("languageToggle")
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const newLang = currentLanguage === "en" ? "zh" : "en"
    translatePage(newLang)
  })
}

// Load saved language preference
const savedLanguage = localStorage.getItem("preferredLanguage")
if (savedLanguage) {
  translatePage(savedLanguage)
}
