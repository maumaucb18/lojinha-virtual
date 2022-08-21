


const items = [
  {
    id: 0,
    nome: 'camiseta',
    img: 'camiseta.png',
    quantidade: '0'
  },
  {
    id: 1,
    nome: 'saia',
    img: 'camiseta.png',
    quantidade: '0'
  },
  {
    id: 2,
    nome: 'sapato',
    img: 'camiseta.png',
    quantidade: '0'
  }
]

inicializarloja = () => {
  var conteinerProdutos = document.getElementById('produtos')
  items.map(val => {
    conteinerProdutos.innerHTML +=
      `
  <div class="produto-single">

    <img src="` +
      val.img +
      `"/>

    <p>` +
      val.nome +
      `</p>

    <a key="` +
      val.id +
      `" href="#">Adicionar ao Carrinho</a>

  </div>
  `
  })
}
inicializarloja()

atualizarCarrinho = () => {
  var conteinerCarrinho = document.getElementById('carrinho')
  conteinerCarrinho.innerHTML = ''
  items.map(val => {
    if (val.quantidade > 0) 
    {
      conteinerCarrinho.innerHTML +=`
      <div class="info-single-checkout">
        <p style="float: left;"> Produto : ` +val.nome+` </p>
        <p style="float: right;"> Quantidade : `+val.quantidade +`</p> 
        <div style="clear:both;"></div>
     
      </div>
      `;
    }
  })
}

var links = document.getElementsByTagName('a') //trocar tagname por class para criar uma maior variedade de produtos.
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    items[key].quantidade++
    atualizarCarrinho()
    return false
  })
}
atualizarCarrinho()
