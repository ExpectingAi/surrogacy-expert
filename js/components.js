// Legacy shared nav & footer used by older Surrogacy.Expert pages.
// Kept neutral and aligned with the current canonical site structure.
const NAV = `
<header class="site-header">
  <div class="container">
    <nav class="nav-inner">
      <a href="/" class="nav-logo"><div class="logo-mark">👪</div>Surrogacy<span class="domain">.expert</span></a>
      <ul class="nav-menu">
        <li class="nav-item"><span class="nav-link">Learn <span class="chevron">▾</span></span><div class="dropdown">
          <div class="dd-label">Understanding Surrogacy</div>
          <a class="dd-link" href="/learn/what-is-surrogacy/">What Is Surrogacy?</a>
          <a class="dd-link" href="/learn/types-of-surrogacy/">Types of Surrogacy</a>
          <a class="dd-link" href="/learn/surrogacy-cost/">Cost & Budget</a>
          <a class="dd-link" href="/learn/surrogacy-timeline/">Timeline Overview</a>
          <a class="dd-link" href="/surrogacy-by-state/">Surrogacy by State</a>
          <a class="dd-link" href="/learn/faq-glossary/">FAQ & Glossary</a>
        </div></li>
        <li class="nav-item"><span class="nav-link">Your Journey <span class="chevron">▾</span></span><div class="dropdown">
          <div class="dd-label">The Surrogacy Process</div>
          <a class="dd-link" href="/your-journey/starting-out/">Starting Out</a>
          <a class="dd-link" href="/your-journey/choosing-an-agency/">Choosing an Agency</a>
          <a class="dd-link" href="/your-journey/matching-process/">Matching Process</a>
          <a class="dd-link" href="/your-journey/legal-process/">Legal Process</a>
          <a class="dd-link" href="/your-journey/medical-process/">Medical Process & IVF</a>
          <a class="dd-link" href="/your-journey/pregnancy-and-birth/">Pregnancy & Birth</a>
          <a class="dd-link" href="/your-journey/after-the-birth/">After the Birth</a>
        </div></li>
        <li class="nav-item"><span class="nav-link">Your Surrogate <span class="chevron">▾</span></span><div class="dropdown">
          <div class="dd-label">Finding & Working Together</div>
          <a class="dd-link" href="/your-surrogate/how-to-find-a-surrogate/">How to Find a Surrogate</a>
          <a class="dd-link" href="/your-surrogate/surrogate-screening/">Surrogate Screening</a>
          <a class="dd-link" href="/your-surrogate/surrogate-compensation/">Surrogate Compensation</a>
          <a class="dd-link" href="/your-surrogate/your-relationship/">Your Relationship</a>
          <a class="dd-link" href="/your-surrogate/surrogate-requirements/">Surrogate Requirements</a>
        </div></li>
        <li class="nav-item"><span class="nav-link">Your Family <span class="chevron">▾</span></span><div class="dropdown">
          <div class="dd-label">Family Paths</div>
          <a class="dd-link" href="/your-family/lgbtq-surrogacy/">LGBTQ+ Surrogacy</a>
          <a class="dd-link" href="/your-family/single-parent-surrogacy/">Single Parent Surrogacy</a>
          <a class="dd-link" href="/your-family/same-sex-male-couples/">Same-Sex Male Couples</a>
          <a class="dd-link" href="/your-family/international-parents/">International Parents</a>
          <a class="dd-link" href="/your-family/talking-to-your-child/">Talking to Your Child</a>
        </div></li>
        <li class="nav-item"><a class="nav-link" href="/about/">About</a></li>
        <li><a class="btn btn-primary nav-cta" href="/get-started/">Planning Guide</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
  </div>
</header>`;

const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="disclaimer"><strong>Disclaimer:</strong> Surrogacy.expert provides general educational information about gestational surrogacy. It does not provide legal, medical, insurance, tax, or financial advice. Laws, clinical protocols, costs, and program criteria vary. Verify important decisions with qualified professionals.</div>
    <div class="footer-grid">
      <div class="footer-brand"><div class="nav-logo"><div class="logo-mark">👪</div>Surrogacy<span class="domain">.expert</span></div><p>Practical educational guidance for intended parents pursuing gestational surrogacy in the United States.</p></div>
      <div class="footer-col"><h5>Learn</h5>
        <a class="f-link" href="/learn/what-is-surrogacy/">What Is Surrogacy?</a>
        <a class="f-link" href="/learn/types-of-surrogacy/">Types of Surrogacy</a>
        <a class="f-link" href="/learn/surrogacy-cost/">Cost & Budget</a>
        <a class="f-link" href="/learn/surrogacy-timeline/">Timeline</a>
        <a class="f-link" href="/surrogacy-by-state/">Surrogacy by State</a>
      </div>
      <div class="footer-col"><h5>Your Journey</h5>
        <a class="f-link" href="/your-journey/starting-out/">Starting Out</a>
        <a class="f-link" href="/your-journey/choosing-an-agency/">Choosing an Agency</a>
        <a class="f-link" href="/your-journey/matching-process/">Matching Process</a>
        <a class="f-link" href="/your-journey/legal-process/">Legal Process</a>
        <a class="f-link" href="/your-journey/medical-process/">Medical & IVF</a>
      </div>
      <div class="footer-col"><h5>Site</h5>
        <a class="f-link" href="/about/">About</a>
        <a class="f-link" href="/get-started/">Planning Guide</a>
        <a class="f-link" href="/privacy-policy/">Privacy Policy</a>
        <a class="f-link" href="/terms/">Terms of Use</a>
        <a class="f-link" href="/sitemap/">Sitemap</a>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 Surrogacy.expert</span><div class="f-legal"><a href="/privacy-policy/">Privacy Policy</a><a href="/terms/">Terms of Use</a><a href="/sitemap/">Sitemap</a></div></div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  const ftEl = document.getElementById('site-footer');
  if (navEl) navEl.innerHTML = NAV;
  if (ftEl) ftEl.innerHTML = FOOTER;
});