/* ============ ZONE — Instagram-style social app ============ */
'use strict';

// ---------- MOCK DATA ----------
const ME = { name: 'Moses Odhiambo', handle: 'vyra.moses', avatar: 'https://i.pravatar.cc/120?img=15' };

const VERIFIED = new Set(['vyra.moses', 'lana.rose', 'diego']);

const STORIES = [
  { id: 'st1', name: 'Lila James',   avatar: 'https://i.pravatar.cc/120?img=1',  media: 'https://picsum.photos/seed/story1/540/960', time: '2h' },
  { id: 'st2', name: 'Winnie Haley', avatar: 'https://i.pravatar.cc/120?img=5',  media: 'https://picsum.photos/seed/story2/540/960', time: '3h' },
  { id: 'st3', name: 'Daniel Bale',  avatar: 'https://i.pravatar.cc/120?img=11', media: 'https://picsum.photos/seed/story3/540/960', time: '5h' },
  { id: 'st4', name: 'Jane Doe',     avatar: 'https://i.pravatar.cc/120?img=20', media: 'https://picsum.photos/seed/story4/540/960', time: '8h' },
  { id: 'st5', name: 'Tina White',   avatar: 'https://i.pravatar.cc/120?img=25', media: 'https://picsum.photos/seed/story5/540/960', time: '12h' },
  { id: 'st6', name: 'Sam Cole',     avatar: 'https://i.pravatar.cc/120?img=33', media: 'https://picsum.photos/seed/story6/540/960', time: '15h' },
  { id: 'st7', name: 'Ana Rivera',   avatar: 'https://i.pravatar.cc/120?img=47', media: 'https://picsum.photos/seed/story7/540/960', time: '18h' },
];

const FEEDS = [
  {
    id: 'p1', name: 'Lana Rose', handle: '@lana.rose', avatar: 'https://i.pravatar.cc/120?img=9',
    place: 'Dubai', time: '15m ago',
    text: 'Golden hour hit different today. Sometimes you just have to stop and look up. ✨',
    photo: './tikva-J8EJtp8Hob4-unsplash.jpg',
    likes: 2323, comments: 277, liked: false,
  },
  {
    id: 'p2', name: 'Clara Dwayne', handle: '@clara.d', avatar: 'https://i.pravatar.cc/120?img=44',
    place: 'Miami', time: '2h ago',
    text: "Shipped a redesign this week that I'm actually proud of. Small, deliberate choices add up.",
    photo: './zoshua-colah-W0k-nkNoCiw-unsplash.jpg',
    likes: 1204, comments: 100, liked: false,
  },
  {
    id: 'p3', name: 'Rosalinda Clark', handle: '@rosa', avatar: 'https://i.pravatar.cc/120?img=32',
    place: 'New York', time: '50m ago',
    text: 'Coffee, notebook, and a plan for the quarter. Feeling good about where this is headed.',
    photo: './mika-baumeister-WSpXkq7PXsc-unsplash.jpg',
    likes: 889, comments: 50, liked: false,
  },
  {
    id: 'p4', name: 'Diego Márquez', handle: '@diego', avatar: 'https://i.pravatar.cc/120?img=52',
    place: 'Mexico City', time: '4h ago',
    text: 'Weekend prints from the studio 🖼️',
    photo: 'https://picsum.photos/seed/diego/900/700',
    likes: 3410, comments: 214, liked: false,
  },
  {
    id: 'p4', name: 'rasna lin', handle: '@diego', avatar: 'https://i.pravatar.cc/120?img=52',
    place: 'mountains of the everest', time: '24h ago',
    text: 'Weekend prints from the studio 🖼️',
    photo: './aniket-deole-M6XC789HLe8-unsplash.jpg',
    likes: 3410, comments: 214, liked: false,
  },
  {
    id: 'p4', name: 'queen anna', handle: '@diego', avatar: 'https://i.pravatar.cc/120?img=52',
    place: 'dark money printer', time: '13h ago',
    text: 'Weekend prints from the studio 🖼️',
    photo: './clark-tibbs-oqStl2L5oxI-unsplash.jpg',
    likes: 3410, comments: 214, liked: false,
  },
  {
    id: 'p4', name: 'mr. daniel', handle: '@diego', avatar: 'https://i.pravatar.cc/120?img=52',
    place: 'Nairobi', time: '4h ago',
    text: 'Weekend prints from the studio 🖼️',
    photo: './denys-nevozhai-7nrsVjvALnA-unsplash.jpg',
    likes: 3410, comments: 214, liked: false,
  },
  {
    id: 'p4', name: 'alison wang', handle: '@diego', avatar: 'https://i.pravatar.cc/120?img=52',
    place: 'Beauty queen', time: '2s ago',
    text: 'Weekend prints from the studio 🖼️',
    photo: './aiony-haust-3TLl_97HNJo-unsplash.jpg',
    likes: 3410, comments: 989, liked: true,
  },

];

const MESSAGES = [
  { id: 'm1', name: 'Edem Quist',       avatar: 'https://i.pravatar.cc/80?img=5',  preview: 'Just woke up, catching up now', online: true,  category: 'primary' },
  { id: 'm2', name: 'Daniella Jackson', avatar: 'https://i.pravatar.cc/80?img=10', preview: '2 new messages',                 online: true,  category: 'primary' },
  { id: 'm3', name: 'Chantel Msiza',    avatar: 'https://i.pravatar.cc/80?img=16', preview: "Sounds good, let's do it",       online: false, category: 'general' },
  { id: 'm4', name: 'Juliet Makarey',   avatar: 'https://i.pravatar.cc/80?img=21', preview: 'Birthday tomorrow 🎉',           online: false, category: 'general' },
  { id: 'm5', name: 'Keylie Hadid',     avatar: 'https://i.pravatar.cc/80?img=28', preview: '5 new messages',                 online: true,  category: 'primary' },
   { id: 'm5', name: 'mike jayson',       avatar: './felirbe-x7EkH3S6EjU-unsplash.jpg',  preview: 'Just woke up, catching up now', online: true,  category: 'primary' },
    { id: 'm5', name: 'line williams',       avatar: './jean-philippe-delberghe-9XAnXWHu9_4-unsplash.jpg',  preview: 'Just woke up, catching up now', online: true,  category: 'primary' },
     { id: 'm3', name: 'king charles',       avatar: './karl-solano-HB-8E5wdPeY-unsplash.jpg',  preview: 'Just woke up, catching up now', online: true,  category: 'primary' },
      { id: 'm4', name: 'lana rose',       avatar: './mika-baumeister-WSpXkq7PXsc-unsplash.jpg',  preview: 'Just woke up, catching up now', online: true,  category: 'primary' },
];

