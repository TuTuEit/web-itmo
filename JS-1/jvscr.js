let str="Hey, Pepe"
document.write(str, '<br>');
function WordCount(str) { 
  return str.split(" ").length;
}

document.write('Количество слов: ', WordCount(str), '<br>');
document.write('Количество букв: ', str.length, '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Имя протокола: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');

let param = window.location.search.replace( '?', '');
document.write('Подстрока параметров: ', param,'<br>');



let anc = 'Anchor';
document.write('Анкор: ', anc.anchor('ban'), '<br>');
document.write('Анкор 2: ', anc.anchor('ban2'), '<br>');

document.write('<a href="https://en.wikipedia.org/wiki/Main_Page">wikipedia</a><br>')
document.write('<a href="https://en.wikipedia.org/wiki/Pepe_the_Frog" target="_blank" id="Goodomens">Лягушка</a><br>')

document.write('<img src="https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg" style="width: 30%" id="new"><br>')
document.write('<img src="https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg" style="width: 50%" id="new"><br>')
document.write('Количество анкоров: ', document.anchors.length,'<br>');
document.write('Количество ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Количество картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');

const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');


document.write('id первой ссылки: ', document.links[0].id,'<br>');
document.write('Название документа: ', document.title,'<br>');

for(i=0; i<10; i++){
  document.write('<form id="',i,'">')
  document.write('<input type="button" class="ban" value="Показать имя формы" onClick="alert(\'Показать имя формы\')"></input>')
  document.write('<input type="button" value="Поле1" onClick="alert(\'Нажми ок\')"></input>')
  document.write('<input type="button" value="Поле2"></input>')
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')"></input>')	
  document.write('<input type="button" value="Показать количество полей" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
  document.write('</form>')
}
for(i=0; i<10; i+=2){
  document.write(document.forms[i].id, ', ')
}
document.write('<form id="1"><input type="reset" value="Сбросить"></input><input type="text" placeholder="Введите что-нибудь"></input></form>')

