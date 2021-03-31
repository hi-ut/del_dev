const process = {
  env: {
    BASE_URL: location.href.includes('localhost')
      ? 'http://localhost:3000'
      : 'https://www.hi.u-tokyo.ac.jp/dev',
  },
}
