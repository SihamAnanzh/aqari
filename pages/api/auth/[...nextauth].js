import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import AppleProvider from 'next-auth/providers/apple'
import axios from "axios";

export default NextAuth({
  providers: [
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
          console.log("RESPONSE IS : ",response.data);
          if (response.data.status.code !== 200) {
            return null;
          }
          else {
            const user = {
              id: response.data.results.id,
              name: 'ADMINISTRATOR',
              email: response.data.results.username,
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
        username: { label: "Username", type: "text ", placeholder: "Username (EMAIL)" },
        password: { label: "Password", type: "password" },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
     AppleProvider({
    clientId: process.env.APPLE_ID,
    clientSecret: process.env.APPLE_SECRET
  })
  ],
  secret: process.env.SECRET, 
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.SECRET,
    encryption: true
  },
  pages:{
    signIn: '/signIN',
  },
  callbacks: { 
     async signIn(user, account, profile) {

      //
      if (user !== undefined) {
        return true;

        
      }
      else {
        console.log(account +"this is account");
        return false;
      }
    },
    jwt: ({ user, token }) => {
      if (user) {
        token.id = user.token
      }
      return token;
    },
    session: ({ session, user, token }) => {
      if (token) {
        session.id = token.id;
        session.xyz = token;
      }
      return session;
    }
  },
})
