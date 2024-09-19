const mediaQuery2 = window.matchMedia('(max-width: 1100px)')
{
  const element_main = document.getElementById('burger__main')
  
  const burger_hidden = () => {
      element_main.setAttribute('style', 'visibility:hidden;')
  }

  const burger_visible = () => {
      element_main.setAttribute('style', 'visibility:visible;')
  }


  if (mediaQuery2.matches) {
      const burger__main = document.querySelector('#burger__main');
      burger__main.addEventListener('click', burger_hidden);

      const burger__add = document.querySelector('#burger__add');
      burger__add.addEventListener('click', burger_visible);
  }
}