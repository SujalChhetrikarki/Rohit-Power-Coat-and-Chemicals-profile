
      const toggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.nav');

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!expanded));
          nav.classList.toggle('is-open');
        });

        nav.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('is-open');
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

          const whatsappUrl = `https://wa.me/9779855022709?text=${whatsappMessage}`;
          window.open(whatsappUrl, '_blank');

          success.textContent = 'Your inquiry has been prepared in WhatsApp.';
          success.style.display = 'block';
          form.reset();
        });
      }
    