/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreDuringBuilds: true,
  


}

process.env.NEXTAUTH_URL= 'https://akarii-demo.herokuapp.com/';

module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["ar","en"]
  },
  env: {
      endPoint: 'http://localhost:3000/',
      JWT_SECRET: {
          kty: "EC",
          kid: "BwmGsjvRehScmi5OmP0o1fx6_OoFlfYlhjirnlIv-k4",
          alg: "HS512",
          crv: "P-256",
          x: "rMfZyvrjytlcwLoEHdOjJ6vT8Hr8f6AIphzgRZ2ccWE",
          y: "shhIfquJq5DwfqkbQUh2lX6p3Bm6lGf5pw2KfJmPORI",
          d: "qyTGFjxgKxwyEHLgPYmm6FqO3FKQH-2GkyMCf8KjG1s"
      }
  },

};
