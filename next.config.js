// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   ignoreDuringBuilds: true,

// }

// process.env.NEXTAUTH_URL = "https://akarii-demo.herokuapp.com/";
process.env.NEXTAUTH_URL = "https://aqari-demo.herokuapp.com/";
// process.env.NEXTAUTH_URL = "http://localhost:3000/";
// NEXTAUTH_URL=https://akarii-demo.herokuapp.com/

module.exports = {
  reactStrictMode: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  env: {
    // endPoint: 'http://localhost:3000/',
    JWT_SECRET: {
      kty: "EC",
      kid: "BwmGsjvRehScmi5OmP0o1fx6_OoFlfYlhjirnlIv-k4",
      alg: "HS512",
      crv: "P-256",
      x: "rMfZyvrjytlcwLoEHdOjJ6vT8Hr8f6AIphzgRZ2ccWE",
      y: "shhIfquJq5DwfqkbQUh2lX6p3Bm6lGf5pw2KfJmPORI",
      d: "qyTGFjxgKxwyEHLgPYmm6FqO3FKQH-2GkyMCf8KjG1s",
    },
    GOOGLE_CLIENT_ID:
      "166306677740-rmr26kc58ar75hmisipm60snk3i4udn3.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    FACEBOOK_CLIENT_SECRET: "9282d7f9bc5d9269efb25c0548774bfd",
    FACEBOOK_CLIENT_ID: "337373868403862",
    APPLE_ID: "com.akari.dominate",
    APPLE_SECRET: "69443FW65R",
    //   JWT_SECRET:"JWTTOKENSECRET@123",
    //  APPLE_ID:"com.akari.dominate",
    //  APPLE_TEAM_ID:"ananzehsoso@gmail.com",
    //  APPLE_KEY_ID:"69443FW65R",
    // APPLE_PRIVATE_KEY:"MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgPneSDBTquqyFIgp21Zqgb4hmPW8nwJvYF0zxj3xOQm+gCgYIKoZIzj0DAQehRANCAARjF/4yatcFRO26KjdRvJdJq7boByM1WKVYR8lEccuY+xAtWtaLapX2rZ4h2FgOcsGhkR5GzoINg/oNkK/pfzoG"
  },
};
