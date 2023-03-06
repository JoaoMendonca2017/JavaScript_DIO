/*
Condição de Pagamento:

1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta * (90 / 100));
}
else if (formaDePagamento === 2) {
    console.log(precoEtiqueta * (85 / 100));
}
else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}
else  {
    console.log(precoEtiqueta + (precoEtiqueta * (10 / 100)));
}
    
