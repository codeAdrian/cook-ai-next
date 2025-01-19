export const ingredientsSuggesions = [
  // Basic Proteins
  'chicken',
  'beef',
  'pork',
  'salmon',
  'tuna',
  'shrimp',
  'tofu',
  'eggs',
  'turkey',
  'bacon',

  // Dairy & Alternatives
  'milk',
  'butter',
  'cheese',
  'yogurt',
  'cream cheese',
  'sour cream',
  'almond milk',
  'coconut milk',

  // Vegetables
  'onions',
  'garlic',
  'tomatoes',
  'potatoes',
  'carrots',
  'broccoli',
  'spinach',
  'lettuce',
  'bell peppers',
  'mushrooms',
  'cucumber',
  'celery',
  'corn',
  'peas',
  'green beans',
  'asparagus',
  'zucchini',
  'cauliflower',
  'sweet potatoes',
  'cabbage',
  'kale',

  // Fruits
  'apples',
  'bananas',
  'oranges',
  'lemons',
  'limes',
  'strawberries',
  'blueberries',
  'raspberries',
  'grapes',
  'pineapple',
  'mango',
  'avocado',
  'peaches',
  'pears',
  'watermelon',

  // Grains & Starches
  'rice',
  'pasta',
  'bread',
  'flour',
  'oats',
  'quinoa',
  'cornmeal',
  'tortillas',

  // Legumes & Nuts
  'black beans',
  'chickpeas',
  'lentils',
  'peanuts',
  'almonds',
  'walnuts',
  'cashews',
  'peanut butter',

  // Herbs & Spices
  'basil',
  'oregano',
  'thyme',
  'rosemary',
  'cilantro',
  'parsley',
  'ginger',
  'cinnamon',
  'cumin',
  'paprika',
  'black pepper',
  'salt',

  // Condiments & Sauces
  'olive oil',
  'vegetable oil',
  'soy sauce',
  'mayonnaise',
  'ketchup',
  'mustard',
  'hot sauce',
  'vinegar',
  'honey',
  'maple syrup',

  // Baking Essentials
  'sugar',
  'brown sugar',
  'baking powder',
  'baking soda',
  'vanilla extract',
  'chocolate chips',
  'cocoa powder',

  // Canned & Preserved
  'canned tomatoes',
  'tomato sauce',
  'chicken broth',
  'vegetable broth',
  'coconut cream',
  'salsa',
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
