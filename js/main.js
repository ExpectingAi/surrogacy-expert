// surrogacy.expert — shared navigation and UI helpers
const navItems = [
  { label:'Learn', dropdownLabel:'Understanding Surrogacy', items:[
    ['learn/what-is-surrogacy/','What Is Gestational Surrogacy?'],
    ['learn/types-of-surrogacy/','Types of Surrogacy'],
    ['learn/surrogacy-cost/','Cost & Budget Guide'],
    ['learn/surrogacy-timeline/','Timeline Overview'],
    ['learn/faq-glossary/','FAQ & Glossary'],
    ['surrogacy-by-state/','Surrogacy by State']
  ]},
  { label:'Your Journey', dropdownLabel:'Step by Step', items:[
    ['your-journey/starting-out/','Starting Out'],
    ['your-journey/choosing-an-agency/','Choosing an Agency'],
    ['your-journey/matching-process/','The Matching Process'],
    ['your-journey/legal-process/','Legal Process & Contracts'],
    ['your-journey/medical-process/','Medical Process & IVF'],
    ['your-journey/pregnancy-and-birth/','Pregnancy & Birth'],
    ['your-journey/after-the-birth/','After the Birth']
  ]},
  { label:'Your Surrogate', dropdownLabel:'Finding & Working Together', items:[
    ['your-surrogate/how-to-find-a-surrogate/','How to Find a Surrogate'],
    ['your-surrogate/surrogate-screening/','Surrogate Screening'],
    ['your-surrogate/surrogate-compensation/','Surrogate Compensation'],
    ['your-surrogate/your-relationship/','Your Relationship'],
    ['your-surrogate/surrogate-requirements/','Surrogate Requirements']
  ]},
  { label:'Your Family', dropdownLabel:'All Family Paths', items:[
    ['your-family/lgbtq-surrogacy/','LGBTQ+ Surrogacy'],
    ['your-family/same-sex-male-couples/','Same-Sex Male Couples'],
    ['your-family/single-parent-surrogacy/','Single Parent Surrogacy'],
    ['your-family/international-parents/','International Intended Parents'],
    ['your-family/talking-to-your-child/','Talking to Your Child']
  ]}
];
const siteItems = [['available-surrogates/','Available Surrogates'],['surrogacy-agency-fees-2026/','Agency Fees'],['2026-us-surrogacy-cost-benchmark/','2026 Cost Guide'],['surrogacy-cost-by-state-2026/','Cost by State'],['your-journey/find-a-surrogate-first-or-choose-an-agency-first/','Surrogate First or Agency First?'],['about/','About'],['blog/','Blog'],['get-started/','Planning Guide'],['privacy-policy/','Privacy'],['terms/','Terms']];

function getRelativePrefix(){
  let basePath='/';
  const script=document.currentScript||Array.from(document.scripts).find(s=>s.src&&s.src.includes('/js/main.js'));
  if(script&&script.src){try{basePath=new URL(script.src).pathname.replace(/\/js\/main\.js.*$/,'/');}catch(_){basePath='/';}}
  if(!basePath.endsWith('/')) basePath+='/';
  const path=window.location.pathname;
  if(path===basePath||path===basePath.replace(/\/$/,'')) return '';
  let rel=path.startsWith(basePath)?path.slice(basePath.length):path.replace(/^\/+/, '');
  rel=rel.replace(/index\.html$/,'').replace(/\/$/,'');
  const depth=rel?rel.split('/').filter(Boolean).length:0;
  return depth>0?'../'.repeat(depth):'';
}
const navPrefix=getRelativePrefix();
const hrefFor=path=>`${navPrefix}${path}`;
const currentPath=window.location.pathname.replace(/\/$/,'');
const isActive=path=>currentPath.includes(`/${path.replace(/\/$/,'')}`);
const chevronSvg='<svg class="nav-chevron" viewBox="0 0 12 12" aria-hidden="true"><polyline points="2,4 6,8 10,4"/></svg>';

