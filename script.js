const products = [
  {
    name: 'Piens 2% 1L',
    category: 'Pārtika',
    offers: [
      { store: 'Rimi', price: 1.39, note: 'Ātrā piegāde' },
      { store: 'Maxima', price: 1.29, note: 'Akcijas cena' },
      { store: 'Barbora', price: 1.35, note: 'Piegāde Rīgā' },
      { store: 'Lidl', price: 1.19, note: 'Veikala cena' }
    ]
  },
  {
    name: 'Olas M izmērs 10 gab.',
    category: 'Pārtika',
    offers: [
      { store: 'Rimi', price: 2.79, note: 'Privātā preču zīme' },
      { store: 'Maxima', price: 2.49, note: 'Nedēļas piedāvājums' },
      { store: 'Barbora', price: 2.69, note: 'Piegāde tajā pašā dienā' },
      { store: 'Lidl', price: 2.35, note: 'Zemākā veikala cena' }
    ]
  },
  {
    name: 'Maltā kafija 500g',
    category: 'Pārtika',
    offers: [
      { store: 'Rimi', price: 6.99, note: 'Lavazza akcija' },
      { store: 'Maxima', price: 6.49, note: 'Ar Paldies karti' },
      { store: '220.lv', price: 7.29, note: 'Marketplace cena' },
      { store: 'Barbora', price: 6.79, note: 'Pārtikas piegāde' }
    ]
  },
  {
    name: 'iPhone 15 128GB',
    category: 'Elektronika',
    offers: [
      { store: 'RD Electronics', price: 799.99, note: 'Oficiālā garantija' },
      { store: 'Euronics', price: 819.99, note: 'Saņemšana veikalā' },
      { store: '220.lv', price: 789.99, note: 'Marketplace piedāvājums' },
      { store: 'Ksenukai', price: 829.99, note: 'Līzingā' }
    ]
  },
  {
    name: 'PlayStation 5 Slim',
    category: 'Elektronika',
    offers: [
      { store: 'Euronics', price: 529.99, note: 'Pieejams uz vietas' },
      { store: 'RD Electronics', price: 519.99, note: 'Nedēļas cena' },
      { store: '220.lv', price: 514.99, note: 'Interneta cena' },
      { store: 'Dateks', price: 539.99, note: 'Ar piegādi' }
    ]
  },
  {
    name: 'Portatīvais dators Lenovo IdeaPad',
    category: 'Elektronika',
    offers: [
      { store: 'Dateks', price: 649.99, note: 'SSD 512GB' },
      { store: '220.lv', price: 639.99, note: 'Tiešsaistes atlaide' },
      { store: 'Ksenukai', price: 659.99, note: 'Līzings' },
      { store: 'RD Electronics', price: 669.99, note: 'Saņemšana veikalā' }
    ]
  },
  {
    name: 'Veļas pulveris 4kg',
    category: 'Mājai',
    offers: [
      { store: 'Rimi', price: 8.99, note: 'Bonus punkti' },
      { store: 'Maxima', price: 7.99, note: 'Akcija' },
      { store: 'Barbora', price: 8.49, note: 'Piegāde mājās' },
      { store: 'Drogas', price: 8.79, note: 'Drogas internetveikals' }
    ]
  },
  {
    name: 'Mikroviļņu krāsns 20L',
    category: 'Sadzīves tehnika',
    offers: [
      { store: 'Ksenukai', price: 74.99, note: 'Interneta cena' },
      { store: 'RD Electronics', price: 79.99, note: 'Ar garantiju' },
      { store: '220.lv', price: 69.99, note: 'Top pārdevējs' },
      { store: 'Euronics', price: 82.99, note: 'Veikala paņemšana' }
    ]
  },
  {
    name: 'Bērnu autiņbiksītes 50 gab.',
    category: 'Ģimenei',
    offers: [
      { store: 'Barbora', price: 14.49, note: 'Pārtikas piegāde' },
      { store: 'Rimi', price: 15.29, note: 'Kluba cena' },
      { store: 'Maxima', price: 13.99, note: 'Akcijas komplekts' },
      { store: 'Drogas', price: 14.79, note: 'Drogas online' }
    ]
  },
  {
    name: 'LED televizors 55"',
    category: 'Elektronika',
    offers: [
      { store: 'Euronics', price: 429.99, note: '4K modelis' },
      { store: 'RD Electronics', price: 419.99, note: 'Nedēļas akcija' },
      { store: '220.lv', price: 409.99, note: 'Zemākā internetcena' },
      { store: 'Dateks', price: 439.99, note: 'Ar piegādi' }
    ]
  },
  {
    name: 'Kaķu barība 2kg',
    category: 'Mājdzīvniekiem',
    offers: [
      { store: 'Rimi', price: 10.99, note: 'Veikala akcija' },
      { store: 'Maxima', price: 10.49, note: 'Lojalitātes cena' },
      { store: '220.lv', price: 9.99, note: 'Interneta piedāvājums' },
      { store: 'Barbora', price: 10.79, note: 'Piegāde Rīgā' }
    ]
  },
  {
    name: 'Būvniecības skrūvgriezis',
    category: 'Instrumenti',
    offers: [
      { store: 'Depo', price: 59.99, note: 'Veikala cena' },
      { store: 'Ksenukai', price: 64.99, note: 'Interneta atlaide' },
      { store: '220.lv', price: 57.99, note: 'Marketplace' },
      { store: 'Kurši', price: 62.49, note: 'Pieejams noliktavā' }
    ]
  }
];

