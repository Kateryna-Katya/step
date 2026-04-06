document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 12H12H18" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12.0078 6.00488L12.0078 12.0049L12.0078 18.0049" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        const minusIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 12H12H18" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});