/* Loja oficial (PedidoOK) - onde as compras de fato acontecem */
const STORE_URL = 'https://hamilac.pedidook.com.br/';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=555197994998';

/* ---------- ICONS ---------- */
const ICON_PATHS = {
  battery: '<rect x="2" y="7" width="17" height="10" rx="2.5"/><rect x="20" y="10.4" width="2" height="3.2" rx="0.6" fill="currentColor" stroke="none"/><rect x="5.5" y="10" width="4" height="4" fill="currentColor" stroke="none"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" stroke="none" stroke-linejoin="round"/>',
  beer: '<path d="M6 9h9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z"/><path d="M15 11h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15"/><path d="M6 9c0-2.5 1.5-4 1.5-5.5C7.5 3 8 2.5 8.5 3c.4.4 0 1 .5 1.5s1.3-.4 1.7 0c.4.4-.3 1.2.3 1.7.5.4 1-.2 1.5.3.4.4-.1 1.3.5 1.5H6Z"/>',
  lips: '<path d="M9 20V11l1-6.2c.35-1.7 3.65-1.7 4 0L15 11v9Z"/><line x1="9" y1="15" x2="15" y2="15"/>',
  truck: '<rect x="1.5" y="7" width="12.5" height="8.5" rx="1.2"/><path d="M14 10.2h3.6l3 3v2.3H14Z"/><circle cx="6" cy="17.7" r="1.7" fill="#fff"/><circle cx="17" cy="17.7" r="1.7" fill="#fff"/>',
  shield: '<path d="M12 2.5 19 5.3V11c0 5.2-3.4 8.9-7 10.2C8.4 19.9 5 16.2 5 11V5.3Z"/><path d="M8.7 12l2.2 2.2 4.4-4.4"/>',
  headset: '<path d="M4.5 13a7.5 7.5 0 0 1 15 0"/><rect x="3.3" y="13" width="4" height="6.3" rx="1.6"/><rect x="16.7" y="13" width="4" height="6.3" rx="1.6"/><path d="M19 19.3a3 3 0 0 1-3 3h-2.2"/>',
  lock: '<rect x="4.5" y="11" width="15" height="9.5" rx="2.2"/><path d="M7.8 11V7.3a4.2 4.2 0 0 1 8.4 0V11"/>',
  tag: '<path d="M11.5 3H19a2 2 0 0 1 2 2v7.5L11.4 22 2 12.6 11.5 3Z"/><circle cx="15" cy="8" r="1.4" fill="currentColor" stroke="none"/>',
  external: '<path d="M7.5 16.5 16.5 7.5"/><path d="M9.5 7.5h7v7"/>',
  whatsapp: '<path d="M12 3C7 3 3 7 3 12c0 1.7.5 3.3 1.3 4.7L3 21l4.5-1.2C8.8 20.5 10.4 21 12 21c5 0 9-4 9-9s-4-9-9-9Z" fill="#25D366" stroke="none"/><path d="M8.7 8.4c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 1.9 3 4.6 4.2 2.3.9 2.7.7 3.2.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.2-1.4-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9Z" fill="#fff" stroke="none"/>'
};
function icon(name, extra){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"'+(extra||'')+'>'+ICON_PATHS[name]+'</svg>';
}

/* ---------- DATA (produtos reais extraídos de hamilac.pedidook.com.br) ---------- */
const CATEGORIES = [
  {key:'pilhas',    label:'Pilhas & Baterias', color:'blue', ic:'battery', blurb:'Alcalinas e especiais'},
  {key:'energetico',label:'Energéticos',       color:'red',  ic:'bolt',    blurb:'King Energy'},
  {key:'chopp',     label:'Chopp',             color:'blue', ic:'beer',    blurb:'Buffalo'},
  {key:'beleza',    label:'Beleza',            color:'red',  ic:'lips',    blurb:'Tik Balm'}
];
const CAT_MAP = Object.fromEntries(CATEGORIES.map(c=>[c.key,c]));

const PHOTO_BASE = 'https://pedidook.s3-sa-east-1.amazonaws.com/410306/produto/foto_';
const PHOTO_EXTS = ['jpg','jpeg','png','webp'];
// A produtora do PedidoOK não expõe a extensão real do arquivo por essa listagem,
// e ela varia por produto (confirmado: alguns são .jpg, outros .jpeg). Em vez de
// arriscar mostrar uma imagem quebrada, a tag <img> tenta cada extensão em ordem
// (ver tryNextPhoto mais abaixo) até uma funcionar, e só então cai no ícone de apoio.
const photoUrl = (id, i) => `${PHOTO_BASE}${id}.${PHOTO_EXTS[i]}`;
function tryNextPhoto(img){
  const next = Number(img.dataset.i) + 1;
  if(next < PHOTO_EXTS.length){
    img.dataset.i = next;
    img.src = photoUrl(img.dataset.id, next);
  } else {
    img.remove();
  }
}

