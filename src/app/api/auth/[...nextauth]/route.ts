import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

// comment for new commit
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error('Missing Google OAuth credentials');
}

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt' 
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    // // callback we care most about is sign in callback, 
    // callbacks: {
    //     async signIn({ account, profile }) {
    //         if (!profile?.email){
    //             throw new Error('No profile')
    //         }

    //         await // people use DB to check user and email, we would need to use s3 here.
    //     }
    // }
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }