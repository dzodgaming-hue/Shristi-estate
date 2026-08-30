/**
 * SRISHTI ESTATE - Dynamic Page Renderers
 * (Property Detail, Building Showcase, Location Landing, Blog Reader)
 * Authorized Person: Sanjeet Kumar (8750098666)
 */

(function () {
  'use strict';

  // --- 1. Property Detail Page Renderer ---
  function renderPropertyDetailPage() {
    const container = document.getElementById('propertyDetailRoot');
    if (!container || !window.SRISHTI_DATA) return;

    const params = new URLSearchParams(window.location.search);
    const propId = params.get('id') || 'prop-ithum-1035-furn';
    const prop = window.SRISHTI_DATA.properties.find(p => p.id === propId) || window.SRISHTI_DATA.properties[0];

    if (!prop) return;

    // Update document title & meta
    document.title = `${prop.title} | SRISHTI ESTATE`;

    const priceText = prop.purpose === 'Rent'
      ? `₹${(prop.priceRent || 0).toLocaleString('en-IN')}<span style="font-size: 1rem; color: var(--text-muted); font-weight: 500;"> / month</span>`
      : `₹${(prop.priceSale ? (prop.priceSale / 10000000).toFixed(2) + ' Cr' : 'On Request')}`;

    const rateText = prop.purpose === 'Rent'
      ? `₹${prop.pricePerSqFtRent} / sq.ft.`
      : `₹${prop.pricePerSqFtSale ? prop.pricePerSqFtSale.toLocaleString('en-IN') : '-'} / sq.ft.`;

    const waText = encodeURIComponent(
      `Hello Sanjeet ji, I am viewing "${prop.title}" (${prop.id}) on Srishti Estate.\n` +
      `• Location: ${prop.location}\n` +
      `• Size: ${prop.areaSqFt} Sq.Ft. (${prop.furnishing})\n` +
      `• Pricing: ${priceText.replace(/<[^>]*>?/gm, '')} (${rateText})\n` +
      `Please provide full brochure, floor plan, and schedule a physical inspection.`
    );

    // Find nearby / similar properties in same location or category
    const similarProps = window.SRISHTI_DATA.properties
      .filter(p => p.id !== prop.id && (p.locationId === prop.locationId || p.category === prop.category))
      .slice(0, 3);

    let availabilityText = prop.purpose ? `FOR ${prop.purpose.toUpperCase()}` : 'AVAILABLE';
    let availabilityClass = 'badge-gold';
    if (prop.availability_status) {
      if (prop.availability_status === 'sold') {
        availabilityText = 'SOLD OUT';
        availabilityClass = 'badge-red';
      } else if (prop.availability_status === 'rented') {
        availabilityText = 'RENTED';
        availabilityClass = 'badge-red';
      } else if (prop.availability_status === 'leased') {
        availabilityText = 'LEASED';
        availabilityClass = 'badge-red';
      } else if (prop.availability_status === 'inactive') {
        availabilityText = 'UNAVAILABLE';
        availabilityClass = 'badge-grey';
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
        possessionBadge = `<span class="badge-blue property-tag-possession" style="padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700;">${possText}</span>`;
      }
    }

    container.innerHTML = `
      <!-- Breadcrumb Bar -->
      <div class="breadcrumbs-bar">
        <div class="container">
          <ul class="breadcrumb-list">
            <li><a href="index.html">Home</a></li>
            <li class="breadcrumb-separator">/</li>
            <li><a href="available-properties.html">Available Properties</a></li>
            <li class="breadcrumb-separator">/</li>
            <li><a href="available-properties.html?category=${prop.category}">${prop.categoryName}</a></li>
            <li class="breadcrumb-separator">/</li>
            <li style="color: var(--text-primary); font-weight: 600;">${prop.shortTitle || prop.title}</li>
          </ul>
        </div>
      </div>

      <section class="section" style="padding-top: 36px;">
        <div class="container">
          
          <!-- Property Title Header -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px; margin-bottom: 24px;">
            <div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                <span class="${availabilityClass}" style="padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700;">${availabilityText}</span>
                ${possessionBadge}
                <span class="badge-verified" style="padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700;">${prop.badge || 'VERIFIED PROPERTY'}</span>
                <span style="background: var(--bg-tertiary); color: var(--text-secondary); padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600;">${prop.categoryName}</span>
              </div>
              <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 8px;">${prop.title}</h1>
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: var(--text-secondary);">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--brand-gold-500);"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${prop.location} ${prop.buildingName ? ' • ' + prop.buildingName : ''}</span>
              </div>
            </div>

            <!-- Price Display Header -->
            <div style="text-align: right;">
              <div style="font-size: 2rem; font-weight: 800; font-family: var(--font-heading); color: var(--brand-navy-600);">${priceText}</div>
              <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Rate: ${rateText}</div>
            </div>
          </div>

          <!-- Gallery Layout -->
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-bottom: 40px; border-radius: var(--radius-xl); overflow: hidden; max-height: 480px;">
            <div style="height: 480px; overflow: hidden; background: #0A1322;">
              <img src="${prop.image}" alt="${prop.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div style="display: grid; grid-template-rows: 1fr 1fr; gap: 16px; height: 480px;">
              <div style="overflow: hidden; background: #0A1322;">
                <img src="${(prop.gallery && prop.gallery[1]) || prop.image}" alt="Interior view" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="overflow: hidden; background: #0A1322;">
                <img src="${(prop.gallery && prop.gallery[2]) || prop.image}" alt="Building view" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
            </div>
          </div>

          <!-- Main Details & Sidebar Layout -->
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">
            
            <!-- Left Main Column -->
            <div>
              <!-- Key Specs Matrix -->
              <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; margin-bottom: 30px; box-shadow: var(--shadow-sm);">
                <h3 style="margin-bottom: 20px;">Property Specifications</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Super Area</div>
                    <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">${prop.areaSqFt.toLocaleString('en-IN')} Sq.Ft.</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Carpet Area</div>
                    <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">${prop.carpetAreaSqFt ? prop.carpetAreaSqFt.toLocaleString('en-IN') + ' Sq.Ft.' : '75-80% Approx'}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Furnishing</div>
                    <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">${prop.furnishing}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Floor Level</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${prop.floor || 'Mid Floor'} (${prop.totalFloors || 'High Rise'})</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Workstations / Setup</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${prop.workstations ? prop.workstations + ' Modular Seats' : 'Customizable'}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Cabins & Conf.</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${prop.cabins ? prop.cabins + ' Cabins + ' + (prop.conferenceRooms || 1) + ' Boardroom' : 'Open Floor'}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Car Parking</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${prop.carParking || 'Reserved Basement'}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Orientation</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${prop.facing || 'East Facing'}</div>
                  </div>
                  <div style="padding: 12px; background: var(--bg-primary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Availability</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--status-success);">Immediate Possession</div>
                  </div>
                </div>
              </div>

              <!-- Overview & Description -->
              <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; margin-bottom: 30px; box-shadow: var(--shadow-sm);">
                <h3 style="margin-bottom: 16px;">Property Overview</h3>
                <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">${prop.description}</p>
                
                <h4 style="margin-bottom: 14px;">Key Infrastructure & Features</h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
                  ${(prop.features || []).map(f => `
                    <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: var(--text-secondary);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Nearby Connectivity Section -->
              <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; margin-bottom: 30px; box-shadow: var(--shadow-sm);">
                <h3 style="margin-bottom: 16px;">Strategic Location & Connectivity</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                  <div style="display: flex; gap: 12px;">
                    <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--brand-gold-100); color: var(--brand-gold-600); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m16 19 2 3"></path></svg>
                    </div>
                    <div>
                      <h4 style="font-size: 1rem; margin-bottom: 4px;">Metro Connectivity</h4>
                      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Direct access to Blue Line / Aqua Line metro network within 3 to 7 minutes.</p>
                    </div>
                  </div>
                  <div style="display: flex; gap: 12px;">
                    <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--brand-gold-100); color: var(--brand-gold-600); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                    </div>
                    <div>
                      <h4 style="font-size: 1rem; margin-bottom: 4px;">Expressway Access</h4>
                      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Instant link to Delhi-Meerut Expressway (NH-9), DND Flyway &amp; Yamuna Expressway.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Sidebar: Advisor Card & Inquiry Form -->
            <div>
              <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-xl); padding: 30px; box-shadow: var(--shadow-lg); position: sticky; top: 100px;">
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border-subtle);">
                  <img src="assets/sanjeet.jpg" alt="Sanjeet Kumar" style="width: 58px; height: 58px; border-radius: var(--radius-full); object-fit: cover; border: 2px solid var(--brand-gold-500);" />
                  <div>
                    <h4 style="font-size: 1.15rem; margin-bottom: 2px;">Sanjeet Kumar</h4>
                    <p style="font-size: 0.82rem; color: var(--brand-gold-600); font-weight: 700; margin: 0;">Authorized Real Estate Advisor</p>
                    <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0;">Srishti Estate • I-Thum Tower-B 1035</p>
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
                  <a href="tel:8750098666" class="btn btn-call" style="width: 100%;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Call Sanjeet: 8750098666
                  </a>
                  <a href="https://wa.me/918750098666?text=${waText}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp for Floor Plans
                  </a>
                  <button class="btn btn-schedule-visit" data-open-enquiry data-prop-title="${prop.title}" data-prop-location="${prop.location}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>Schedule Site Visit</span>
                    <span class="visit-badge">Instant Booking</span>
                  </button>
                </div>

                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md); font-size: 0.82rem; color: var(--text-secondary);">
                  <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">100% Verified Documentation</div>
                  <div>Direct discussions with property owners. Zero hidden lease terms. Verified power load and fire safety NOCs.</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Similar Properties Section -->
          ${similarProps.length > 0 ? `
            <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--border-subtle);">
              <div class="section-header">
                <span class="section-eyebrow">Related Recommendations</span>
                <h2 class="section-title">Similar Properties in ${prop.location}</h2>
              </div>
              <div class="properties-grid">
                ${similarProps.map(p => window.renderPropertyCard(p)).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </section>
    `;
  }

  // --- 2. Building / Project Showcase Page Renderer ---
  function renderBuildingDetailPage() {
    const container = document.getElementById('buildingDetailRoot');
    if (!container || !window.SRISHTI_DATA) return;

    const params = new URLSearchParams(window.location.search);
    const bId = params.get('id') || 'i-thum-sector-62';
    const building = window.SRISHTI_DATA.projects.find(b => b.id === bId) || window.SRISHTI_DATA.projects[0];

    if (!building) return;

    document.title = `${building.name}, ${building.location} | SRISHTI ESTATE`;

    // Available units in this building
    const buildingUnits = window.SRISHTI_DATA.properties.filter(p => p.buildingId === building.id);

    // Related buildings
    const relatedBuildings = window.SRISHTI_DATA.projects.filter(b => b.id !== building.id).slice(0, 3);

    const waText = encodeURIComponent(
      `Hi Sanjeet ji, I am inquiring about available office space in "${building.name}" (${building.location}) on Srishti Estate.\n` +
      `Please share list of available units, pricing per sq.ft., and maintenance breakdown.`
    );

    container.innerHTML = `
      <!-- Breadcrumb Bar -->
      <div class="breadcrumbs-bar">
        <div class="container">
          <ul class="breadcrumb-list">
            <li><a href="index.html">Home</a></li>
            <li class="breadcrumb-separator">/</li>
            <li><a href="it-parks.html">IT &amp; Business Parks</a></li>
            <li class="breadcrumb-separator">/</li>
            <li style="color: var(--text-primary); font-weight: 600;">${building.name}</li>
          </ul>
        </div>
      </div>

      <!-- Project Hero Banner -->
      <div style="position: relative; background: #0A1322; color: #FFFFFF; padding: 70px 0; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: url('${building.image}') center/cover no-repeat; opacity: 0.22; mix-blend-mode: luminosity;"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <div style="max-width: 850px;">
            <div style="display: flex; gap: 10px; margin-bottom: 12px;">
              <span class="badge-gold" style="padding: 4px 14px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700;">${building.badge}</span>
              <span style="background: rgba(255,255,255,0.15); backdrop-filter: blur(6px); color: #FFFFFF; padding: 4px 14px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600;">${building.propertyType}</span>
            </div>
            <h1 style="color: #FFFFFF; margin-bottom: 12px;">${building.name}</h1>
            <p style="font-size: 1.15rem; color: #CBD5E1; margin-bottom: 20px;">${building.tagline}</p>
            <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap; font-size: 0.95rem;">
              <div><strong>Location:</strong> ${building.location}</div>
              <div><strong>Available Space:</strong> ${building.availableSpace}</div>
              <div><strong>Commercials:</strong> ${building.rentSale}</div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">
            
            <!-- Left Project Details -->
            <div>
              <!-- 20-Point Structure Breakdown -->
              <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 32px; margin-bottom: 30px;">
                <h3 style="margin-bottom: 16px;">Project Overview</h3>
                <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">${building.overview}</p>
                
                <h4 style="margin-bottom: 14px;">Available Size Configurations</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px;">
                  ${(building.sizeOptions || []).map(s => `
                    <span style="background: var(--bg-primary); border: 1px solid var(--border-medium); padding: 8px 16px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.9rem; color: var(--brand-navy-600);">${s}</span>
                  `).join('')}
                </div>

                <h4 style="margin-bottom: 14px;">Building Amenities &amp; Infrastructure</h4>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 28px;">
                  ${(building.amenities || []).map(a => `
                    <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text-secondary);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span>${a}</span>
                    </div>
                  `).join('')}
                </div>

                <h4 style="margin-bottom: 14px;">Metro &amp; Highway Connectivity</h4>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 8px;"><strong>Metro:</strong> ${building.metroConnectivity}</p>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 8px;"><strong>Roads:</strong> ${building.roadConnectivity}</p>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;"><strong>Commercial Ecosystem:</strong> ${building.ecosystem}</p>
              </div>

              <!-- Available Units in this Project -->
              <div style="margin-bottom: 40px;">
                <h3 style="margin-bottom: 20px;">Available Spaces in ${building.name}</h3>
                ${buildingUnits.length > 0 ? `
                  <div style="display: flex; flex-direction: column; gap: 20px;">
                    ${buildingUnits.map(u => window.renderPropertyCard(u)).join('')}
                  </div>
                ` : `
                  <div style="background: var(--bg-card); border: 1px dashed var(--border-medium); border-radius: var(--radius-lg); padding: 30px; text-align: center;">
                    <p style="margin-bottom: 12px;">We have multiple private units in ${building.name} available upon request.</p>
                    <a href="https://wa.me/918750098666?text=${waText}" target="_blank" class="btn btn-whatsapp btn-sm">WhatsApp for Off-Market Inventory</a>
                  </div>
                `}
              </div>
            </div>

            <!-- Right Sidebar: Action & Advisor Box -->
            <div>
              <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-xl); padding: 30px; box-shadow: var(--shadow-lg); position: sticky; top: 100px;">
                <h3 style="font-size: 1.25rem; margin-bottom: 8px;">Book a Site Visit at ${building.name}</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px;">Connect directly with Sanjeet Kumar for turnkey leasing options &amp; zero brokerage advisory.</p>
                
                <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
                  <a href="tel:8750098666" class="btn btn-call" style="width: 100%;">Call 8750098666</a>
                  <a href="https://wa.me/918750098666?text=${waText}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">WhatsApp Sanjeet Kumar</a>
                  <button class="btn btn-schedule-visit" data-open-enquiry data-prop-title="Office in ${building.name}" data-prop-location="${building.location}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>Schedule Building Site Visit</span>
                    <span class="visit-badge">Zero Brokerage</span>
                  </button>
                </div>

                <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; font-size: 0.85rem; color: var(--text-secondary);">
                  <div><strong>Corporate Office:</strong></div>
                  <div>Srishti Estate, I-Thum Tower-B, Unit 1035, Sector 62 Noida</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Related Projects -->
          <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--border-subtle);">
            <h2 class="section-title" style="margin-bottom: 24px;">Other Premium Commercial Projects</h2>
            <div class="project-grid">
              ${relatedBuildings.map(b => `
                <div class="project-card">
                  <div class="project-card-image-box">
                    <img class="project-card-image" src="${b.image}" alt="${b.name}" />
                    <span class="project-badge-top">${b.badge}</span>
                  </div>
                  <div class="project-card-body">
                    <div class="project-card-location">${b.location}</div>
                    <h3 class="project-card-title">${b.name}</h3>
                    <ul class="project-meta-list">
                      <li class="project-meta-item"><span class="project-meta-label">Available:</span><span class="project-meta-val">${b.availableSpace}</span></li>
                      <li class="project-meta-item"><span class="project-meta-label">Status:</span><span class="project-meta-val">${b.furnishingStatus}</span></li>
                    </ul>
                    <div class="project-card-actions">
                      <a href="building-detail.html?id=${b.id}" class="btn btn-secondary btn-sm">View Project</a>
                      <a href="available-properties.html?location=${b.locationId}" class="btn btn-primary btn-sm">View Spaces</a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // --- 3. Location SEO Landing Page Renderer ---
  function renderLocationDetailPage() {
    const container = document.getElementById('locationDetailRoot');
    if (!container || !window.SRISHTI_DATA) return;

    const params = new URLSearchParams(window.location.search);
    const locId = params.get('loc') || 'sector-62';
    const loc = window.SRISHTI_DATA.locations.find(l => l.id === locId) || window.SRISHTI_DATA.locations[0];

    if (!loc) return;

    document.title = `Commercial Property & Office Space in ${loc.name} | SRISHTI ESTATE`;

    // Available listings in this location
    const locationProps = window.SRISHTI_DATA.properties.filter(p => p.locationId === loc.id);

    container.innerHTML = `
      <div class="breadcrumbs-bar">
        <div class="container">
          <ul class="breadcrumb-list">
            <li><a href="index.html">Home</a></li>
            <li class="breadcrumb-separator">/</li>
            <li><a href="locations.html">Locations</a></li>
            <li class="breadcrumb-separator">/</li>
            <li style="color: var(--text-primary); font-weight: 600;">${loc.name}</li>
          </ul>
        </div>
      </div>

      <!-- Location Hero -->
      <div style="position: relative; background: #0A1322; color: #FFFFFF; padding: 70px 0; overflow: hidden;">
        <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: url('${loc.image}') center/cover no-repeat; opacity: 0.25; mix-blend-mode: luminosity;"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <span class="badge-gold" style="padding: 4px 14px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700; margin-bottom: 12px; display: inline-block;">${loc.type}</span>
          <h1 style="color: #FFFFFF; margin-bottom: 12px;">Commercial Property &amp; Office Space in ${loc.name}</h1>
          <p style="font-size: 1.15rem; color: #CBD5E1; max-width: 800px; margin-bottom: 24px;">${loc.desc}</p>
          <div style="display: flex; gap: 24px; flex-wrap: wrap; font-size: 0.95rem;">
            <div><strong>Rent Benchmark:</strong> ${loc.priceRange}</div>
            <div><strong>Sale Benchmark:</strong> ${loc.saleRange}</div>
            <div><strong>Available Listings:</strong> ${loc.availableCount}+ Properties</div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">
            
            <div>
              <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; margin-bottom: 30px;">
                <h3 style="margin-bottom: 14px;">Why Choose ${loc.name} for Your Business?</h3>
                <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">${loc.businessAdvantages}</p>
                
                <h4 style="margin-bottom: 12px;">Transit &amp; Road Connectivity</h4>
                <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 8px;"><strong>Metro Line:</strong> ${loc.metroConnectivity}</p>
                <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 20px;"><strong>Highway Access:</strong> ${loc.roadConnectivity}</p>

                <h4 style="margin-bottom: 12px;">Popular Commercial Towers in this Sector</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                  ${(loc.popularBuildings || []).map(b => `<span style="background: var(--bg-primary); border: 1px solid var(--border-medium); padding: 6px 14px; border-radius: var(--radius-md); font-weight: 600; font-size: 0.85rem;">${b}</span>`).join('')}
                </div>
              </div>

              <!-- Available Properties in this Location -->
              <div style="margin-bottom: 40px;">
                <h3 style="margin-bottom: 20px;">Verified Properties Available in ${loc.name}</h3>
                ${locationProps.length > 0 ? `
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    ${locationProps.map(p => window.renderPropertyCard(p)).join('')}
                  </div>
                ` : `
                  <p style="color: var(--text-secondary);">Contact Sanjeet Kumar for customized unlisted options in ${loc.name}.</p>
                `}
              </div>

              <!-- FAQs Accordion -->
              ${(loc.faqs && loc.faqs.length > 0) ? `
                <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px;">
                  <h3 style="margin-bottom: 20px;">Frequently Asked Questions: ${loc.name}</h3>
                  <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${loc.faqs.map(faq => `
                      <div class="faq-item" style="border: 1px solid var(--border-subtle); padding: 18px; border-radius: var(--radius-md);">
                        <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--text-primary);">${faq.q}</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">${faq.a}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- Right Contact Sidebar -->
            <div>
              <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-xl); padding: 30px; position: sticky; top: 100px; box-shadow: var(--shadow-lg);">
                <h3 style="font-size: 1.25rem; margin-bottom: 8px;">Explore Spaces in ${loc.name}</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px;">Get a customized comparative portfolio with rental agreements and floor plans within 2 hours.</p>

                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <a href="tel:8750098666" class="btn btn-call" style="width: 100%;">Call 8750098666</a>
                  <a href="https://wa.me/918750098666?text=Hi%20Sanjeet%20ji,%20I%20am%20looking%20for%20property%20options%20in%20${encodeURIComponent(loc.name)}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">WhatsApp Sanjeet Kumar</a>
                  <button class="btn btn-schedule-visit" data-open-enquiry data-prop-title="Property in ${loc.name}" data-prop-location="${loc.name}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>Schedule Guided Sector Tour</span>
                    <span class="visit-badge">Free Tour</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  // --- Initialize on Page Load ---
  document.addEventListener('DOMContentLoaded', async () => {
    if (window.fetchPropertyStatuses) {
      await window.fetchPropertyStatuses();
    }
    renderPropertyDetailPage();
    renderBuildingDetailPage();
    renderLocationDetailPage();
  });

})();
