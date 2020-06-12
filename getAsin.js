let link = document.querySelectorAll('.aok-inline-block.zg-item');

let a = [];

link.forEach(e => a.push(e.querySelector('a').getAttribute('href')));

let item = [];
let asin = [];

for(let i=0; i<a.length; i++){
    item.push(decodeURI(a[i].split('/')[1]));
    asin.push(a[i].split('/')[3]);
}
for(let i=0; i<asin.length; i++){
    document.write(item[i] + '<br>');
    document.write(asin[i] + '<br>');
}