const MESSAGE_REQUESTS = [
  { id: 'r1', name: 'Nadia Ferreira', avatar: 'https://i.pravatar.cc/80?img=41', preview: 'Hey! Loved your last post 👋' },
  { id: 'r2', name: 'Tomiwa Balogun', avatar: 'https://i.pravatar.cc/80?img=19', preview: 'Would love to collab sometime' },
];

const DM_THREADS = {
  m1: [{ from: 'them', text: 'Hey! You up?' }, { from: 'them', text: 'Just woke up, catching up now' }, { from: 'me', text: 'Morning ☀️', seen: true }],
  m2: [{ from: 'them', text: 'Sent you the brief' }, { from: 'me', text: 'On it, thanks!', seen: true }],
  m3: [{ from: 'me', text: 'Dinner Friday?', seen: true }, { from: 'them', text: "Sounds good, let's do it" }],
  m4: [{ from: 'them', text: 'Birthday tomorrow 🎉' }, { from: 'me', text: 'Wouldn\'t miss it 🥂', seen: true }],
  m5: [{ from: 'them', text: '5 new messages' }, { from: 'them', text: 'Look at these mockups' }],
};

const EXPLORE_PAGE_SIZE = 15;
let EXPLORE = [];
let explorePage = 0;
function makeExploreTile(i) {
  return {
    id: 'e' + i,
    img: `https://picsum.photos/seed/exp${i}/600/600`,
    likes: Math.floor(Math.random() * 5000 + 200),
    comments: Math.floor(Math.random() * 300 + 5),
    tall: i % 7 === 3,
  };
}

const REELS = Array.from({ length: 6 }, (_, i) => ({
  id: 'r' + i,
  img: `https://picsum.photos/seed/reel${i}/540/960`,
  name: ['Kai Suki', 'June Ono', 'Marco Vela', 'Priya S.', 'Alex Bloom', 'Nadia F.'][i],
  caption: ['Sunset run 🌇', 'Studio session', 'Latte art', 'Trail tips', 'City nights', 'Coastal escape'][i],
  likes: Math.floor(Math.random() * 30000 + 500),
  comments: Math.floor(Math.random() * 500 + 20),
  liked: false,
}));

const TOAST_ACTORS = [
  { name: 'Keke Benjamin', avatar: 'https://i.pravatar.cc/60?img=32' },
  { name: 'John Doe', avatar: 'https://i.pravatar.cc/60?img=12' },
  { name: 'Marry Oppong', avatar: 'https://i.pravatar.cc/60?img=45' },
  { name: 'Doris Lartey', avatar: 'https://i.pravatar.cc/60?img=23' },
  { name: 'Femi Adeyemi', avatar: 'https://i.pravatar.cc/60?img=17' },
];
const TOAST_ACTIONS = ['liked your post', 'started following you', 'commented on your photo', 'mentioned you in a comment', 'shared your post'];

// ---------- ELEMENTS ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const root = document.documentElement;
const notificationsPopup = $('.notifications-popup');
const notificationsBtn = $('#notifications');
const notificationsBadge = notificationsBtn.querySelector('.notification-count');
const messagesBadge = $('#messages-notifications .notification-count');
const themeModal = $('.customize-theme');
const feedsContainer = $('#feeds');
const createPostInput = $('#create-post-input');
const postImageInput = $('#post-image-input');
const attachmentPreview = $('#attachment-preview');
const attachmentImg = $('#attachment-img');
const postSubmitBtn = $('#post-submit');
const charCountEl = $('#char-count');
const toastStack = $('#toast-stack');

let attachedImage = null;
const userPosts = [];
const savedIds = new Set();
const followState = new Map(); // handle -> boolean
const seenStories = new Set();

// ---------- UTIL ----------
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function formatK(n) { return n >= 1000 ? (n / 1000).toFixed(n < 10000 ? 1 : 0) + 'K' : n.toString(); }
function verifiedTag(handle) {
  const h = (handle || '').replace('@', '');
  return VERIFIED.has(h) ? ' <i class="uil uil-check-circle verified-badge" title="Verified" aria-label="Verified"></i>' : '';
}

// ---------- TOASTS ----------
function showToast({ avatar, html, timeout = 4200 }) {
  const el = document.createElement('div');
  el.className = 'toast neu-flat';
  el.innerHTML = `${avatar ? `<div class="profile-photo"><img src="${avatar}" alt=""></div>` : ''}<p>${html}</p>`;
  toastStack.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 240);
  }, timeout);
}

// ---------- NOTIFICATIONS ----------
let NOTIFICATIONS = [
  { id: 'n1', avatar: 'https://i.pravatar.cc/60?img=32', html: '<b>Keke Benjamin</b> accepted your connection request', time: '2 days ago', unread: false },
  { id: 'n2', avatar: 'https://i.pravatar.cc/60?img=12', html: '<b>John Doe</b> replied to your post', time: '1 hour ago', unread: true },
  { id: 'n3', avatar: 'https://i.pravatar.cc/60?img=45', html: '<b>Marry Oppong</b> and 283 others resonated with your post', time: '4 minutes ago', unread: true },
  { id: 'n4', avatar: 'https://i.pravatar.cc/60?img=23', html: '<b>Doris Lartey</b> tagged you in a comment', time: '2 days ago', unread: false },
];
function renderNotifications() {
  const list = $('#np-list');
  if (!NOTIFICATIONS.length) {
    list.innerHTML = `<div class="np-empty">You're all caught up 🎉</div>`;
    return;
  }
  list.innerHTML = NOTIFICATIONS.map(n => `
    <div class="np-row ${n.unread ? 'unread' : ''}" data-id="${n.id}">
      <div class="profile-photo"><img src="${n.avatar}" alt=""></div>
      <p>${n.html}<small class="text-muted">${n.time}</small></p>
    </div>
  `).join('');
  updateNotificationBadge();
}
function updateNotificationBadge() {
  const unread = NOTIFICATIONS.filter(n => n.unread).length;
  if (unread > 0) {
    notificationsBadge.textContent = unread > 9 ? '9+' : String(unread);
    notificationsBadge.classList.remove('hidden-badge');
  } else {
    notificationsBadge.classList.add('hidden-badge');
  }
}
function addNotification(avatar, html) {
  NOTIFICATIONS.unshift({ id: 'n' + Date.now(), avatar, html, time: 'Just now', unread: true });
  if (NOTIFICATIONS.length > 20) NOTIFICATIONS.pop();
  renderNotifications();
}
$('#np-clear').addEventListener('click', (e) => {
  e.stopPropagation();
  NOTIFICATIONS = [];
  renderNotifications();
});

