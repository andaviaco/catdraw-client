
export function formatFigure(figure) {
  const grid = [
    [
      {color: null},
      {color: null},
      {color: null},
    ],
    [
      {color: null},
      {color: null},
      {color: null},
    ],
    [
      {color: null},
      {color: null},
      {color: null},
    ],
  ];

  figure.forEach(([x, y, color]) => {
    grid[x][y].color = color;
  });

  return grid;
}