function injectSafetyFixes(){
  if(document.getElementById('sx-safety-fixes')) return;
  const style=document.createElement('style');
  style.id='sx-safety-fixes';
  style.textContent=`
    html,body{max-width:100%;overflow-x:hidden}
    .fade-up{opacity:1!important;transform:none!important}
    table{max-width:100%}
    .table-scroll,.state-table-wrap{width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
    .site-footer,.footer-inner,.footer-top,.footer-col,.footer-brand-col,.footer-section,.footer-bottom{min-width:0;max-width:100%}
    .site-footer a,.site-footer p,.site-footer h4,.footer-brand-name,.prose,.article-body,.page-hero-inner{overflow-wrap:anywhere}
    @media(max-width:640px){
      .site-footer{padding-left:1.25rem!important;padding-right:1.25rem!important;overflow-x:hidden!important}
      .site-footer .footer-top{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:2rem!important;width:100%!important;max-width:100%!important}
      .site-footer .footer-brand-col,.site-footer .footer-col,.site-footer .footer-section{width:100%!important;max-width:100%!important;min-width:0!important}
      .site-footer .footer-bottom{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:.65rem!important;width:100%!important}
    }`;
  document.head.appendChild(style);
  document.querySelectorAll('.fade-up').forEach(el=>el.classList.add('visible'));
}