// ---------- THEME (persisted: surface, hue, font size) ----------
const THEME_KEY = 'zone-theme';
function loadTheme() {
  try { return JSON.parse(localStorage.getItem(THEME_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveTheme(patch) {
  const current = loadTheme();
  const next = { ...current, ...patch };
  try { localStorage.setItem(THEME_KEY, JSON.stringify(next)); } catch (e) { /* storage unavailable */ }
  return next;
}
function applyTheme(theme) {
  if (theme.surface === 'dark' || theme.surface === 'light') {
    document.body.dataset.bg = theme.surface;
    document.documentElement.dataset.bg = theme.surface;
    $('.bg-2').classList.toggle('active', theme.surface === 'dark');
    $('.bg-1').classList.toggle('active', theme.surface === 'light');
  }
  if (theme.hue) {
    root.style.setProperty('--hue', theme.hue);
    $$('.choose-color span').forEach(s => s.classList.toggle('active', s.dataset.hue === String(theme.hue)));
  }
  if (theme.fontSize) {
    root.style.fontSize = theme.fontSize;
    $$('.choose-size span').forEach(s => s.classList.toggle('active', s.dataset.size === theme.fontSize));
  }
}

// ---------- RENDER: STORIES ----------
function renderStories() {
  const el = $('#stories');
  el.innerHTML = `
    <div class="story add-story" id="add-story" role="button" tabindex="0" aria-label="Add a story">
      <div class="story-add-icon"><i class="uil uil-plus" aria-hidden="true"></i></div>
      <span class="name">Add Story</span>
    </div>
    ` + STORIES.map((s) => `
      <div class="story" data-id="${s.id}" role="button" tabindex="0" aria-label="View ${escapeHtml(s.name)}'s story">
        <div class="story-ring ${seenStories.has(s.id) ? 'seen' : ''}"><div class="profile-photo"><img src="${s.avatar}" alt="" loading="lazy"></div></div>
        <span class="name">${escapeHtml(s.name.split(' ')[0])}</span>
      </div>
    `).join('');

  $$('#stories .story[data-id]').forEach(node => {
    node.addEventListener('click', () => openStory(STORIES.findIndex(s => s.id === node.dataset.id)));
    node.addEventListener('keydown', (e) => { if (e.key === 'Enter') node.click(); });
  });
  const addStory = $('#add-story');
  addStory.addEventListener('click', triggerStoryUpload);
  addStory.addEventListener('keydown', (e) => { if (e.key === 'Enter') triggerStoryUpload(); });
}

function triggerStoryUpload() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const story = { id: 'mine' + Date.now(), name: 'Your story', avatar: ME.avatar, media: ev.target.result, time: 'Just now', mine: true };
      STORIES.unshift(story);
      renderStories();
      showToast({ avatar: ME.avatar, html: 'Your story was posted' });
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ---------- RENDER: FEEDS ----------
function isFollowing(handle) { return followState.get(handle) === true; }
function feedCard(p) {
  const isMine = p.handle === '@' + ME.handle;
  const following = isFollowing(p.handle);
  return `
    <article class="feed neu-flat" data-id="${p.id}">
      <div class="head">
        <div class="user">
          <div class="profile-photo"><img src="${p.avatar}" alt="" loading="lazy"></div>
          <div class="info">
            <h3>${escapeHtml(p.name)}${verifiedTag(p.handle)}</h3>
            <small>${p.place ? escapeHtml(p.place) + ' · ' : ''}${escapeHtml(p.time)}</small>
          </div>
        </div>
        <div class="head-actions">
          ${!isMine ? `<button class="follow-btn ${following ? 'following' : ''}" data-follow="${p.handle}" data-name="${escapeHtml(p.name)}">${following ? 'Following' : 'Follow'}</button>` : ''}
          <span class="edit" data-menu="${p.id}" role="button" aria-label="Post options" tabindex="0"><i class="uil uil-ellipsis-h" aria-hidden="true"></i></span>
          <div class="post-menu" id="menu-${p.id}">
            ${isMine
              ? `<button data-action="delete" data-id="${p.id}" class="danger"><i class="uil uil-trash-alt" aria-hidden="true"></i> Delete post</button>`
              : `<button data-action="unfollow" data-handle="${p.handle}" data-name="${escapeHtml(p.name)}"><i class="uil uil-user-minus" aria-hidden="true"></i> ${following ? 'Unfollow' : 'Follow'} ${escapeHtml(p.name.split(' ')[0])}</button>
                 <button data-action="copy-link" data-id="${p.id}"><i class="uil uil-link" aria-hidden="true"></i> Copy link</button>
                 <button data-action="report" class="danger" data-id="${p.id}"><i class="uil uil-flag" aria-hidden="true"></i> Report</button>`}
          </div>
        </div>
      </div>
      ${p.text ? `<div class="post-text">${escapeHtml(p.text)}</div>` : ''}
      ${p.photo ? `<div class="photo" data-open="${p.id}"><img src="${p.photo}" alt="" loading="lazy"></div>` : ''}
      <div class="action-buttons">
        <div class="interaction-buttons">
          <span class="like-btn ${p.liked ? 'liked' : ''}" data-id="${p.id}" role="button" aria-label="Like"><i class="uil uil-heart" aria-hidden="true"></i><span class="count">${p.likes.toLocaleString()}</span></span>
          <span class="comment-btn" data-open="${p.id}" role="button" aria-label="Comment"><i class="uil uil-comment-dots" aria-hidden="true"></i><span class="count">${p.comments.toLocaleString()}</span></span>
          <span role="button" aria-label="Share"><i class="uil uil-share-alt" aria-hidden="true"></i></span>
        </div>
        <div class="bookmark"><span data-save="${p.id}" role="button" aria-label="Save post" class="${savedIds.has(p.id) ? 'active' : ''}"><i class="uil uil-bookmark" aria-hidden="true"></i></span></div>
      </div>
      <div class="liked-by">
        <span><img src="https://i.pravatar.cc/40?img=${(p.id.charCodeAt(1) * 3) % 70}" alt="" loading="lazy"></span>
        <span><img src="https://i.pravatar.cc/40?img=${(p.id.charCodeAt(1) * 5) % 70}" alt="" loading="lazy"></span>
        <span><img src="https://i.pravatar.cc/40?img=${(p.id.charCodeAt(1) * 7) % 70}" alt="" loading="lazy"></span>
        <p>Liked by <b>Ernest</b> and <b>${p.likes.toLocaleString()} others</b></p>
      </div>
      <div class="comments text-muted" data-open="${p.id}">View all ${p.comments.toLocaleString()} comments</div>
    </article>
  `;
}
function renderFeeds() {
  feedsContainer.innerHTML = FEEDS.map(feedCard).join('');
  wireFeed(feedsContainer);
}

function toggleLike(btn, post) {
  const countEl = btn.querySelector('.count');
  let n = parseInt(countEl.textContent.replace(/,/g, ''), 10);
  btn.classList.toggle('liked');
  btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
  const nowLiked = btn.classList.contains('liked');
  n += nowLiked ? 1 : -1;
  countEl.textContent = n.toLocaleString();
  if (post) { post.liked = nowLiked; post.likes = n; }
}

function wireFeed(scope) {
  $$('.like-btn', scope).forEach(btn => {
    btn.addEventListener('click', () => {
      const post = FEEDS.find(x => x.id === btn.dataset.id);
      toggleLike(btn, post);
    });
  });
  $$('.bookmark span', scope).forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const id = btn.dataset.save;
      if (!id) return;
      if (btn.classList.contains('active')) { savedIds.add(id); showToast({ html: 'Saved to your collection' }); }
      else savedIds.delete(id);
      renderSaved();
    });
  });
  $$('[data-open]', scope).forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.post-menu') || e.target.closest('.follow-btn')) return;
      openPostModal(el.dataset.open);
    });
  });
  $$('.follow-btn', scope).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setFollow(btn.dataset.follow, btn.dataset.name, !isFollowing(btn.dataset.follow));
      renderFeeds();
    });
  });
  $$('.edit[data-menu]', scope).forEach(edit => {
    edit.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = $('#menu-' + edit.dataset.menu);
      closeAllPostMenus(menu);
      menu.classList.toggle('open');
    });
    edit.addEventListener('keydown', (e) => { if (e.key === 'Enter') edit.click(); });
  });
  $$('.post-menu button', scope).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      if (action === 'delete') deletePost(btn.dataset.id);
      if (action === 'unfollow') { setFollow(btn.dataset.handle, btn.dataset.name, !isFollowing(btn.dataset.handle)); renderFeeds(); }
      if (action === 'copy-link') showToast({ html: 'Link copied to clipboard' });
      if (action === 'report') showToast({ html: 'Thanks — we\'ll review this post' });
      closeAllPostMenus();
    });
  });
  // double-tap-like on photo with heart burst
  $$('.photo', scope).forEach(ph => {
    let last = 0;
    ph.addEventListener('click', () => {
      const now = Date.now();
      if (now - last < 350) {
        const card = ph.closest('.feed');
        const like = card.querySelector('.like-btn');
        const post = FEEDS.find(x => x.id === like.dataset.id);
        if (like && !like.classList.contains('liked')) toggleLike(like, post);
        burstHeart(ph);
      }
      last = now;
    });
  });
}
function burstHeart(container) {
  const heart = document.createElement('i');
  heart.className = 'uil uil-heart heart-burst';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 820);
}
function closeAllPostMenus(except) {
  $$('.post-menu.open').forEach(m => { if (m !== except) m.classList.remove('open'); });
}
document.addEventListener('click', () => closeAllPostMenus());

