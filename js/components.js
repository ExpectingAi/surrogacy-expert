// Shared nav & footer HTML
const NAV = `
<header class="site-header">
  <div class="container">
    <nav class="nav-inner">
      <a href="/" class="nav-logo">
        <div class="logo-mark">👪</div>
        Surrogacy<span class="domain">.expert</span>
      </a>
      <ul class="nav-menu">
        <li class="nav-item">
          <span class="nav-link">Learn <span class="chevron">▾</span></span>
          <div class="dropdown">
            <div class="dd-label">Understanding Surrogacy</div>
            <a class="dd-link" href="/learn/what-is-surrogacy-for-parents/">What Is Surrogacy?</a>
            <a class="dd-link" href="/learn/types-of-surrogacy/">Types of Surrogacy</a>
            <a class="dd-link" href="/learn/surrogacy-cost/">Surrogacy Cost & Budget</a>
            <a class="dd-link" href="/learn/surrogacy-timeline/">Timeline Overview</a>
            <a class="dd-link" href="/surrogacy-by-state/">Surrogacy by State</a>
            <a class="dd-link" href="/learn/faq-glossary/">FAQ & Glossary</a>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link">Your Journey <span class="chevron">▾</span></span>
          <div class="dropdown">
            <div class="dd-label">The Surrogacy Process</div>
            <a class="dd-link" href="/your-journey/starting-out/">Starting Your Journey</a>
            <a class="dd-link" href="/your-journey/choosing-an-agency/">Choosing an Agency</a>
            <a class="dd-link" href="/your-journey/the-matching-process/">The Matching Process</a>
            <a class="dd-link" href="/your-journey/legal-process/">Legal Process</a>
            <a class="dd-link" href="/your-journey/medical-process/">Medical Process & IVF</a>
            <a class="dd-link" href="/your-journey/pregnancy-and-birth/">Pregnancy & Birth</a>
            <a class="dd-link" href="/your-journey/after-the-birth/">After the Birth</a>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link">Your Surrogate <span class="chevron">▾</span></span>
          <div class="dropdown">
            <div class="dd-label">Finding & Working With a Surrogate</div>
            <a class="dd-link" href="/your-surrogate/finding-a-surrogate/">Finding a Surrogate</a>
            <a class="dd-link" href="/your-surrogate/surrogate-screening/">Surrogate Screening</a>
            <a class="dd-link" href="/your-surrogate/surrogate-compensation/">Surrogate Compensation</a>
            <a class="dd-link" href="/your-surrogate/your-relationship/">Your Relationship</a>
            <a class="dd-link" href="/your-surrogate/surrogate-requirements/">Surrogate Requirements</a>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link">Your Family <span class="chevron">▾</span></span>
          <div class="dropdown">
            <div class="dd-label">Family Building Paths</div>
            <a class="dd-link" href="/your-family/lgbtq-surrogacy/">LGBTQ+ Surrogacy</a>
            <a class="dd-link" href="/your-family/single-parent-surrogacy/">Single Parent Surrogacy</a>
            <a class="dd-link" href="/your-family/same-sex-male-couples/">Same-Sex Male Couples</a>
            <a class="dd-link" href="/your-family/talking-to-your-child/">Talking to Your Child</a>
            <a class="dd-link" href="/your-family/international-intended-parents/">International Parents</a>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="/about/">About</a></li>
        <li><a class="btn btn-primary nav-cta" href="/get-started/">Start Your Journey →</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>`;

const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="disclaimer">
      <strong>Disclaimer:</strong> Surrogacy.expert provides general educational information about gestational surrogacy. 
      This site does not provide legal, medical, or financial advice. Laws and regulations vary by state and country. 
      Always consult qualified legal and medical professionals before making decisions about your surrogacy journey.
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo"><div class="logo-mark">👪</div>Surrogacy<span class="domain">.expert</span></div>
        <p>Comprehensive, honest guidance for intended parents pursuing surrogacy — covering every stage from first questions to bringing your baby home.</p>
      </div>
      <div class="footer-col">
        <h5>Learn</h5>
        <a class="f-link" href="/learn/what-is-surrogacy-for-parents/">What Is Surrogacy?</a>
        <a class="f-link" href="/learn/types-of-surrogacy/">Types of Surrogacy</a>
        <a class="f-link" href="/learn/surrogacy-cost/">Cost & Budget</a>
        <a class="f-link" href="/learn/surrogacy-timeline/">Timeline</a>
        <a class="f-link" href="/surrogacy-by-state/">Surrogacy by State</a>
        <a class="f-link" href="/learn/faq-glossary/">FAQ & Glossary</a>
      </div>
      <div class="footer-col">
        <h5>Your Journey</h5>
        <a class="f-link" href="/your-journey/starting-out/">Starting Out</a>
        <a class="f-link" href="/your-journey/choosing-an-agency/">Choosing an Agency</a>
        <a class="f-link" href="/your-journey/the-matching-process/">Matching Process</a>
        <a class="f-link" href="/your-journey/legal-process/">Legal Process</a>
        <a class="f-link" href="/your-journey/medical-process/">Medical & IVF</a>
        <a class="f-link" href="/your-journey/pregnancy-and-birth/">Pregnancy & Birth</a>
      </div>
      <div class="footer-col">
        <h5>Your Family</h5>
        <a class="f-link" href="/your-family/lgbtq-surrogacy/">LGBTQ+ Surrogacy</a>
        <a class="f-link" href="/your-family/single-parent-surrogacy/">Single Parents</a>
        <a class="f-link" href="/your-family/same-sex-male-couples/">Same-Sex Couples</a>
        <a class="f-link" href="/your-surrogate/finding-a-surrogate/">Find a Surrogate</a>
        <a class="f-link" href="/about/">About</a>
        <a class="f-link" href="/get-started/">Get Started</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Surrogacy.expert — An <a href="https://expecting.ai" style="color:var(--teal)">Expecting.AI</a> Resource</span>
      <div class="f-legal">
        <a href="/privacy/">Privacy Policy</a>
        <a href="/terms/">Terms of Use</a>
        <a href="/sitemap/">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  const ftEl  = document.getElementById('site-footer');
  if (navEl)  navEl.innerHTML  = NAV;
  if (ftEl)   ftEl.innerHTML   = FOOTER;
});
