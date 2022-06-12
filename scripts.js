let prato;
let bebida;
let sobremesa;

function prato1(elemento){
    elemento.classList.add('selected');
    document.getElementById('c11').classList.remove('off');
    document.getElementById('b12').classList.remove('selected');
    document.getElementById('c12').classList.add('off');
    document.getElementById('b13').classList.remove('selected');
    document.getElementById('c13').classList.add('off');
    produto = "Risotto Montevero";
}

function prato2(elemento){
    elemento.classList.add('selected');
    document.getElementById('c12').classList.remove('off');
    document.getElementById('b11').classList.remove('selected');
    document.getElementById('c11').classList.add('off');
    document.getElementById('b13').classList.remove('selected');
    document.getElementById('c13').classList.add('off');
    produto = "Risotto Gripiccio";
}

function prato3(elemento){
    elemento.classList.add('selected');
    document.getElementById('c13').classList.remove('off');
    document.getElementById('b12').classList.remove('selected');
    document.getElementById('c12').classList.add('off');
    document.getElementById('b11').classList.remove('selected');
    document.getElementById('c11').classList.add('off');
    produto = "Risotto Ceuix";
}

function bebida1(elemento){
    elemento.classList.add('selected');
    document.getElementById('c21').classList.remove('off');
    document.getElementById('b22').classList.remove('selected');
    document.getElementById('c22').classList.add('off');
    document.getElementById('b23').classList.remove('selected');
    document.getElementById('c23').classList.add('off');
    bebida = "Soda Italiana";
}

function bebida2(elemento){
    elemento.classList.add('selected');
    document.getElementById('c22').classList.remove('off');
    document.getElementById('b21').classList.remove('selected');
    document.getElementById('c21').classList.add('off');
    document.getElementById('b23').classList.remove('selected');
    document.getElementById('c23').classList.add('off');
    bebida = "Água Perrier";
}

function bebida3(elemento){
    elemento.classList.add('selected');
    document.getElementById('c23').classList.remove('off');
    document.getElementById('b22').classList.remove('selected');
    document.getElementById('c22').classList.add('off');
    document.getElementById('b21').classList.remove('selected');
    document.getElementById('c21').classList.add('off');
    bebida = "Refrigerante Coca-Cola";
}

function sobremesa1(elemento){
    elemento.classList.add('selected');
    document.getElementById('c31').classList.remove('off');
    document.getElementById('b32').classList.remove('selected');
    document.getElementById('c32').classList.add('off');
    document.getElementById('b33').classList.remove('selected');
    document.getElementById('c33').classList.add('off');
    sobremesa = "Salada de Frutas";
}

function sobremesa2(elemento){
    elemento.classList.add('selected');
    document.getElementById('c32').classList.remove('off');
    document.getElementById('b31').classList.remove('selected');
    document.getElementById('c31').classList.add('off');
    document.getElementById('b33').classList.remove('selected');
    document.getElementById('c33').classList.add('off');
    sobremesa = "Petit Gateau Maison";
}

function sobremesa3(elemento){
    elemento.classList.add('selected');
    document.getElementById('c33').classList.remove('off');
    document.getElementById('b32').classList.remove('selected');
    document.getElementById('c32').classList.add('off');
    document.getElementById('b31').classList.remove('selected');
    document.getElementById('c31').classList.add('off');
    sobremesa = "Cheesecake de Frutas Vermelhas";
}