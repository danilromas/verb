# -*- coding: utf-8 -*-
"""Generate standalone HTML catalog website."""

import json
from pathlib import Path

ROOT = Path(r"Z:\ibp")
CATALOG_DIR = ROOT / "catalog"
DATA = json.loads((CATALOG_DIR / "catalog.json").read_text(encoding="utf-8"))

report = DATA["report"]
products = DATA["products"]

# Build inverter overview table from article-sourced items only
article_items = [p for p in products if "обзор" in p.get("category", "").lower()]
# Deduplicate by manufacturer for overview
seen_mfr = set()
inverter_overview = []
for p in sorted(article_items, key=lambda x: (x.get("series", ""), x.get("manufacturer", ""))):
    mfr = p.get("manufacturer", "")
    if mfr in seen_mfr:
        continue
    seen_mfr.add(mfr)
    inverter_overview.append(p)

html_template = r"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Каталог инженерного оборудования — IBP</title>
<style>
:root {
  --bg: #f4f6f8;
  --surface: #ffffff;
  --text: #1a2332;
  --muted: #5c6b7a;
  --accent: #0b6e4f;
  --accent-light: #e8f5f0;
  --border: #dde3ea;
  --premium: #7c3aed;
  --budget: #0891b2;
  --shadow: 0 2px 8px rgba(26,35,50,.08);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.55; }
a { color: var(--accent); }

header {
  background: var(--text);
  color: #fff;
  padding: 2rem 1.5rem 1.5rem;
}
header h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: .35rem; }
header p { color: #b8c5d4; max-width: 720px; font-size: .95rem; }
.badge { display: inline-block; background: var(--accent); color: #fff; font-size: .75rem; padding: .2rem .6rem; border-radius: 4px; margin-top: .75rem; }

nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  display: flex; gap: .25rem; padding: .5rem 1rem; overflow-x: auto;
  box-shadow: var(--shadow);
}
nav a {
  text-decoration: none; color: var(--muted);
  padding: .45rem .85rem; border-radius: 6px; font-size: .875rem; white-space: nowrap;
}
nav a:hover, nav a.active { background: var(--accent-light); color: var(--accent); }

main { max-width: 1280px; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
section { margin-bottom: 2.5rem; }
section > h2 {
  font-size: 1.35rem; margin-bottom: 1rem;
  padding-bottom: .5rem; border-bottom: 2px solid var(--accent);
}

.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.stat-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 10px; padding: 1.1rem; box-shadow: var(--shadow);
}
.stat-card .num { font-size: 1.8rem; font-weight: 700; color: var(--accent); }
.stat-card .lbl { font-size: .8rem; color: var(--muted); margin-top: .2rem; }

.table-wrap { overflow-x: auto; background: var(--surface); border-radius: 10px; border: 1px solid var(--border); box-shadow: var(--shadow); }
table { width: 100%; border-collapse: collapse; font-size: .85rem; }
th { background: var(--text); color: #fff; text-align: left; padding: .65rem .75rem; font-weight: 600; white-space: nowrap; }
td { padding: .6rem .75rem; border-bottom: 1px solid var(--border); vertical-align: top; }
tr:hover td { background: var(--accent-light); }
.tag { display: inline-block; font-size: .7rem; padding: .15rem .45rem; border-radius: 4px; font-weight: 600; }
.tag-premium { background: #ede9fe; color: var(--premium); }
.tag-budget { background: #e0f2fe; color: var(--budget); }

.sources-list { list-style: none; }
.sources-list li {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; padding: .85rem 1rem; margin-bottom: .6rem;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: .5rem;
}
.sources-list .meta { color: var(--muted); font-size: .82rem; }

.toolbar {
  display: flex; flex-wrap: wrap; gap: .75rem; margin-bottom: 1rem; align-items: center;
}
.toolbar input, .toolbar select {
  padding: .55rem .75rem; border: 1px solid var(--border); border-radius: 8px;
  font-size: .875rem; background: var(--surface);
}
.toolbar input { flex: 1; min-width: 200px; }
.count-label { font-size: .85rem; color: var(--muted); }

.products-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;
}
.product-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);
  display: flex; flex-direction: column; transition: transform .15s;
}
.product-card:hover { transform: translateY(-2px); }
.product-card .head { padding: .85rem 1rem .5rem; }
.product-card .cat { font-size: .72rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: .03em; }
.product-card h3 { font-size: .95rem; margin: .25rem 0; line-height: 1.35; }
.product-card .mfr { font-size: .8rem; color: var(--muted); }
.product-card .body { padding: 0 1rem .75rem; flex: 1; font-size: .82rem; color: var(--muted); }
.product-card .body p { margin-bottom: .4rem; }
.product-card .prices {
  padding: .65rem 1rem; background: var(--accent-light);
  font-size: .8rem; border-top: 1px solid var(--border);
}
.product-card .prices strong { color: var(--text); }
.product-card .foot {
  padding: .5rem 1rem; font-size: .72rem; color: var(--muted);
  border-top: 1px solid var(--border); background: #fafbfc;
}
.hidden { display: none !important; }

.work-steps { counter-reset: step; list-style: none; }
.work-steps li {
  counter-increment: step; position: relative;
  padding: .75rem 1rem .75rem 3rem; margin-bottom: .5rem;
  background: var(--surface); border-radius: 8px; border: 1px solid var(--border);
}
.work-steps li::before {
  content: counter(step);
  position: absolute; left: .85rem; top: .75rem;
  width: 1.6rem; height: 1.6rem; background: var(--accent); color: #fff;
  border-radius: 50%; text-align: center; line-height: 1.6rem; font-size: .8rem; font-weight: 700;
}

.modal-overlay {
  display: none; position: fixed; inset: 0; background: rgba(0,0,0,.45);
  z-index: 200; align-items: center; justify-content: center; padding: 1rem;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--surface); border-radius: 12px; max-width: 640px; width: 100%;
  max-height: 85vh; overflow-y: auto; padding: 1.5rem; position: relative;
}
.modal .close { position: absolute; top: .75rem; right: .75rem; background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--muted); }
.modal h3 { margin-bottom: .75rem; padding-right: 2rem; }
.modal dl { font-size: .875rem; }
.modal dt { font-weight: 600; margin-top: .6rem; color: var(--text); }
.modal dd { color: var(--muted); margin-left: 0; }

