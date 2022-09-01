class FoodItem {
    constructor (details={}) {
        this.name = details.name ?? 'Unknown’'
        this.cost = currency(details.cost);
        this.calories = details.calories ?? -1;
        this.proteins = details.proteins ?? -1;
        this.weight = details.weight ?? 1;
    }
}

let itemList = [
 
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
        name: 'Cantaloupe Cup',
        cost: 4.39
    }),

    new FoodItem({
        name: 'Strawberries & Cream',
        cost: 4.39
    }),

    new FoodItem({
        name: 'Southwest Chicken Pasta Salad',
        cost: 4.39
    }),

    new FoodItem({
        name: 'Spicy Thai Noodle Salad',
        cost: 4.39
    }),

    new FoodItem({
        name: 'Caprese Pasta Salad',
        cost: 4.39
    }),

    new FoodItem({
        name: 'Summertime Fruit (Large)',
        cost: 9.19
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
        name: 'Chow Mein Teriyaki Beef',
        cost: 2.29,
        calories: 510,
        proteins: 10
    }),

    new FoodItem({
        name: 'Bowl Noodle Soup Chicken Flavor',
        cost: 2.19,
        calories: 390,
        proteins: 9
    }),
    
    new FoodItem({
        name: 'Tandoori Rice',
        cost: 4.99
    }),

    new FoodItem({
        name: 'Jasmine Rice',
        cost: 4.59
    }),

    new FoodItem({
        name: 'Spam',
        cost: 6.39
    }),

    new FoodItem({
        name: 'Whole Kernal Corn',
        cost: 2.79
    }),

    new FoodItem({
        name: 'Quinoa Quick Cup with Jalapeno & Roasted Pepper',
        cost: 5.69
    }),

    new FoodItem({
        name: 'White Rice Sticky',
        cost: 3.99
    }),

    new FoodItem({
        name: 'Eggs (6)',
        cost: 3.99
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

    new FoodItem({
        name: 'Cajun Pita Sandwich',
        calories: 790,
        proteins: 27,
        cost: 6.29
    }),

    new FoodItem({
        name: 'Yakisoba Noodles Chicken Flavor',
        calories: 510,
        proteins: 11,
        cost: 2.19
    }),

    new FoodItem({
        name: 'Grilled Caribbean Salad',
        cost: 7.69
    }),

    new FoodItem({
        name: 'Hawaiian Sweet Rolls',
        cost: 2.39
    }),

    new FoodItem({
        name: 'Monterey Jack Cheese',
        cost: 5.99
    }),

    new FoodItem({
<<<<<<< HEAD
        name: 'Mexican Cheese',
=======
        name: 'Mexican Cheesee',
>>>>>>> 365b2c3569a47bffebbbfff0e08c77246809a11e
        cost: 5.99
    }),

    new FoodItem({
        name: 'Sharp Chedar Cheese',
        cost: 5.99
    }),

    new FoodItem({
        name: 'Dole Fruit Cups',
        cost: 2.49
    }),

    new FoodItem({ // TODO Triple check
        name: 'Chef Salad',
        cost: 7.69
    }),

    new FoodItem({ // TODO Double check
        name: 'Fried Chicken Salad',
        cost: 7.69
    }),
 
    new FoodItem({ // TODO Double check
        name: 'Ham Snack Kit',
        cost: 4.39
    }),
 
    
];

itemList = itemList.sort((a, b) => b.cost.intValue - a.cost.intValue);
