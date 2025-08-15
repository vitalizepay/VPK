// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Set footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Issue form - save locally + WhatsApp
const issueForm = document.getElementById('issueForm');
const issueWhatsAppBtn = document.getElementById('issueWhatsApp');
if (issueForm) {
  issueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(issueForm).entries());
    try {
      const issues = JSON.parse(localStorage.getItem('issues') || '[]');
      issues.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem('issues', JSON.stringify(issues));
      alert('Thanks! Your issue has been recorded locally.');
      issueForm.reset();
    } catch (err) {
      console.error(err);
      alert('Could not save locally, but you can still send via WhatsApp.');
    }
  });

  if (issueWhatsAppBtn) {
    issueWhatsAppBtn.addEventListener('click', () => {
      const data = Object.fromEntries(new FormData(issueForm).entries());
      const msg = `Issue Report:%0AName: ${encodeURIComponent(data.name || '')}%0APhone: ${encodeURIComponent(data.phone || '')}%0AArea: ${encodeURIComponent(data.area || '')}%0ADetails: ${encodeURIComponent(data.details || '')}`;
      // Replace with the team's WhatsApp number (example: +919841373309 without + and spaces)
      const waNum = '919841373309';
      window.open(`https://wa.me/${waNum}?text=${msg}`, '_blank');
    });
  }
}

// Volunteer form - store locally + export CSV
const volunteerForm = document.getElementById('volunteerForm');
const downloadCSVBtn = document.getElementById('downloadCSV');
function toCSV(arr) {
  if (!arr.length) return '';
  const headers = Object.keys(arr[0]);
  const rows = arr.map(o => headers.map(h => JSON.stringify(o[h] ?? '')).join(','));
  return [headers.join(','), ...rows].join('\n');
}
if (volunteerForm) {
  volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(volunteerForm).entries());
    try {
      const vols = JSON.parse(localStorage.getItem('volunteers') || '[]');
      vols.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem('volunteers', JSON.stringify(vols));
      alert('Thanks for joining! Your details are saved locally.');
      volunteerForm.reset();
    } catch (err) {
      console.error(err);
      alert('Could not save locally.');
    }
  });

  if (downloadCSVBtn) {
    downloadCSVBtn.addEventListener('click', () => {
      const vols = JSON.parse(localStorage.getItem('volunteers') || '[]');
      const csv = toCSV(vols);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'volunteers.csv';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
