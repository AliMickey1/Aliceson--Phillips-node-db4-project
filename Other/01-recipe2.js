/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


const recipe =   
   [ 
    {recipe_name: 'English Muffin Pizza Snacks'}, 
    {recipe_name: 'Breaded Chicken Cutlets'},
  ]

  const ingredients = [
    // English Muffin Pizza Snacks
  {ingredient_name: 'English muffin, split', quantity: '1'},
  {ingredient_name: 'Unsalted butter, softened', quantity: 'as needed'},
  {ingredient_name: 'Marinara sauce, such as Raos or Ragù', quantity: 'as needed'},
  {ingredient_name: 'Fresh Mozzarella, sliced', quantity: 'as needed'},
  {ingredient_name: 'Sea salt, dried oregano, and fresh basil (for serving)', quantity:'as needed'},

    // Breaded Chicken Cutlets
  {ingredient_name: 'plain panko (Japanese breadcrumbs)', quantity: '4 cups'},
  {ingredient_name: 'extra-virgin olive oil', quantity: '1/4 cups'},
  {ingredient_name: 'coarse salt', quantity: '1 tsp'},
  {ingredient_name: 'Coarse salt and pepper', quantity: 'as needed'},
  {ingredient_name: 'large eggs', quantity: '4'},
  {ingredient_name: 'chicken cutlets (about 10)', quantity: '2 lbs'},
  {ingredient_name: 'all-purpose flour', quantity: '1/3 cup'},

]

const steps = [
  // English Muffin Pizza Snacks
  {step_text: 'Heat oven to 400°F', step_number: 1},
  {step_text: 'Place muffin halves cut-side-up on a parchment-lined baking sheet; brush generously with butter.', 
  step_number: 2},
  {step_text: 'Bake until lightly toasted, about 10 minutes.', step_number: 3},
  {step_text: 'Layer on marinara and mozzarella and bake until melted, 6 to 8 minutes. ', step_number: 4},
  {step_text: 'Sprinkle on some sea salt and dried oregano and basil leaves before serving.', step_number: 5},

  // Breaded Chicken Cutlets
  {step_text: 'Prepare cutlets: Preheat oven to 400 degrees. Toss panko, olive oil, and 1 teaspoon salt on a rimmed baking sheet.', 
  step_number: 1},
  {step_text: 'Bake, stirring twice, until deep golden brown, about 15 minutes. Let cool completely. (Crush a few handfuls, to help crumbs adhere.) ', 
  step_number: 2},
  {step_text: ' Whisk eggs in a bowl. Pat dry chicken cutlets; season with salt and pepper. Dredge in flour, tapping off excess. Dip in eggs; coat with panko, patting to adhere. ', 
  step_number: 3},
  {step_text: 'Lay cutlets in layers on a baking sheet, with parchment in between each. Freeze 2 hours, then up to 1 month in resealable plastic bags.',
   step_number: 4},
  {step_text: 'Bake cutlets: Arrange on a wire rack set on a rimmed baking sheet. Bake at 450 degrees, flipping once, until cooked through, 12 to 15 minutes. (If cutlets are not frozen, bake 8 to 10 minutes.)', 
  step_number: 5},

 ]

const ingredients_step_id = [
    // English Muffin Pizza Snacks
  {step_id: '2', ingredient_id: '1', quantity: 1},
  {step_id: '2', ingredient_id: '2', quantity: 1},
  {step_id: '4', ingredient_id: '3', quantity: 1},
  {step_id: '4', ingredient_id: '4', quantity: 1},
  {step_id: '5', ingredient_id: '5', quantity: 1},
  
    // Breaded Chicken Cutlets
  {step_id: '1', ingredient_id: '1', quantity: 4},
  {step_id: '1', ingredient_id: '2', quantity: 1},
  {step_id: '1', ingredient_id: '3', quantity: .25},
  {step_id: '3', ingredient_id: '5', quantity: 4},
  {step_id: '3', ingredient_id: '6', quantity: 2},
  {step_id: '3', ingredient_id: '4', quantity: 1},
  {step_id: '3', ingredient_id: '7', quantity: .3},

]


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe').del()
  await knex('steps').del()
  await knex('ingredients').del()
  await knex('ingredient_step_id').del()
  await knex('recipe').insert(recipe);
  await knex('steps').insert(steps);
  await knex('ingredients').insert(ingredients);
  await knex('ingredient_step_id').insert(ingredients_step_id)
};