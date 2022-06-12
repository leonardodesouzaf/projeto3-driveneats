let prato;
let bebida;
let sobremesa;

function prato1(elemento){
    elemento.classList.add('selected');
    document.getElementById('b12').classList.remove('selected');
    document.getElementById('b13').classList.remove('selected');
    produto = "Risotto Montevero";
}

function prato2(elemento){
    elemento.classList.add('selected');
    document.getElementById('b11').classList.remove('selected');
    document.getElementById('b13').classList.remove('selected');
    produto = "Risotto Gripiccio";
}

function prato3(elemento){
    elemento.classList.add('selected');
    document.getElementById('b12').classList.remove('selected');
    document.getElementById('b11').classList.remove('selected');
    produto = "Risotto Ceuix";
}

function bebida1(elemento){
    elemento.classList.add('selected');
    document.getElementById('b22').classList.remove('selected');
    document.getElementById('b23').classList.remove('selected');
    bebida = "Soda Italiana";
}

function bebida2(elemento){
    elemento.classList.add('selected');
    document.getElementById('b21').classList.remove('selected');
    document.getElementById('b23').classList.remove('selected');
    bebida = "Água Perrier";
}

function bebida3(elemento){
    elemento.classList.add('selected');
    document.getElementById('b22').classList.remove('selected');
    document.getElementById('b21').classList.remove('selected');
    bebida = "Refrigerante Coca-Cola";
}

function sobremesa1(elemento){
    elemento.classList.add('selected');
    document.getElementById('b32').classList.remove('selected');
    document.getElementById('b33').classList.remove('selected');
    sobremesa = "Salada de Frutas";
}

function sobremesa2(elemento){
    elemento.classList.add('selected');
    document.getElementById('b31').classList.remove('selected');
    document.getElementById('b33').classList.remove('selected');
    sobremesa = "Petit Gateau Maison";
}

function sobremesa3(elemento){
    elemento.classList.add('selected');
    document.getElementById('b32').classList.remove('selected');
    document.getElementById('b31').classList.remove('selected');
    sobremesa = "Cheesecake de Frutas Vermelhas";
}