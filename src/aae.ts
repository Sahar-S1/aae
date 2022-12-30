// Actor is just any object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Actor = any;

// Action defines change of Actor over time
// Progress is progress rate between 0 and 1
export type Action<A extends Actor = Actor> = (actor: A, progress: number) => A;

// Progress modifier to play same Action in different ways
export type Easing = (progress: number) => number;

// Scene is Action played by an Actor for some duration
export type Scene<A extends Actor = Actor> = {
  actor: A;
  action: Action<A>;
  easing?: Easing;
  duration: number;
};

// Act is sequence of Scenes performed by Actors
export class Act {
  actors: Actor[];
  scenes: Scene[];

  constructor() {
    this.actors = [];
    this.scenes = [];
  }

  add(actor: Actor): void {
    this.actors.push(actor);
  }

  remove(actor: Actor): void {
    this.actors.filter((thisActor) => thisActor != actor);
  }

  play<A extends Actor>(act: Scene<A>): void {
    this.scenes.push(act);
  }
}

// Script will contain user code
export interface Script {
  playwrite(): void;
}

// Stage is a canvas which will connect with some renderer to render actors
export abstract class Stage {
  abstract render(): void;
}

// Director will play all the scenes of an act
// By generating progress values for actions based on duration and framerates
export class Director {}
