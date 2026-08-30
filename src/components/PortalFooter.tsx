export function PortalFooter() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div class="footer-brand-col">
          <a href="/" style="display: inline-block; margin-bottom: 14px;">
            <img src="/assets/logo-white.png" alt="Shristi Estate" style="height: 48px; width: auto; object-fit: contain;" />
          </a>
          <p>Specialized commercial and industrial property consultants serving Noida, Greater Noida, and Delhi-NCR.</p>
          <div style="font-size: 0.85rem; color: #CBD5E1; line-height: 1.6;">
            <strong>Authorized Person:</strong> Sanjeet Kumar (8750098666)<br />
            <strong>Office:</strong> I-Thum Tower-B, Unit 1035, Sector 62 Noida
          </div>

          <!-- Social Media Profiles -->
          <div class="footer-social-wrapper">
            <span class="footer-social-title">Follow &amp; Connect with Us</span>
            <div class="footer-social-grid">
              <a href="https://wa.me/918750098666" target="_blank" class="footer-social-btn social-wa" aria-label="WhatsApp" title="WhatsApp Sanjeet Kumar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="https://linkedin.com/company/shristi-estate" target="_blank" class="footer-social-btn social-li" aria-label="LinkedIn" title="LinkedIn Company Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://facebook.com/shristiestate" target="_blank" class="footer-social-btn social-fb" aria-label="Facebook" title="Facebook Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com/shristiestate" target="_blank" class="footer-social-btn social-ig" aria-label="Instagram" title="Instagram Profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com/@shristiestate" target="_blank" class="footer-social-btn social-yt" aria-label="YouTube" title="YouTube Channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://maps.google.com/?q=The+I-Thum+Tower+Sector+62+Noida+Uttar+Pradesh+201301" target="_blank" class="footer-social-btn social-map" aria-label="Google Maps Location" title="Get Directions on Google Maps">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </a>
              <a href="tel:8750098666" class="footer-social-btn social-call" aria-label="Direct Phone" title="Call Sanjeet Kumar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 class="footer-heading">Categories</h4>
          <ul class="footer-nav-list">
            <li><a href="/office-spaces.html" class="footer-nav-link">Office Spaces</a></li>
            <li><a href="/it-parks.html" class="footer-nav-link">IT Parks</a></li>
            <li><a href="/warehouses.html" class="footer-nav-link">Warehouses</a></li>
            <li><a href="/industrial-properties.html" class="footer-nav-link">Industrial Properties</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Top Locations</h4>
          <ul class="footer-nav-list">
            <li><a href="/location-detail.html?loc=sector-62" class="footer-nav-link">Sector 62 Noida</a></li>
            <li><a href="/location-detail.html?loc=noida-expressway" class="footer-nav-link">Noida Expressway</a></li>
            <li><a href="/location-detail.html?loc=sector-63" class="footer-nav-link">Sector 63 Noida</a></li>
            <li><a href="/location-detail.html?loc=ecotech-1-ext" class="footer-nav-link">Greater Noida</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><a href="/about.html" class="footer-nav-link">About Us</a></li>
            <li><a href="/sale.html" class="footer-nav-link">Buy Commercial</a></li>
            <li><a href="/rent.html" class="footer-nav-link">Rent Commercial</a></li>
            <li><a href="/list-property.html" class="footer-nav-link" style="color: var(--brand-gold-500);">List Your Property</a></li>
            <li><a href="/contact.html" class="footer-nav-link">Contact &amp; Map</a></li>
            <li><a href="/blog.html" class="footer-nav-link">Real Estate Blog</a></li>
          </ul>
        </div>
        <div class="footer-contact-col">
          <h4 class="footer-heading">Direct Contact</h4>
          <div class="footer-contact-info">
            <div><strong>Sanjeet Kumar:</strong> <a href="tel:8750098666" style="color: #FDE047;">8750098666</a></div>
            <div><strong>Address:</strong> I-Thum Tower-B, Unit 1035, 10th Floor, Sector-62, Noida, UP - 201301</div>
            <a href="https://maps.google.com/?q=The+I-Thum+Tower+Sector+62+Noida+Uttar+Pradesh+201301" target="_blank" class="btn btn-soft-gold btn-sm" style="margin-top: 10px;">Get Directions</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 Shristi Estate. All Rights Reserved.</div>
        <div class="footer-bottom-links">
          <a href="/contact.html">Privacy Policy</a>
          <a href="/contact.html">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>` }} />
  );
}
