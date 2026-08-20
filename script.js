/* Loja oficial (PedidoOK) - onde as compras de fato acontecem */
const STORE_URL = 'https://hamilac.pedidook.com.br/';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=555197994998';

/* ---------- ICONS ---------- */
const ICON_PATHS = {
  battery: '<rect x="2" y="7" width="17" height="10" rx="2.5"/><rect x="20" y="10.4" width="2" height="3.2" rx="0.6" fill="currentColor" stroke="none"/><rect x="5.5" y="10" width="4" height="4" fill="currentColor" stroke="none"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" stroke="none" stroke-linejoin="round"/>',
  beer: '<path d="M6 9h9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z"/><path d="M15 11h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15"/><path d="M6 9c0-2.5 1.5-4 1.5-5.5C7.5 3 8 2.5 8.5 3c.4.4 0 1 .5 1.5s1.3-.4 1.7 0c.4.4-.3 1.2.3 1.7.5.4 1-.2 1.5.3.4.4-.1 1.3.5 1.5H6Z"/>',
  snowflake: '<line x1="12" y1="2" x2="12" y2="22"/><line x1="4.5" y1="6" x2="19.5" y2="18"/><line x1="4.5" y1="18" x2="19.5" y2="6"/><path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5M4.5 6 6 9M4.5 6 8 5.3M19.5 18l-1.5-3M19.5 18 16 18.7M4.5 18 8 18.7M4.5 18 6 15M19.5 6 16 5.3M19.5 6 18 9"/>',
  cheese: '<path d="M2.5 19 12 4l9.5 15Z"/><circle cx="12.5" cy="15" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="17.5" r="1" fill="currentColor" stroke="none"/>',
  jar: '<path d="M8 3.5h8v3.2c1.3.6 2 1.7 2 3.3v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9c0-1.6.7-2.7 2-3.3V3.5Z"/><line x1="7.5" y1="10.5" x2="16.5" y2="10.5"/>',
  meat: '<path d="M14.5 3.5c2.8 0 5 2.2 5 5 0 3-2.7 5.2-5.6 8L9 21.4a2 2 0 0 1-2.8 0l-1.6-1.6a2 2 0 0 1 0-2.8l4.9-4.9C6.8 9.2 9 3.5 14.5 3.5Z"/><line x1="6" y1="18" x2="9.5" y2="14.5"/>',
  truck: '<rect x="1.5" y="7" width="12.5" height="8.5" rx="1.2"/><path d="M14 10.2h3.6l3 3v2.3H14Z"/><circle cx="6" cy="17.7" r="1.7" fill="#fff"/><circle cx="17" cy="17.7" r="1.7" fill="#fff"/>',
  shield: '<path d="M12 2.5 19 5.3V11c0 5.2-3.4 8.9-7 10.2C8.4 19.9 5 16.2 5 11V5.3Z"/><path d="M8.7 12l2.2 2.2 4.4-4.4"/>',
  headset: '<path d="M4.5 13a7.5 7.5 0 0 1 15 0"/><rect x="3.3" y="13" width="4" height="6.3" rx="1.6"/><rect x="16.7" y="13" width="4" height="6.3" rx="1.6"/><path d="M19 19.3a3 3 0 0 1-3 3h-2.2"/>',
  lock: '<rect x="4.5" y="11" width="15" height="9.5" rx="2.2"/><path d="M7.8 11V7.3a4.2 4.2 0 0 1 8.4 0V11"/>',
  external: '<path d="M7.5 16.5 16.5 7.5"/><path d="M9.5 7.5h7v7"/>',
  whatsapp: '<path d="M12 3C7 3 3 7 3 12c0 1.7.5 3.3 1.3 4.7L3 21l4.5-1.2C8.8 20.5 10.4 21 12 21c5 0 9-4 9-9s-4-9-9-9Z" fill="#25D366" stroke="none"/><path d="M8.7 8.4c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 1.9 3 4.6 4.2 2.3.9 2.7.7 3.2.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.2-1.4-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9Z" fill="#fff" stroke="none"/>'
};
function icon(name, extra){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"'+(extra||'')+'>'+ICON_PATHS[name]+'</svg>';
}

/* ---------- DATA (produtos reais extraídos de hamilac.pedidook.com.br) ---------- */
const CATEGORIES = [
  {key:'pilhas',    label:'Pilhas & Baterias', color:'blue', ic:'battery',   blurb:'Alcalinas e especiais'},
  {key:'energetico',label:'Energéticos',       color:'red',  ic:'bolt',      blurb:'King Energy'},
  {key:'chopp',     label:'Chopp',             color:'blue', ic:'beer',      blurb:'Buffalo'},
  {key:'congelados',label:'Congelados',        color:'red',  ic:'snowflake',blurb:'Batatas, aipim e aves'},
  {key:'laticinios',label:'Laticínios',        color:'blue', ic:'cheese',   blurb:'Queijos e cremes'},
  {key:'mercearia', label:'Mercearia Seca',    color:'red',  ic:'jar',      blurb:'Molhos, temperos e mais'},
  {key:'refrigerados',label:'Frios',           color:'blue', ic:'meat',     blurb:'Embutidos e defumados'}
];
const CAT_MAP = Object.fromEntries(CATEGORIES.map(c=>[c.key,c]));

