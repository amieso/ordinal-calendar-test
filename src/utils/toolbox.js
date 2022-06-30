import { faker } from "@faker-js/faker";

const TEN_YEARS = 365 * 10;

export function generateYear() {
  return [...Array(TEN_YEARS)].map((_, i) => ({
    index: i + 1, // days start at 1 💣
    todos: generateTodos(),
  }));
}

function generateTodos() {
  return [...Array(Math.floor(Math.random() * 10))].map((_, i) => ({
    id: i,
    value: faker.commerce.product(),
    checked: false,
  }));
}
