/**
 * SRISHTI ESTATE - Global Interactive Logic
 * Authorized Person: Sanjeet Kumar (8750098666)
 */

(function () {
  'use strict';

  // --- 1. Theme Initialization & Toggle ---
  function initTheme() {
    const savedTheme = localStorage.getItem('srishti_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('srishti_theme', newTheme);
        updateThemeIcons(newTheme);
        showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
      });
    });
  }

  function updateThemeIcons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.innerHTML = theme === 'dark'
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });
  }

  // --- 2. Sticky Header Transition ---
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- 3. Mobile Navigation Drawer ---
  function initMobileMenu() {
    const openBtn = document.querySelector('.mobile-menu-btn');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (!openBtn || !drawer || !backdrop) return;

    function openMenu() {
      drawer.classList.add('show');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.remove('show');
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
  }

  // --- 4. Toast Notification Engine ---
  window.showToast = function (message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // --- 5. Global Enquiry & Site Visit Modal (Global Event Delegation) ---
  function initEnquiryModal() {
    // Ensure modal HTML exists in DOM
    let modal = document.getElementById('enquiryModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-backdrop';
      modal.id = 'enquiryModal';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close-btn enquiry-modal-close" aria-label="Close Modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 10px; background: rgba(37, 99, 235, 0.12); color: #2563EB;" id="enquiryModalIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </span>
            <h3 class="modal-heading" style="font-size: 1.45rem; margin: 0;" id="enquiryModalTitle">Schedule In-Person Site Visit</h3>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px;">Direct coordination with <strong>Sanjeet Kumar</strong> (8750098666) • 100% Free Consultation.</p>
          
          <form id="globalEnquiryForm">
            <input type="hidden" id="enquiryPropertyTitle" name="propTitle" value="" />
            <input type="hidden" id="enquiryType" name="enquiryType" value="visit" />
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" name="name" class="form-control" placeholder="Your Name / Company Name" required />
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number *</label>
              <input type="tel" name="phone" class="form-control" placeholder="10-digit mobile number" required />
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" name="email" class="form-control" placeholder="Enter your email address" />
            </div>

            <div id="visitSlotsSection">
              <div class="form-group">
                <label class="form-label">Select Preferred Visit Slot</label>
                <div class="visit-slots-grid">
                  <div class="visit-slot-chip" data-slot="Today (3:00 PM - 5:00 PM)">Today (3:00 PM)</div>
                  <div class="visit-slot-chip" data-slot="Tomorrow Morning (11:00 AM)">Tomorrow (11:00 AM)</div>
                  <div class="visit-slot-chip" data-slot="Tomorrow Afternoon (4:00 PM)">Tomorrow (4:00 PM)</div>
                  <div class="visit-slot-chip" data-slot="This Saturday (12:00 PM)">Saturday (12:00 PM)</div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Preferred Visit Date (Optional)</label>
              <input type="date" name="visitDate" class="form-control" title="Schedule date for Visit" />
            </div>

            <div class="form-group">
              <label class="form-label" id="messageLabel">Custom Time (Optional)</label>
              <textarea name="message" class="form-control" placeholder="Enter any specific details or queries..." rows="2" style="resize: vertical;"></textarea>
            </div>

            <button type="submit" class="btn btn-schedule-visit" id="enquirySubmitBtn" style="width: 100%; height: 50px; margin-top: 12px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Confirm &amp; WhatsApp Sanjeet Kumar</span>
            </button>
          </form>
        </div>
      `;
      document.body.appendChild(modal);
    }

    // Global Click Delegation to open modal from ANY static or dynamically injected element
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-enquiry]');
      if (trigger) {
        e.preventDefault();
        const currentModal = document.getElementById('enquiryModal') || modal;
        const propTitle = trigger.getAttribute('data-prop-title') || '';
        const propLocation = trigger.getAttribute('data-prop-location') || '';
        const enquiryType = trigger.getAttribute('data-enquiry-type') || 'visit';

        const titleField = currentModal.querySelector('#enquiryPropertyTitle');
        if (titleField) {
          titleField.value = propLocation ? `${propTitle} (${propLocation})` : (propTitle || 'Commercial Property in Noida');
        }

        const typeField = currentModal.querySelector('#enquiryType');
        if (typeField) {
          typeField.value = enquiryType;
        }

        const modalTitle = currentModal.querySelector('#enquiryModalTitle');
        const visitSlotsSection = currentModal.querySelector('#visitSlotsSection');
        const messageLabel = currentModal.querySelector('#messageLabel');
        const submitBtnText = currentModal.querySelector('#enquirySubmitBtn span');
        const modalIcon = currentModal.querySelector('#enquiryModalIcon');

        if (enquiryType === 'enquire') {
          if (modalTitle) modalTitle.textContent = propTitle ? `Enquire: ${propTitle}` : 'Enquire Now';
          if (visitSlotsSection) visitSlotsSection.style.display = 'none';
          if (messageLabel) messageLabel.textContent = 'Your Message / Requirement';
          if (submitBtnText) submitBtnText.textContent = 'Send Enquiry & WhatsApp';
          if (modalIcon) {
            modalIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
          }
        } else {
          if (modalTitle) modalTitle.textContent = propTitle ? `Schedule Site Visit: ${propTitle}` : 'Schedule In-Person Site Visit';
          if (visitSlotsSection) visitSlotsSection.style.display = 'block';
          if (messageLabel) messageLabel.textContent = 'Custom Time (Optional)';
          if (submitBtnText) submitBtnText.textContent = 'Confirm Site Visit & WhatsApp';
          if (modalIcon) {
            modalIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
          }
        }

        currentModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        return;
      }

      // Close modal on close button or backdrop click
      if (e.target.closest('.enquiry-modal-close') || e.target.classList.contains('modal-backdrop')) {
        const currentModal = document.getElementById('enquiryModal');
        if (currentModal) {
          currentModal.classList.remove('show');
          document.body.style.overflow = '';
          currentModal.querySelectorAll('.visit-slot-chip').forEach(c => c.classList.remove('active'));
        }
      }

      // Slot Chip Click
      const chip = e.target.closest('.visit-slot-chip');
      if (chip) {
        const parentModal = chip.closest('.modal-content');
        if (parentModal) {
          parentModal.querySelectorAll('.visit-slot-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const timeInput = parentModal.querySelector('[name="message"]');
          if (timeInput) {
            timeInput.value = chip.getAttribute('data-slot') || chip.textContent.trim();
          }

          const dateInput = parentModal.querySelector('[name="visitDate"]');
          if (dateInput) {
            const text = chip.textContent.toLowerCase();
            let targetDate = new Date();
            
            if (text.includes('tomorrow')) {
              targetDate.setDate(targetDate.getDate() + 1);
            } else if (text.includes('saturday')) {
              const day = targetDate.getDay(); // 0 is Sunday, 6 is Saturday
              const offset = (6 - day + 7) % 7;
              targetDate.setDate(targetDate.getDate() + (offset === 0 ? 0 : offset));
            }
            
            // Format to YYYY-MM-DD for date input
            const year = targetDate.getFullYear();
            const month = String(targetDate.getMonth() + 1).padStart(2, '0');
            const dayStr = String(targetDate.getDate()).padStart(2, '0');
            dateInput.value = `${year}-${month}-${dayStr}`;
          }
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const currentModal = document.getElementById('enquiryModal');
        if (currentModal && currentModal.classList.contains('show')) {
          currentModal.classList.remove('show');
          document.body.style.overflow = '';
        }
      }
    });

    // Global Form Submit Delegation
    document.addEventListener('submit', async (e) => {
      if (e.target && e.target.id === 'globalEnquiryForm') {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('[name="name"]')?.value || 'Client';
        const phone = form.querySelector('[name="phone"]')?.value || '';
        const email = form.querySelector('[name="email"]')?.value || '';
        const visitDate = form.querySelector('[name="visitDate"]')?.value || '';
        const propTitle = form.querySelector('#enquiryPropertyTitle')?.value || 'Commercial Property in Noida';
        const preferredTime = form.querySelector('[name="message"]')?.value || 'Earliest available slot';
        const enquiryType = form.querySelector('#enquiryType')?.value || 'visit';

        const submitBtn = form.querySelector('button[type="submit"]');
        let originalContent = '';
        if (submitBtn) {
          submitBtn.disabled = true;
          originalContent = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Processing...</span>';
        }

        try {
          // Send to Supabase
          await fetch("https://gvglepwknzisbzqxjaoy.supabase.co/rest/v1/enquiries", {
            method: "POST",
            headers: {
              "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
              "Content-Type": "application/json",
              "Prefer": "return=minimal"
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              property_title: propTitle,
              preferred_time: preferredTime,
              visit_date: visitDate
            })
          });
        } catch (err) {
          console.error("Error saving enquiry to Supabase:", err);
          // Continue to WhatsApp anyway as fallback
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent || `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span>Confirm &amp; WhatsApp Sanjeet Kumar</span>`;
        }

        let waText = '';
        if (enquiryType === 'enquire') {
          waText = encodeURIComponent(
            `Hello Sanjeet ji, I have an enquiry via Srishti Estate:\n` +
            `• Property / Requirement: ${propTitle}\n` +
            `• Name: ${name}\n` +
            `• Phone: ${phone}\n` +
            (email ? `• Email: ${email}\n` : '') +
            (visitDate ? `• Visit Date: ${visitDate}\n` : '') +
            (preferredTime ? `• Message: ${preferredTime}\n` : '') +
            `Please share more details.`
          );
          showToast('Enquiry submitted! Connecting with Sanjeet Kumar on WhatsApp...', 'success');
        } else {
          // Form WhatsApp Site Visit Message
          waText = encodeURIComponent(
            `Hello Sanjeet ji, I would like to schedule a site visit via Srishti Estate:\n` +
            `• Property / Requirement: ${propTitle}\n` +
            `• Name: ${name}\n` +
            `• Phone: ${phone}\n` +
            (email ? `• Email: ${email}\n` : '') +
            (visitDate ? `• Visit Date: ${visitDate}\n` : '') +
            `• Preferred Time: ${preferredTime}\n` +
            `Please confirm the visit appointment and share the exact location pin.`
          );
          showToast('Site visit booking initiated! Connecting with Sanjeet Kumar on WhatsApp...', 'success');
        }

        setTimeout(() => {
          window.location.href = `https://wa.me/918750098666?text=${waText}`;
          const currentModal = document.getElementById('enquiryModal');
          if (currentModal) {
            currentModal.classList.remove('show');
            document.body.style.overflow = '';
          }
          form.reset();
        }, 1000);
      } else if (e.target && e.target.id === 'homeQuickEnquiryForm') {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('[name="name"]')?.value || 'Client';
        const phone = form.querySelector('[name="phone"]')?.value || '';
        const email = form.querySelector('[name="email"]')?.value || '';
        const propType = form.querySelector('[name="propType"]')?.value || '';
        const location = form.querySelector('[name="location"]')?.value || '';
        const area = form.querySelector('[name="area"]')?.value || '';
        const visitDate = form.querySelector('[name="visitDate"]')?.value || '';
        
        const propTitle = `${propType} in ${location} (${area})`;
        const preferredTime = `Visit Date: ${visitDate}`;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Processing...';
        }

        try {
          // Send to Supabase
          await fetch("https://gvglepwknzisbzqxjaoy.supabase.co/rest/v1/enquiries", {
            method: "POST",
            headers: {
              "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
              "Content-Type": "application/json",
              "Prefer": "return=minimal"
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              property_title: propTitle,
              preferred_time: preferredTime,
              visit_date: visitDate
            })
          });
        } catch (err) {
          console.error("Error saving enquiry to Supabase:", err);
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // Form WhatsApp Site Visit Message
        const waText = encodeURIComponent(
          `Hello Sanjeet ji, I need tailored commercial space advisory via Srishti Estate:\n` +
          `• Requirement: ${propType}\n` +
          `• Location: ${location}\n` +
          `• Area: ${area}\n` +
          `• Name: ${name}\n` +
          `• Phone: ${phone}\n` +
          `• Email: ${email}\n` +
          `• Scheduled Visit Date: ${visitDate}\n` +
          `Please connect with me.`
        );

        showToast('Requirement submitted! Connecting to WhatsApp...', 'success');
        setTimeout(() => {
          window.location.href = `https://wa.me/918750098666?text=${waText}`;
          form.reset();
        }, 1000);
      }
    });
  }

  // --- 6. Hero Quick Search Form Handler ---
  function initHeroSearch() {
    const searchForm = document.getElementById('heroSearchForm');
    if (!searchForm) return;

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = searchForm.querySelector('#heroSearchType')?.value || '';
      const location = searchForm.querySelector('#heroSearchLocation')?.value || '';
      const purpose = searchForm.querySelector('#heroSearchPurpose')?.value || '';
      const area = searchForm.querySelector('#heroSearchArea')?.value || '';

      const params = new URLSearchParams();
      if (type) params.set('category', type);
      if (location) params.set('location', location);
      if (purpose) params.set('purpose', purpose);
      if (area) params.set('area', area);

      window.location.href = `available-properties.html?${params.toString()}`;
    });
  }

  // --- 7. Direct WhatsApp Link Generators ---
  window.openWhatsApp = function (customText) {
    const text = customText || "Hello Sanjeet ji, I am looking for commercial/industrial property in Noida with Srishti Estate. Please share available options.";
    window.location.href = `https://wa.me/918750098666?text=${encodeURIComponent(text)}`;
  };

  // --- 8. Mobile Sticky Action Bar Injection ---
  function initMobileStickyBar() {
    if (document.querySelector('.mobile-sticky-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'mobile-sticky-bar';
    bar.innerHTML = `
      <div class="mobile-sticky-grid">
        <a href="tel:8750098666" class="mobile-sticky-btn mobile-sticky-call" aria-label="Call Sanjeet Kumar">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>Call Now</span>
        </a>
        <a href="https://wa.me/918750098666?text=Hi%20Sanjeet%20ji%2C%20I%20am%20looking%20for%20commercial%2Findustrial%20spaces%20with%20Shristi%20Estate." target="_blank" class="mobile-sticky-btn mobile-sticky-whatsapp" aria-label="WhatsApp Sanjeet Kumar">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>WhatsApp</span>
        </a>
        <a href="available-properties.html" class="mobile-sticky-btn mobile-sticky-props" aria-label="Browse Properties">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Properties</span>
        </a>
      </div>
    `;
    document.body.appendChild(bar);
  }
  // --- 9. Global Requirement Modal ---
  function initRequirementModal() {
    let reqModal = document.getElementById('requirementModal');
    if (!reqModal) {
      reqModal = document.createElement('div');
      reqModal.className = 'modal-backdrop';
      reqModal.id = 'requirementModal';
      reqModal.innerHTML = `
        <div class="modal-content req-modal-content">
          <button class="modal-close-btn req-modal-close" aria-label="Close Modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 10px; background: rgba(212, 175, 55, 0.12); color: var(--brand-gold-600);" id="reqModalIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </span>
            <h3 class="modal-heading" style="font-size: 1.45rem; margin: 0;">Post Your Requirement</h3>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px;">Let us know exactly what you are looking for. We will find the best matches in Noida for you.</p>
          
          <form id="globalRequirementForm">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" name="reqName" class="form-control" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number *</label>
              <input type="tel" name="reqPhone" class="form-control" placeholder="10-digit mobile number" required />
            </div>
            
            <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <label class="form-label">Property Type</label>
                <select name="reqType" class="form-control">
                  <option value="Office Space">Office Space</option>
                  <option value="IT / Business Park">IT / Business Park</option>
                  <option value="Warehouse / Logistics">Warehouse / Logistics</option>
                  <option value="Industrial Factory">Industrial Factory</option>
                  <option value="Commercial Land">Commercial Land</option>
                  <option value="Retail / Shop">Retail / Shop</option>
                </select>
              </div>
              <div>
                <label class="form-label">Preferred Location</label>
                <select name="reqLocation" class="form-control">
                  <option value="Sector 62">Sector 62</option>
                  <option value="Noida Expressway">Noida Expressway</option>
                  <option value="Sector 63">Sector 63</option>
                  <option value="Sector 18 / CBD">Sector 18 / CBD</option>
                  <option value="Greater Noida">Greater Noida</option>
                  <option value="Any Noida Location">Any Noida Location</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Required Area & Budget</label>
              <input type="text" name="reqDetails" class="form-control" placeholder="E.g., 5000 sq.ft. under 4 Lakhs/month" required />
            </div>

            <button type="submit" class="btn btn-primary" id="reqSubmitBtn" style="width: 100%; height: 50px; margin-top: 12px; background: var(--brand-gold-600); border-color: var(--brand-gold-600);">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Submit Requirement via WhatsApp</span>
            </button>
          </form>
        </div>
      `;
      document.body.appendChild(reqModal);
    }

    // Bind events
    const reqForm = document.getElementById('globalRequirementForm');
    const closeBtn = reqModal.querySelector('.req-modal-close');
    
    function closeReqModal() {
      reqModal.classList.remove('show');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeReqModal);
    reqModal.addEventListener('click', (e) => {
      if (e.target === reqModal) closeReqModal();
    });

    // Global click delegate for open buttons
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-requirement]');
      if (trigger) {
        e.preventDefault();
        reqModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });

    reqForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('reqSubmitBtn');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span class="loading-spinner" style="width:16px; height:16px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; display: inline-block;"></span> <span>Connecting...</span>';
      submitBtn.disabled = true;

      const fd = new FormData(reqForm);
      const name = fd.get('reqName');
      const phone = fd.get('reqPhone');
      const type = fd.get('reqType');
      const loc = fd.get('reqLocation');
      const details = fd.get('reqDetails');

      try {
        // Send to Supabase
        await fetch("https://gvglepwknzisbzqxjaoy.supabase.co/rest/v1/enquiries", {
          method: "POST",
          headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY",
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            email: "N/A", // Requirement form doesn't have email currently
            property_title: `Requirement: ${type} in ${loc}`,
            preferred_time: details,
            visit_date: null
          })
        });
      } catch (err) {
        console.error("Error saving requirement to Supabase:", err);
      }

      const waText = encodeURIComponent(
        `Hi Sanjeet ji, I want to post a new requirement:\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Looking For: ${type}\n` +
        `• Preferred Location: ${loc}\n` +
        `• Area & Budget: ${details}\n\n` +
        `Please share suitable options.`
      );

      if (typeof window.showToast === 'function') {
        window.showToast('Requirement submitted! Opening WhatsApp...', 'success');
      }
      setTimeout(() => {
        window.location.href = `https://wa.me/918750098666?text=${waText}`;
        reqForm.reset();
        closeReqModal();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // --- 8. Dynamic Status Fetcher ---
  window.fetchPropertyStatuses = async function () {
    try {
      const SUPABASE_URL = 'https://gvglepwknzisbzqxjaoy.supabase.co';
      const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY';
      
      const response = await fetch(`${SUPABASE_URL}/rest/v1/properties?select=id,slug,availability_status,possession_status`, {
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      if (window.SRISHTI_DATA && data) {
        // Create a lookup map
        const statusMap = {};
        data.forEach(p => {
          if (p.slug) statusMap[p.slug] = p;
          if (p.id) statusMap[p.id] = p;
        });

        // Update SRISHTI_DATA.projects
        if (window.SRISHTI_DATA.projects) {
          window.SRISHTI_DATA.projects.forEach(proj => {
            const dbData = statusMap[proj.slug] || statusMap[proj.id];
            if (dbData) {
              proj.availability_status = dbData.availability_status;
              proj.possession_status = dbData.possession_status;
            }
          });
        }
        
        // Update SRISHTI_DATA.properties (if it exists)
        if (window.SRISHTI_DATA.properties) {
          window.SRISHTI_DATA.properties.forEach(prop => {
            const dbData = statusMap[prop.slug] || statusMap[prop.id];
            if (dbData) {
              prop.availability_status = dbData.availability_status;
              prop.possession_status = dbData.possession_status;
            }
          });
        }
      }
    } catch (err) {
      console.error("Error fetching live property statuses:", err);
    }
  };

  // --- Initialize on DOM Loaded ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initStickyHeader();
    initMobileMenu();
    initEnquiryModal();
    initRequirementModal();
    initHeroSearch();
    initMobileStickyBar();
    // Pre-fetch statuses so they are ready for property pages
    if (window.fetchPropertyStatuses) {
      window.fetchPropertyStatuses();
    }
  });

})();