function setFollow(handle, name, value) {
  followState.set(handle, value);
  if (value) {
    const followers = $('#follower-count');
    if (followers) {
      const n = parseFloat(followers.textContent) + 0.1;
      followers.textContent = n.toFixed(1) + 'K';
    }
    showToast({ html: `You're now following <b>${name}</b>` });
  }
}

function deletePost(id) {
  const idx = FEEDS.findIndex(x => x.id === id);
  if (idx !== -1) FEEDS.splice(idx, 1);
  const uidx = userPosts.findIndex(x => x.id === id);
  if (uidx !== -1) userPosts.splice(uidx, 1);
  savedIds.delete(id);
  renderFeeds();
  renderProfileTab(currentProfileTab);
  renderSaved();
  showToast({ html: 'Post deleted' });
}

// ---------- CREATE POST ----------
postImageInput.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    attachedImage = ev.target.result;
    attachmentImg.src = attachedImage;
    attachmentPreview.hidden = false;
    switchView('home');
    createPostInput.focus();
    updateComposerState();
  };
  reader.readAsDataURL(file);
});
$('#attachment-remove').addEventListener('click', () => {
  attachedImage = null; attachmentImg.src = ''; attachmentPreview.hidden = true; postImageInput.value = '';
  updateComposerState();
});

function updateComposerState() {
  const len = createPostInput.value.length;
  const remaining = 280 - len;
  charCountEl.textContent = remaining >= 0 ? `${remaining} left` : `${Math.abs(remaining)} over limit`;
  charCountEl.classList.toggle('warn', remaining <= 30 && remaining >= 0);
  charCountEl.classList.toggle('over', remaining < 0);
  postSubmitBtn.disabled = (len === 0 && !attachedImage) || remaining < 0;
}
createPostInput.addEventListener('input', updateComposerState);

function submitPost() {
  const text = createPostInput.value.trim();
  if ((!text && !attachedImage) || text.length > 280) { createPostInput.focus(); return; }
  const post = {
    id: 'u' + Date.now(),
    name: ME.name, handle: '@' + ME.handle, avatar: ME.avatar,
    place: '', time: 'Just now',
    text, photo: attachedImage,
    likes: 0, comments: 0, liked: false,
  };
  FEEDS.unshift(post);
  userPosts.unshift(post);
  feedsContainer.insertAdjacentHTML('afterbegin', feedCard(post));
  wireFeed(feedsContainer.firstElementChild);
  createPostInput.value = '';
  attachedImage = null; attachmentImg.src = ''; attachmentPreview.hidden = true; postImageInput.value = '';
  updateComposerState();
  renderProfileTab(currentProfileTab);
  showToast({ html: 'Your post is live' });
}
postSubmitBtn.addEventListener('click', submitPost);
createPostInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !postSubmitBtn.disabled) submitPost(); });
updateComposerState();

// ---------- STORY VIEWER ----------
const storyViewer = $('#story-viewer');
let storyIdx = 0, storyTimer = null;

