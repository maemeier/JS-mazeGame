// import matter

const {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse
} = Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    wireframes: false
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);
//MouseConstraint
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
  })
);

// borders
const walls = [
  Bodies.rectangle(400, 0, 800, 40, {
    isStatic: true
  }),
  Bodies.rectangle(400, 600, 800, 40, {
    isStatic: true
  }),
  Bodies.rectangle(0, 300, 40, 600, {
    isStatic: true
  }),
  Bodies.rectangle(800, 300, 40, 600, {
    isStatic: true
  })
];
World.add(world, walls);

// random shapes
for (let i = 0; i < 20; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50, {
        render: {
          fillStyle: "#BFE2CB"
        }
      })
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35, {
        render: {
          fillStyle: "#FFD1CF"
        }
      })
    );
  }
}

const grid = [];
for (let i = 0; i < 3; i++) {
  grid.push([]);
  for (let j = 0; j < 3; j++) {
    grid[i].push(false);
  }
}

console.log(grid);
