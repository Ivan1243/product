class Product {
    constructor(name, count){
        this.name = name;
        this.count = count;
    }
    sell(count){
        if (this.count < count){
            console.log("Нет в наличии");
        }
        else{
            this.count -= count
            console.log("Товар " + this.name + " продан в количестве " + count.toString());
            console.log("Оставшееся количество " + this.count.toString());
        }            
    }
}
products = [new Product("apples", 10), new Product("pears", 12)];
console.log(products[1]);