function openStory(i) {
  if (i < 0) return;
  storyIdx = i;
  showStory();
  storyViewer.hidden = false;
}
function closeStory() { storyViewer.hidden = true; clearTimeout(storyTimer); }
function showStory() {
  const s = STORIES[storyIdx];
  if (!s) return closeStory();
  seenStories.add(s.id);
  $('#sv-avatar').src = s.avatar;
  $('#sv-name').textContent = s.name;
  $('#sv-time').textContent = s.time;
  $('#sv-media').src = s.media;
  $('#story-like').classList.remove('liked');
  const p = $('#story-progress'); p.style.animation = 'none'; void p.offsetWidth; p.style.animation = '';
  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => nextStory(), 5000);
  renderStories();
}
function nextStory() {
  if (storyIdx >= STORIES.length - 1) { closeStory(); return; }
  storyIdx += 1; showStory();
}
function prevStory() { storyIdx = (storyIdx - 1 + STORIES.length) % STORIES.length; showStory(); }
function pauseStory() { storyViewer.classList.add('paused'); clearTimeout(storyTimer); }
function resumeStory() { storyViewer.classList.remove('paused'); storyTimer = setTimeout(() => nextStory(), 3000); }

$('#story-close').addEventListener('click', closeStory);
$('#story-next').addEventListener('click', nextStory);
$('#story-prev').addEventListener('click', prevStory);
$('#story-like').addEventListener('click', (e) => { e.currentTarget.classList.toggle('liked'); });
$('#story-send').addEventListener('click', () => {
  const input = $('#story-reply-input');
  if (!input.value.trim()) return;
  showToast({ avatar: STORIES[storyIdx]?.avatar, html: `Reply sent to <b>${escapeHtml(STORIES[storyIdx]?.name || '')}</b>` });
  input.value = '';
});
$('#story-reply-input').addEventListener('focus', pauseStory);
$('#story-reply-input').addEventListener('blur', resumeStory);
storyViewer.addEventListener('click', (e) => { if (e.target === storyViewer) closeStory(); });
document.addEventListener('keydown', (e) => {
  if (storyViewer.hidden) return;
  if (e.key === 'Escape') closeStory();
  if (e.key === 'ArrowRight') nextStory();
  if (e.key === 'ArrowLeft') prevStory();
});

// ---------- EXPLORE (infinite scroll via Load more) ----------
function loadMoreExplore() {
  const start = explorePage * EXPLORE_PAGE_SIZE;
  const batch = Array.from({ length: EXPLORE_PAGE_SIZE }, (_, i) => makeExploreTile(start + i));
  EXPLORE = EXPLORE.concat(batch);
  explorePage += 1;
  renderExplore();
  if (explorePage >= 4) $('#explore-load-more').style.display = 'none';
}
function renderExplore() {
  const el = $('#explore-grid');
  el.innerHTML = EXPLORE.map(t => `
    <div class="explore-tile ${t.tall ? 'tall' : ''}" data-id="${t.id}">
      <img src="${t.img}" alt="" loading="lazy">
      <div class="overlay">
        <span><i class="uil uil-heart" aria-hidden="true"></i> ${t.likes.toLocaleString()}</span>
        <span><i class="uil uil-comment-dots" aria-hidden="true"></i> ${t.comments}</span>
      </div>
    </div>
  `).join('');
  $$('#explore-grid .explore-tile').forEach(node => {
    node.addEventListener('click', () => openExploreTile(node.dataset.id));
  });
}
function openExploreTile(id) {
  const t = EXPLORE.find(x => x.id === id);
  if (!t) return;
  openPostModal(null, {
    id, name: 'Trending', avatar: 'https://i.pravatar.cc/60?img=' + (parseInt(id.slice(1), 10) % 70 + 1),
    photo: t.img, place: 'Explore', text: 'Discovered on Explore', likes: t.likes, comments: t.comments,
  });
}
$('#explore-load-more').addEventListener('click', loadMoreExplore);

// ---------- REELS ----------
function renderReels() {
  const el = $('#reels');
  el.innerHTML = REELS.map(r => `
    <div class="reel" data-id="${r.id}">
      <img src="${r.img}" alt="" loading="lazy">
      <div class="reel-overlay">
        <div class="reel-top"><span class="play-badge"><i class="uil uil-play" aria-hidden="true"></i> Reel</span></div>
        <div class="reel-bottom">
          <h5>@${r.name.toLowerCase().replace(/\s+/g, '')}</h5>
          <p>${escapeHtml(r.caption)}</p>
        </div>
      </div>
      <div class="reel-side">
        <span class="reel-like ${r.liked ? 'liked' : ''}" role="button" aria-label="Like reel"><i class="uil uil-heart" aria-hidden="true"></i>${formatK(r.likes)}</span>
        <span role="button" aria-label="Comment on reel"><i class="uil uil-comment-dots" aria-hidden="true"></i>${formatK(r.comments)}</span>
        <span role="button" aria-label="Share reel"><i class="uil uil-share-alt" aria-hidden="true"></i></span>
        <span role="button" aria-label="More options"><i class="uil uil-ellipsis-v" aria-hidden="true"></i></span>
      </div>
    </div>
  `).join('');
  $$('.reel-like', el).forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      REELS[i].liked = !REELS[i].liked;
      REELS[i].likes += REELS[i].liked ? 1 : -1;
      btn.classList.toggle('liked', REELS[i].liked);
      btn.innerHTML = `<i class="uil uil-heart" aria-hidden="true"></i>${formatK(REELS[i].likes)}`;
    });
  });
  $$('.reel', el).forEach((card, i) => {
    card.addEventListener('dblclick', () => {
      if (!REELS[i].liked) $$('.reel-like', el)[i].click();
    });
  });
}

// ---------- MESSAGES (right panel + DM view) ----------
let activeMessageCategory = 'primary';
function renderMessagesRail() {
  const list = $('#message-list');
  if (activeMessageCategory === 'requests') {
    if (!MESSAGE_REQUESTS.length) { list.innerHTML = `<div class="message-list-empty">No pending message requests</div>`; return; }
    list.innerHTML = MESSAGE_REQUESTS.map(m => `
      <div class="message" data-req="${m.id}">
        <div class="profile-photo"><img src="${m.avatar}" alt="" loading="lazy"></div>
        <div class="message-body"><h5>${escapeHtml(m.name)}</h5><p>${escapeHtml(m.preview)}</p></div>
      </div>
    `).join('');
    return;
  }
  const filtered = MESSAGES.filter(m => m.category === activeMessageCategory);
  if (!filtered.length) { list.innerHTML = `<div class="message-list-empty">Nothing here yet</div>`; return; }
  list.innerHTML = filtered.map(m => `
    <div class="message" data-id="${m.id}">
      <div class="profile-photo"><img src="${m.avatar}" alt="" loading="lazy">${m.online ? '<span class="active"></span>' : ''}</div>
      <div class="message-body"><h5>${escapeHtml(m.name)}</h5><p>${escapeHtml(m.preview)}</p></div>
    </div>
  `).join('');
  $$('#message-list .message[data-id]').forEach(el => el.addEventListener('click', () => {
    switchView('messages'); openDM(el.dataset.id);
  }));
}
$$('.category h6').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.category h6').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeMessageCategory = tab.dataset.cat;
    renderMessagesRail();
  });
});

