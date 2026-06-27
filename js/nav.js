// SoulStone — Shared Navigation

function renderNav(activePage) {
  const pages = [
    { href: 'index.html', labelKey: 'nav_home', id: 'home' },
    { href: 'products.html', labelKey: 'nav_products', id: 'products' },
    { href: 'design.html', labelKey: 'nav_design', id: 'design' },
    { href: 'quiz.html', labelKey: 'nav_quiz', id: 'quiz' },
    { href: 'stones.html', labelKey: 'nav_stones', id: 'stones' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.id === activePage ? 'active' : ''}" data-i18n-text="${p.labelKey}">${t(p.labelKey)}</a></li>`
  ).join('');

  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">SoulStone <span data-i18n-text="logo_tagline">${t('logo_tagline')}</span></a>
        <div class="nav-actions">
          <button class="lang-toggle" data-lang-toggle onclick="toggleLang()" aria-label="Switch language">${t('lang_toggle')}</button>
          <button class="nav-hamburger" onclick="document.querySelector('.nav-links').classList.toggle('open')" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
        <ul class="nav-links">${links}</ul>
      </div>
    </nav>`;
}

function renderFooter() {
  return `
    <div class="disclaimer" data-i18n="footer_disclaimer">
      ${t('footer_disclaimer')}
    </div>
    <footer class="footer">
      <div class="footer-brand">SoulStone</div>
      <p data-i18n-text="footer_tagline">${t('footer_tagline')}</p>
      <p class="mt-1" style="font-size: 0.7rem; color: var(--color-text-dim);" data-i18n-text="footer_proto">${t('footer_proto')}</p>
    </footer>`;
}

function initPage(activePage) {
  document.body.insertAdjacentHTML('afterbegin', renderNav(activePage));
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  applyI18n();
}
