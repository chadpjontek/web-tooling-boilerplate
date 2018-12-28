const presets = [
  [
    "@babel/env",
    {
      // Change these to your desired browser targets
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };