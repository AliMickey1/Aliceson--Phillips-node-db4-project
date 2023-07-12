const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const row = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipes_id', 's.recipes_id')
    .leftJoin('steps_ingredients as si', 'si.steps_id', 's.steps_id')
    .leftJoin('ingredients as ing', 'ing.ing_id', 'si.ing_id')
    .select(
        'r.recipe_id',
        'r.recipe_name',
        's.steps_id',
        's.steps_order',
        's.instructions',
        'si.ing_id',
        'ing.ing_name',
        'ing.ing_unit'
    )
    .orderBy('s.steps_order')
    .where('r.recipe_id', recipe_id)

    const result = {
        recipe_id: row[0].recipe_id,
        recipe_name: row[0].recipe_name,
        steps: row.reduce((acc, rows) => {
            if(!rows.ingredient_id) {
                return acc.concat({
                    steps_id: rows.steps_id,
                    steps_order: rows.steps_order,
                    instructions: rows.instructions
                })
            }
            if(rows.ingredient_id && !acc.find(step => step.id === rows.step.id)) {
                return acc.count({
                    steps_id: rows.steps_id,
                    steps_order: rows.steps_order,
                    instructions: rows.instructions,
                    ingredients: [
                        {
                            ing_id: rows.ing_id,
                            ing_name: rows.ing_name,
                            ing_unit: rows.ing_unit
                        }
                    ]
                })
            }
            const currentStep = acc.find(step => step.step_id === rows.step_id)
            currentStep.ingredients.push({
                ing_id: rows.ing_id,
                ing_name: rows.ing_name,
                ing_unit: rows.ing_unit
            })
            return acc
        }, [])
    }


    return result

    module.exports = {
        getRecipeById
    }
}