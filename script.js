let openTabs = [];
let closedTabs = [];
let history = [];
let recovered = 0;

const byId = (id) => document.getElementById(id);

function renderList(id, items, prefix = '') {
  const list = byId(id);
  list.replaceChildren();

  items.forEach((item) => {
    const li = document.createElement('li');
    // Use textContent rather than HTML parsing so entered URLs are displayed as text.
    li.textContent = `${prefix}${item}`;
    list.appendChild(li);
  });
}

function render() {
  renderList('openList', openTabs.slice().reverse(), '📄 ');
  renderList('closedList', closedTabs.slice().reverse(), '🗑 ');
  renderList('historyList', history.slice().reverse());

  byId('statOpen').textContent = openTabs.length;
  byId('statClosed').textContent = closedTabs.length;
  byId('statRecovered').textContent = recovered;
}

function openTab() {
  const input = byId('url');
  const value = input.value.trim();
  if (!value) return alert('Enter URL');

  openTabs.push(value);
  history.push(`Opened: ${value}`);
  input.value = '';
  render();
}

function closeTab() {
  if (!openTabs.length) return alert('No open tabs');

  const tab = openTabs.pop();
  closedTabs.push(tab);
  history.push(`Closed: ${tab}`);
  render();
}

function recoverTab() {
  if (!closedTabs.length) return alert('No closed tabs');

  const tab = closedTabs.pop();
  openTabs.push(tab);
  history.push(`Recovered: ${tab}`);
  recovered++;
  render();
}

function saveSession() {
  try {
    localStorage.setItem('browserSession', JSON.stringify({ openTabs, closedTabs, history, recovered }));
    alert('Session Saved');
  } catch (error) {
    alert('Unable to save session in this browser.');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem('browserSession');
    if (saved) {
      const data = JSON.parse(saved);
      openTabs = Array.isArray(data.openTabs) ? data.openTabs : [];
      closedTabs = Array.isArray(data.closedTabs) ? data.closedTabs : [];
      history = Array.isArray(data.history) ? data.history : [];
      recovered = Number.isFinite(data.recovered) ? data.recovered : 0;
    }
  } catch (error) {
    // Start with an empty session if stored data is invalid or unavailable.
    openTabs = [];
    closedTabs = [];
    history = [];
    recovered = 0;
  }
  render();
});
