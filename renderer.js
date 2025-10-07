const HOME_URL = 'https://cake.8bit.ca';

const tabBar = document.getElementById('tab-bar');
const tabsContainer = document.getElementById('tabs');
const newTabButton = document.getElementById('new-tab');

function createTab(url = HOME_URL) {
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.classList.add('tab-frame');
  tabsContainer.innerHTML = '';
  tabsContainer.appendChild(iframe);
}

newTabButton.addEventListener('click', () => createTab());
createTab();
