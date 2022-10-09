export const comp2hex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
};

export const rgb2hex = (r: number, g: number, b: number) => {
    return '#' + comp2hex(r) + comp2hex(g) + comp2hex(b);
};

export const hex2rgb = (hex: string): number[] => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
};

export const hex2dec = (hex: string) => {
    if (hex.substring(0, 1) == '#') {
        return `0xFF${hex.substring(1).toUpperCase()}`;
    }
    return `0xFF${hex.toUpperCase()}`;
};
