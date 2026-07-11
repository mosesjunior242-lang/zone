// ============== ELEMENTS ==============
const root = document.documentElement;
const menuItems = document.querySelectorAll('.menu-item');
const notificationsPopup = document.querySelector('.notifications-popup');
const notificationsBtn = document.querySelector('#notifications');
const notificationsBadge = notificationsBtn.querySelector('.notification-count');

const messageNotification = document.querySelector('#messages-notifications');
const messagesPanel = document.querySelector('.messages');
const messageRows = messagesPanel.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const themeBtn = document.querySelector('#theme');
const themeToggleBtn = document.querySelector('#theme-toggle');
const mobileThemeBtn = document.querySelector('#mobile-theme');
const themeModal = document.querySelector('.customize-theme');
const closeModalBtn = document.querySelector('.close-modal');

const fontSizeSpans = document.querySelectorAll('.choose-size span');
const colorSpans = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');

const likeButtons = document.querySelectorAll('.like-btn');
const bookmarkButtons = document.querySelectorAll('.bookmark span');

const createPostInput = document.querySelector('#create-post-input');
const postSubmitBtn = document.querySelector('#post-submit');
const createPostBtn = document.querySelector('#create-post-btn');
const createPostBtn2 = document.querySelector('#create-post-btn-2');
const mobileCreateBtn = document.querySelector('#mobile-create');
const feedsContainer = document.querySelector('#feeds');

const requestButtons = document.querySelectorAll('.request .btn');

// ============== SIDEBAR NAVIGATION ==============
const clearActiveMenu = () => menuItems.forEach(item => item.classList.remove('active'));

const closeNotifications = () => { notificationsPopup.style.display = 'none'; };

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveMenu();
    item.classList.add('active');

    // also sync desktop <-> mobile nav active state by data-view
    const view = item.dataset.view;
    if (view) {
      document.querySelectorAll(`[data-view="${view}"]`).forEach(el => el.classList.add('active'));
    }

    if (item.id === 'notifications') {
      const isOpen = notificationsPopup.style.display === 'block';
      notificationsPopup.style.display = isOpen ? 'none' : 'block';
      notificationsBadge.style.display = 'none';
    } else {
      closeNotifications();
    }
  });
});

document.addEventListener('click', (e) => {
  if (!notificationsBtn.contains(e.target)) closeNotifications();
});

// ============== MESSAGES ==============
const searchMessages = () => {
  const val = messageSearch.value.toLowerCase();
  messageRows.forEach(row => {
    const name = row.querySelector('h5').textContent.toLowerCase();
    row.style.display = name.includes(val) ? 'flex' : 'none';
  });
};

messageSearch.addEventListener('keyup', searchMessages);

const pulseMessages = () => {
  messagesPanel.style.boxShadow = '0 0 0 3px var(--accent), 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light)';
  const badge = messageNotification.querySelector('.notification-count');
  if (badge) badge.style.display = 'none';
  setTimeout(() => { messagesPanel.style.boxShadow = ''; }, 1600);
};

messageNotification.addEventListener('click', (e) => {
  e.preventDefault();
  pulseMessages();
});

document.querySelector('#mobile-messages')?.addEventListener('click', pulseMessages);

// ============== THEME MODAL ==============
const openThemeModal = () => { themeModal.style.display = 'grid'; };
const closeThemeModal = () => { themeModal.style.display = 'none'; };

themeBtn.addEventListener('click', (e) => { e.preventDefault(); openThemeModal(); });
themeToggleBtn.addEventListener('click', openThemeModal);
mobileThemeBtn?.addEventListener('click', openThemeModal);
closeModalBtn.addEventListener('click', closeThemeModal);

themeModal.addEventListener('click', (e) => {
  if (e.target === themeModal) closeThemeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeThemeModal();
});

// ============== FONT SIZE ==============
const fontSizeMap = {
  'font-size-1': '13px',
  'font-size-2': '15px',
  'font-size-3': '17px',
  'font-size-4': '19px',
  'font-size-5': '21px',
};

fontSizeSpans.forEach(size => {
  size.addEventListener('click', () => {
    fontSizeSpans.forEach(s => s.classList.remove('active'));
    size.classList.add('active');

    const key = Object.keys(fontSizeMap).find(cls => size.classList.contains(cls));
    document.documentElement.style.fontSize = fontSizeMap[key] || '15px';
  });
});

