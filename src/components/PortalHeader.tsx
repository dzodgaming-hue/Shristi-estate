export function PortalHeader() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<header class="site-header" id="mainHeader">
    <div class="container header-container">
      <a href="/" class="brand-logo" aria-label="Shristi Estate Homepage">
        <img src="/assets/logo-dark.png" alt="Shristi Estate Logo" class="brand-logo-light" />
        <img src="/assets/logo-white.png" alt="Shristi Estate Logo" class="brand-logo-dark" />
      </a>

      <!-- Optimized Desktop Navigation Menu -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <a href="/" class="nav-link">Home</a>

        <!-- Commercial Properties Dropdown -->
        <div class="nav-item">
          <a href="/available-properties.html" class="nav-link" aria-haspopup="true">
            <span>Properties</span>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu mega-menu">
            <a href="/office-spaces.html" class="nav-dropdown-item"><span class="nav-dropdown-title">Office Spaces</span></a>
            <a href="/it-parks.html" class="nav-dropdown-item"><span class="nav-dropdown-title">IT &amp; Business Parks</span></a>
            <a href="/warehouses.html" class="nav-dropdown-item"><span class="nav-dropdown-title">Warehouses &amp; Logistics</span></a>
            <a href="/industrial-properties.html" class="nav-dropdown-item"><span class="nav-dropdown-title">Industrial Properties</span></a>
            <a href="/land.html" class="nav-dropdown-item"><span class="nav-dropdown-title">Commercial Land</span></a>
            <a href="/shops.html" class="nav-dropdown-item"><span class="nav-dropdown-title">Shops &amp; Retail</span></a>
          </div>
        </div>

        <!-- Prime Locations Dropdown -->
        <div class="nav-item">
          <a href="/locations.html" class="nav-link" aria-haspopup="true">
            <span>Locations</span>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="/location-detail.html?loc=sector-62" class="nav-dropdown-item"><span class="nav-dropdown-title">Sector 62, Noida</span></a>
            <a href="/location-detail.html?loc=noida-expressway" class="nav-dropdown-item"><span class="nav-dropdown-title">Noida Expressway</span></a>
            <a href="/location-detail.html?loc=sector-63" class="nav-dropdown-item"><span class="nav-dropdown-title">Sector 63, Noida</span></a>
            <a href="/location-detail.html?loc=sector-18" class="nav-dropdown-item"><span class="nav-dropdown-title">Sector 18 CBD &amp; Wave One</span></a>
            <a href="/location-detail.html?loc=ecotech-1-ext" class="nav-dropdown-item"><span class="nav-dropdown-title">Greater Noida / Ecotech</span></a>
            <div class="nav-dropdown-footer" style="padding-top: 6px;">
              <a href="/locations.html" style="color: var(--brand-navy-800);">All Sectors Directory →</a>
            </div>
          </div>
        </div>

        <a href="/about.html" class="nav-link active">About Us</a>
        <a href="/contact.html" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="#" data-open-requirement="true" class="btn btn-soft-gold btn-sm" style="margin-right: 8px; font-size: 0.85rem; padding: 6px 14px; height: auto; text-transform: uppercase; font-weight: 700; border-width: 2px;">Your Requirement</a>
        <a href="/list-property.html" class="btn btn-primary btn-sm" style="margin-right: 12px; font-size: 0.85rem; padding: 6px 14px; height: auto;">List Property &rarr;</a>
        <a href="tel:8750098666" class="header-phone-cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>Call: 8750098666</span>
        </a>
        <button class="theme-toggle-btn" aria-label="Toggle Theme"></button>
        <button class="mobile-menu-btn" aria-label="Open Menu"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
      </div>
    </div>
  </header>` }} />
  );
}
