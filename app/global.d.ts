import { Database as TweetDB } from "@/lib/database.types";

type Tweet = TweetDB["public"]["Tables"]["tweets"]["Row"]; 
type Profile = TweetDB["public"]["Tables"]["profiles"]["Row"]; 

declare global {
    type Database = TweetDB;

    type TweetWithAuthor = Tweet & {
        author: Profile; 
        likes: number; 
        user_has_liked_tweet: boolean; 
    };
}