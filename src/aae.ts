// Actor is just any object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Actor = any;

// Action defines change of Actor over time
// Alpha is progress rate between 0 and 1
export type Action<A extends Actor = Actor> = (actor: A, alpha: number) => A;

// Alpha modifier to play same Action in different ways
export type Easing = (alpha: number) => number;

// Act is Action played by an Actor for some duration
export type Act<A extends Actor = Actor> = {
  actor: A;
  action: Action<A>;
  easing?: Easing;
  duration: number;
};

// Scene is sequence of Acts performed by Actors
export class Scene {
  actors: Actor[];
  acts: Act[];

  constructor() {
    this.actors = [];
    this.acts = [];
  }

  add(actor: Actor): void {
    this.actors.push(actor);
  }

  remove(actor: Actor): void {
    this.actors.filter((thisActor) => thisActor != actor);
  }

  play<A extends Actor>(act: Act<A>): void {
    this.acts.push(act);
  }
}
