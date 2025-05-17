import React, { useState } from 'react';

const GlutenFreeRecipes: React.FC = () => {
  const [expandedIngredients, setExpandedIngredients] = useState<string | null>(null);
  const [expandedInstructions, setExpandedInstructions] = useState<string | null>(null);

  const toggleIngredients = (recipeName: string) => {
    setExpandedIngredients(expandedIngredients === recipeName ? null : recipeName);
  };

  const toggleInstructions = (recipeName: string) => {
    setExpandedInstructions(expandedInstructions === recipeName ? null : recipeName);
  };

  const recipes = [
    {
      name: "Bread Rolls",
      image: "https://www.wheatout.co.il/wp-content/uploads/2019/10/988e46a4-6ee7-4ff3-954a-973277a913b2.jpg",
      ingredients: [
        "500g Molino gluten-free baking flour",
        "550ml room temperature water",
        "12g salt",
        "10g sugar",
        "17g olive oil",
        "17g dry yeast (or 50g fresh yeast)",
        "For garnish: one egg (optional), 2 tablespoons sesame or sunflower seeds (optional)"
      ],
      instructions: [
        "Soak sunflower seeds in water to prevent burning.",
        "Mix cold water and fresh yeast in a mixer bowl.",
        "Add flour and sugar while mixing.",
        "Ensure all flour is incorporated and mix thoroughly.",
        "Add salt, then olive oil along the sides of the mixer.",
        "Divide dough into pieces, shape, and proof for 45 minutes.",
        "Bake at 210°C for 10 minutes, then reduce to 175°C and bake for 30 more minutes.",
        "Cool for 30 minutes before serving."
      ]
    },
    {
      name: "Gluten-Free Loaf",
      image: "https://www.kemah-haaretz.co.il/wp-content/uploads/2021/02/IMG_142113.webp",
      extraImage: "https://www.kemah-haaretz.co.il/wp-content/uploads/2021/02/IMG_20210914_142113-768x1024.b197b0.webp",
      ingredients: [
        "1 kg Molino multi-purpose gluten-free baking mix",
        "1.2 liters water",
        "30g dry yeast",
        "25g salt",
        "25g sugar"
      ],
      instructions: [
        "Mix ingredients in a stand mixer for 3 minutes on low, then 3-5 minutes on high.",
        "Rest dough for 15 minutes, covered.",
        "Divide into portions, shape, and proof for 45-60 minutes.",
        "Bake at 220°C for 20-30 minutes until golden brown.",
        "Cool before serving."
      ]
    },
    {
      name: "Snowy Cracked Cookies",
      image: "https://mylilblog.com/wp-content/uploads/2024/03/IMG_5858-768x1024.jpeg",
      ingredients: [
        "200g dark chocolate",
        "3 tbsp olive oil",
        "70g white sugar",
        "Pinch of salt",
        "2 heaping tbsp cocoa powder",
        "2 eggs",
        "100g gluten-free flour",
        "50g almond flour",
        "1 tsp baking powder"
      ],
      instructions: [
        "Preheat oven to 180°C.",
        "Melt chocolate and oil, mix with sugar and cocoa powder.",
        "Whisk eggs separately and add gradually.",
        "Mix in flours and baking powder to form dough.",
        "Shape into balls, coat in sugar, bake for 12-13 minutes."
      ]
    },
    {
      name: "Almond Cinnamon Cookies",
      image: "https://mylilblog.com/wp-content/uploads/2021/05/IMG_7202.jpg",
      ingredients: [
        "350g almond flour",
        "50g very soft butter",
        "40g light brown sugar",
        "1 tbsp maple syrup",
        "1 large egg",
        "1 heaping tsp cinnamon",
        "Pinch of salt",
        "1 flat tsp baking soda",
        "For coating: 2 tbsp white sugar, 1 tsp cinnamon (optional)"
      ],
      instructions: [
        "Preheat oven to 170°C.",
        "Mix butter, egg, sugar, cinnamon, and maple syrup.",
        "Mix in almond flour and baking soda.",
        "Roll into balls, coat in sugar mixture, flatten, and bake for 12-15 minutes."
      ]
    },
    {
      name: "Gluten-Free Burger Buns",
      image: "https://mylilblog.com/wp-content/uploads/2020/10/20201009_130427-450x500.jpg",
      ingredients: [
        "450g Molino green gluten-free flour",
        "20g dry yeast",
        "1 large egg",
        "60g sugar",
        "1 tsp salt",
        "1 tsp xanthan gum",
        "30ml oil + 2 tbsp for dough",
        "600ml warm water",
        "For brushing: 1 beaten egg",
        "For topping: 2 tbsp sesame seeds"
      ],
      instructions: [
        "Mix flour, salt, yeast, sugar, and xanthan gum in a mixer.",
        "Add egg and mix.",
        "Gradually add water while kneading for 7-8 minutes.",
        "Mix in oil, knead 1 more minute, then let rise for 1-1.5 hours.",
        "Preheat oven to 180°C.",
        "Shape dough into balls, brush with egg, sprinkle sesame seeds, and bake for 30 minutes."
      ]
    }
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px", background: "linear-gradient(to right, green, red, yellow, blue)" }}>
      <h1 style={{ color: "white" }}>Gluten-Free Recipes</h1>

      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {recipe.extraImage && (
              <img
                src={recipe.extraImage}
                alt="Gluten-Free Loaf Extra"
                style={{ width: "400px", height: "400px", marginRight: "10px", borderRadius: "5px" }}
              />
            )}
            {recipe.name}
          </h2>
          <img src={recipe.image} alt={recipe.name} style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "400px" }} />

          <button onClick={() => toggleIngredients(recipe.name)}>
            {expandedIngredients === recipe.name ? "Hide Ingredients" : "Show Ingredients"}
          </button>
          {expandedIngredients === recipe.name && <ul>{recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}</ul>}

          <button onClick={() => toggleInstructions(recipe.name)}>
            {expandedInstructions === recipe.name ? "Hide Instructions" : "Show Instructions"}
          </button>
          {expandedInstructions === recipe.name && <ol>{recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}</ol>}
        </div>
      ))}
    </div>
  );
};

export default GlutenFreeRecipes;
