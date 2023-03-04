export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      console.log(`${character.name} уже есть в команде!`);
      return;
    }
    this.members.add(character);
  }

  addAll(...characters) {
    this.members.add(characters);
  }

  toArray() {
    return Array.from(this.members);
  }
}
