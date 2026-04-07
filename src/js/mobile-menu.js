document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_7319_3235)">
    <path d="M13.5 18H34.5M13.5 24H34.5M13.5 30H34.5" stroke="#1D1D1D" stroke-width="1.75" />
  </g>
  <defs>
    <clipPath id="clip0_7319_3235">
      <rect width="48" height="48" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;
  
    const crossIcon = `
<svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6654 31.6666L8.33203 29.3333L17.6654 19.9999L8.33203 10.6666L10.6654 8.33325L19.9987 17.6666L29.332 8.33325L31.6654 10.6666L22.332 19.9999L31.6654 29.3333L29.332 31.6666L19.9987 22.3333L10.6654 31.6666Z" fill="#161212" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });