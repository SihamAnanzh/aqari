import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import AppleProvider from 'next-auth/providers/apple'
import axios from "axios";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";



export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "aqari-login-auth",
      name: "user",
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
              name: 'user',
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
    // clientSecret: process.env.APPLE_SECRET
    clientSecret: {
      appleId: process.env.APPLE_ID,
      teamId: process.env.APPLE_TEAM_ID,
      privateKey: process.env.APPLE_PRIVATE_KEY,
      keyId: process.env.APPLE_KEY_ID
    }
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
  pages: {
    signIn: '/signIN',
  },
  callbacks: {
    async signIn(user, account, profile) {
      if (user.account.provider === 'google'||user.account.provider === 'facebook'||user.account.provider === 'apple') {
        const endpoint = 'https://stagingapi.aqarifinder.com/api/user/login/social'
        const response = await axios({
          method: 'post',
          url: endpoint,
          data: {
            social_id: user.account.providerAccountId,
            email: user.profile.email,
            name: user.profile.name
          },
          headers: { "Content-Type": "application/json" }
        });
        if (response.data.status.code === 200) {
          user.user.token = response.data.results.token;
        }
        else {
          user = undefined;
  
        }
      }

      if (user !== undefined) {
        return true;

      }
      else {
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
