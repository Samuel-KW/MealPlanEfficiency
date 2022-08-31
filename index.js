const create_table = (parent, values) => {
    const headers = Object.keys(itemList[0]);
    const elem_header = document.createElement('tr');
    for (let i = 0; i < headers.length; ++i) {
        const elem_child = document.createElement('th');
        elem_child.textContent = headers[i];
        elem_header.appendChild(elem_child);
    }
    parent.appendChild(elem_header);


    for (let i = 0; i < values.length; ++i) {
        const elem_parent = document.createElement('tr');
        
        for (let j = 0; j < headers.length; ++j) {

            const key = headers[j];
            const elem_value = document.createElement('td');
            elem_value.textContent = values[i][key];
            elem_parent.appendChild(elem_value);
        }
        parent.appendChild(elem_parent);
    }
};

class FoodItem {
    constructor (details={}) {
        this.name = details.name ?? 'Unknown’'
        this.cost = currency(details.cost);
        this.calories = details.calories ?? -1;
        this.proteins = details.proteins ?? -1;
        this.weight = details.weight ?? 1;
    }
}

const itemList = [
 
    new FoodItem({
        name: 'Turkey and Cheese Pita Sandwich',
        cost: 6.29
    }),
 
    new FoodItem({
        name: 'Roast Beef Onion Roll Sandwich',
        cost: 7.59,
        calories: 490
    }),
 
    new FoodItem({
        name: 'Lean Cuisine',
        cost: 4.29,
        calories: 300,
        proteins: 17
    }),
 
    new FoodItem({
        name: 'Summertime Fruit Cup',
        cost: 4.39
    }),
 
    new FoodItem({
        name: 'Ramen',
        cost: 0.69
    }),
 
    new FoodItem({
        name: 'Reese\'s Pieces Peanut Butter Cups',
        cost: 0.10,
        calories: 44
    }),
 
    new FoodItem({
        name: 'Amy\'s Bowl',
        cost: 7.89,
        calories: 44
    }),
 
    new FoodItem({
        name: 'General Tso\'s Tofu',
        cost: 8.19,
        proteins: 15
    }),
 
    new FoodItem({
        name: 'Chow Mein',
        cost: 2.29
    }),
 
    new FoodItem({
        name: 'Spicy Miso Ramen',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Teriyaki Noodle Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Hot and Sour Soup Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Kungpao Noodle Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Miso Soup Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Bowl Noodle Soup',
        cost: 2.19
    }),
 
    new FoodItem({
        name: 'Spicy Miso Ramen',
        cost: 5.99
    }),
 
    new FoodItem({
        name: 'Pastrami Reuben Onion Sandwich',
        cost: 7.59,
        calories: 470
    }),
 
    new FoodItem({
        name: 'Ham and Swiss Croissant',
        cost: 6.99
    }),
 
    new FoodItem({ // TODO Double check
        name: 'Ham Snack Kit',
        cost: 4.39
    }),
 
    new FoodItem({ // TODO Double check
        name: 'Chef Salad',
        cost: 7.69
    }),
];



class Allowance {
    constructor (budget, itemList) {
        this.budget = budget;
        this.itemList = itemList;
   
        this.purchases = [];
        this.money = this.budget;
    }
 
    fillKnapsack (iterations) {
        const [items, loss] = this.fillItemsRandom(this.money, iterations);

        this.purchases.push.apply(this.purchases, items);
        this.money = loss;
 
        return [this.purchases, this.money];
    }
 
    purchaseItem (item) {
        this.purchases.push(item);
        this.money = this.money.subtract(item.cost);
        return this.money;
    }
 
    purchaseItems (items) {
        for (let i = 0; i < items.length; ++i) {
            this.purchases.push(items[i]);
            this.money = this.money.subtract(items[i].cost);
        }
        return this.money;
    }
 
    purchaseItemsByName (names) {
        const items = names.map(name => this.findItemByName(name));
        return this.purchaseItems(items);
    }
 
    findItemByName (name) {
        return this.itemList.find(e => e.name === name);
    }
 
    findItemsWithName (name) {
        return this.itemList.find(e => e.name.contains(name));
    }
 
    itemsInBudget (budget) {
        return this.itemList.filter(e => e.cost.intValue <= budget.intValue);
    }
 
    randomInBudget (budget) {
        const items = this.itemsInBudget(budget);
        return items[Math.floor(Math.random() * items.length)];
    }
 
    totalCost (items) {
        return items.reduce((a, b) => a.add(b.cost), currency(0));
    }
 
    loss (budget, items) {
        const sum = this.totalCost(items);
        return budget.subtract(sum);
    }
 
    fillRandom (budget) {
 
        const purchases = [];
 
        let options = this.itemsInBudget(budget);
   
        do {
   
            const item = options[Math.floor(Math.random() * options.length)];
 
            purchases.push(item);
            budget = budget.subtract(item.cost);
 
            options = this.itemsInBudget(budget);
 
        } while (options.length > 0);
   
        return [purchases, budget];
       
    }
 
    fillItemsRandom (budget, iterations)  {
 
        let [items, minLoss] = this.fillRandom(budget);
   
        for (let i = 0; i < iterations; ++i) {
            const [purchases, loss] = this.fillRandom(budget);
 
            if ((loss.intValue == minLoss.intValue && items.length > purchases.length) || loss.intValue < minLoss.intValue) {
                minLoss = loss;
                items = purchases;
            }
        }
 
        return [items, minLoss];
    }
 
    // TODO Improve this horrible method
    fillItemsGreedy (budget) {
 
        let purchases = [];
   
        for (let i = 0; i < this.itemList.length; ++i) {
            const item = this.itemList[i];
            const amount = Math.floor(budget / item.cost);
   
            budget -= item.cost * amount;
            for (let j = 0; j < amount; ++j) purchases.push(i);
        }
   
        return purchases;
    };
}
 
const budget = currency(29.65);
const allowance = new Allowance(budget, itemList);
 
allowance.purchaseItemsByName([
    'Roast Beef Onion Roll Sandwich',
    'Summertime Fruit Cup'
]);
 
const [items, loss] = allowance.fillKnapsack(1000);
 
console.log(items.map(e => e.name));
console.log(loss.format());
 
const parent = document.getElementById('itemList');
parent.innerHTML = ''

create_table(parent, items);
 
 