const featuredStores = [
  'Rimi', 'Maxima', 'Barbora', 'Lidl', '220.lv', 'RD Electronics', 'Euronics', 'Dateks', 'Ksenukai', 'Depo', 'Kurši', 'Drogas', '1a.lv', 'Elkor', 'Senukai', 'Membershop', 'M79', 'Prof.lv', 'Aio.lv', 'Vegastyle'
];

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const storeFilter = document.getElementById('storeFilter');
const sortFilter = document.getElementById('sortFilter');
const results = document.getElementById('results');
const resultsInfo = document.getElementById('resultsInfo');
const productCount = document.getElementById('productCount');
const storesStrip = document.getElementById('storesStrip');
const productTemplate = document.getElementById('productTemplate');
const offerTemplate = document.getElementById('offerTemplate');

function euro(value) {
  return new Intl.NumberFormat('lv-LV', { style: 'currency', currency: 'EUR' }).format(value);
}

function setupFilters() {
  const categories = [...new Set(products.map((product) => product.category))].sort();
  const stores = [...new Set(products.flatMap((product) => product.offers.map((offer) => offer.store)))].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  stores.forEach((store) => {
    const option = document.createElement('option');
    option.value = store;
    option.textContent = store;
    storeFilter.appendChild(option);
  });

  featuredStores.forEach((store) => {
    const chip = document.createElement('div');
    chip.className = 'store-chip';
    chip.textContent = store;
    storesStrip.appendChild(chip);
  });

  productCount.textContent = products.length;
}

function productSummary(product) {
  const prices = product.offers.map((offer) => offer.price);
  const lowest = Math.min(...prices);
  const highest = Math.max(...prices);
  const bestOffer = product.offers.find((offer) => offer.price === lowest);
  return { lowest, highest, savings: highest - lowest, bestOffer };
}

function matchesFilters(product) {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedStore = storeFilter.value;

  const matchesQuery = !query || product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query) || product.offers.some((offer) => offer.store.toLowerCase().includes(query));
  const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
  const matchesStore = selectedStore === 'all' || product.offers.some((offer) => offer.store === selectedStore);

  return matchesQuery && matchesCategory && matchesStore;
}

function sortedProducts(list) {
  const sort = sortFilter.value;
  return [...list].sort((a, b) => {
    const summaryA = productSummary(a);
    const summaryB = productSummary(b);

    if (sort === 'lowest') return summaryA.lowest - summaryB.lowest;
    if (sort === 'highest') return summaryB.highest - summaryA.highest;
    if (sort === 'savings') return summaryB.savings - summaryA.savings;
    return summaryA.lowest - summaryB.lowest || summaryB.savings - summaryA.savings;
  });
}

function renderProducts() {
  const filtered = sortedProducts(products.filter(matchesFilters));
  results.innerHTML = '';

  resultsInfo.textContent = filtered.length
    ? `Atrastas ${filtered.length} preces salīdzināšanai.`
    : 'Nekas netika atrasts. Pamēģini citu meklējumu vai filtru kombināciju.';

  filtered.forEach((product) => {
    const summary = productSummary(product);
    const node = productTemplate.content.firstElementChild.cloneNode(true);

    node.querySelector('.product-category').textContent = product.category;
    node.querySelector('.product-name').textContent = product.name;
    node.querySelector('.savings-pill').textContent = `Ietaupījums līdz ${euro(summary.savings)}`;
    node.querySelector('.best-price').textContent = euro(summary.lowest);
    node.querySelector('.best-store').textContent = summary.bestOffer.store;

    const offersContainer = node.querySelector('.offers');
    product.offers
      .slice()
      .sort((a, b) => a.price - b.price)
      .forEach((offer) => {
        const offerNode = offerTemplate.content.firstElementChild.cloneNode(true);
        offerNode.querySelector('.offer-store').textContent = offer.store;
        offerNode.querySelector('.offer-note').textContent = offer.note;
        offerNode.querySelector('.offer-price').textContent = euro(offer.price);
        offersContainer.appendChild(offerNode);
      });

    results.appendChild(node);
  });
}

[searchInput, categoryFilter, storeFilter, sortFilter].forEach((element) => {
  element.addEventListener('input', renderProducts);
  element.addEventListener('change', renderProducts);
});

setupFilters();
renderProducts();
