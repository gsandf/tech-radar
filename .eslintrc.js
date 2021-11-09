module.exports = {
  extends: [require.resolve('amper-scripts/config/eslint'), 'next'],
  root: true,
  rules: {
    camelcase: 'off',
    'import/no-anonymous-default-export': 'off'
  }
};