const PHOTO_BASE = 'https://pedidook.s3-sa-east-1.amazonaws.com/410306/produto/foto_';
const photo = id => `${PHOTO_BASE}${id}.jpg`;

const PRODUCTS = [
  // Pilhas & Baterias
  {id:48761577, name:'Pilha Alcalina AA Fortled (cartela c/4)', brand:'FORTLED', cat:'pilhas', price:9.15, unit:'CART'},
  {id:48761491, name:'Pilha Alcalina AAA Fortled (cartela c/4)', brand:'FORTLED', cat:'pilhas', price:7.90, unit:'CART'},
  {id:49703545, name:'Bateria Alcalina 9V 6LR61', brand:'FORTLED', cat:'pilhas', price:12.65, unit:'CART'},
  {id:49703510, name:'Bateria de Lítio Moeda CR2032 (c/2)', brand:'FORTLED', cat:'pilhas', price:13.93, unit:'CART'},
  // Energéticos
  {id:47008951, name:'Energético King Energy Tradicional 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND'},
  {id:47008990, name:'Energético King Energy Zero Açúcar 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND'},
  {id:47009023, name:'Energético King Energy Tropical 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND'},
  {id:47009043, name:'Energético King Energy Force 355ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND'},
  // Chopp
  {id:51065346, name:'Chopp Buffalo Pilsen 750ml', brand:'BUFFALO', cat:'chopp', price:7.69, unit:'UNI'},
  {id:51065370, name:'Chopp Buffalo Lager 750ml', brand:'BUFFALO', cat:'chopp', price:7.69, unit:'UNI'},
  {id:51065375, name:'Chopp Buffalo APA 750ml', brand:'BUFFALO', cat:'chopp', price:11.29, unit:'UNI'},
  {id:49317007, name:'Chopp Buffalo Beer Pilsen 1,5L', brand:'BUFFALO', cat:'chopp', price:12.50, unit:'LT'},
  // Congelados
  {id:38955827, name:'Aipim Congelado 1kg (fardo c/15)', brand:'CAMPOS DO SUL', cat:'congelados', price:9.69, unit:'PCT'},
  {id:39516806, name:'Batata Congelada 10mm (pacote 2kg)', brand:'NEWBRAZ', cat:'congelados', price:10.90, unit:'KG'},
  {id:45163316, name:'Batata Congelada Skin 7mm', brand:'SIMPLOT', cat:'congelados', price:10.67, unit:'KG'},
  {id:49480597, name:'Coração de Frango Congelado 1kg', brand:'AURORA', cat:'congelados', price:35.70, unit:'KG'},
  // Laticínios
  {id:50146609, name:'Queijo Colonial 410g', brand:'CEDRENSE', cat:'laticinios', price:22.58, unit:'PCT'},
  {id:50145023, name:'Queijo Mussarela Fatiado 1kg', brand:'IPANEMA', cat:'laticinios', price:49.10, unit:'PCT'},
  {id:50144921, name:'Cream Cheese 180g', brand:'IPANEMA', cat:'laticinios', price:7.19, unit:'UND'},
  {id:50146681, name:'Requeijão Cremoso Pote 380g', brand:'CEDRENSE', cat:'laticinios', price:11.16, unit:'UND'},
  // Mercearia Seca
  {id:45111079, name:'Extrato de Tomate 1,7kg', brand:'PREDILECTA', cat:'mercearia', price:17.60, unit:'UNI'},
  {id:38795021, name:'Milho Verde em Lata 1,7kg', brand:'PREDILECTA', cat:'mercearia', price:23.60, unit:'UND'},
  {id:38692584, name:'Maionese Balde 3kg', brand:'ODERICH', cat:'mercearia', price:29.90, unit:'BALDE'},
  {id:38816174, name:'Vinagre Balsâmico 500ml', brand:'ROSINA', cat:'mercearia', price:15.09, unit:'UND'},
  // Frios / Refrigerados
  {id:39726250, name:'Linguiça Calabresa Fatiada 1,5kg', brand:'SADIA', cat:'refrigerados', price:25.49, unit:'KG'},
  {id:40762318, name:'Presunto Fatiado 1kg', brand:'ROANNA', cat:'refrigerados', price:26.90, unit:'UND'},
  {id:41528435, name:'Salame Fatiado 100g', brand:'PERDIGÃO', cat:'refrigerados', price:8.99, unit:'UNID'},
  {id:38508317, name:'Queijo Mussarela Fatiado 2,4kg', brand:'DOCEOLI', cat:'refrigerados', price:39.00, unit:'KG'}
].map(p => ({ ...p, photo: photo(p.id) }));