function renderDesktopNav(){
  const navLinks=document.querySelector('.nav-links');
  if(!navLinks) return;
  navLinks.innerHTML=navItems.map(group=>`<li><button aria-haspopup="true" aria-expanded="false">${group.label} ${chevronSvg}</button><div class="nav-dropdown" role="menu"><div class="nav-dropdown-label">${group.dropdownLabel}</div>${group.items.map(([path,label])=>`<a href="${hrefFor(path)}" role="menuitem"${isActive(path)?' class="active"':''}>${label}</a>`).join('')}</div></li>`).join('')+`<li><a href="${hrefFor('blog/')}"${isActive('blog/')?' class="active"':''}>Blog</a></li><li><a href="${hrefFor('about/')}"${isActive('about/')?' class="active"':''}>About</a></li>`;
  const cta=document.querySelector('.nav-cta'); if(cta){cta.setAttribute('href',hrefFor('get-started/'));cta.textContent='Planning Guide';}
}
function renderMobileNav(){
  const mobile=document.getElementById('nav-mobile'); if(!mobile) return;
  mobile.innerHTML=navItems.map(group=>`<div class="nav-mobile-section"><div class="nav-mobile-label">${group.label}</div>${group.items.map(([path,label])=>`<a href="${hrefFor(path)}"${isActive(path)?' class="active"':''}>${label}</a>`).join('')}</div>`).join('')+`<a href="${hrefFor('blog/')}" style="display:block;padding:.55rem 0;border-bottom:1px solid var(--sand)">Blog</a><a href="${hrefFor('about/')}" style="display:block;padding:.55rem 0;border-bottom:1px solid var(--sand)">About</a><a href="${hrefFor('get-started/')}" class="nav-mobile-cta">Planning Guide</a>`;
}
function footerList(items){return `<ul>${items.map(([path,label])=>`<li><a href="${hrefFor(path)}">${label}</a></li>`).join('')}</ul>`;}
function footerSection(title,items,nested=false){return `<div class="footer-section${nested?' footer-section-nested':''}"${nested?' style="margin-top:2.25rem"':''}><h4>${title}</h4>${footerList(items)}</div>`;}
function setImportant(el,p,v){el.style.setProperty(p,v,'important');}
function applyFooterResponsiveLayout(){
  const width=window.innerWidth||document.documentElement.clientWidth;
  document.querySelectorAll('.site-footer .footer-top').forEach(el=>{
    setImportant(el,'display','grid');setImportant(el,'width','100%');setImportant(el,'max-width','100%');
    if(width<=640){setImportant(el,'grid-template-columns','minmax(0,1fr)');setImportant(el,'gap','2rem');}
    else if(width<=980){setImportant(el,'grid-template-columns','minmax(0,1fr) minmax(0,1fr)');setImportant(el,'gap','2.5rem');}
    else{setImportant(el,'grid-template-columns','1.8fr 1fr 1fr 1fr 1fr');setImportant(el,'gap','2.6rem');}
  });
}
function renderFooter(){
  const learn=navItems.find(g=>g.label==='Learn'), journey=navItems.find(g=>g.label==='Your Journey'), surrogate=navItems.find(g=>g.label==='Your Surrogate'), family=navItems.find(g=>g.label==='Your Family');
  const html=`<div class="footer-brand-col"><div class="footer-brand-name">Surrogacy<span>Expert</span></div><p class="footer-tagline">Practical educational guidance for intended parents pursuing gestational surrogacy in the United States.</p></div><div class="footer-col">${footerSection(learn.label,learn.items)}</div><div class="footer-col">${footerSection(journey.label,journey.items)}</div><div class="footer-col">${footerSection(surrogate.label,surrogate.items)}</div><div class="footer-col footer-col-stacked">${footerSection(family.label,family.items)}${footerSection('Site',siteItems,true)}<div class="footer-section footer-section-nested" style="margin-top:2.25rem"><h4>For Surrogates</h4><ul><li><a href="https://surrogate.expert/" rel="noopener">Surrogate.Expert</a></li></ul></div></div>`;
  document.querySelectorAll('.site-footer .footer-top').forEach(el=>el.innerHTML=html);
  document.querySelectorAll('.footer-bottom').forEach(el=>el.innerHTML=`<span>© 2026 Surrogacy Expert</span><span><a href="${hrefFor('blog/')}">Blog</a> · <a href="${hrefFor('about/')}">About</a> · <a href="${hrefFor('privacy-policy/')}">Privacy</a> · <a href="${hrefFor('terms/')}">Terms</a> · <a href="${hrefFor('sitemap/')}">Sitemap</a></span>`);
  applyFooterResponsiveLayout();
}
function injectStructuredData(){
  const breadcrumb=document.querySelector('.breadcrumb');
  if(breadcrumb&&!document.querySelector('script[data-auto-breadcrumb]')){
    const anchors=Array.from(breadcrumb.querySelectorAll('a'));
    const current=breadcrumb.querySelector('span:last-child');
    const items=anchors.map((a,i)=>({'@type':'ListItem',position:i+1,name:a.textContent.trim(),item:a.href}));
    if(current&&current.textContent.trim()&&current.textContent.trim()!=='›') items.push({'@type':'ListItem',position:items.length+1,name:current.textContent.trim(),item:window.location.href.split('?')[0].replace(/\/$/,'')+'/'});
    if(items.length>1){const ld=document.createElement('script');ld.type='application/ld+json';ld.dataset.autoBreadcrumb='1';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items});document.head.appendChild(ld);}
  }
}

injectSafetyFixes();renderDesktopNav();renderMobileNav();renderFooter();injectStructuredData();
window.addEventListener('resize',applyFooterResponsiveLayout);
const hamburger=document.getElementById('nav-hamburger'), mobileNav=document.getElementById('nav-mobile');
if(hamburger&&mobileNav){hamburger.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');hamburger.setAttribute('aria-expanded',open);mobileNav.setAttribute('aria-hidden',String(!open));});mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.classList.remove('open');hamburger.setAttribute('aria-expanded','false');mobileNav.setAttribute('aria-hidden','true');}));}
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');if(!item)return;const wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(el=>el.classList.remove('open'));if(!wasOpen)item.classList.add('open');}));
const stateSearch=document.getElementById('stateSearch');if(stateSearch)stateSearch.addEventListener('input',()=>{const v=stateSearch.value.toLowerCase();document.querySelectorAll('.state-card').forEach(c=>{const n=c.querySelector('.state-name');c.style.display=n&&n.textContent.toLowerCase().includes(v)?'':'none';});});
