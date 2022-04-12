declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.ttf' {
  const value: Font.FontSource | undefined;
  export default value;
}
