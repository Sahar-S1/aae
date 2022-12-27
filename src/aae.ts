export interface Actor {
  render(): void;
}

export interface Action {
  interpolate(alpha: number): void;
}

export type Ratefn = (alpha: number) => number;

export class Stage {
  actors: Actor[];

  constructor() {
    this.actors = [];
  }

  add(actor: Actor): void {
    this.actors.push(actor);
  }

  remove(actor: Actor): void {
    this.actors.filter((thisActor) => thisActor != actor);
  }

  // eslint-disable-next-line
  play(_action: Action, _runtime: number, _ratefn: Ratefn = (t) => t): void {}
}