footer { text-align: center; padding: 2rem 1rem; color: var(--muted); font-size: .8rem; border-top: 1px solid var(--border); }
@media (max-width: 600px) {
  header h1 { font-size: 1.35rem; }
  .products-grid { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<header>
  <h1>Каталог инженерного оборудования</h1>
  <p>Единая база данных для наполнения сайта, формирования прайс-листов и коммерческих предложений. Собрано из прайсов, статей и сайтов производителей.</p>
  <span class="badge">Сгенерировано: __GENERATED_AT__</span>
</header>

<nav>
  <a href="#report" class="active">Отчёт о работе</a>
  <a href="#inverters">Инверторы (статья)</a>
  <a href="#catalog">Каталог товаров</a>
  <a href="#sources">Источники</a>
</nav>

<main>

<section id="report">
  <h2>Отчёт о проделанной работе</h2>
  <div class="card-grid" style="margin-bottom:1.5rem">
    <div class="stat-card"><div class="num">__TOTAL__</div><div class="lbl">Всего позиций в каталоге</div></div>
    <div class="stat-card"><div class="num">__PRICE__</div><div class="lbl">Из прайс-листа SUNWAYS</div></div>
    <div class="stat-card"><div class="num">__ARTICLE__</div><div class="lbl">Из статьи об инверторах</div></div>
    <div class="stat-card"><div class="num">__WEB__</div><div class="lbl">С сайта bobrovsolar.ru</div></div>
  </div>

  <h3 style="font-size:1rem;margin-bottom:.75rem">Выполненные этапы</h3>
  <ol class="work-steps">
    <li><strong>Анализ исходных данных</strong> — инвентаризация 7 файлов в папке проекта (статьи, прайс Excel, PDF, сохранённые сайты).</li>
    <li><strong>Обработка статьи об инверторах</strong> — извлечены 12 брендов (6 премиум + 6 бюджет), модели, страны, преимущества, особенности и сферы применения без сокращений.</li>
    <li><strong>Парсинг прайс-листа Excel</strong> — обработаны все 11 листов; нормализованы розничные (РРЦ/РЦ) и дилерские цены в юанях/USD и рублях.</li>
    <li><strong>Парсинг сайтов</strong> — извлечены товары с bobrovsolar.ru (аккумуляторы 200 А·ч, цены, артикулы, изображения).</li>
    <li><strong>Формирование единого каталога</strong> — объединение источников, дедупликация, обогащение карточек описаниями.</li>
    <li><strong>HTML-сайт каталога</strong> — интерактивный каталог с поиском, фильтрами и полными карточками товаров (этот сайт).</li>
  </ol>

  <h3 style="font-size:1rem;margin:1.25rem 0 .75rem">Категории в каталоге</h3>
  <div class="card-grid">__CATEGORY_CARDS__</div>
</section>

<section id="inverters">
  <h2>ТОП-12 инверторов для солнечных батарей</h2>
  <p style="color:var(--muted);font-size:.9rem;margin-bottom:1rem">Источник: mywatt.ru — рейтинг надёжности 2020. Классификация: премиум и бюджетный класс.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Категория</th>
          <th>Производитель</th>
          <th>Модель / серия</th>
          <th>Страна</th>
          <th>Описание</th>
          <th>Преимущества</th>
          <th>Особенности</th>
          <th>Сфера применения</th>
        </tr>
      </thead>
      <tbody>__INVERTER_ROWS__</tbody>
    </table>
  </div>
</section>

<section id="catalog">
  <h2>Полный каталог товаров</h2>
  <div class="toolbar">
    <input type="search" id="search" placeholder="Поиск по названию, модели, артикулу, производителю…">
    <select id="filter-cat"><option value="">Все категории</option>__CAT_OPTIONS__</select>
    <select id="filter-mfr"><option value="">Все производители</option>__MFR_OPTIONS__</select>
    <span class="count-label" id="count-label"></span>
  </div>
  <div class="products-grid" id="products-grid"></div>
  <p id="no-results" class="hidden" style="text-align:center;color:var(--muted);padding:2rem">Ничего не найдено</p>
</section>

<section id="sources">
  <h2>Источники данных</h2>
  <ul class="sources-list">__SOURCES_LIST__</ul>

  <h3 style="font-size:1rem;margin:1.5rem 0 .75rem">Правила обработки цен</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Тип цены</th><th>Обозначения в прайсе</th><th>Что сохраняется</th></tr></thead>
      <tbody>
        <tr><td>Розничная</td><td>РРЦ, РЦ, Retail, Цена Розница</td><td>Юани/USD (внутр.) + рубли (основная)</td></tr>
        <tr><td>Дилерская</td><td>РФЦ, Dealer, Цена Дилер</td><td>Юани/USD (внутр.) + рубли</td></tr>
      </tbody>
    </table>
  </div>
</section>

</main>

<footer>
  Каталог инженерного оборудования IBP · Данные из прайс-листов, статей и сайтов производителей · __GENERATED_AT__
</footer>

<div class="modal-overlay" id="modal">
  <div class="modal">
    <button class="close" onclick="closeModal()">&times;</button>
    <div id="modal-content"></div>
  </div>
</div>

<script>
const CATALOG = __CATALOG_JSON__;

function fmtPrice(prices) {
  if (!prices || Object.keys(prices).length === 0) return '<em>Цена не указана</em>';
  let s = '';
  if (prices.retail) {
    s += '<strong>Розничная:</strong> ';
    if (prices.retail.rub) s += prices.retail.rub.toLocaleString('ru-RU') + ' ₽';
    if (prices.retail.foreign) s += ' <span style="opacity:.7">(' + prices.retail.foreign + ' ' + (prices.retail.foreign_currency||'') + ')</span>';
  }
  if (prices.dealer) {
    if (s) s += '<br>';
    s += '<strong>Дилерская:</strong> ';
    if (prices.dealer.rub) s += prices.dealer.rub.toLocaleString('ru-RU') + ' ₽';
    if (prices.dealer.foreign) s += ' <span style="opacity:.7">(' + prices.dealer.foreign + ' ' + (prices.dealer.foreign_currency||'') + ')</span>';
  }
  return s || '<em>Цена не указана</em>';
}

function shortText(t, n=120) {
  if (!t) return '';
  return t.length > n ? t.slice(0, n) + '…' : t;
}

function renderProducts(list) {
  const grid = document.getElementById('products-grid');
  const noRes = document.getElementById('no-results');
  document.getElementById('count-label').textContent = 'Показано: ' + list.length;
  if (!list.length) { grid.innerHTML = ''; noRes.classList.remove('hidden'); return; }
  noRes.classList.add('hidden');
  grid.innerHTML = list.map((p, i) => `
    <article class="product-card" data-idx="${i}" onclick="openProduct(${CATALOG.products.indexOf(p)})">
      <div class="head">
        <div class="cat">${p.category||''}</div>
        <h3>${p.name||p.model||'—'}</h3>
        <div class="mfr">${p.manufacturer||''}${p.article ? ' · Арт. '+p.article : ''}</div>
      </div>
      <div class="body">
        <p>${shortText(p.description||p.characteristics||'')}</p>
      </div>
      <div class="prices">${fmtPrice(p.prices)}</div>
      <div class="foot">${(p.sources||[p.source]).join(' · ')}</div>
    </article>
  `).join('');
}

let filtered = [...CATALOG.products];

function applyFilters() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const cat = document.getElementById('filter-cat').value;
  const mfr = document.getElementById('filter-mfr').value;
  filtered = CATALOG.products.filter(p => {
    if (cat && p.category !== cat) return false;
    if (mfr && p.manufacturer !== mfr) return false;
    if (q) {
      const hay = [p.name,p.model,p.article,p.manufacturer,p.description,p.characteristics].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  renderProducts(filtered);
}

function openProduct(idx) {
  const p = CATALOG.products[idx];
  if (!p) return;
  const el = document.getElementById('modal-content');
  el.innerHTML = `
    <h3>${p.name||p.model}</h3>
    <dl>
      <dt>Категория</dt><dd>${p.category||'—'}</dd>
      <dt>Производитель</dt><dd>${p.manufacturer||'—'}</dd>
      <dt>Модель</dt><dd>${p.model||'—'}</dd>
      <dt>Артикул</dt><dd>${p.article||'—'}</dd>
      <dt>Страна</dt><dd>${p.country||'—'}</dd>
      <dt>Описание</dt><dd>${p.description||'—'}</dd>
      <dt>Преимущества</dt><dd>${p.advantages||'—'}</dd>
      <dt>Характеристики</dt><dd>${p.characteristics||'—'}</dd>
      <dt>Сфера применения</dt><dd>${p.application||'—'}</dd>
      <dt>Цены</dt><dd>${fmtPrice(p.prices)}</dd>
      <dt>Источники</dt><dd>${(p.sources||[p.source]).join(', ')}</dd>
    </dl>`;
  document.getElementById('modal').classList.add('open');
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }
document.getElementById('modal').addEventListener('click', e => { if (e.target.id==='modal') closeModal(); });

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('filter-cat').addEventListener('change', applyFilters);
document.getElementById('filter-mfr').addEventListener('change', applyFilters);

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
  });
});

