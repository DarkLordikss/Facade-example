class Facade {
    protected subsystem: Subsystem;

    constructor(subsystem: Subsystem) {
        this.subsystem = subsystem || new Subsystem();
    }

    public orderPizza(pizza: string, address: string) {
        let result = `Ordered pizza: ${pizza}\n`;
        if (this.subsystem.checkPizza(pizza) === true) {
            result += this.subsystem.trasferOrder();
            result += this.subsystem.orderIngridients(pizza);
            result += this.subsystem.cookPizza();
            result += this.subsystem.pizzaIsReady();
            result += this.subsystem.deliveryPizza(address);
            return result;
        } else {
            result += "Sorry, we don't have this pizza now\n";
            return result;
        }
        
    }
}

class Subsystem {
    protected supportedPizza = {
        margaritta: ["pizza dough", "tomato sauce", "mozzarella cheese", "green basil leaves", "olive oil"],
        starman: ["pepperoni sausages", "pizza dough", "tomato sauce", "mozzarella cheese", "french fries", "dried olives", "oregano"]
        };

    public checkPizza(pizza: string): boolean {
        if (pizza in this.supportedPizza) {
            return true;
        } else {
            return false;
        }
    }

    public trasferOrder(): string {
        const res: string = "Transfering order to kitchen...\n";
        return res;
    }

    public orderIngridients(pizza: string): string {
        const res: string = `Ordered ingridients: ${this.supportedPizza[pizza].toString()}\n`;
        return res;
    }

    public cookPizza(): string {
        const res: string = "Cooking pizza...\n";
        return res;
    }

    public pizzaIsReady(): string {
        const res: string = "Your pizza is ready!\n";
        return res;
    }

    public deliveryPizza(adress: string): string {
        const res: string = `Delivering pizza to ${adress}\n`;
        return res;
    }
}


function order(pizza: string, address: string) {
    console.log(facade.orderPizza(pizza, address));
}


const subsystem = new Subsystem();
const facade = new Facade(subsystem);
order("starman", "some address");