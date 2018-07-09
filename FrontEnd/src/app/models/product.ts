export class Product {
  
  constructor (id = null, name = '', price = null, stock = null)
  {
    this.id= id;
    this.name=name;
    this.price= price;
    this.stock= stock;
    
  }

  public id: number;
  public name: string;
  public price: number;
  public stock: number;
  
}
