/* footer.js */
let deptFooterInitialized = false;

function loadDepartmentFooter() {
  if (deptFooterInitialized) {
    return;
  }

  const deptFooterBackToTopBtn = document.querySelector('.dept-footer-backtotop-button');
  const deptFooterCounters = document.querySelectorAll('.dept-footer-achievement-number');
  const deptFooterForm = document.querySelector('.dept-footer-newsletter-form');
  const deptFooterStrip = document.querySelector('.dept-footer-achievement-strip');

  if (!deptFooterBackToTopBtn && deptFooterCounters.length === 0 && !deptFooterForm && !deptFooterStrip) {
    return;
  }

  deptFooterInitialized = true;

  if (deptFooterBackToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        deptFooterBackToTopBtn.classList.add('dept-footer-visible');
      } else {
        deptFooterBackToTopBtn.classList.remove('dept-footer-visible');
      }
    });

    deptFooterBackToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const deptFooterRunCounters = () => {
    deptFooterCounters.forEach(counter => {
      const target = +counter.getAttribute('data-dept-footer-target');
      let count = 0;
      const speed = Math.max(target / 40, 1);

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count) + '+';
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
    });
  };

  if (deptFooterStrip) {
    let deptFooterAnimated = false;
    const deptFooterObserverOptions = {
      root: null,
      threshold: 0.2
    };

    const deptFooterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !deptFooterAnimated) {
          deptFooterRunCounters();
          deptFooterAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    }, deptFooterObserverOptions);

    deptFooterObserver.observe(deptFooterStrip);
  }

  if (deptFooterForm) {
    deptFooterForm.addEventListener('submit', event => {
      event.preventDefault();
      const emailInput = deptFooterForm.querySelector('.dept-footer-input');
      if (emailInput && emailInput.value.trim() !== '') {
        alert('Thank you for subscribing to the department updates!');
        emailInput.value = '';
      }
    });
  }
}

function initFooter() {
  loadDepartmentFooter();
}

if (document.readyState !== 'loading') {
  loadDepartmentFooter();
} else {
  document.addEventListener('DOMContentLoaded', loadDepartmentFooter);
}
