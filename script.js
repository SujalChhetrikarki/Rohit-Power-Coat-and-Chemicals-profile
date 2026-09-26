
      document.addEventListener('DOMContentLoaded', () => {
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }

        document.addEventListener('click', (event) => {
          const link = event.target.closest('a[href^="#"]');
          if (!link) return;

          const targetId = link.getAttribute('href');
          if (!targetId || targetId === '#') return;

          const target = document.querySelector(targetId);
          if (!target) return;

          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', window.location.pathname + window.location.search);
        });
      });

      const toggle = document.querySelector('.mobile-menu-button');
      const nav = document.querySelector('.nav');

      if (toggle && nav) {
        const setMenuState = (isOpen) => {
          toggle.setAttribute('aria-expanded', String(isOpen));
          nav.classList.toggle('is-open', isOpen);
        };

        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          setMenuState(!expanded);
        });

        nav.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            setMenuState(false);
          });
        });
      }

      const form = document.getElementById('contactForm');
      const success = document.getElementById('successMessage');

      if (form && success) {
        form.addEventListener('submit', function (event) {
          event.preventDefault();

          const formData = new FormData(form);
          const name = (formData.get('name') || '').toString().trim();
          const email = (formData.get('email') || '').toString().trim();
          const phone = (formData.get('phone') || '').toString().trim();
          const message = (formData.get('message') || '').toString().trim();

          const whatsappMessage = encodeURIComponent(
            `Hello Rohit Powder Coat and Chemicals Private Limited, I would like to send an enquiry.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
          );

          const whatsappUrl = `https://wa.me/919851120211?text=${whatsappMessage}`;
          window.open(whatsappUrl, '_blank');

          success.textContent = 'Your inquiry has been prepared in WhatsApp.';
          success.style.display = 'block';
          form.reset();
        });
      }
    