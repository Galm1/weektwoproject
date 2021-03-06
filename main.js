// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it


console.log(data);

// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let average = 0;
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price;
  }
  average = total / data.length;
  return average;
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let itemsinrange = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00)
      itemsinrange.push(data[i])
  }
  return itemsinrange
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let GBP_currency = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP")
      GBP_currency.push(data[i].title, data[i].price)
  }
  return GBP_currency
}

// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let items_made_of_wood = []
  for (let i = 0; i < data.length; i++) {
    for (let m = 0; m < data[i].materials.length; m++) {
      if (data[i].materials[m] === "wood") {
        items_made_of_wood.push(data[i]);
      }
    }
  }
  console.log(items_made_of_wood);
  return items_made_of_wood;
}



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  data.forEach(function(item) {
    let numOfMaterials = item.materials.length;
    if (numOfMaterials >= 8) {
      console.log(item.title + ' has ' + numOfMaterials + ' materials');
      item.materials.forEach(function(material) {
        console.log('- ' + material);
      });
    }
  });
}



// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let total = 0;
  data.forEach(function(item) {
    if (item.who_made === 'i_did')
      total++;
  });
}
