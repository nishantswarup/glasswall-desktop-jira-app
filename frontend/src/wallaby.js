module.exports = () => {
    return {
      files: [
        {pattern: 'src/Components/**/*.test.js', ignore: true },
        {pattern: 'src/pages/**/*.test.js', ignore: true },
        {pattern: 'src/App.test.js', ignore: true },
        'src/components/**/**/*.js',
        'src/pages/*.js',
        'src/*.js'
      ],
      tests: [
        'src/pages/login/Login.test.js',
      ],
      filesWithNoCoverageCalculated: [],
    testFramework: 'jest',
    env: {
      type: 'node',
      runner: 'node'  // or full path to any node executable
    },
    workers: {
      recycle: true
    },
    debug: false,
    // reportConsoleErrorAsError: true,
    slowTestThreshold: 300 // 200 ms

    };
  };