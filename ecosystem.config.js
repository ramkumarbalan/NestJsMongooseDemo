module.exports = {
  apps : [{
    name: 'PET APP - 1',
    script: 'dist/main.js',
    watch: true,
    args: 'PET APP  - 1',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 4000
    }
  },
  {
    name: 'PET APP - 2',
    script: 'dist/main.js',
    watch: true,
    args: 'PET APP  - 2',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 4001
    }
  }
]
};
