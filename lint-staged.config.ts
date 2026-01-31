const config = {
  '**/*.{js,jsx,ts,tsx,json}': ['npm run prettier:staged', 'npm run eslint:staged'],
  '**/*.{css}': ['npm run stylelint:staged'],
};

export default config;
