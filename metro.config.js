const { getDefaultConfig } = require("metro-config")

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "ts", "tsx", "cjs", "svg"], //add here
    },
  }
})()

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "d.ts"], //add here
//   },
// }
