import type { Vector2D } from "./helper/types/Vector2D";

/*
  TODO: Maybe simply interface Stone { colors: Set<Color> } is good enough?
*/

export class Intersection {
  neighbours: this[];
  position: Vector2D;

  constructor(v: Vector2D) {
    this.position = v;
    this.neighbours = [];
  }

  connectTo(intersection: this, bothSides: boolean) {
    this.neighbours.push(intersection);
    if (bothSides) {
      intersection.connectTo(this, false);
    }
  }

  isConnectedTo(intersection: this): boolean {
    return this.neighbours.includes(intersection);
  }

  export(): Intersection {
    // TODO: How to export? Why is it needed?
    // TODO: Polymorphic this as return type? Can't construct new this(), right?
    const intersection = new Intersection(this.position.Export());
    //ToDo: How to export Neighbours?
    return intersection;
  }
}
