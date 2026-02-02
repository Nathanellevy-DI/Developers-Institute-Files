
// Only Run Once

const db = require('./models/db');

async function setup() {
  await db.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('email');
    table.string('username').unique();
    table.string('first_name');
    table.string('last_name');
  });

  await db.schema.createTable('hashpwd', table => {
    table.increments('id').primary();
    table.string('username').unique();
    table.string('password');
  });

  console.log('Tables created');
  process.exit();
}

setup();
