import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: "aqari-login-auth",
      name: "Administrator",
      async authorize(credentials, req) {
        const endpoint = 'https://stagingapi.aqarifinder.com/api/user/login'
        const response = await axios({
          method: 'post',
          url: endpoint,
          data: { email: credentials.username, password: credentials.password },
          headers: { "Content-Type": "application/json" }
        });

        if (response) {
          if (response.data.status.code !== 200) {
            return null;
          }
          else {
            const user = {
              id: response.data.results.id,
              name: response.data.results.name,
              email: response.data.results.email,
              token: response.data.results.token
            };
            return user;
          }
        }
        else {
          return null;
        }
      },
      credentials: {
        username: { label: "Username", type: "email ", placeholder: "Username (EMAIL)" },
        password: { label: "Password", type: "password" },
      },
    }),

  ],
  pages: {
    signIn: "/signIN",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      if (token) {
        session.accessToken = token.accessToken
      }
      return session
    }
  }

})

