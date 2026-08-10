/* ============================================================
   BCA Admissions Banner — script.js
   - staggered entrance animations
   - animated stat counters (on scroll into view)
   - mouse parallax on student / circle / chips
   - CTA button toast notifications
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ----------------------------------------------------------
     1. Staggered entrance animation
  ---------------------------------------------------------- */
  const animated = document.querySelectorAll('[data-animate]');
  animated.forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 140 + i * 110);
  });

  /* ----------------------------------------------------------
     2. Animated stat counters (IntersectionObserver)
  ---------------------------------------------------------- */
  const counters = document.querySelectorAll('.stat-num');

  const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * easeOutCubic(progress)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((c) => observer.observe(c));
  } else {
    // Fallback: render final values immediately
    counters.forEach((c) => {
      c.textContent = (c.dataset.target || '') + (c.dataset.suffix || '');
    });
  }

  /* ----------------------------------------------------------
     3. Mouse parallax (fine pointers / desktop only)
  ---------------------------------------------------------- */
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (finePointer && !reducedMotion) {
    const hero    = document.getElementById('hero');
    const student = document.querySelector('.student');
    const circle  = document.querySelector('.circle');
    const wraps   = document.querySelectorAll('.chip-wrap');

    let targetX = 0, targetY = 0;   // where the mouse wants us
    let currentX = 0, currentY = 0; // smoothed position

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    });

    hero.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    (function parallaxLoop() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (student) {
        student.style.transform =
          `translate(${currentX * 18}px, ${currentY * 12}px)`;
      }
      if (circle) {
        circle.style.setProperty('--px', `${currentX * -26}px`);
        circle.style.setProperty('--py', `${currentY * -18}px`);
      }
      wraps.forEach((wrap) => {
        const depth = parseFloat(wrap.dataset.depth) || 1;
        wrap.style.transform =
          `translate(${currentX * 22 * depth}px, ${currentY * 16 * depth}px)`;
      });

      requestAnimationFrame(parallaxLoop);
    })();
  }

  /* ----------------------------------------------------------
     4. Toast notifications for CTA buttons
  ---------------------------------------------------------- */
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  const applyBtn = document.getElementById('applyBtn');
  const brochureBtn = document.getElementById('brochureBtn');

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      showToast('Admissions 2026–27: application form opening soon!');
    });
  }

  if (brochureBtn) {
    brochureBtn.addEventListener('click', () => {
      showToast('BCA brochure download will begin shortly.');
    });
  }
});




/*=========================================
        BCA COURSE DETAILS
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    /*=================================
            TAB SWITCHING
    =================================*/

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            const target = this.dataset.tab;

            tabs.forEach(btn => {

                btn.classList.remove("active");

            });

            contents.forEach(content => {

                content.classList.remove("active");

            });

            this.classList.add("active");

            document.getElementById(target).classList.add("active");

        });

    });

    /*=================================
            RIPPLE EFFECT
    =================================*/

    tabs.forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(
                button.clientWidth,
                button.clientHeight
            );

            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;

            circle.style.left =
                `${e.clientX - button.getBoundingClientRect().left - radius}px`;

            circle.style.top =
                `${e.clientY - button.getBoundingClientRect().top - radius}px`;

            const ripple = button.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            circle.classList.add("ripple");

            button.appendChild(circle);

        });

    });

    /*=================================
            SCROLL ANIMATION
    =================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".tab-content").forEach(el => {

        observer.observe(el);

    });

    /*=================================
            TABLE ROW HOVER
    =================================*/

    const rows = document.querySelectorAll("table tr");

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.transform = "scale(1.01)";

        });

        row.addEventListener("mouseleave", () => {

            row.style.transform = "scale(1)";

        });

    });

    /*=================================
            PAGE LOAD ANIMATION
    =================================*/

    document.querySelector(".course-heading").animate([

        {

            opacity: 0,

            transform: "translateY(40px)"

        },

        {

            opacity: 1,

            transform: "translateY(0)"

        }

    ], {

        duration: 900,

        easing: "ease",

        fill: "forwards"

    });

});

const accordions=document.querySelectorAll(".accordion-item");

accordions.forEach(item=>{

const header=item.querySelector(".accordion-header");

header.addEventListener("click",()=>{

const active=document.querySelector(".accordion-item.active");

if(active && active!==item){

active.classList.remove("active");

active.querySelector(".accordion-content").style.maxHeight=null;

active.querySelector("i").classList.remove("fa-minus");

active.querySelector("i").classList.add("fa-plus");

}

item.classList.toggle("active");

const content=item.querySelector(".accordion-content");

const icon=item.querySelector("i");

if(item.classList.contains("active")){

content.style.maxHeight=content.scrollHeight+"px";

icon.classList.remove("fa-plus");

icon.classList.add("fa-minus");

}else{

content.style.maxHeight=null;

icon.classList.remove("fa-minus");

icon.classList.add("fa-plus");

}

});

});


