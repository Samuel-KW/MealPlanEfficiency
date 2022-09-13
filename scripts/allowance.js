class Allowance {
    constructor (budget, itemList, preferences) {
        this.budget = budget;
        this.itemList = itemList;
        this.preferences = preferences;
   
        this.purchases = [];
        this.money = this.budget;
    }
 
    calculateScore(items, loss) {

        let score = 0;

        // Add loss to price

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
        const items = names.map(name => this.findItemByName(name)).filter(e => e !== undefined);
        return this.purchaseItems(items);
    }
 
    findItemByName (name) {
        return this.itemList.find(e => e.name === name);
    }
 
    findItemsWithName (name) {
        return this.itemList.find(e => e.name.contains(name));
    }
 
    itemsInBudget (budget) {
        return this.itemList.filter(e => e.cost.intValue <= budget.intValue) || [];
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
 
        // Filter based on preferences
        let options = this.itemsInBudget(budget);
        options = options.filter(item => preferences.filter(item));

        if (options.length < 1) return [purchases, budget];

        do {
   
            const item = options[Math.floor(Math.random() * options.length)];
 
            purchases.push(item);
            budget = budget.subtract(item.cost);
 
            options = this.itemsInBudget(budget);
            options = options.filter(item => preferences.filter(item));
 
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