const VALUES = [
  {ic:'truck',   title:'Entrega rápida',    text:'Atendemos com agilidade em Rio Grande do Sul, com frete grátis acima de R$ 200.'},
  {ic:'shield',  title:'Produtos originais', text:'Trabalhamos direto com marcas consolidadas, sempre dentro da validade.'},
  {ic:'headset', title:'Suporte dedicado',   text:'Time comercial disponível por WhatsApp para pedidos e reposição.'},
  {ic:'lock',    title:'Pagamento seguro',   text:'Boleto, Pix ou cartão, com nota fiscal emitida em todo pedido.'}
];

const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');

/* ---------- STATE ---------- */
let activeCat = 'todos';
let searchTerm = '';

/* ---------- RENDER: CATEGORIES ---------- */
function renderCategories(){
  const grid = document.getElementById('catGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <button class="cat-card cat-card--${c.color}" data-cat="${c.key}">
      <span class="ic">${icon(c.ic)}</span>
      <h3>${c.label}</h3>
      <p>${c.blurb}</p>
    </button>
  `).join('');
  grid.querySelectorAll('.cat-card').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCat = btn.dataset.cat;
      renderFilters();
      renderProducts();
      document.getElementById('produtos').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const footCats = document.getElementById('footCats');
  footCats.innerHTML = CATEGORIES.map(c=>`<li><a href="#produtos" data-cat="${c.key}">${c.label}</a></li>`).join('');
  footCats.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{ activeCat = a.dataset.cat; renderFilters(); renderProducts(); });
  });
}

/* ---------- RENDER: FILTERS ---------- */
function renderFilters(){
  const wrap = document.getElementById('filters');
  const all = [{key:'todos', label:'Todos'}, ...CATEGORIES.map(c=>({key:c.key, label:c.label}))];
  wrap.innerHTML = all.map(c => `<button class="filter-btn ${activeCat===c.key?'active':''}" data-cat="${c.key}">${c.label}</button>`).join('');
  wrap.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCat = btn.dataset.cat;
      renderFilters();
      renderProducts();
    });
  });
}

/* ---------- RENDER: PRODUCTS (somente exibição, sem carrinho) ---------- */
function renderProducts(){
  const grid = document.getElementById('prodGrid');
  const list = PRODUCTS.filter(p=>{
    const matchCat = activeCat==='todos' || p.cat===activeCat;
    const q = searchTerm.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
  if(list.length===0){
    grid.innerHTML = '<div class="prod-empty">Nenhum produto encontrado para essa busca.</div>';
    return;
  }
  grid.innerHTML = list.map(p=>{
    const c = CAT_MAP[p.cat];
    return `
    <article class="prod-card">
      <div class="prod-tile tile-${c.color}">
        <span class="tag">${p.brand}</span>
        <span class="prod-tile-icon">${icon(c.ic)}</span>
        <img class="prod-tile-photo" src="${p.photo}" alt="${p.name}" loading="lazy" onerror="this.remove()">
      </div>
      <div class="prod-body">
        <h4>${p.name}</h4>
        <span class="price price--${c.color} mono">${fmt(p.price)} <small>/${p.unit}</small></span>
      </div>
    </article>`;
  }).join('');
}

/* ---------- RENDER: VALUES ---------- */
function renderValues(){
  document.getElementById('valueGrid').innerHTML = VALUES.map(v=>`
    <div class="value-item">
      <span class="ic">${icon(v.ic)}</span>
      <h4>${v.title}</h4>
      <p>${v.text}</p>
    </div>
  `).join('');
}

/* ---------- RENDER: ORBIT ---------- */
function renderOrbit(){
  const wrap = document.getElementById('orbitItems');
  const n = CATEGORIES.length;
  const dur = 40;
  wrap.innerHTML = CATEGORIES.map((c,i)=>{
    const angle = (360/n)*i;
    const delay = -(dur/n)*i;
    const bg = c.color==='blue'
      ? 'linear-gradient(140deg,var(--blue-600),var(--blue-900))'
      : 'linear-gradient(140deg,var(--red-500),var(--red-700))';
    return `<div class="orbit-item" style="transform:rotate(${angle}deg) translate(140px) rotate(0deg);animation-delay:${delay}s;animation-duration:${dur}s;">
      <span class="chip" style="background:${bg};color:#fff;">${icon(c.ic)}</span>
    </div>`;
  }).join('');
}

/* ---------- SEARCH ---------- */
document.getElementById('searchInput').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderProducts();
});

/* ---------- MOBILE MENU ---------- */
const mobilePanel = document.getElementById('mobilePanel');
function openMobile(){ mobilePanel.classList.add('open'); }
function closeMobile(){ mobilePanel.classList.remove('open'); }
document.getElementById('menuBtn').addEventListener('click', openMobile);
document.getElementById('mobileClose').addEventListener('click', closeMobile);
mobilePanel.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMobile));

/* ---------- STORE / WHATSAPP LINKS ---------- */
document.querySelectorAll('.js-store-link').forEach(el=>{ el.href = STORE_URL; });
document.querySelectorAll('.js-whatsapp-link').forEach(el=>{ el.href = WHATSAPP_URL; });

/* ---------- INIT ---------- */
renderCategories();
renderFilters();
renderProducts();
renderValues();
renderOrbit();
