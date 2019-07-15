// Type definitions for tera-vec3
// Project: Tera Toolbox
// Definitions by: Topiary <https://github.com/MarcMarabou>

export = Vec3;

declare class Vec3 {
    constructor(p: { x: number, y: number, z: number } | Array<number>);
    constructor(x: number, y: number, z: number);


    /**
     * Performs vector addition. Returns reference to original Vec3 object.
     * @param  {Vec3} v - Coordinates to add.
     * @returns Vec3 - Reference to original object.
     */
    add(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    add(x: number, y: number, z: number): Vec3;

    /**
     * Performs vector subtraction. Returns reference to original Vec3 object.
     * @param  {Vec3} v - Coordinates to subtract.
     * @returns Vec3 - Reference to original object.
     */
    sub(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    sub(x: number, y: number, z: number): Vec3;

    /**
     * Performs elementwise multiplicatoin. Returns reference to original Vec3 object.
     * @param  {Vec3} v - Coefficients to multiply with.
     * @returns Vec3 - Reference to original object.
     */
    mult(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    mult(x: number, y: number, z: number): Vec3;

    /**
     * Performs elementwise division. Returns reference to original Vec3 object.
     * @param  {Vec3} v - Coefficients to divide with.
     * @returns Vec3 - Reference to original object.
     */
    div(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    div(x: number, y: number, z: number): Vec3;

    /**
     * Performs vector scaling. Returns reference to original Vec3 object.
     * @param  {number} m - Magnitude of scaling.
     * @returns Vec3 - Reference to original object.
     */
    scale(m: number): Vec3;

    /**
     * Performs vector rotation. Returns reference to original Vec3 object.
     * @param  {number} r - Rotation in radians.
     * @returns Vec3 - Reference to original object.
     */
    rotate(r: number): Vec3;

    /**
     * Normalizes vector.
     * @returns Vec3 - Reference to original object.
     */
    normalize(): Vec3;

    /**
     * Takes the absolute value of each coordinate.
     * @returns Vec3 - Reference to original object.
     */
    abs(): Vec3;

    /** Rounds each coordinate to nearest integer.
     * @returns Vec3 - Reference to original object.
     */
    round(): Vec3;

    /**
     * Performs vector addition. Returns a new Vec3 object.
     * @param  {Vec3} v - Coordinates to add.
     * @returns Vec3 - New Vec3 object.
     */
    addN(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    addN(x: number, y: number, z: number): Vec3;

    /**
     * Performs vector subtraction. Returns a new Vec3 object.
     * @param  {Vec3} v - Coordinates to subtract.
     * @returns Vec3 - New Vec3 object.
     */
    subN(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    subN(x: number, y: number, z: number): Vec3;

    /**
     * Performs elementwise multiplicatoin. Returns a new Vec3 object.
     * @param  {Vec3} v - Coefficients to multiply with.
     * @returns Vec3 - New Vec3 object.
     */
    multN(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    multN(x: number, y: number, z: number): Vec3;

    /**
     * Performs elementwise division. Returns a new Vec3 object.
     * @param  {Vec3} v - Coefficients to divide with.
     * @returns Vec3 - New Vec3 object.
     */
    divN(v: Vec3 | { x: number, y: number, z: number } | Array<number>): Vec3;
    divN(x: number, y: number, z: number): Vec3;

    /**
     * Performs vector scaling. Returns a new Vec3 object.
     * @param  {number} m - Magnitude of scaling.
     * @returns Vec3 - New Vec3 object.
     */
    scaleN(m: number): Vec3;

    /**
     * Performs vector rotation. Returns a new Vec3 object.
     * @param  {number} r - Rotation in radians.
     * @returns Vec3 - New Vec3 object.
     */
    rotateN(r: number): Vec3;

    /**
     * Normalizes vector.
     * @returns Vec3 - New Vec3 object.
     */
    normalizeN(): Vec3;

    /**
     * Takes the absolute value of each coordinate.
     * @returns Vec3 - New Vec3 object.
     */
    absN(): Vec3;

    /** Rounds each coordinate to nearest integer.
     * @returns Vec3 - New Vec3 object.
     */
    roundN(): Vec3;

    /** Returns the length of the vector
     * @returns number - Length of vector.
     */
    length(): number;

    /**
     * Returns the square of the length - microoptimization.
     * @returns number - Square of the length.
     */
    sqrtLength(): number;

    /**
     * Returns the distance between target and origin.
     * @param  {Vec3} v - Target point.
     * @returns number - Distance ignoring Z-axis.
     */
    dist2D(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    dist2D(x: number, y: number, z?: number): number;

    /**
     * Returns the squared distance between target and origin - microoptimization.
     * @param  {Vec3} v - Target point.
     * @returns number - Squared istance ignoring Z-axis.
     */
    sqrDist2D(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    sqrDist2D(x: number, y: number, z?: number): number;

    /**
     * Returns the distance between target and origin.
     * @param  {Vec3} v - Target point.
     * @returns number - Distance.
     */
    dist3D(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    dist3D(x: number, y: number, z: number): number;

    /**
     * Returns the squared distance between target and origin - microoptimization.
     * @param  {Vec3} v - Target point.
     * @returns number - Squared distance.
     */
    sqrDist3D(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    sqrDist3D(x: number, y: number, z: number): number;

    /**
     * Returns the angle between target and origin.
     * @param  {Vec3} v - Target point.
     * @returns number - Angle in radians.
     */
    angleTo(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    angleTo(x: number, y: number, z: number): number;

    /**
     * Checks if *any* vector elements are NaN.
     * @returns boolean
     */
    isNaN(): boolean;

    /**
     * Checks if target and origin are equal.
     * @param  {Vec3} v - Comparison vector.
     * @returns boolean - Whether elements are identical or not.
     */
    equals(v: Vec3 | { x: number, y: number, z: number } | Array<number>): number;
    equals(x: number, y: number, z: number): number;

    /** Clones origin vector.
     * @returns Vec3 - Clone of origin.
     */
    clone(): Vec3;


    /** 
     * String representation of origin vector.
     * @returns string - Formatted as: `${x},${y},${z}`
     */
    toString(): string;
}
