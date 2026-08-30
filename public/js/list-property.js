document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('listPropertyForm');
  if (!form) return;

  const SUPABASE_URL = 'https://gvglepwknzisbzqxjaoy.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z2xlcHdrbnppc2J6cXhqYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjUyNjIsImV4cCI6MjEwMjU0MTI2Mn0.OQmEUOmMxVadDnj9Lo2izmLuZkZQNrmauJ3OlkocWxY';
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // Dynamic Pricing Fields
  const purposeCheckboxes = document.querySelectorAll('.purpose-checkbox');
  const fieldSale = document.getElementById('fieldSalePrice');
  const fieldRent = document.getElementById('fieldRentPrice');
  const fieldLease = document.getElementById('fieldLeasePrice');
  const inputSale = document.getElementById('lpSalePrice');
  const inputRent = document.getElementById('lpMonthlyRent');
  const inputLease = document.getElementById('lpLeasePrice');

  // Handle Selection Cards Active State
  const selectionCards = document.querySelectorAll('.selection-card');
  selectionCards.forEach(card => {
    const input = card.querySelector('input');
    if (input) {
      input.addEventListener('change', () => {
        if (input.checked) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }
  });

  function updatePricingFields() {
    const selected = Array.from(purposeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    
    if (selected.includes('Sell')) {
      fieldSale.style.display = 'block';
      inputSale.required = true;
    } else {
      fieldSale.style.display = 'none';
      inputSale.required = false;
      inputSale.value = '';
    }

    if (selected.includes('Rent')) {
      fieldRent.style.display = 'block';
      inputRent.required = true;
    } else {
      fieldRent.style.display = 'none';
      inputRent.required = false;
      inputRent.value = '';
    }

    if (selected.includes('Lease')) {
      fieldLease.style.display = 'block';
      inputLease.required = true;
    } else {
      fieldLease.style.display = 'none';
      inputLease.required = false;
      inputLease.value = '';
    }
  }

  purposeCheckboxes.forEach(cb => cb.addEventListener('change', updatePricingFields));

  // Image Preview
  const imageInput = document.getElementById('lpImages');
  const previewContainer = document.getElementById('imagePreviewContainer');

  imageInput.addEventListener('change', (e) => {
    previewContainer.innerHTML = '';
    const files = Array.from(e.target.files);
    
    // File size validation (Max 5MB)
    const validFiles = files.filter(f => {
      if (f.size > 5 * 1024 * 1024) {
        alert(`File ${f.name} is too large. Max 5MB allowed.`);
        return false;
      }
      return true;
    });

    if (validFiles.length !== files.length) {
      // Create a new FileList containing only valid files using DataTransfer
      const dataTransfer = new DataTransfer();
      validFiles.forEach(f => dataTransfer.items.add(f));
      imageInput.files = dataTransfer.files;
    }

    Array.from(imageInput.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '80px';
        img.style.height = '80px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        img.style.border = '1px solid var(--border-medium)';
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });

  // Drag and Drop functionality
  const dropZone = document.getElementById('imageDropZone');
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        imageInput.files = e.dataTransfer.files;
        imageInput.dispatchEvent(new Event('change'));
      }
    });
  }

  // Helper to generate UUID
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('lpSubmitBtn');
    const statusDiv = document.getElementById('lpFormStatus');
    
    // Validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(form.mobile.value)) {
      statusDiv.textContent = 'Please enter a valid 10-digit Indian mobile number.';
      statusDiv.style.color = '#ef4444';
      return;
    }

    const selectedPurposes = Array.from(purposeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selectedPurposes.length === 0) {
      statusDiv.textContent = 'Please select at least one purpose (Sell/Rent/Lease).';
      statusDiv.style.color = '#ef4444';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Uploading files & Submitting...';
    statusDiv.textContent = '';

    try {
      const submissionId = generateUUID();
      const folderPath = `uploads/${submissionId}`;

      // Upload Images
      const uploadedImages = [];
      const imageFiles = imageInput.files;
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        const ext = file.name.split('.').pop();
        const filePath = `${folderPath}/images/img_${i}.${ext}`;
        const { data, error } = await supabase.storage
          .from('property_uploads')
          .upload(filePath, file);
        if (error) throw error;
        uploadedImages.push(data.path);
      }

      // Upload Floor Plan
      let floorPlanUrl = null;
      const floorPlanFile = document.getElementById('lpFloorPlan').files[0];
      if (floorPlanFile) {
        if (floorPlanFile.size > 10 * 1024 * 1024) throw new Error('Floor plan must be less than 10MB.');
        const ext = floorPlanFile.name.split('.').pop();
        const filePath = `${folderPath}/documents/floor_plan.${ext}`;
        const { data, error } = await supabase.storage
          .from('property_uploads')
          .upload(filePath, floorPlanFile);
        if (error) throw error;
        floorPlanUrl = data.path;
      }

      // Upload Brochure
      let brochureUrl = null;
      const brochureFile = document.getElementById('lpBrochure').files[0];
      if (brochureFile) {
        if (brochureFile.size > 10 * 1024 * 1024) throw new Error('Brochure must be less than 10MB.');
        const ext = brochureFile.name.split('.').pop();
        const filePath = `${folderPath}/documents/brochure.${ext}`;
        const { data, error } = await supabase.storage
          .from('property_uploads')
          .upload(filePath, brochureFile);
        if (error) throw error;
        brochureUrl = data.path;
      }

      // Prepare DB Payload
      const payload = {
        id: submissionId,
        full_name: form.full_name.value,
        mobile: form.mobile.value,
        whatsapp: form.whatsapp.value || null,
        email: form.email.value || null,
        contact_method: form.contact_method.value,
        owner_type: form.owner_type.value,
        listing_purpose: selectedPurposes,
        property_type: form.property_type.value,
        property_name: form.property_name.value,
        sector: form.sector.value,
        location: form.sector.value,
        city: form.city.value,
        address: form.address.value || null,
        total_area: form.total_area.value,
        floor: form.floor.value || null,
        furnishing_status: form.furnishing_status.value,
        sale_price: form.sale_price.value || null,
        monthly_rent: form.monthly_rent.value || null,
        lease_price: form.lease_price.value || null,
        maintenance_charges: form.maintenance_charges.value || null,
        description: form.description.value || null,
        property_images: uploadedImages,
        floor_plan_url: floorPlanUrl,
        brochure_url: brochureUrl,
        status: 'pending'
      };

      // Insert into DB
      const { error: dbError } = await supabase
        .from('property_submissions')
        .insert([payload]);

      if (dbError) throw dbError;

      // Success state UI
      form.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 20px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--text-primary);">Property Submitted Successfully!</h2>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto; line-height: 1.6;">Thank you for listing your property with Shristi Estate. Our commercial advisors will review your submission and contact you shortly.</p>
        </div>
      `;

    } catch (err) {
      console.error(err);
      statusDiv.textContent = 'Error submitting property: ' + (err.message || 'Please try again.');
      statusDiv.style.color = '#ef4444';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Property Listing';
    }
  });
});
