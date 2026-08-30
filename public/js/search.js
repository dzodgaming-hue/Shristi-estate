/**
 * SRISHTI ESTATE - Search, Filtering & Calculator Engine
 * Authorized Person: Sanjeet Kumar (8750098666)
 */

(function () {
  'use strict';

  // Master State
  const state = {
    category: '',
    location: '',
    purpose: '',
    furnishing: '',
    minArea: 0,
    maxArea: 100000,
    searchQuery: '',
    sortBy: 'featured',
    viewMode: 'grid',
    bookmarks: JSON.parse(localStorage.getItem('srishti_bookmarks') || '[]')
  };

  // --- 1. Property Card HTML Generator ---
  window.renderPropertyCard = function (prop) {
    const isBookmarked = state.bookmarks.includes(prop.id);
    const priceText = prop.purpose === 'Rent'
      ? `₹${(prop.priceRent || 0).toLocaleString('en-IN')}<span class="property-price-rate"> / mo</span>`
      : `₹${(prop.priceSale ? (prop.priceSale / 10000000).toFixed(2) + ' Cr' : 'On Request')}`;

    const rateText = prop.purpose === 'Rent'
      ? `(₹${prop.pricePerSqFtRent}/sq.ft.)`
      : `(₹${prop.pricePerSqFtSale ? prop.pricePerSqFtSale.toLocaleString('en-IN') : '-'}/sq.ft.)`;

    const waText = encodeURIComponent(
      `Hello Sanjeet ji, I am interested in "${prop.title}" (${prop.location}) listed on Srishti Estate.\n` +
      `• Area: ${prop.areaSqFt.toLocaleString('en-IN')} Sq.Ft.\n` +
      `• Type: ${prop.furnishing} ${prop.categoryName}\n` +
      `• Purpose: For ${prop.purpose}\n` +
      `Please share floor plans and schedule a site visit.`
    );

    let availabilityText = prop.purpose ? `For ${prop.purpose}` : 'AVAILABLE';
    let availabilityClass = 'property-tag-purpose';
    if (prop.availability_status) {
      if (prop.availability_status === 'sold') {
        availabilityText = 'SOLD OUT';
        availabilityClass += ' status-sold';
      } else if (prop.availability_status === 'rented') {
        availabilityText = 'RENTED';
        availabilityClass += ' status-sold';
      } else if (prop.availability_status === 'leased') {
        availabilityText = 'LEASED';
        availabilityClass += ' status-sold';
      } else if (prop.availability_status === 'inactive') {
        availabilityText = 'UNAVAILABLE';
        availabilityClass += ' status-inactive';
      } else {
        availabilityText = prop.purpose ? `FOR ${prop.purpose.toUpperCase()}` : 'AVAILABLE';
      }
    }

    let possessionBadge = '';
    if (prop.possession_status && prop.availability_status !== 'sold' && prop.availability_status !== 'rented' && prop.availability_status !== 'leased' && prop.availability_status !== 'inactive') {
      let possText = '';
      if (prop.possession_status === 'ready_to_move') possText = 'READY TO MOVE';
      else if (prop.possession_status === 'under_construction') possText = 'UNDER CONSTRUCTION';
      else if (prop.possession_status === 'coming_soon') possText = 'COMING SOON';
      else if (prop.possession_status === 'pre_leased') possText = 'PRE-LEASED';

      if (possText) {
        possessionBadge = `<span class="property-tag-possession">${possText}</span>`;
      }
    }

    return `
      <div class="property-card" data-prop-id="${prop.id}">
        <div class="property-card-image-box">
          <img class="property-card-image" src="${prop.image}" alt="${prop.title}" loading="lazy" />
          <div class="property-badges-container">
            <span class="${availabilityClass}">${availabilityText}</span>
            ${possessionBadge}
          </div>
          <span class="property-tag-category">${prop.categoryName}</span>
          <button class="property-bookmark-btn ${isBookmarked ? 'active' : ''}" 
                  onclick="toggleBookmark('${prop.id}', event)" 
                  title="${isBookmarked ? 'Remove from Saved' : 'Save Property'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>
        <div class="property-card-body">
          <div class="property-card-price-header">
            <div class="property-price-main">${priceText}</div>
            <div class="property-price-rate">${rateText}</div>
          </div>
          <h3 class="property-card-title">
            <a href="property-detail.html?id=${prop.id}">${prop.title}</a>
          </h3>
          <div class="property-card-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${prop.location}</span>
          </div>

          <div class="property-specs-grid">
            <div class="property-spec-item">
              <span class="property-spec-val">${prop.areaSqFt.toLocaleString('en-IN')}</span>
              <span class="property-spec-label">Sq. Ft.</span>
            </div>
            <div class="property-spec-item">
              <span class="property-spec-val">${prop.furnishing}</span>
              <span class="property-spec-label">Status</span>
            </div>
            <div class="property-spec-item">
              <span class="property-spec-val">${prop.workstations ? prop.workstations + ' Seats' : (prop.purpose === 'Rent' ? 'Direct' : 'Freehold')}</span>
              <span class="property-spec-label">${prop.workstations ? 'Setup' : 'Tenure'}</span>
            </div>
          </div>

          <div class="property-card-actions">
            <a href="property-detail.html?id=${prop.id}" class="btn btn-secondary btn-sm">View Details</a>
            <button type="button" class="btn btn-whatsapp btn-sm" data-open-enquiry data-enquiry-type="enquire" data-prop-title="${prop.title}" data-prop-location="${prop.location}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </div>
    `;
  };

  // --- 2. Bookmark / Shortlist Handler ---
  window.toggleBookmark = function (propId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const idx = state.bookmarks.indexOf(propId);
    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
      showToast('Property removed from Shortlist', 'info');
    } else {
      state.bookmarks.push(propId);
      showToast('Property saved to your Shortlist!', 'success');
    }
    localStorage.setItem('srishti_bookmarks', JSON.stringify(state.bookmarks));
    
    // Update active state in UI
    const btns = document.querySelectorAll(`[data-prop-id="${propId}"] .property-bookmark-btn`);
    btns.forEach(btn => {
      btn.classList.toggle('active', state.bookmarks.includes(propId));
      const icon = btn.querySelector('svg');
      if (icon) icon.setAttribute('fill', state.bookmarks.includes(propId) ? 'currentColor' : 'none');
    });
  };

  // --- 3. Filter Properties Logic ---
  function getFilteredProperties() {
    if (!window.SRISHTI_DATA || !window.SRISHTI_DATA.properties) return [];
    let items = [...window.SRISHTI_DATA.properties];

    // Filter by Category
    if (state.category) {
      items = items.filter(p => p.category === state.category || p.categoryName.toLowerCase().includes(state.category.toLowerCase()));
    }

    // Filter by Location
    if (state.location) {
      items = items.filter(p => p.locationId === state.location || p.location.toLowerCase().includes(state.location.toLowerCase()));
    }

    // Filter by Purpose (Rent/Sale)
    if (state.purpose) {
      items = items.filter(p => p.purpose.toLowerCase() === state.purpose.toLowerCase());
    }

    // Filter by Furnishing
    if (state.furnishing) {
      items = items.filter(p => p.furnishing.toLowerCase().includes(state.furnishing.toLowerCase()));
    }

    // Filter by Min Area
    if (state.minArea > 0) {
      items = items.filter(p => p.areaSqFt >= state.minArea);
    }

    // Filter by Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        (p.buildingName && p.buildingName.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (state.sortBy === 'price-low') {
      items.sort((a, b) => (a.priceRent || a.priceSale || 0) - (b.priceRent || b.priceSale || 0));
    } else if (state.sortBy === 'price-high') {
      items.sort((a, b) => (b.priceRent || b.priceSale || 0) - (a.priceRent || a.priceSale || 0));
    } else if (state.sortBy === 'area-low') {
      items.sort((a, b) => a.areaSqFt - b.areaSqFt);
    } else if (state.sortBy === 'area-high') {
      items.sort((a, b) => b.areaSqFt - a.areaSqFt);
    }

    return items;
  }

  // --- 4. Render Properties on Available Properties Page ---
  function renderAvailablePropertiesView() {
    const container = document.getElementById('propertiesGridContainer');
    const countEl = document.getElementById('propertiesCountDisplay');
    if (!container) return;

    const filtered = getFilteredProperties();

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} verified ${filtered.length === 1 ? 'property' : 'properties'}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="margin-bottom: 8px;">No matching properties found</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 20px auto;">We have offline verified inventory across Noida. Contact Sanjeet Kumar directly for unlisted options tailored to your exact requirement.</p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button onclick="resetFilters()" class="btn btn-secondary btn-sm">Reset All Filters</button>
            <a href="https://wa.me/918750098666?text=Hi%20Sanjeet%20ji,%20I%20am%20looking%20for%20a%20specific%20commercial%20space%20in%20Noida.%20Please%20assist." target="_blank" class="btn btn-whatsapp btn-sm">WhatsApp Sanjeet Kumar</a>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => window.renderPropertyCard(p)).join('');
  }

  // --- 5. URL Query Parser & Sync ---
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('category')) state.category = params.get('category');
    if (params.has('location')) state.location = params.get('location');
    if (params.has('purpose')) state.purpose = params.get('purpose');
    if (params.has('area')) {
      const areaVal = parseInt(params.get('area'), 10);
      if (!isNaN(areaVal)) state.minArea = areaVal;
    }
    if (params.has('q')) state.searchQuery = params.get('q');
  }

  // --- 6. Sync UI Filter Controls with State ---
  function syncFilterControls() {
    const categorySelect = document.getElementById('filterCategory');
    const locationSelect = document.getElementById('filterLocation');
    const purposeSelect = document.getElementById('filterPurpose');
    const areaSelect = document.getElementById('filterArea');
    const sortSelect = document.getElementById('filterSort');
    const searchInput = document.getElementById('filterSearchInput');

    if (categorySelect && state.category) categorySelect.value = state.category;
    if (locationSelect && state.location) locationSelect.value = state.location;
    if (purposeSelect && state.purpose) purposeSelect.value = state.purpose;
    if (areaSelect && state.minArea) areaSelect.value = state.minArea.toString();
    if (sortSelect && state.sortBy) sortSelect.value = state.sortBy;
    if (searchInput && state.searchQuery) searchInput.value = state.searchQuery;

    // Filter pills
    const pills = document.querySelectorAll('.filter-pill[data-filter]');
    pills.forEach(pill => {
      const fType = pill.getAttribute('data-filter-type');
      const fVal = pill.getAttribute('data-filter-val');
      if (fType === 'category' && state.category === fVal) pill.classList.add('active');
      if (fType === 'furnishing' && state.furnishing === fVal) pill.classList.add('active');
      if (fType === 'area' && state.minArea === parseInt(fVal, 10)) pill.classList.add('active');
    });
  }

  // Global reset helper
  window.resetFilters = function () {
    state.category = '';
    state.location = '';
    state.purpose = '';
    state.furnishing = '';
    state.minArea = 0;
    state.searchQuery = '';
    state.sortBy = 'featured';

    const form = document.getElementById('propertiesFilterForm');
    if (form) form.reset();

    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => p.classList.remove('active'));

    window.history.replaceState({}, document.title, window.location.pathname);
    renderAvailablePropertiesView();
  };

  // --- 7. Event Listeners for Filters ---
  function initFilterEventListeners() {
    const categorySelect = document.getElementById('filterCategory');
    const locationSelect = document.getElementById('filterLocation');
    const purposeSelect = document.getElementById('filterPurpose');
    const areaSelect = document.getElementById('filterArea');
    const sortSelect = document.getElementById('filterSort');
    const searchInput = document.getElementById('filterSearchInput');

    if (categorySelect) {
      categorySelect.addEventListener('change', (e) => {
        state.category = e.target.value;
        renderAvailablePropertiesView();
      });
    }

    if (locationSelect) {
      locationSelect.addEventListener('change', (e) => {
        state.location = e.target.value;
        renderAvailablePropertiesView();
      });
    }

    if (purposeSelect) {
      purposeSelect.addEventListener('change', (e) => {
        state.purpose = e.target.value;
        renderAvailablePropertiesView();
      });
    }

    if (areaSelect) {
      areaSelect.addEventListener('change', (e) => {
        state.minArea = parseInt(e.target.value, 10) || 0;
        renderAvailablePropertiesView();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderAvailablePropertiesView();
      });
    }

    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.searchQuery = e.target.value;
          renderAvailablePropertiesView();
        }, 250);
      });
    }

    // Filter pills
    const pills = document.querySelectorAll('.filter-pill[data-filter-type]');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const type = pill.getAttribute('data-filter-type');
        const val = pill.getAttribute('data-filter-val');

        if (pill.classList.contains('active')) {
          pill.classList.remove('active');
          if (type === 'category') state.category = '';
          if (type === 'furnishing') state.furnishing = '';
          if (type === 'area') state.minArea = 0;
        } else {
          document.querySelectorAll(`.filter-pill[data-filter-type="${type}"]`).forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          if (type === 'category') state.category = val;
          if (type === 'furnishing') state.furnishing = val;
          if (type === 'area') state.minArea = parseInt(val, 10) || 0;
        }
        if (areaSelect) areaSelect.value = state.minArea ? state.minArea.toString() : '';
        renderAvailablePropertiesView();
      });
    });

    // View switcher (Grid vs List)
    const gridBtn = document.getElementById('viewGridBtn');
    const listBtn = document.getElementById('viewListBtn');
    const container = document.getElementById('propertiesGridContainer');

    if (gridBtn && listBtn && container) {
      gridBtn.addEventListener('click', () => {
        gridBtn.classList.add('btn-primary');
        gridBtn.classList.remove('btn-secondary');
        listBtn.classList.add('btn-secondary');
        listBtn.classList.remove('btn-primary');
        container.className = 'properties-grid';
      });

      listBtn.addEventListener('click', () => {
        listBtn.classList.add('btn-primary');
        listBtn.classList.remove('btn-secondary');
        gridBtn.classList.add('btn-secondary');
        gridBtn.classList.remove('btn-primary');
        container.className = 'properties-list-view';
      });
    }
  }

  // --- 8. Homepage Featured Properties Filter Tabs ---
  function initHomepageFeatured() {
    const featuredContainer = document.getElementById('homeFeaturedContainer');
    const tabs = document.querySelectorAll('.featured-tab-btn');
    if (!featuredContainer) return;

    function renderFeatured(categoryFilter = '') {
      if (!window.SRISHTI_DATA || !window.SRISHTI_DATA.properties) return;
      let list = window.SRISHTI_DATA.properties;
      if (categoryFilter) {
        list = list.filter(p => p.category === categoryFilter || p.category.includes(categoryFilter));
      }
      featuredContainer.innerHTML = list.slice(0, 6).map(p => window.renderPropertyCard(p)).join('');
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-cat') || '';
        renderFeatured(cat);
      });
    });

    renderFeatured('');
  }

  // --- 9. Interactive Office Space & Seat Calculator ---
  function initSeatCalculator() {
    const seatInput = document.getElementById('calcSeatsInput');
    const cabinsInput = document.getElementById('calcCabinsInput');
    const confInput = document.getElementById('calcConfInput');

    const carpetDisplay = document.getElementById('calcCarpetDisplay');
    const superDisplay = document.getElementById('calcSuperDisplay');
    const rentSec62Display = document.getElementById('calcRentSec62Display');
    const rentExpDisplay = document.getElementById('calcRentExpDisplay');
    const actionBtn = document.getElementById('calcWhatsAppBtn');

    if (!seatInput) return;

    function recalculate() {
      const seats = parseInt(seatInput.value, 10) || 0;
      const cabins = parseInt(cabinsInput.value, 10) || 0;
      const conf = parseInt(confInput.value, 10) || 0;

      // Real estate standard ratios in Noida:
      // ~45 sq ft carpet per workstation, ~120 sq ft per cabin, ~250 sq ft per conference room, + 25% circulation/pantry/reception
      const baseCarpet = (seats * 45) + (cabins * 120) + (conf * 250);
      const totalCarpet = Math.round(baseCarpet * 1.25);
      
      // Super area has ~28-32% loading in Grade-A IT parks
      const superArea = Math.round(totalCarpet / 0.70);

      // Rent estimates (Sector 62 ~₹60/sqft, Expressway ~₹70/sqft)
      const rentSec62 = Math.round(superArea * 60);
      const rentExp = Math.round(superArea * 70);

      if (carpetDisplay) carpetDisplay.textContent = `${totalCarpet.toLocaleString('en-IN')} Sq.Ft.`;
      if (superDisplay) superDisplay.textContent = `${superArea.toLocaleString('en-IN')} Sq.Ft.`;
      if (rentSec62Display) rentSec62Display.textContent = `₹${rentSec62.toLocaleString('en-IN')} / mo`;
      if (rentExpDisplay) rentExpDisplay.textContent = `₹${rentExp.toLocaleString('en-IN')} / mo`;

      // Update text outputs on sliders
      const seatsValLbl = document.getElementById('calcSeatsVal');
      const cabinsValLbl = document.getElementById('calcCabinsVal');
      const confValLbl = document.getElementById('calcConfVal');
      if (seatsValLbl) seatsValLbl.textContent = `${seats} Seats`;
      if (cabinsValLbl) cabinsValLbl.textContent = `${cabins} Cabins`;
      if (confValLbl) confValLbl.textContent = `${conf} Room(s)`;

      if (actionBtn) {
        const waMsg = encodeURIComponent(
          `Hi Sanjeet ji, I calculated space requirements on Srishti Estate:\n` +
          `• Team: ${seats} Workstations, ${cabins} Cabins, ${conf} Conference Room\n` +
          `• Estimated Super Area: ~${superArea.toLocaleString('en-IN')} Sq.Ft.\n` +
          `Please share suitable office options in Sector 62 / Expressway.`
        );
        actionBtn.href = `https://wa.me/918750098666?text=${waMsg}`;
      }
    }

    seatInput.addEventListener('input', recalculate);
    cabinsInput.addEventListener('input', recalculate);
    confInput.addEventListener('input', recalculate);
    recalculate();
  }

  // --- Initialize on Page Load ---
  document.addEventListener('DOMContentLoaded', async () => {
    parseUrlParams();
    syncFilterControls();
    initFilterEventListeners();
    
    if (window.fetchPropertyStatuses) {
      await window.fetchPropertyStatuses();
    }
    
    renderAvailablePropertiesView();
    initViewToggles();
    initHomepageFeatured();
    initSeatCalculator();
  });

})();
