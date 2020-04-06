const icons = [
  '\u2705',
  '\u26FD',
  '\u26FA',
  '\u26F9',
  '\u26F8',
  '\u26F5',
  '\u26F4',
  '\u26F3',
  '\u26F1',
  '\u26F0',
  '\u26E9',
  '\u26D1',
  '\u26D4',
  '\u26C4',
  '\u26BE',
  '\u26BD',
  '\u26AA',
  '\u26AB',
  '\u26A1',
  '\u2693',
  '\u267F',
  '\u2648',
  '\u2649',
  '\u261D',
  '\u2615',
  '\u2614',
  '\u2757',
  '\u2753',
  '\u274E',
  '\u2704',
  '\u26EA',
  '\u2651',
  '\u2652',
  '\u264D',
  '\u264C',
  '\u264B',
];
const Utils = {
  between(max) {
    return Math.floor(Math.random() * max);
  },
  Generate: (length) => {
    const tiles = new Array(length)
      .fill()
      .map((x, i) => ({ value: Math.round((i + 1) / 2), id: i }));

    for (let j = 0; j < length; j++) {
      const randomIndex = Utils.between(length);
      const temp = tiles[j];
      tiles[j] = tiles[randomIndex];
      tiles[randomIndex] = temp;
    }

    for (let j = 0; j < icons.length; j++) {
      const randomIndex = Utils.between(icons.length);
      const temp = icons[j];
      icons[j] = icons[randomIndex];
      icons[randomIndex] = temp;
    }

    return tiles;
  },
};

export { Utils, icons };
