'use scrict'

class ProductsList {
  constructor(container = '.products'){
      this.container = container;
      this.goods = [];
      this.allProducts = [];
      this._fetchProducts();
  }
  
    _fetchProducts() {
      this.goods = [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 200},
        {id: 4, title: 'Gamepad', price: 50},
        {id: 5, title: 'Monoblock', price: 2500},
        {id: 6, title: 'Storage media', price: 500},
        {id: 7, title: 'Web camera', price: 1500},
        {id: 8, title: 'Servers', price: 2500}
      ];
    }
  
    render() {
      const block = document.querySelector(this.container);
  
      for (let product of this.goods) {
        const productObject = new ProductItem(product);
  
        this.allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
      }
    }

    getSum() {
      /*  let sum = 0;    РЕШЕНИЕ ТОЖЕ ВЕРНОЕ
        for (let product of this.goods){
            sum += product.price;
        }*/

      /*  reduct используется для последовательной обработки каждого 
            элемента массива с сохранением промежуточного результата*/
        let res = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        alert(res);    
    }
  }

class ProductItem {
    constructor(product, img = 'img/products.jpg') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    render() {
      return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="image" class="product-img">
                    <h3 class="title">${this.title}</h3>
                    <p class="price">${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
            </div>`;
    }
  }

  let list = new ProductsList();
  list.render();
  list.getSum();  

/* ПРОДУКТ В КОРЗИНЕ*/

class CartItem  extends ProductItem { 
  constructor(product, img = 'img/products.jpg', count = 1){
    super(product, img) /* берем данные из класса ProductItem*/
    this.count = count;
    this.sum = count * product.price;
  }
    
    render(){
        
    }
}

/*КОРЗИНА*/

class Cart {
    
  addGoods() { /*Метод добавляет элемент в корзину*/
        
  }

  removeGoods(){ /*Метод удаляет элемент из корзины*/
        
  }
  
  changeGoods() { /*Метод меняет элемент в корзине*/

  }

  totalCart() { /* Когда user изменяет любые значения,
     вызывающие общее изменение, можно вызвать метод updateTotal()  */
       
  }

  render() { /* Метод выводит корзину товаров */

   }

}

