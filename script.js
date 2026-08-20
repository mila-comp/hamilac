/* Loja oficial (PedidoOK) - onde as compras de fato acontecem */
const STORE_URL = 'https://hamilac.pedidook.com.br/';

/* ---------- ICONS ---------- */
const ICON_PATHS = {
  battery: '<rect x="2" y="7" width="17" height="10" rx="2.5"/><rect x="20" y="10.4" width="2" height="3.2" rx="0.6" fill="currentColor" stroke="none"/><rect x="5.5" y="10" width="4" height="4" fill="currentColor" stroke="none"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" stroke="none" stroke-linejoin="round"/>',
  cup: '<path d="M6.5 8h11l-1.4 10.6a2 2 0 0 1-2 1.7h-4.2a2 2 0 0 1-2-1.7L6.5 8Z"/><path d="M9 8V4.5h6V8"/><line x1="12" y1="2" x2="12" y2="4.5"/>',
  lips: '<path d="M9 20V11l1-6.2c.35-1.7 3.65-1.7 4 0L15 11v9Z"/><line x1="9" y1="15" x2="15" y2="15"/>',
  snack: '<path d="M7 9h10l-1.6 10.3a1.6 1.6 0 0 1-1.6 1.4h-3.6a1.6 1.6 0 0 1-1.6-1.4L7 9Z"/><path d="M6 9l1.3-3.4L9.5 8l1.7-3.6L13 8l1.8-3.6L17 8l1-2.4"/>',
  soap: '<path d="M12 2.5C12 2.5 5.5 11 5.5 15.5a6.5 6.5 0 0 0 13 0C18.5 11 12 2.5 12 2.5Z"/>',
  truck: '<rect x="1.5" y="7" width="12.5" height="8.5" rx="1.2"/><path d="M14 10.2h3.6l3 3v2.3H14Z"/><circle cx="6" cy="17.7" r="1.7" fill="#fff"/><circle cx="17" cy="17.7" r="1.7" fill="#fff"/>',
  shield: '<path d="M12 2.5 19 5.3V11c0 5.2-3.4 8.9-7 10.2C8.4 19.9 5 16.2 5 11V5.3Z"/><path d="M8.7 12l2.2 2.2 4.4-4.4"/>',
  headset: '<path d="M4.5 13a7.5 7.5 0 0 1 15 0"/><rect x="3.3" y="13" width="4" height="6.3" rx="1.6"/><rect x="16.7" y="13" width="4" height="6.3" rx="1.6"/><path d="M19 19.3a3 3 0 0 1-3 3h-2.2"/>',
  lock: '<rect x="4.5" y="11" width="15" height="9.5" rx="2.2"/><path d="M7.8 11V7.3a4.2 4.2 0 0 1 8.4 0V11"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4.4h6V7"/><path d="M6 7l1 13h10l1-13"/>',
  cart: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.6 13.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/>',
  check: '<path d="M4 12.5 9.5 18 20 6"/>',
  external: '<path d="M7.5 16.5 16.5 7.5"/><path d="M9.5 7.5h7v7"/>'
};
function icon(name, extra){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"'+(extra||'')+'>'+ICON_PATHS[name]+'</svg>';
}

/* ---------- DATA ---------- */
const CATEGORIES = [
  {key:'pilhas',      label:'Pilhas & Baterias',   color:'blue', ic:'battery', blurb:'Alcalinas, recarregáveis e botão'},
  {key:'energeticos', label:'Energéticos',         color:'red',  ic:'bolt',    blurb:'Tradicional, zero e sabores'},
  {key:'sucos',       label:'Sucos & Bebidas',     color:'blue', ic:'cup',     blurb:'Integrais e néctares'},
  {key:'beleza',      label:'Beleza & Batons',     color:'red',  ic:'lips',    blurb:'Matte, hidratante e gloss'},
  {key:'snacks',      label:'Snacks & Guloseimas', color:'blue', ic:'snack',   blurb:'Para o balcão e o caixa'},
  {key:'higiene',     label:'Higiene Pessoal',     color:'red',  ic:'soap',    blurb:'Cuidado do dia a dia'}
];
const CAT_MAP = Object.fromEntries(CATEGORIES.map(c=>[c.key,c]));