function renderDMList() {
  const list = $('#dm-list');
  list.innerHTML = MESSAGES.map(m => `
    <div class="dm-item" data-id="${m.id}">
      <div class="profile-photo"><img src="${m.avatar}" alt="" loading="lazy">${m.online ? '<span class="active"></span>' : ''}</div>
      <div><h5>${escapeHtml(m.name)}</h5><p>${escapeHtml(m.preview)}</p></div>
    </div>
  `).join('');
  $$('.dm-item', list).forEach(el => el.addEventListener('click', () => openDM(el.dataset.id)));
}
let activeDM = 'm1';
function openDM(id) {
  activeDM = id;
  $$('.dm-item').forEach(x => x.classList.toggle('active', x.dataset.id === id));
  const m = MESSAGES.find(x => x.id === id);
  if (!m) return;
  $('#dm-avatar').src = m.avatar; $('#dm-name').textContent = m.name;
  $('#dm-status').textContent = m.online ? 'Active now' : 'Active recently';
  renderDMThread();
}
function renderDMThread() {
  const wrap = $('#dm-messages');
  const thread = DM_THREADS[activeDM] || [];
  wrap.innerHTML = thread.map((b, i) => {
    const isLastMe = b.from === 'me' && i === thread.length - 1;
    return `<div class="dm-bubble ${b.from}">${escapeHtml(b.text)}${b.from === 'me' && b.seen ? '<span class="seen-tick">Seen</span>' : ''}</div>`;
  }).join('');
  wrap.scrollTop = wrap.scrollHeight;
}
function showTyping() {
  const wrap = $('#dm-messages');
  const typing = document.createElement('div');
  typing.className = 'dm-typing';
  typing.id = 'dm-typing-indicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  wrap.appendChild(typing);
  wrap.scrollTop = wrap.scrollHeight;
}
function hideTyping() { $('#dm-typing-indicator')?.remove(); }

$('#dm-composer').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#dm-input');
  const text = input.value.trim();
  if (!text) return;
  const thread = (DM_THREADS[activeDM] ||= []);
  thread.forEach(b => { if (b.from === 'me') b.seen = false; });
  thread.push({ from: 'me', text, seen: false });
  input.value = '';
  renderDMThread();
  showTyping();
  setTimeout(() => {
    hideTyping();
    thread.forEach(b => { if (b.from === 'me') b.seen = true; });
    thread.push({ from: 'them', text: pickReply() });
    renderDMThread();
  }, 1100 + Math.random() * 900);
});
function pickReply() {
  const r = ['Nice 👌', 'Haha okay', 'On my way', "Let's do it", 'Sounds good!', '👀', 'Send me the link'];
  return r[Math.floor(Math.random() * r.length)];
}

$('#message-search').addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  $$('#message-list .message').forEach(row => {
    const name = row.querySelector('h5').textContent.toLowerCase();
    row.style.display = name.includes(val) ? 'flex' : 'none';
  });
});

// ---------- POST MODAL ----------
const postModal = $('#post-modal');
let pmComments = [];
let currentModalPostId = null;
function openPostModal(id, override) {
  const p = override || FEEDS.find(x => x.id === id);
  if (!p) return;
  currentModalPostId = p.id;
  $('#pm-media').src = p.photo || `https://picsum.photos/seed/${p.id}/900/900`;
  $('#pm-avatar').src = p.avatar;
  $('#pm-name').innerHTML = escapeHtml(p.name) + verifiedTag(p.handle || '');
  $('#pm-place').textContent = p.place || '';
  $('#pm-like').classList.toggle('liked', !!p.liked);
  $('#pm-bookmark').classList.toggle('active', savedIds.has(p.id));
  pmComments = [
    { name: 'noor.k', text: p.text || 'Love this shot 🔥', time: '2h', liked: false },
    { name: 'kelvin', text: 'Where was this taken?', time: '1h', liked: false },
    { name: 'ayo_x', text: 'Underrated ✨', time: '45m', liked: false },
  ];
  renderPmComments();
  postModal.hidden = false;
}
function renderPmComments() {
  $('#pm-comments').innerHTML = pmComments.map((c, i) => `
    <div class="pm-comment">
      <div class="profile-photo"><img src="https://i.pravatar.cc/60?u=${encodeURIComponent(c.name)}" alt="" loading="lazy"></div>
      <div><b>${escapeHtml(c.name)}</b>${escapeHtml(c.text)}<small>${c.time}</small></div>
      <i class="uil uil-heart pm-comment-like ${c.liked ? 'liked' : ''}" data-idx="${i}" role="button" aria-label="Like comment"></i>
    </div>
  `).join('');
  $$('.pm-comment-like').forEach(el => el.addEventListener('click', () => {
    const c = pmComments[el.dataset.idx];
    c.liked = !c.liked;
    el.classList.toggle('liked', c.liked);
  }));
}
$('#post-modal-close').addEventListener('click', () => (postModal.hidden = true));
postModal.addEventListener('click', (e) => { if (e.target === postModal) postModal.hidden = true; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !postModal.hidden) postModal.hidden = true; });
$('#pm-add').addEventListener('submit', (e) => {
  e.preventDefault();
  const inp = $('#pm-input'); const t = inp.value.trim(); if (!t) return;
  pmComments.push({ name: ME.handle, text: t, time: 'now', liked: false });
  inp.value = ''; renderPmComments();
  $('#pm-comments').scrollTop = $('#pm-comments').scrollHeight;
});
$('#pm-like').addEventListener('click', (e) => {
  const post = FEEDS.find(x => x.id === currentModalPostId);
  e.currentTarget.classList.toggle('liked');
  if (post) {
    post.liked = e.currentTarget.classList.contains('liked');
    post.likes += post.liked ? 1 : -1;
    renderFeeds();
  }
});
$('#pm-bookmark').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
  if (!currentModalPostId) return;
  if (e.currentTarget.classList.contains('active')) savedIds.add(currentModalPostId);
  else savedIds.delete(currentModalPostId);
  renderSaved();
  renderFeeds();
});
$('#pm-share').addEventListener('click', () => showToast({ html: 'Link copied to clipboard' }));

