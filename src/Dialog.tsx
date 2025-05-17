import React, { useState } from 'react';

const GlutenFreeRecipes: React.FC = () => {
  const [showBreadIngredients, setShowBreadIngredients] = useState(false);
  const [showBreadInstructions, setShowBreadInstructions] = useState(false);
  const [showCookiesIngredients, setShowCookiesIngredients] = useState(false);
  const [showCookiesInstructions, setShowCookiesInstructions] = useState(false);
  const [showLoafIngredients, setShowLoafIngredients] = useState(false);
  const [showLoafInstructions, setShowLoafInstructions] = useState(false);

  const breadIngredients = [
    "500g Molino gluten-free baking flour (green label)",
    "550ml room temperature water (2 and 1/3 measuring cups)",
    "12g (2 flat teaspoons) salt",
    "10g (1 tablespoon) sugar",
    "17g (3 tablespoons) olive oil",
    "17g dry yeast (or 50g fresh yeast)",
    "For garnish: one egg (optional), 2 tablespoons sesame seeds or sunflower seeds (optional)"
  ];

  const breadInstructions = [
    "If decorating with sunflower seeds, soak them in water to prevent burning.",
    "In a mixer bowl, combine cold water and fresh yeast; mix slowly with a paddle attachment.",
    "After 2 minutes, add flour and mix at medium speed, gradually adding sugar.",
    "Check for unincorporated flour at the bottom of the bowl and mix until fully combined.",
    "Add salt, mix for 30 seconds, then add olive oil along the sides of the mixer.",
    "Transfer the dough to a lightly floured surface and divide into 9-10 equal pieces.",
    "Shape the dough into rolls or baguettes and place them on a baking sheet.",
    "Proof the dough in a warm area for 45 minutes.",
    "Preheat oven to 210°C (turbo) or 220°C (regular), with a small pan of water inside for humidity.",
    "Brush rolls with egg wash or olive oil, score them with a knife.",
    "Bake for 10 minutes at 210°C, then reduce to 175°C and bake for 30 more minutes.",
    "Cool for at least 30 minutes before serving."
  ];

  const loafIngredients = [
    "1 kg Molino multi-purpose gluten-free baking mix (green label)",
    "1.2 liters water",
    "30g dry yeast",
    "25g salt",
    "25g sugar"
  ];

  const loafInstructions = [
    "Mix all ingredients in a stand mixer for about 3 minutes at low speed, then another 3-5 minutes at high speed until the dough is smooth.",
    "Transfer the dough to a work surface dusted with Molino flour and let it rest for about 15 minutes at room temperature. Cover with a cloth to prevent sticking.",
    "Divide the dough into portions of about 730g each, shape them as desired, and let them proof for 45-60 minutes on a baking sheet.",
    "Preheat the oven to 220°C.",
    "Bake for 20-30 minutes until golden brown, depending on your oven.",
    "Remove from the oven and let cool completely before serving."
  ];

  const cookiesIngredients = [
    "200g dark chocolate",
    "3 tbsp oil (used olive oil)",
    "70g white sugar (half a cup plus two tbsp)",
    "Pinch of salt",
    "2 heaping tbsp cocoa powder",
    "2 eggs",
    "100g gluten-free flour (1 cup, Schär Farina)",
    "50g almond flour (3/4 cup)",
    "1 tsp baking powder"
  ];

  const cookiesInstructions = [
    "Preheat oven to 180°C (356°F).",
    "Melt dark chocolate with olive oil in the microwave for about a minute, stirring until completely melted.",
    "Add sugar, salt, and cocoa powder; mix well.",
    "In a separate bowl, whisk the eggs for 2-3 minutes until they become slightly frothy.",
    "Gradually add the eggs to the chocolate mixture and mix thoroughly.",
    "Add the flours and baking powder, forming a non-sticky dough.",
    "Divide into balls of desired size, dip in sugar, then in powdered sugar.",
    "Place on a baking sheet with spacing and bake for 12-13 minutes until the cookies crack."
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px", background: "linear-gradient(to right, green, red, yellow, blue)" }}>
      <h1 style={{ color: "white" }}>Gluten-Free Recipes</h1>

      {/* Bread Section */}
      <h2>Bread Rolls</h2>
      <img
        src="https://www.wheatout.co.il/wp-content/uploads/2019/10/988e46a4-6ee7-4ff3-954a-973277a913b2.jpg"
        alt="Bread rolls"
        style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "400px" }}
      />
      <button onClick={() => setShowBreadIngredients(!showBreadIngredients)}>
        {showBreadIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showBreadIngredients && <ul>{breadIngredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>}
      <button onClick={() => setShowBreadInstructions(!showBreadInstructions)}>
        {showBreadInstructions ? "Hide Instructions" : "Show Instructions"}
      </button>
      {showBreadInstructions && <ol>{breadInstructions.map((step, index) => <li key={index}>{step}</li>)}</ol>}

      {/* Loaf Section */}
      <h2>Gluten-Free Loaf</h2>
      <img
        src="https://www.kemah-haaretz.co.il/wp-content/uploads/2021/02/IMG_20210914_142113-768x1024.b197b0.webp"
        alt="Gluten-Free Loaf"
        style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "400px" }}
      />
      <button onClick={() => setShowLoafIngredients(!showLoafIngredients)}>
        {showLoafIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showLoafIngredients && <ul>{loafIngredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>}
      <button onClick={() => setShowLoafInstructions(!showLoafInstructions)}>
        {showLoafInstructions ? "Hide Instructions" : "Show Instructions"}
      </button>
      {showLoafInstructions && <ol>{loafInstructions.map((step, index) => <li key={index}>{step}</li>)}</ol>}

      {/* Cookies Section */}
      <h2>Snowy Cracked Gluten-Free Cookies</h2>
      <img
        src="https://mylilblog.com/wp-content/uploads/2024/03/IMG_5858-768x1024.jpeg"
        alt="Snowy Cracked Cookies"
        style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "400px" }}
      />
      <button onClick={() => setShowCookiesIngredients(!showCookiesIngredients)}>
        {showCookiesIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showCookiesIngredients && <ul>{cookiesIngredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>}
      <button onClick={() => setShowCookiesInstructions(!showCookiesInstructions)}>
        {showCookiesInstructions ? "Hide Instructions" : "Show Instructions"}
      </button>
      {showCookiesInstructions && <ol>{cookiesInstructions.map((step, index) => <li key={index}>{step}</li>)}</ol>}
    </div>
  );
};

export default GlutenFreeRecipes;