const PRODUCTS = [
  {id:1,  name:'Pilha Alcalina AA (cartela c/ 4)',        cat:'pilhas',      price:12.90},
  {id:2,  name:'Pilha Alcalina AAA (cartela c/ 4)',       cat:'pilhas',      price:11.90},
  {id:3,  name:'Pilha Recarregável 9V',                   cat:'pilhas',      price:24.50},
  {id:4,  name:'Pilha Botão CR2032 (blister c/ 2)',       cat:'pilhas',      price:9.90},
  {id:5,  name:'Energético Tradicional 250ml',            cat:'energeticos', price:6.49},
  {id:6,  name:'Energético Zero Açúcar 250ml',            cat:'energeticos', price:6.99},
  {id:7,  name:'Energético Tropical 473ml',                cat:'energeticos', price:9.90},
  {id:8,  name:'Energético Citrus 250ml',                  cat:'energeticos', price:6.49},
  {id:9,  name:'Suco de Uva Integral 1L',                 cat:'sucos',       price:13.90},
  {id:10, name:'Suco de Laranja Natural 1L',               cat:'sucos',       price:10.90},
  {id:11, name:'Suco Tropical de Manga 900ml',             cat:'sucos',       price:8.90},
  {id:12, name:'Suco de Maracujá 1L',                      cat:'sucos',       price:11.50},
  {id:13, name:'Batom Matte Vermelho Clássico',            cat:'beleza',      price:19.90},
  {id:14, name:'Batom Hidratante Nude',                    cat:'beleza',      price:17.90},
  {id:15, name:'Batom Longa Duração Coral',                cat:'beleza',      price:21.90},
  {id:16, name:'Gloss Labial Transparente',                cat:'beleza',      price:15.90},
  {id:17, name:'Amendoim Torrado 150g',                    cat:'snacks',      price:7.90},
  {id:18, name:'Barra de Cereal Mel e Castanhas',          cat:'snacks',      price:4.50},
  {id:19, name:'Chocolate ao Leite 90g',                   cat:'snacks',      price:8.50},
  {id:20, name:'Pipoca Doce Individual',                   cat:'snacks',      price:3.90},
  {id:21, name:'Sabonete Líquido Refrescante 250ml',       cat:'higiene',     price:9.90},
  {id:22, name:'Álcool em Gel 70% 500ml',                  cat:'higiene',     price:8.90},
  {id:23, name:'Desodorante Aerosol',                      cat:'higiene',     price:14.90},
  {id:24, name:'Lenço Umedecido (pacote c/ 50)',           cat:'higiene',     price:6.90}
];

const VALUES = [
  {ic:'truck',   title:'Entrega rápida',    text:'Enviamos para todo o país em até 48h úteis a partir da confirmação.'},
  {ic:'shield',  title:'Produtos originais', text:'Trabalhamos direto com marcas homologadas, sempre lacrados de fábrica.'},
  {ic:'headset', title:'Suporte dedicado',   text:'Time comercial para pedidos por atacado, reposição e trocas.'},
  {ic:'lock',    title:'Pagamento seguro',   text:'Boleto, Pix ou cartão, com nota fiscal emitida em todo pedido.'}
];

const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');

/* ---------- STATE ---------- */
let activeCat = 'todos';
let searchTerm = '';
let cart = {}; // id -> qty
let showingRedirect = false;

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

/* ---------- RENDER: PRODUCTS ---------- */
function renderProducts(){
  const grid = document.getElementById('prodGrid');
  const list = PRODUCTS.filter(p=>{
    const matchCat = activeCat==='todos' || p.cat===activeCat;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
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
        <span class="tag">${c.label}</span>
        ${icon(c.ic)}
      </div>
      <div class="prod-body">
        <h4>${p.name}</h4>
        <div class="prod-row">
          <span class="price price--${c.color} mono">${fmt(p.price)}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Adicionar ${p.name} ao carrinho">${icon('plus')}</button>
        </div>
      </div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      addToCart(Number(btn.dataset.id));
      btn.style.transform = 'scale(1.15)';
      setTimeout(()=>{ btn.style.transform=''; }, 160);
    });
  });
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
  const dur = 36;
  wrap.innerHTML = CATEGORIES.map((c,i)=>{
    const angle = (360/n)*i;
    const delay = -(dur/n)*i;
    const bg = c.color==='blue'
      ? 'linear-gradient(140deg,var(--blue-600),var(--blue-900))'
      : 'linear-gradient(140deg,var(--red-500),var(--red-700))';
    return `<div class="orbit-item" style="transform:rotate(${angle}deg) translate(140px) rotate(0deg);animation-delay:${delay}s;">
      <span class="chip" style="background:${bg};color:#fff;">${icon(c.ic)}</span>
    </div>`;
  }).join('');
}

