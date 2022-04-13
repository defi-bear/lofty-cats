function trimString(str: string, length: number): string {
  if (str && str.length > length) {
    return `${str.substring(0, length)}...`;
  }
  return str;
}

export default trimString;