// ---------- SAVED + PROFILE ----------
function renderSaved() {
  const el = $('#saved-grid');
  const saved = FEEDS.filter(p => savedIds.has(p.id));
  if (!saved.length) {
    el.innerHTML = `<div class="empty-state neu-flat">
      <i class="uil uil-bookmark" aria-hidden="true"></i>
      <h3>No saved posts yet</h3>
      <p class="text-muted">Tap the bookmark on any post to save it here.</p>
    </div>`;
    return;
  }
  el.innerHTML = saved.map(p => `
    <div class="explore-tile" data-id="${p.id}">
      <img src="${p.photo || 'https://picsum.photos/seed/' + p.id + '/600/600'}" alt="" loading="lazy">
      <div class="overlay"><span><i class="uil uil-heart" aria-hidden="true"></i> ${p.likes.toLocaleString()}</span></div>
    </div>
  `).join('');
  $$('#saved-grid .explore-tile').forEach(t => t.addEventListener('click', () => openPostModal(t.dataset.id)));
}

let currentProfileTab = 'posts';
function renderProfileTab(tab) {
  currentProfileTab = tab;
  $('#post-count').textContent = userPosts.length;
  const el = $('#profile-grid');

  if (tab === 'posts') {
    if (!userPosts.length) {
      el.innerHTML = `<div class="empty-state neu-flat"><i class="uil uil-apps" aria-hidden="true"></i><h3>No posts yet</h3><p class="text-muted">Share your first moment to see it here.</p></div>`;
      return;
    }
    el.innerHTML = userPosts.map(p => `
      <div class="explore-tile" data-id="${p.id}">
        <img src="${p.photo || 'https://picsum.photos/seed/' + p.id + '/600/600'}" alt="" loading="lazy">
        <div class="overlay"><span><i class="uil uil-heart" aria-hidden="true"></i> ${p.likes.toLocaleString()}</span><span><i class="uil uil-comment-dots" aria-hidden="true"></i> ${p.comments}</span></div>
      </div>
    `).join('');
    $$('#profile-grid .explore-tile').forEach(t => t.addEventListener('click', () => openPostModal(t.dataset.id)));
  } else if (tab === 'reels') {
    if (!REELS.length) { el.innerHTML = `<div class="empty-state neu-flat"><i class="uil uil-play-circle" aria-hidden="true"></i><h3>No reels yet</h3></div>`; return; }
    el.innerHTML = REELS.slice(0, 6).map(r => `
      <div class="explore-tile" data-id="${r.id}">
        <img src="${r.img}" alt="" loading="lazy">
        <div class="overlay"><span><i class="uil uil-heart" aria-hidden="true"></i> ${formatK(r.likes)}</span></div>
      </div>
    `).join('');
  } else if (tab === 'saved') {
    const saved = FEEDS.filter(p => savedIds.has(p.id));
    if (!saved.length) { el.innerHTML = `<div class="empty-state neu-flat"><i class="uil uil-bookmark" aria-hidden="true"></i><h3>No saved posts</h3></div>`; return; }
    el.innerHTML = saved.map(p => `
      <div class="explore-tile" data-id="${p.id}">
        <img src="${p.photo || 'https://picsum.photos/seed/' + p.id + '/600/600'}" alt="" loading="lazy">
        <div class="overlay"><span><i class="uil uil-heart" aria-hidden="true"></i> ${p.likes.toLocaleString()}</span></div>
      </div>
    `).join('');
    $$('#profile-grid .explore-tile').forEach(t => t.addEventListener('click', () => openPostModal(t.dataset.id)));
  } else {
    el.innerHTML = `<div class="empty-state neu-flat"><i class="uil uil-user-square" aria-hidden="true"></i><h3>No tagged posts</h3><p class="text-muted">Posts you're tagged in will show up here.</p></div>`;
  }
}
$$('.tab[data-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.tab[data-tab]').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderProfileTab(tab.dataset.tab);
  });
});

// ---------- NAVIGATION / VIEW SWITCH ----------
function switchView(view) {
  $$('.view').forEach(v => v.classList.remove('active'));
  const target = $('.view-' + view);
  if (target) target.classList.add('active');
  $$('[data-view]').forEach(el => el.classList.toggle('active', el.dataset.view === view));
  if (view === 'profile') renderProfileTab(currentProfileTab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$$('[data-view]').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const view = item.dataset.view;
    if (view === 'theme') { openThemeModal(); return; }
    switchView(view);
  });
});
$('#logo-home').addEventListener('click', () => switchView('home'));
$('#logo-home').addEventListener('keydown', (e) => { if (e.key === 'Enter') switchView('home'); });

// notifications toggle
notificationsBtn.addEventListener('click', (e) => {
  e.preventDefault(); e.stopPropagation();
  const open = notificationsPopup.style.display === 'block';
  notificationsPopup.style.display = open ? 'none' : 'block';
  notificationsBtn.setAttribute('aria-expanded', String(!open));
  if (!open) { NOTIFICATIONS.forEach(n => n.unread = false); renderNotifications(); }
});
document.addEventListener('click', (e) => {
  if (!notificationsBtn.contains(e.target)) { notificationsPopup.style.display = 'none'; notificationsBtn.setAttribute('aria-expanded', 'false'); }
});

// mobile create
$('#mobile-create').addEventListener('click', (e) => { e.preventDefault(); switchView('home'); createPostInput.focus(); });

// ---------- THEME MODAL ----------
function openThemeModal() { themeModal.style.display = 'grid'; }
function closeThemeModal() { themeModal.style.display = 'none'; }
$('#theme-toggle').addEventListener('click', openThemeModal);
$('#theme-toggle').addEventListener('keydown', (e) => { if (e.key === 'Enter') openThemeModal(); });
$('#mobile-theme').addEventListener('click', (e) => { e.preventDefault(); openThemeModal(); });
$('.close-modal').addEventListener('click', closeThemeModal);
themeModal.addEventListener('click', (e) => { if (e.target === themeModal) closeThemeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeThemeModal(); });

