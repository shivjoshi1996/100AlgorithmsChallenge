export function addBorder(picture: string[]): string[] {
  const starredArray = picture.map(string => `*${string}*`);
  const stringLength = picture[0].length;
  const stars = '*'.repeat(stringLength + 2);
  starredArray.push(stars);
  starredArray.unshift(stars);
  return starredArray;
}

console.log(addBorder(["abc", "ded"]));