const config = {
  '**/*.{js,jsx,ts,tsx,json}': ['npm run prettier:staged', 'npm run eslint:staged'],
};

export default config;
