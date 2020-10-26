const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  body: document.querySelector('body'),
  switchInput: document.querySelector('.theme-switch__toggle'),
};

document.addEventListener('DOMContentLoaded', () => {
  const getItemKeyThem = localStorage.getItem('keyTheme');
  if (!getItemKeyThem) {
    refs.body.classList.add(Theme.LIGHT);
    // refs.switchInput.checked = false;
  } else {
    refs.body.classList.add(getItemKeyThem);
    refs.switchInput.checked = Theme.LIGHT !== getItemKeyThem;
  }
  refs.switchInput.addEventListener('change', () => {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem('keyTheme', Theme.DARK);
    } else if (refs.body.classList.contains(Theme.DARK)) {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('keyTheme', Theme.LIGHT);
    }
  });
});
