import { Action, Scene } from "./aae";

// Library
type Circle = {
  x: number;
  y: number;
  r: number;
};

const MoveCircle =
  (params: Partial<Circle>): Action<Circle> =>
  (actor, alpha) => ({
    // New = Original + Alpha * (Final - Original)
    x: actor.x + alpha * ((params.x ?? actor.x) - actor.x),
    y: actor.y + alpha * ((params.y ?? actor.y) - actor.y),
    r: actor.r + alpha * ((params.r ?? actor.r) - actor.r),
  });

// Main
const scene: Scene = new Scene();

const c: Circle = {
  x: 0,
  y: 0,
  r: 10,
};
scene.add(c);

scene.play({
  actor: c,
  action: MoveCircle({ x: 10 }),
  duration: 1,
});
