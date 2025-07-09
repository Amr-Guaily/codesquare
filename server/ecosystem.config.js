module.exports = {
  apps: [
    {
      name: 'codersquare',
      script: 'cmd.exe',
      args: '/c "npx ts-node --transpile-only server.ts"',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
