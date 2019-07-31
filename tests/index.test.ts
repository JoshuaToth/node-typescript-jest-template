import { add } from '../src/calc'

test('add two numbers', () => {
  const added = add(1, 2)
  expect(added).toBe(3)
})
