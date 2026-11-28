/* Published reviews. Add only reviews Ger has approved.
   service: 'app' | 'pd' | 'massage' | 'counselling'   rating: 1-5   free: true if they got free access for an honest review */
var WM_REVIEWS = [
  // { service: 'app', rating: 5, name: 'Sarah K.', place: 'Carlow', date: '2026-12-08', text: '…', free: true },
];
(function () {
  var list = document.getElementById('rv-list'); if (!list) return;
  var names = { app: 'Well Mind app', pd: 'Personal development', massage: 'Massage', counselling: 'Counselling' };
  function render(f) {
    var items = WM_REVIEWS.filter(function (r) { return f === 'all' || r.service === f; });
    list.innerHTML = '';
    if (!items.length) {
      var e = document.createElement('div'); e.className = 'rv-empty';
      e.innerHTML = '<p style="margin:0">No reviews here yet. <a href="#write">Be one of the first to write one.</a></p>';
      list.appendChild(e); return;
    }
    items.forEach(function (r) {
      var c = document.createElement('figure'); c.className = 'rv-card'; c.style.margin = '0';
      var s = document.createElement('div'); s.className = 'rv-stars'; s.setAttribute('aria-label', r.rating + ' out of 5 stars');
      s.textContent = '★★★★★'.slice(0, r.rating) + '☆☆☆☆☆'.slice(0, 5 - r.rating);
      var q = document.createElement('blockquote'); q.style.margin = '10px 0 0'; q.textContent = r.text;
      var m = document.createElement('figcaption'); m.className = 'rv-meta';
      m.textContent = r.name + (r.place ? ', ' + r.place : '') + ' · ' + names[r.service] + (r.free ? ' · Received free access in return for an honest review' : '');
      c.appendChild(s); c.appendChild(q); c.appendChild(m); list.appendChild(c);
    });
  }
  document.querySelectorAll('.rv-tabs button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.rv-tabs button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      render(b.getAttribute('data-f'));
    });
  });
  render('all');
})();
