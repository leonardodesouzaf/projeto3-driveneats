let prato;
let bebida;
let sobremesa;
let valor1;
let valor2;
let valor3;

function prato1(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c11').classList.remove('off');
    document.querySelector('.b12').classList.remove('selected');
    document.querySelector('.c12').classList.add('off');
    document.querySelector('.b13').classList.remove('selected');
    document.querySelector('.c13').classList.add('off');
    prato = "Risotto Montevero";
    valor1 = 49.90;
    button();
}

function prato2(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c12').classList.remove('off');
    document.querySelector('.b11').classList.remove('selected');
    document.querySelector('.c11').classList.add('off');
    document.querySelector('.b13').classList.remove('selected');
    document.querySelector('.c13').classList.add('off');
    prato = "Risotto Gripiccio";
    valor1 = 44.90;
    button();
}

function prato3(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c13').classList.remove('off');
    document.querySelector('.b12').classList.remove('selected');
    document.querySelector('.c12').classList.add('off');
    document.querySelector('.b11').classList.remove('selected');
    document.querySelector('.c11').classList.add('off');
    prato = "Risotto Ceuix";
    valor1 = 59.90;
    button();
}

function bebida1(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c21').classList.remove('off');
    document.querySelector('.b22').classList.remove('selected');
    document.querySelector('.c22').classList.add('off');
    document.querySelector('.b23').classList.remove('selected');
    document.querySelector('.c23').classList.add('off');
    bebida = "Soda Italiana";
    valor2 = 19.90;
    button();
}

function bebida2(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c22').classList.remove('off');
    document.querySelector('.b21').classList.remove('selected');
    document.querySelector('.c21').classList.add('off');
    document.querySelector('.b23').classList.remove('selected');
    document.querySelector('.c23').classList.add('off');
    bebida = "Água Perrier";
    valor2 = 14.90;
    button();
}

function bebida3(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c23').classList.remove('off');
    document.querySelector('.b22').classList.remove('selected');
    document.querySelector('.c22').classList.add('off');
    document.querySelector('.b21').classList.remove('selected');
    document.querySelector('.c21').classList.add('off');
    bebida = "Refrigerante Coca-Cola";
    valor2 = 12.90;
    button();
}

function sobremesa1(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c31').classList.remove('off');
    document.querySelector('.b32').classList.remove('selected');
    document.querySelector('.c32').classList.add('off');
    document.querySelector('.b33').classList.remove('selected');
    document.querySelector('.c33').classList.add('off');
    sobremesa = "Salada de Frutas";
    valor3 = 14.90;
    button();
}

function sobremesa2(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c32').classList.remove('off');
    document.querySelector('.b31').classList.remove('selected');
    document.querySelector('.c31').classList.add('off');
    document.querySelector('.b33').classList.remove('selected');
    document.querySelector('.c33').classList.add('off');
    sobremesa = "Petit Gateau Maison";
    valor3 = 24.90;
    button();
}

function sobremesa3(elemento){
    elemento.classList.add('selected');
    document.querySelector('.c33').classList.remove('off');
    document.querySelector('.b32').classList.remove('selected');
    document.querySelector('.c32').classList.add('off');
    document.querySelector('.b31').classList.remove('selected');
    document.querySelector('.c31').classList.add('off');
    sobremesa = "Cheesecake de Frutas Vermelhas";
    valor3 = 22.90;
    button();
}

function button(){
    if (prato!=undefined && bebida!=undefined && sobremesa!=undefined){
        document.querySelector('.greenbutton').classList.remove('off');
    }
}


function order() {
    let nome = prompt('Qual seu nome?');
    let endereco = prompt('Qual seu endereço?');
    let mensagem =`Olá, gostaria de fazer o pedido: \n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R\$ ${(valor1+valor2+valor3).toFixed(2)}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    window.open("http://wa.me/+5531999999999?text=" + encodeURIComponent(mensagem));
  }