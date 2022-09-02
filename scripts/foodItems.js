class FoodItem {
    constructor (details={}) {
        this.name = details.name ?? 'Unknown';
        this.tags = details.tags ?? [];
        this.cost = currency(details.cost);
        this.calories = details.calories ?? -1;
        this.proteins = details.proteins ?? -1;
        this.weight = details.weight ?? 1;
    }
}

let itemList = [
 
    new FoodItem({
        tags: ['easy', 'fruit'],
        name: 'Fruit',
        cost: 0.99
    }),

    new FoodItem({
        tags: ['easy', 'meal'],
        name: 'Turkey and Cheese Pita Sandwich',
        cost: 6.29
    }),
 
    new FoodItem({
        tags: ['easy', 'meal'],
        name: 'Roast Beef Onion Roll Sandwich',
        cost: 7.59,
        calories: 490
    }),
 
    new FoodItem({
        tags: ['easy', 'microwavable', 'meal'],
        name: 'Lean Cuisine',
        cost: 4.29,
        calories: 300,
        proteins: 17
    }),
 
    new FoodItem({
        tags: ['easy', 'fruit'],
        name: 'Summertime Fruit Cup',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'fruit'],
        name: 'Cantaloupe Cup',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'fruit'],
        name: 'Strawberries & Cream',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'fruit'],
        name: 'Summertime Fruit (Large)',
        cost: 9.19
    }),
 
    new FoodItem({
        tags: ['microwave', 'meal', 'cheap', 'soup'],
        name: 'Ramen',
        cost: 0.69
    }),
 
    new FoodItem({
        tags: ['cheap', 'candy', 'easy'],
        name: 'Reese\'s Pieces Peanut Butter Cups',
        cost: 0.10,
        calories: 44
    }),
 
    new FoodItem({
        tags: ['meal', 'microwave'],
        name: 'Amy\'s Bowl',
        cost: 7.89,
        calories: 44
    }),
 
    new FoodItem({
        tags: ['meal', 'microwave'],
        name: 'General Tso\'s Tofu',
        cost: 8.19,
        proteins: 15
    }),
 
    new FoodItem({
        tags: ['meal', 'cheap', 'microwave', 'soup'],
        name: 'Chow Mein Teriyaki Beef',
        cost: 2.29,
        calories: 510,
        proteins: 10
    }),

    new FoodItem({
        tags: ['meal', 'cheap', 'microwave', 'soup'],
        name: 'Bowl Noodle Soup Chicken Flavor',
        cost: 2.19,
        calories: 390,
        proteins: 9
    }),
    
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Spicy Miso Ramen',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Teriyaki Noodle Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Hot and Sour Soup Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Kungpao Noodle Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Miso Soup Bowl',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal', 'cheap'],
        name: 'Bowl Noodle Soup',
        cost: 2.19
    }),
 
    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal'],
        name: 'Spicy Miso Ramen',
        cost: 5.99
    }),
 
    new FoodItem({
        tags: ['easy', 'meal', 'sandwich'],
        name: 'Pastrami Reuben Onion Sandwich',
        cost: 7.59,
        calories: 470
    }),
 
    new FoodItem({
        tags: ['easy', 'meal', 'sandwich'],
        name: 'Ham and Swiss Croissant',
        cost: 6.99
    }),

    new FoodItem({
        tags: ['easy', 'meal', 'sandwich'],
        name: 'Cajun Pita Sandwich',
        calories: 790,
        proteins: 27,
        cost: 6.29
    }),

    new FoodItem({
        tags: ['easy', 'microwave', 'soup', 'meal', 'cheap'],
        name: 'Yakisoba Noodles Chicken Flavor',
        calories: 510,
        proteins: 11,
        cost: 2.19
    }),

    new FoodItem({
        tags: ['fruit', 'easy', 'cheap'],
        name: 'Dole Fruit Cups',
        cost: 2.49
    }),


    /*
    new FoodItem({
        tags: ['ingredient', 'rice'],
        name: 'Tandoori Rice',
        cost: 4.99
    }),

    new FoodItem({
        tags: ['ingredient', 'rice'],
        name: 'Jasmine Rice',
        cost: 4.59
    }),

    new FoodItem({
        tags: ['ingredient', 'meat'],
        name: 'Spam',
        cost: 6.39
    }),

    new FoodItem({
        tags: ['ingredient', 'corn'],
        name: 'Whole Kernal Corn',
        cost: 2.79
    }),

    new FoodItem({
        tags: ['easy', 'meal'],
        name: 'Quinoa Quick Cup with Jalapeno & Roasted Pepper',
        calories: 220,
        proteins: 6,
        cost: 5.69
    }),

    new FoodItem({
        tags: ['ingredient', 'rice'],
        name: 'White Rice Sticky',
        cost: 3.99
    }),

    new FoodItem({
        tags: ['ingredient', 'egg'],
        name: 'Eggs (6)',
        cost: 3.99
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'],
        name: 'Grilled Caribbean Salad',
        cost: 7.69
    }),

    new FoodItem({
        tags: ['ingredient', 'bread'],
        name: 'Hawaiian Sweet Rolls',
        cost: 2.39
    }),

    new FoodItem({
        tags: ['ingredient', 'cheese'],
        name: 'Monterey Jack Cheese',
        cost: 5.99
    }),

    new FoodItem({
        tags: ['ingredient', 'cheese'],
        name: 'Mexican Cheese',
        cost: 5.99
    }),

    new FoodItem({
        tags: ['ingredient', 'cheese'],
        name: 'Sharp Chedar Cheese',
        cost: 5.99
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'],
        name: 'Southwest Chicken Pasta Salad',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'],
        name: 'Spicy Thai Noodle Salad',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'],
        name: 'Caprese Pasta Salad',
        cost: 4.39
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'], // TODO Triple check
        name: 'Chef Salad',
        cost: 7.69
    }),

    new FoodItem({
        tags: ['easy', 'salad', 'meal'], // TODO Double check
        name: 'Fried Chicken Salad',
        cost: 7.69
    }),
 
    new FoodItem({
        tags: ['easy', 'snack'], // TODO Double check
        name: 'Ham Snack Kit',
        cost: 4.39
    }),
    */
    
];

itemList = itemList.sort((a, b) => b.cost.intValue - a.cost.intValue);
