const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  /** @type {import('next').NextConfig} */
  return {
    output: isDev ? undefined : "export",
    images: {
      unoptimized: true,
    },
  };
};
