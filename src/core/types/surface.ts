export type ColorChannel = number;

/** rgba interface
 *  @param {ColorChannel} r - red channel
 *  @param {ColorChannel} g - green channel
 *  @param {ColorChannel} b - blue channel
 *  @param {ColorChannel} a - alpha channel
 */
export interface RGBA {
    r: ColorChannel;
    g: ColorChannel;
    b: ColorChannel;
    a: ColorChannel;
}

/** provides elevation levels alpha percent
 *  @see https://m3.material.io/styles/color/the-color-system/color-roles
 */
export enum SurfaceLevel {
    ONE = 0.05,
    TWO = 0.08,
    THREE = 0.11,
    FOUR = 0.12,
    FIVE = 0.14
}