$$('.choose-size span').forEach(size => {
  size.addEventListener('click', () => {
    $$('.choose-size span').forEach(s => s.classList.remove('active'));
    size.classList.add('active');
    const val = size.dataset.size || '15px';
    root.style.fontSize = val;
    saveTheme({ fontSize: val });
  });
});
$$('.choose-color span').forEach(color => {
  color.addEventListener('click', () => {
    $$('.choose-color span').forEach(c => c.classList.remove('active'));
    color.classList.add('active');
    const hue = color.dataset.hue || '252';
    root.style.setProperty('--hue', hue);
    saveTheme({ hue });
  });
});
const bg1 = $('.bg-1'), bg2 = $('.bg-2');
function setSurface(mode) {
  document.body.dataset.bg = mode;
  document.documentElement.dataset.bg = mode;
  saveTheme({ surface: mode });
}
bg1.addEventListener('click', () => { bg1.classList.add('active'); bg2.classList.remove('active'); setSurface('light'); });
bg2.addEventListener('click', () => { bg2.classList.add('active'); bg1.classList.remove('active'); setSurface('dark'); });
$('#theme-reset-btn').addEventListener('click', () => {
  try { localStorage.removeItem(THEME_KEY); localStorage.removeItem('zone-surface'); } catch (e) { /* ignore */ }
  root.style.removeProperty('--hue');
  root.style.fontSize = '';
  document.body.removeAttribute('data-bg');
  document.documentElement.removeAttribute('data-bg');
  $$('.choose-color span').forEach((s, i) => s.classList.toggle('active', i === 0));
  $$('.choose-size span').forEach((s, i) => s.classList.toggle('active', i === 1));
  bg1.classList.add('active'); bg2.classList.remove('active');
  showToast({ html: 'Appearance reset to defaults' });
});

// ---------- CONNECTION REQUESTS ----------
$$('.request .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.request');
    const wasAccept = btn.classList.contains('btn-primary');
    const nameEl = card.querySelector('h5');
    card.style.transition = 'opacity 300ms ease, transform 300ms ease';
    card.style.opacity = '0'; card.style.transform = 'translateX(1rem)';
    setTimeout(() => card.remove(), 300);
    if (wasAccept && nameEl) showToast({ html: `You're now connected with <b>${escapeHtml(nameEl.textContent)}</b>` });
  });
});

// ---------- SETTINGS ----------
$$('#settings-list .settings-row').forEach(row => {
  row.addEventListener('click', () => {
    const setting = row.dataset.setting;
    if (setting === 'logout') {
      if (confirm('Log out of Zone?')) showToast({ html: 'You have been logged out' });
      return;
    }
    showToast({ html: 'This setting is coming soon' });
  });
});

// ---------- EDIT / SHARE PROFILE ----------
$('#edit-profile-btn').addEventListener('click', () => showToast({ html: 'Profile editing is coming soon' }));
$('#share-profile-btn').addEventListener('click', () => {
  const url = `https://zone.app/@${ME.handle}`;
  if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
  showToast({ html: 'Profile link copied to clipboard' });
});

// ---------- GLOBAL SEARCH (with suggestions, fixed reset bug) ----------
const searchInput = $('#global-search');
const suggestionsBox = $('#search-suggestions');

function directoryEntries() {
  const seen = new Set();
  const entries = [];
  FEEDS.forEach(p => { if (!seen.has(p.handle)) { seen.add(p.handle); entries.push({ name: p.name, handle: p.handle, avatar: p.avatar, meta: p.place || 'Post' }); } });
  MESSAGES.forEach(m => { const h = '@' + m.name.toLowerCase().replace(/\s+/g, '.'); if (!seen.has(h)) { seen.add(h); entries.push({ name: m.name, handle: h, avatar: m.avatar, meta: 'Message' }); } });
  return entries;
}
function applyFeedFilter(v) {
  $$('.feed').forEach(f => {
    if (!v) { f.style.display = ''; return; }
    const txt = f.textContent.toLowerCase();
    f.style.display = txt.includes(v) ? '' : 'none';
  });
}
searchInput.addEventListener('input', (e) => {
  const v = e.target.value.toLowerCase().trim();
  applyFeedFilter(v);
  if (!v) { suggestionsBox.classList.remove('open'); suggestionsBox.innerHTML = ''; return; }
  const matches = directoryEntries().filter(d => d.name.toLowerCase().includes(v) || d.handle.toLowerCase().includes(v)).slice(0, 6);
  suggestionsBox.innerHTML = matches.length
    ? matches.map(d => `
        <div class="suggestion-row" data-handle="${d.handle}" data-name="${escapeHtml(d.name)}">
          <div class="profile-photo"><img src="${d.avatar}" alt="" loading="lazy"></div>
          <div><div>${escapeHtml(d.name)}</div><div class="s-meta">${escapeHtml(d.handle)} · ${escapeHtml(d.meta)}</div></div>
        </div>`).join('')
    : `<div class="suggestion-empty">No matches for "${escapeHtml(e.target.value)}"</div>`;
  suggestionsBox.classList.add('open');
  $$('.suggestion-row', suggestionsBox).forEach(row => {
    row.addEventListener('click', () => {
      searchInput.value = row.dataset.name;
      applyFeedFilter(row.dataset.name.toLowerCase());
      suggestionsBox.classList.remove('open');
    });
  });
});
searchInput.addEventListener('blur', () => setTimeout(() => suggestionsBox.classList.remove('open'), 150));
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { searchInput.blur(); suggestionsBox.classList.remove('open'); } });

// ---------- SIMULATED LIVE ACTIVITY ----------
function simulateActivity() {
  const actor = TOAST_ACTORS[Math.floor(Math.random() * TOAST_ACTORS.length)];
  const action = TOAST_ACTIONS[Math.floor(Math.random() * TOAST_ACTIONS.length)];
  addNotification(actor.avatar, `<b>${actor.name}</b> ${action}`);
  showToast({ avatar: actor.avatar, html: `<b>${actor.name}</b> ${action}` });
}

// ---------- BOOT ----------
function boot() {
  applyTheme(loadTheme());
  loadMoreExplore();
  renderStories();
  renderFeeds();
  renderReels();
  renderMessagesRail();
  renderDMList();
  openDM('m1');
  renderSaved();
  renderNotifications();
  renderProfileTab('posts');
  updateComposerState();
  if (MESSAGE_REQUESTS.length) $('.category .message-requests').textContent = `Requests (${MESSAGE_REQUESTS.length})`;
  setInterval(simulateActivity, 26000 + Math.random() * 14000);
}
boot();
