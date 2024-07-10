'use strict';

{
  const open = document.getElementById('open');
  const uramenu = document.querySelector('.uramenu');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    uramenu.classList.add('hyouji'); //openをクリックした時、.uramenu.hyoujiを実行
    open.classList.add('hihyouji'); //openをクリックした時、#open.hihyoujiを実行
  });
  
  close.addEventListener('click', () => {
    uramenu.classList.remove('hyouji'); //closeをクリックした時、.uramenu.hyoujiの設定を解除
    open.classList.remove('hihyouji'); //closeをクリックした時、#open.hihyoujiの設定を解除
  });
}