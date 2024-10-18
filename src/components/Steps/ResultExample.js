import React from 'react'

const ResultExample = () => {
  return (
    <>
      <div contenteditable="true" className="Recipe_recipe__alNmr">
        <h2>
          Gluten-Free, Vegan, and Vegetarian Pasta with Garlic, Tomato, and Beef
          (or Ground Beef)
        </h2>
        <p>
          This recipe is <strong>vegan</strong> as it doesn't contain any meat
          or animal products. It's also <strong>vegetarian</strong> if using
          ground beef, and <strong>gluten-free</strong> if using certified
          gluten-free pasta.
        </p>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ol>
          <li>
            <strong>Olive Oil:</strong> For cooking and drizzling
          </li>
          <li>
            <strong>Salt:</strong> To taste
          </li>
          <li>
            <strong>Black Pepper:</strong> To taste
          </li>
          <li>
            <strong>Garlic:</strong> 3-4 cloves, minced
          </li>
          <li>
            <strong>Pasta:</strong> Your preferred gluten-free pasta (e.g.,
            farfalle, rotini, penne)
          </li>
          <li>
            <strong>Tomato Sauce:</strong> Canned diced or crushed tomatoes
            (ensure it's gluten-free if using)
          </li>
          <li>
            <strong>Beef (or Ground Beef):</strong> 1 lb, cooked and drained
            (optional){' '}
          </li>
          <li>
            <strong>All-Purpose Flour:</strong> 1/4 cup
          </li>
          <li>
            <strong>Beef Broth:</strong> 1 cup
          </li>
          <li>
            <strong>Onion (optional):</strong> 1 large onion, diced (adds depth
            of flavor but not essential)
          </li>
        </ol>
        <p>
          <strong>Instructions:</strong>
        </p>
        <ol>
          <li>
            <strong>Cook Pasta:</strong> Follow package directions for cooking
            pasta according to package instructions. Drain and rinse with cold
            water.
          </li>
          <li>
            <strong>Sauté Vegetables (if using):</strong> While pasta is
            cooking, heat olive oil in a large skillet or pot over medium heat.
            Add onion (if using) and cook until softened, about 5 minutes. Add
            garlic and cook for another minute until fragrant.{' '}
          </li>
          <li>
            <strong>Make Sauce:</strong> Add tomato sauce, beef broth, and salt
            to the skillet. Bring to a simmer and cook for 10-15 minutes, or
            until the sauce has thickened slightly.{' '}
          </li>
          <li>
            <strong>Add Beef (if using):</strong> If using cooked beef, add it
            to the sauce and heat through.
          </li>
          <li>
            <strong>Combine Ingredients:</strong> Add the cooked pasta to the
            sauce and toss to coat evenly.
          </li>
          <li>
            <strong>Season and Serve:</strong> Season with black pepper to
            taste. Serve immediately and enjoy!
          </li>
        </ol>
        <p>
          <strong>Walmart Webshop Search Results:</strong>
        </p>
        <ul>
          <li>
            <strong>Olive Oil:</strong>{' '}
            <a href="https://www.walmart.com/search?query=olive%20oil&amp;store=walmart">
              https://www.walmart.com/search?query=olive%20oil&amp;store=walmart
            </a>
          </li>
          <li>
            <strong>Salt:</strong>{' '}
            <a href="https://www.walmart.com/search?query=salt&amp;store=walmart">
              https://www.walmart.com/search?query=salt&amp;store=walmart
            </a>
          </li>
          <li>
            <strong>Black Pepper:</strong>{' '}
            <a href="https://www.walmart.com/search?query=black+pepper&amp;store=walmart">
              https://www.walmart.com/search?query=black+pepper&amp;store=walmart
            </a>
          </li>
          <li>
            <strong>Tomato:</strong>{' '}
            <a href="https://www.walmart.com/search?query=tomato+sauce&amp;store=walmart">
              https://www.walmart.com/search?query=tomato+sauce&amp;store=walmart
            </a>{' '}
            (ensure it's gluten-free if you need it)
          </li>
          <li>
            <strong>Beef (or Ground Beef):</strong>{' '}
            <a href="https://www.walmart.com/search?query=beef&amp;store=walmart">
              https://www.walmart.com/search?query=beef&amp;store=walmart
            </a>{' '}
            (if using ground beef, ensure it's lean and ground fresh)
          </li>
          <li>
            <strong>All-Purpose Flour:</strong>{' '}
            <a href="https://www.walmart.com/search?query=all+purpose+flour&amp;store=walmart">
              https://www.walmart.com/search?query=all+purpose+flour&amp;store=walmart
            </a>
          </li>
        </ul>
        <p>
          <strong>Note:</strong> This recipe can be easily adapted to your taste
          preferences. Add other vegetables like mushrooms, bell peppers, or
          zucchini. You can also use different types of pasta or spices. Enjoy!
        </p>

        <button onClick={() => window.print()}>Print</button>
      </div>
    </>
  )
}

export default ResultExample
