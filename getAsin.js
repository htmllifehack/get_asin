var link = document.querySelectorAll('.aok-inline-block.zg-item');

var a = [];

link.forEach(e => a.push(e.querySelector('a').getAttribute('href')));

var NAME = [];
var ASIN = [];

for(var i=0; i<a.length; i++){
    NAME.push(decodeURI(a[i].split('/')[1]));
    ASIN.push(a[i].split('/')[3]);
}
for(var i=0; i<ASIN.length; i++){
    document.write(NAME[i] + '<br>');
    document.write(ASIN[i] + '<br>');
}
