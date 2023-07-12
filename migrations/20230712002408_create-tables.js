/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // recipe table
  return knex.schema.createTable('recipe', tbl => {
    tbl.increments('recipe_id');
    tbl.string('recipe_name', 200).notNullable().unique()
  })
//   steps table
  .createTable('steps', tbl => {
    tbl.increments('steps_id');
    tbl.string('step_text', 200).notNullable().unique()
    tbl.integer('step_number').notNullable()
  })
//   ingredients table
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 200).notNullable().unique()
    tbl.string('quantity')
  })
// ingredient/step identifier
  .createTable('ingredient_step_id', tbl => {
    tbl.increments('step_ingredient_id');
    tbl.float('quantity').notNullable()
    tbl.integer('step_id').notNullable()
      .unsigned()
      .notNullable()
      .references('steps_id')
      .inTable('steps')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
