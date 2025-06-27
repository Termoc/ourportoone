// Enhanced Navigation with scroll effects
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollTop = document.getElementById("scrollTop");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    scrollTop.classList.add("show");
  } else {
    navbar.classList.remove("scrolled");
    scrollTop.classList.remove("show");
  }
});

// Mobile menu toggle
const mobileMenu = document.getElementById("mobileMenu");
const navMenu = document.getElementById("navMenu");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Scroll to top functionality
document.getElementById("scrollTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all loading elements
document.querySelectorAll(".loading").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// Enhanced form submission with validation
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const inputs = this.querySelectorAll("input, select");

    // Add loading state to button
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Processing...";
    submitBtn.disabled = true;

    // Simulate form processing
    setTimeout(() => {
      // Success animation
      submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
      submitBtn.textContent = "Reservation Confirmed!";

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; border: 1px solid rgba(16, 185, 129, 0.3);">
              <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
              Thank you! Your reservation has been confirmed. We'll send you a confirmation email shortly.
            </div>
          `;
      this.appendChild(successMessage);

      // Reset form after 3 seconds
      setTimeout(() => {
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background =
          "linear-gradient(135deg, #d97706, #f59e0b)";
        successMessage.remove();
      }, 3000);
    }, 2000);
  });

// Add hover effects for menu cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click effects for feature items
document.querySelectorAll(".feature-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Add ripple effect
    const ripple = document.createElement("div");
    ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(217, 119, 6, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
          `;

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = event.clientX - rect.left - size / 2 + "px";
    ripple.style.top = event.clientY - rect.top - size / 2 + "px";

    this.style.position = "relative";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});

// Add floating animation to social icons
document.querySelectorAll(".social-icons a").forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.1}s`;
  icon.addEventListener("mouseenter", function () {
    this.style.animation = "bounce 0.6s ease-in-out";
  });

  icon.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

// Add bounce animation
const bounceStyle = document.createElement("style");
bounceStyle.textContent = `
        @keyframes bounce {
          0%, 20%, 60%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          80% { transform: translateY(-5px); }
        }
      `;
document.head.appendChild(bounceStyle);

// Enhanced loading animation on page load
window.addEventListener("load", function () {
  document.body.style.opacity = "1";

  // Stagger animation for navigation items
  document.querySelectorAll(".nav-a").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(-20px)";
    setTimeout(() => {
      item.style.transition = "all 0.4s ease-out";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// Add subtle cursor effects
document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".cursor");
  if (!cursor) {
    const newCursor = document.createElement("div");
    newCursor.className = "cursor";
    newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(217, 119, 6, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
          `;
    document.body.appendChild(newCursor);
  }

  const cursorElement = document.querySelector(".cursor");
  cursorElement.style.left = e.clientX - 10 + "px";
  cursorElement.style.top = e.clientY - 10 + "px";
});

// Add interactive hover states for buttons
document.querySelectorAll("button, .btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.transform = "scale(2)";
      cursor.style.background = "rgba(217, 119, 6, 0.5)";
    }
  });

  btn.addEventListener("mouseleave", function () {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.transform = "scale(1)";
      cursor.style.background = "rgba(217, 119, 6, 0.3)";
    }
  });
});

// Add typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect after page load
setTimeout(() => {
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
}, 1000);

// Enhanced footer interactions
document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector("button");
      const input = this.querySelector("input");
      const originalHTML = button.innerHTML;

      // Loading state
      button.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
      button.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Success state
        button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        button.style.background = "linear-gradient(135deg, #10b981, #059669)";
        input.value = "";

        // Reset after 3 seconds
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.background = "linear-gradient(135deg, #d97706, #f59e0b)";
          button.disabled = false;
        }, 3000);
      }, 2000);
    });
  }

  // Animate footer elements on scroll
  const footerElements = document.querySelectorAll(
    ".footer-section, .award-item, .contact-item, .social-link"
  );

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  footerElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    footerObserver.observe(el);
  });

  // Enhanced social link hover effects
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.05)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Floating animation for awards
  document.querySelectorAll(".award-item").forEach((item, index) => {
    item.style.animationDelay = `${index * 0.5}s`;
    item.addEventListener("mouseenter", function () {
      this.style.animation = "float 1s ease-in-out infinite";
    });

    item.addEventListener("mouseleave", function () {
      this.style.animation = "";
    });
  });

  // Add floating animation keyframes
  if (!document.querySelector("#footerAnimations")) {
    const style = document.createElement("style");
    style.id = "footerAnimations";
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(5px); }
        50% { transform: translateY(-5px) translateX(5px); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
      }
      
      .footer-waves .shape-fill {
        animation: wave 3s ease-in-out infinite;
      }
      
      @keyframes wave {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(-10px); }
      }
    `;
    document.head.appendChild(style);
  }

  // Add sparkle effect to brand logo
  const brandLogo = document.querySelector(".brand-logo h4");
  if (brandLogo) {
    brandLogo.addEventListener("mouseenter", function () {
      this.style.textShadow =
        "0 0 20px rgba(217, 119, 6, 0.8), 0 0 40px rgba(217, 119, 6, 0.4)";
    });

    brandLogo.addEventListener("mouseleave", function () {
      this.style.textShadow = "0 0 30px rgba(217, 119, 6, 0.3)";
    });
  }

  // Intersection observer for wave animation
  const footerWaves = document.querySelector(".footer-waves");
  if (footerWaves) {
    const wavesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-waves");
        }
      });
    });

    wavesObserver.observe(footerWaves);
  }
});