/* ---------- CART ---------- */
function addToCart(id){
  cart[id] = (cart[id]||0) + 1;
  showingRedirect = false;
  updateCartBadge();
  renderDrawer();
  openDrawer();
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] += delta;
  if(cart[id]<=0) delete cart[id];
  updateCartBadge();
  renderDrawer();
}
function removeFromCart(id){
  delete cart[id];
  updateCartBadge();
  renderDrawer();
}
function cartCount(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartSubtotal(){
  return Object.entries(cart).reduce((sum,[id,qty])=>{
    const p = PRODUCTS.find(pr=>pr.id===Number(id));
    return sum + (p ? p.price*qty : 0);
  },0);
}
function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  const n = cartCount();
  badge.textContent = n;
  badge.classList.toggle('show', n>0);
}
function renderDrawer(){
  const body = document.getElementById('drawerBody');
  const foot = document.getElementById('drawerFoot');
  const ids = Object.keys(cart);

  if(showingRedirect){
    body.innerHTML = `<div class="cart-success">
      ${icon('external')}
      <h4>Quase lá!</h4>
      <p>Para finalizar a compra com segurança — pagamento, nota fiscal e entrega — você será direcionado para a loja oficial da Hamilac.</p>
      <a class="btn btn--primary btn--block" href="${STORE_URL}" target="_blank" rel="noopener" id="goStoreBtn">
        Ir para a loja Hamilac ${icon('external')}
      </a>
      <button class="btn btn--ghost btn--block" id="continueBtn" style="margin-top:10px;">Continuar comprando</button>
    </div>`;
    foot.innerHTML = '';
    document.getElementById('continueBtn').addEventListener('click', ()=>{
      showingRedirect = false;
      renderDrawer();
    });
    return;
  }

  if(ids.length===0){
    body.innerHTML = `<div class="cart-empty">${icon('cart')}<div>Seu carrinho está vazio.<br>Adicione produtos do catálogo para começar.</div></div>`;
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = ids.map(id=>{
    const p = PRODUCTS.find(pr=>pr.id===Number(id));
    const c = CAT_MAP[p.cat];
    const qty = cart[id];
    return `
    <div class="cart-line">
      <div class="tile tile-${c.color}">${icon(c.ic)}</div>
      <div class="info">
        <h5>${p.name}</h5>
        <span class="mono">${fmt(p.price)}</span>
      </div>
      <div class="qty">
        <button data-act="minus" data-id="${p.id}" aria-label="Diminuir quantidade">−</button>
        <span>${qty}</span>
        <button data-act="plus" data-id="${p.id}" aria-label="Aumentar quantidade">+</button>
      </div>
      <button class="cart-remove" data-act="remove" data-id="${p.id}" aria-label="Remover item">${icon('trash')}</button>
    </div>`;
  }).join('');

  foot.innerHTML = `
    <div class="drawer-sub"><span>Subtotal</span><b class="mono">${fmt(cartSubtotal())}</b></div>
    <button class="btn btn--primary btn--block" id="checkoutBtn">Finalizar pedido</button>
    <p class="drawer-note">Esta seleção é só uma prévia. O pagamento acontece na loja oficial da Hamilac.</p>
  `;

  body.querySelectorAll('[data-act="plus"]').forEach(b=>b.addEventListener('click',()=>changeQty(Number(b.dataset.id),1)));
  body.querySelectorAll('[data-act="minus"]').forEach(b=>b.addEventListener('click',()=>changeQty(Number(b.dataset.id),-1)));
  body.querySelectorAll('[data-act="remove"]').forEach(b=>b.addEventListener('click',()=>removeFromCart(Number(b.dataset.id))));
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{
    showingRedirect = true;
    cart = {};
    updateCartBadge();
    renderDrawer();
  });
}

/* ---------- DRAWER / MENU TOGGLES ---------- */
const overlay = document.getElementById('overlay');
const drawer = document.getElementById('drawer');
function openDrawer(){ drawer.classList.add('open'); overlay.classList.add('open'); }
function closeDrawer(){ drawer.classList.remove('open'); overlay.classList.remove('open'); }
document.getElementById('cartBtn').addEventListener('click', openDrawer);
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
overlay.addEventListener('click', ()=>{ closeDrawer(); closeMobile(); });

const mobilePanel = document.getElementById('mobilePanel');
function openMobile(){ mobilePanel.classList.add('open'); }
function closeMobile(){ mobilePanel.classList.remove('open'); }
document.getElementById('menuBtn').addEventListener('click', openMobile);
document.getElementById('mobileClose').addEventListener('click', closeMobile);
mobilePanel.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMobile));

/* ---------- SEARCH ---------- */
document.getElementById('searchInput').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderProducts();
});

/* ---------- NEWSLETTER ---------- */
document.getElementById('newsForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const msg = document.getElementById('newsMsg');
  msg.classList.add('show');
  document.getElementById('newsEmail').value = '';
  setTimeout(()=>msg.classList.remove('show'), 4000);
});

/* ---------- STORE LINKS ---------- */
document.querySelectorAll('.js-store-link').forEach(el=>{ el.href = STORE_URL; });

/* ---------- INIT ---------- */
renderCategories();
renderFilters();
renderProducts();
renderValues();
renderOrbit();
updateCartBadge();
renderDrawer();
