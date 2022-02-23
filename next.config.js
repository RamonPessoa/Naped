module.exports = {
  images: {
    domains: ['i.annihil.us']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      },
    ]
  },
}