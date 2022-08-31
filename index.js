const currency = require('currency.js');

const fnGreedy = budget => {

    let purchases = [];

    for (let i = 0; i < itemList.length; ++i) {
        const item = itemList[i];
        const amount = Math.floor(budget / item.cost);

        budget -= item.cost * amount; 
        for (let j = 0; j < amount; ++j) purchases.push(i);
    }

    return purchases;

};

const fnRandom = budget => {

    let purchases = [];

    while (true) {

        const items = itemsInBudget(budget);
        console.log(items);
        return [1];

        if (items.length === 0) return purchases;
        
        const index = Math.floor(Math.random() * items.length);
        budget -= items[index].cost;

        if (budget <= 0) return purchases;
        purchases.push(index);
    } 
};

const fnLoss = (budget, items) => {
    const sum = items.reduce((a, b) => a + itemList[b].cost, 0);
    return budget - sum;
};

class Knapsack {
    constructor (itemList=[]) {
        this.itemList = itemList;
    }

    itemsInBudget (budget) {
        return itemList.filter(e => e.cost.intValue <= budget.intValue);
    }

    randomInBudget (budget) {
        const items = this.itemsInBudget(budget);
        return items[Math.floor(Math.random() * items.length)];
    }

    totalCost (items) {
        return items.reduce((a, b) => a.add(itemList[b].cost), currency(0));
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

    findOptimal (budget, iterations)  {

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
}

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


const budget = currency(29.95);
const kp = new Knapsack(itemList);

const [items, loss] = kp.findOptimal(budget, 1000);
console.log(items.map(e => e.name));
console.log(loss.format());



