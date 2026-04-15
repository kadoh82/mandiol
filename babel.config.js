module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // react-native-worklets/plugin MUST be listed last. In Reanimated 4
      // the worklet-compiling Babel plugin was split out of
      // react-native-reanimated and lives in react-native-worklets.
      "react-native-worklets/plugin",
    ],
  };
};
