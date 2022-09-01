const createTable = (parent, values) => {
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

const updateUI = (options={}) => {
    options.allowance && (document.getElementById('allowance').value = options.allowance);
    options.money && (document.getElementById('money').value = options.money);
    options.loss && (document.getElementById('loss').textContent = options.loss);
    options.iterations && (document.getElementById('iterations').value = options.iterations);
    options.calcTime && (document.getElementById('calcTime').textContent = options.calcTime);
};

const runAlgorithm = () => {

};
 


document.getElementById('run').addEventListener('click', () => {

    const budget = currency(document.getElementById('money').value);
    const iterations = Number(document.getElementById('iterations').value);
    const allowance = new Allowance(budget, itemList);
    
    const requiredFoods = document.getElementById('requiredFoods');
    
    let requiredFoodList = requiredFoods.value.trim();
    if (requiredFoods.value) {
        requiredFoodList = requiredFoodList.split('\n').map(e => e.trim()).filter(e => e);
        allowance.purchaseItemsByName(requiredFoodList);
    }

    
    // Evaluate efficiency of calculating purchases
    const start = window.performance.now();
    let [items, loss] = allowance.fillKnapsack(iterations);
    const end = window.performance.now();

    // Sort items from most expensive to cheapest
    items = items.sort((a, b) => b.cost.intValue - a.cost.intValue);

    //console.log(items.map(e => e.name));
    //console.log(loss.format());

    const elem_purchases = document.getElementById('itemList');
    elem_purchases.innerHTML = '';
    createTable(elem_purchases, items);
    

    updateUI({
        money: budget.format({ symbol: ''}),
        loss: loss.format({ symbol: ''}),
        calcTime: end - start
    });

});

createTable(document.getElementById('storeItemList'), itemList);


