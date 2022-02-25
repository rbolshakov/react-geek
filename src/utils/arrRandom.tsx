export function arrRandom(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
