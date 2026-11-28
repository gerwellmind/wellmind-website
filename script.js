/* ---- Well Mind pricing: one place to change prices, links and sales ----
   Dates are inclusive, Europe/Dublin time. Outside every sale window the
   normal price applies. Preview any date with ?wmdate=2026-12-26 */
var WM_PRICING = {
  normal: { price: '€40', buy: 'https://buy.stripe.com/8x214m32F13UfHh4HG1kA04', gift: 'https://buy.stripe.com/bJedR8fPr4g63Yz6PO1kA05' },
  sale:   { price: '€30', buy: 'https://buy.stripe.com/8x2bJ0dHj7si8eP2zy1kA02', gift: 'https://buy.stripe.com/9B68wO8mZaEu8eP0rq1kA03' },
  saleWindows: [
    { from: '2026-11-01', to: '2026-12-25', tag: 'Launch price', note: 'Launch price €30 until 25 December, then €40.' },
    { from: '2027-01-02', to: '2027-01-12', tag: 'January sale', note: 'January sale: €30 until 12 January, then €40.', banner: true },
    { from: '2027-02-10', to: '2027-02-15', tag: 'Valentine’s sale', note: 'Valentine’s sale: €30 until 15 February, then €40.', banner: true },
    { from: '2027-03-04', to: '2027-03-08', tag: 'Mother’s Day sale', note: 'Mother’s Day sale: €30 until 8 March, then €40.', banner: true },
    { from: '2027-03-14', to: '2027-03-18', tag: 'Paddy’s Day sale', note: 'Paddy’s Day sale: €30 until 18 March, then €40.', banner: true }
  ]
};
window.WM_PRICING = WM_PRICING;
window.wmToday = function () {
  try { var q = new URLSearchParams(location.search).get('wmdate'); if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) return q; } catch (e) {}
  try { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Dublin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()); }
  catch (e) { return new Date().toISOString().slice(0, 10); }
};
window.wmPrice = function () {
  var d = window.wmToday(), w = null;
  WM_PRICING.saleWindows.forEach(function (x) { if (d >= x.from && d <= x.to) w = x; });
  var p = w ? WM_PRICING.sale : WM_PRICING.normal;
  return { price: p.price, buy: p.buy, gift: p.gift, sale: w, was: WM_PRICING.normal.price, today: d };
};
(function () {
  try {
    var p = window.wmPrice(), s = p.sale, all = function (sel) { return document.querySelectorAll(sel); };
    all('[data-wm-price]').forEach(function (el) { el.textContent = p.price; });
    all('a[data-wm-buy]').forEach(function (el) { el.href = p.buy; });
    all('a[data-wm-gift]').forEach(function (el) { el.href = p.gift; });
    all('[data-wm-tag]').forEach(function (el) { el.hidden = !s; if (s) el.textContent = ' · ' + s.tag.toUpperCase(); });
    all('[data-wm-paren]').forEach(function (el) { el.hidden = !s; if (s) el.textContent = ' (' + s.tag.toLowerCase() + ')'; });
    all('[data-wm-was]').forEach(function (el) { el.hidden = !s; if (s) el.textContent = p.was; });
    all('[data-wm-note]').forEach(function (el) { el.hidden = !s; if (s) el.textContent = s.note; });
    all('[data-wm-until]').forEach(function (el) { if (p.today > el.getAttribute('data-wm-until')) el.remove(); });
    if (s && s.banner && !document.querySelector('.xmas-bar')) {
      var b = document.createElement('a'); b.className = 'xmas-bar wm-sale-bar'; b.href = '/well-mind-app/#price';
      b.innerHTML = '<span><b></b> <span></span></span><span class="xb-go">See the app ›</span>';
      b.querySelector('b').textContent = s.tag + ':'; b.querySelector('b + span').textContent = 'the Well Mind app is ' + p.price + ' (normally ' + p.was + ').';
      var skip = document.querySelector('.skip'); (skip ? skip.parentNode.insertBefore(b, skip.nextSibling) : document.body.prepend(b));
    }
  } catch (e) {}
})();

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
 if(event.target.closest('a')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.focus(); }
});
document.getElementById('year').textContent = new Date().getFullYear();
