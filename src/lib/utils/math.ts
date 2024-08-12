export function remapRange(
    value: number,
    from: [number, number],
    to: [number, number],
  ) {
    const [fromMin, fromMax] = from;
    const [toMin, toMax] = to;
  
    return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
  }