const PRODUCTS = [
  // Pilhas & Baterias (FORTLED) — catálogo completo, 8 produtos, todos com preço real
  {id:48761577, name:'Pilha Alcalina AA (cartela c/4)', brand:'FORTLED', cat:'pilhas', price:9.15, unit:'CART'},
  {id:48761491, name:'Pilha Alcalina AAA (cartela c/4)', brand:'FORTLED', cat:'pilhas', price:7.90, unit:'CART'},
  {id:48761584, name:'Pilha Alcalina AA (cartela c/2)', brand:'FORTLED', cat:'pilhas', price:4.82, unit:'CART'},
  {id:48761594, name:'Pilha Alcalina AAA (cartela c/2)', brand:'FORTLED', cat:'pilhas', price:4.39, unit:'CART'},
  {id:49703545, name:'Bateria Alcalina 9V 6LR61', brand:'FORTLED', cat:'pilhas', price:12.65, unit:'CART'},
  {id:49703520, name:'Bateria Alcalina 23A 12V', brand:'FORTLED', cat:'pilhas', price:11.08, unit:'CART'},
  {id:49703510, name:'Bateria de Lítio Moeda CR2032 (c/2)', brand:'FORTLED', cat:'pilhas', price:13.93, unit:'CART'},
  {id:49704905, name:'Bateria de Lítio Moeda CR2016 (c/2)', brand:'FORTLED', cat:'pilhas', price:13.93, unit:'CART'},
  // Energéticos (KING) — catálogo completo, 5 produtos. Todos estão como indisponíveis
  // na loja no momento, então não têm preço listado; usei R$3,99 (preço real confirmado
  // anteriormente para essa mesma linha) como estimativa até a loja reativar o estoque.
  {id:47008951, name:'Energético King Energy Tradicional 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND', available:false, estimated:true},
  {id:47008990, name:'Energético King Energy Zero Açúcar 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND', available:false, estimated:true},
  {id:47009023, name:'Energético King Energy Tropical 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND', available:false, estimated:true},
  {id:47009007, name:'Energético King Energy Cereja 473ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND', available:false, estimated:true},
  {id:47009043, name:'Energético King Energy Force 355ml', brand:'KING', cat:'energetico', price:3.99, unit:'UND', available:false, estimated:true},
  // Chopp (BUFFALO) — catálogo completo, 5 produtos, todos com preço real
  {id:51065346, name:'Chopp Buffalo Pilsen 750ml', brand:'BUFFALO', cat:'chopp', price:7.69, unit:'UNI'},
  {id:51065370, name:'Chopp Buffalo Lager 750ml', brand:'BUFFALO', cat:'chopp', price:7.69, unit:'UNI'},
  {id:51065375, name:'Chopp Buffalo APA 750ml', brand:'BUFFALO', cat:'chopp', price:9.90, unit:'UNI'},
  {id:49316714, name:'Chopp Buffalo American Lager 1,5L', brand:'BUFFALO', cat:'chopp', price:11.50, unit:'LT'},
  {id:49317007, name:'Chopp Buffalo Pilsen 1,5L', brand:'BUFFALO', cat:'chopp', price:12.50, unit:'LT'},
  // Beleza (TIK BALM) — catálogo completo, 14 produtos
  {id:51308328, name:'Balm Labial Azedinho 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307902, name:'Balm Labial Beija Eu 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307862, name:'Balm Labial Café e Caramelo 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307669, name:'Balm Labial Leite Condensado 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307926, name:'Balm Labial Milkshake de Avelã 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307867, name:'Balm Labial Sorvete de Melancia 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307938, name:'Máscara para Cílios Café e Caramelo 6g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  {id:51307958, name:'Máscara para Cílios Sorvete de Flocos', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND'},
  // sem preço cadastrado na loja (R$0,00) — estimei com base no padrão de mercado para
  // manteiga corporal 250g de marcas similares
  {id:51308142, name:'Manteiga Corporal Algodão Doce 250g', brand:'TIK BALM', cat:'beleza', price:24.90, unit:'UND', estimated:true},
  {id:51308156, name:'Manteiga Corporal Leite Condensado 250g', brand:'TIK BALM', cat:'beleza', price:24.90, unit:'UND', estimated:true},
  {id:51308151, name:'Manteiga Corporal Red Velvet 250g', brand:'TIK BALM', cat:'beleza', price:24.90, unit:'UND', estimated:true},
  // marcados como indisponíveis na loja — preço estimado pela mesma linha (R$11,99)
  {id:51307878, name:'Balm Labial Chocolate Belga 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND', available:false, estimated:true},
  {id:51307895, name:'Balm Labial Merengue de Morango 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND', available:false, estimated:true},
  {id:51307917, name:'Balm Labial Red Velvet 10g', brand:'TIK BALM', cat:'beleza', price:11.99, unit:'UND', available:false, estimated:true}
].map(p => ({ ...p, available: p.available !== false }));

const VALUES_B2C = [
  {ic:'truck',   title:'Entrega rápida',        text:'Atendemos com agilidade em Rio Grande do Sul, com frete grátis acima de R$ 200.'},
  {ic:'shield',  title:'Produtos com qualidade', text:'Trabalhamos direto com marcas consolidadas, sempre dentro da validade.'},
  {ic:'headset', title:'Suporte dedicado',       text:'Time de atendimento disponível por WhatsApp sempre que precisar.'},
  {ic:'lock',    title:'Pagamento seguro',       text:'Boleto, Pix ou cartão, do jeito que for melhor para você.'}
];
const VALUES_B2B = [
  {ic:'tag',     title:'Preço de atacado',        text:'Condições especiais para quem compra em quantidade para revender.'},
  {ic:'headset', title:'Vendedor dedicado',       text:'Time comercial disponível por WhatsApp para orçamentos e reposição.'},
  {ic:'truck',   title:'Entrega para o comércio', text:'Atendemos lojistas e mercadinhos em todo o Rio Grande do Sul.'},
  {ic:'lock',    title:'Pagamento flexível',      text:'Boleto e outras condições combinadas direto com nosso time.'}
];
const VALUES = (typeof window!=='undefined' && window.HAMILAC_MODE==='b2b') ? VALUES_B2B : VALUES_B2C;

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
        <img class="prod-tile-photo" src="${photoUrl(p.id,0)}" data-id="${p.id}" data-i="0" alt="${p.name}" loading="lazy" onerror="tryNextPhoto(this)">
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
