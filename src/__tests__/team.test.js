import Team from '../js/team';

const swordsman = { name: 'мечник', health: 10 };
const mage = { name: 'маг', health: 100 };

test('add character', () => {
  const team = new Team();
  team.add(swordsman);
  team.add(mage);
  team.add(swordsman);
  expect(team.members.size).toBe(2);
});

test('add all characters', () => {
  const team = new Team();
  team.addAll(swordsman, mage, swordsman);
  team.members.forEach((value) => {
    expect(value.length).toBe(3);
  });
});

test('convert set to array', () => {
  const team = new Team();
  team.add(swordsman);
  team.add(mage);
  expect(Array.isArray(team.toArray())).toBe(true);
});