renderProducts(filtered);
</script>
</body>
</html>"""

# Build dynamic parts
cat_cards = ""
for cat, cnt in sorted(report["statistics"]["categories"].items(), key=lambda x: -x[1]):
    cat_cards += f'<div class="stat-card"><div class="num">{cnt}</div><div class="lbl">{cat}</div></div>\n'

inverter_rows = ""
for p in inverter_overview:
    cls = "tag-premium" if "премиум" in p.get("series", "").lower() else "tag-budget"
    cls_label = "Премиум" if "премиум" in p.get("series", "").lower() else "Бюджет"
    models = ", ".join(x["model"] for x in article_items if x.get("manufacturer") == p.get("manufacturer"))
    inverter_rows += f"""<tr>
      <td><span class="tag {cls}">{cls_label}</span></td>
      <td><strong>{p.get('manufacturer','')}</strong></td>
      <td>{models}</td>
      <td>{p.get('country','')}</td>
      <td>{p.get('description','')}</td>
      <td>{p.get('advantages','')}</td>
      <td>{p.get('characteristics','')}</td>
      <td>{p.get('application','')}</td>
    </tr>\n"""

cats = sorted(set(p.get("category", "") for p in products if p.get("category")))
mfrs = sorted(set(p.get("manufacturer", "") for p in products if p.get("manufacturer")))

cat_options = "".join(f'<option value="{c}">{c}</option>' for c in cats)
mfr_options = "".join(f'<option value="{m}">{m}</option>' for m in mfrs)

sources_list = ""
for s in report["sources"]:
    note = f" — {s['note']}" if s.get("note") else ""
    items = s.get("items", 0)
    extra = f", {s['sheets']} листов" if s.get("sheets") else ""
    extra += f", {s['brands']} брендов" if s.get("brands") else ""
    sources_list += f'<li><span><strong>{s["file"]}</strong> <span class="meta">({s["type"]}){note}</span></span><span class="meta">{items} поз.{extra}</span></li>\n'

generated = report["generated_at"][:19].replace("T", " ")

out = html_template
out = out.replace("__GENERATED_AT__", generated)
out = out.replace("__TOTAL__", str(report["statistics"]["total_products"]))
out = out.replace("__PRICE__", str(report["statistics"]["from_price_list"]))
out = out.replace("__ARTICLE__", str(report["statistics"]["from_article"]))
out = out.replace("__WEB__", str(report["statistics"]["from_websites"]))
out = out.replace("__CATEGORY_CARDS__", cat_cards)
out = out.replace("__INVERTER_ROWS__", inverter_rows)
out = out.replace("__CAT_OPTIONS__", cat_options)
out = out.replace("__MFR_OPTIONS__", mfr_options)
out = out.replace("__SOURCES_LIST__", sources_list)
out = out.replace("__CATALOG_JSON__", json.dumps(DATA, ensure_ascii=False))

(CATALOG_DIR / "index.html").write_text(out, encoding="utf-8")
print(f"Generated {CATALOG_DIR / 'index.html'}")