// ============== ACCENT COLOR ==============
colorSpans.forEach(color => {
  color.addEventListener('click', () => {
    colorSpans.forEach(c => c.classList.remove('active'));
    color.classList.add('active');
    const hue = getComputedStyle(color).backgroundColor;
    root.style.setProperty('--accent', hue);
  });
});

// ============== SURFACE (LIGHT / DARK) ==============
const setSurface = (mode) => {
  document.body.dataset.bg = mode;
  localStorage.setItem('zone-surface', mode);
};

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');
  setSurface('light');
});

bg2.addEventListener('click', () => {
  bg2.classList.add('active');
  bg1.classList.remove('active');
  setSurface('dark');
});

// restore saved surface preference
(() => {
  const saved = localStorage.getItem('zone-surface');
  if (saved === 'dark') {
    setSurface('dark');
    bg2.classList.add('active');
    bg1.classList.remove('active');
  }
})();

// ============== LIKE / BOOKMARK INTERACTIONS ==============
likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    const countEl = btn.querySelector('.count');
    let count = parseInt(countEl.textContent.replace(/,/g, ''), 10);

    btn.classList.toggle('liked');
    if (btn.classList.contains('liked')) {
      icon.classList.remove('uil-heart');
      icon.classList.add('uil-heart', 'uil-heart-alt');
      icon.style.color = 'hsl(350, 80%, 60%)';
      count += 1;
    } else {
      icon.style.color = '';
      count -= 1;
    }
    countEl.textContent = count.toLocaleString();
  });
});

bookmarkButtons.forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('active'));
});

// ============== CREATE POST ==============
const focusComposer = () => createPostInput.focus();
createPostBtn?.addEventListener('click', focusComposer);
createPostBtn2?.addEventListener('click', focusComposer);
mobileCreateBtn?.addEventListener('click', focusComposer);

const buildFeedCard = (text) => {
  const card = document.createElement('article');
  card.className = 'feed neu-flat';
  card.innerHTML = `
    <div class="head">
      <div class="user">
        <div class="profile-photo"><img src="./images/profile-1.jpg"></div>
        <div class="info"><h3>Moses Odhiambo</h3><small class="text-muted">Just now</small></div>
      </div>
      <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
    </div>
    <div class="post-text">${text}</div>
    <div class="action-buttons">
      <div class="interaction-buttons">
        <span class="like-btn"><i class="uil uil-heart"></i><span class="count">0</span></span>
        <span><i class="uil uil-comment-dots"></i><span class="count">0</span></span>
        <span><i class="uil uil-share-alt"></i></span>
      </div>
      <div class="bookmark"><span><i class="uil uil-bookmark"></i></span></div>
    </div>
  `;
  return card;
};

const submitPost = () => {
  const text = createPostInput.value.trim();
  if (!text) { createPostInput.focus(); return; }
  const card = buildFeedCard(text);
  feedsContainer.prepend(card);
  card.querySelector('.like-btn').addEventListener('click', function () {
    const icon = this.querySelector('i');
    const countEl = this.querySelector('.count');
    let count = parseInt(countEl.textContent, 10);
    this.classList.toggle('liked');
    if (this.classList.contains('liked')) { icon.style.color = 'hsl(350, 80%, 60%)'; count += 1; }
    else { icon.style.color = ''; count -= 1; }
    countEl.textContent = count;
  });
  card.querySelector('.bookmark span').addEventListener('click', function () {
    this.classList.toggle('active');
  });
  createPostInput.value = '';
};

postSubmitBtn.addEventListener('click', submitPost);
createPostInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitPost();
});

// ============== CONNECTION REQUESTS ==============
requestButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.request');
    card.style.transition = 'opacity 300ms ease, transform 300ms ease';
    card.style.opacity = '0';
    card.style.transform = 'translateX(1rem)';
    setTimeout(() => card.remove(), 300);
  });
});

// Optional view-loading behavior for menu items that point to another page
const viewMenuItems = document.querySelectorAll('.menu-item[data-view]');
const mainContentContainer = document.querySelector('#main-content');

viewMenuItems.forEach((item) => {
  item.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!mainContentContainer) return;

    const pageToLoad = item.getAttribute('data-view');
    if (!pageToLoad) return;

    try {
      const response = await fetch(pageToLoad);
      const htmlContent = await response.text();
      mainContentContainer.innerHTML = htmlContent;
    } catch (error) {
      console.error('Error loading page:', error);
    }
  });
});