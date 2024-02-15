import { poolRequest, sql } from "../Database/dbConnect.js";
// getPostService
export const getPostService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Post");
        return result.recordset;
    } catch (error) {
        return error; // Return the entire error object for better debugging
    }
}

// addPostService
export const addPostService = async (post) => {
    try {
        const result = await poolRequest()
        .input('PostID', sql.Int, post.PostID)
        .input('UserID', sql.Int, post.UserID) // Fixed typo
        .input('Content', sql.VarChar, post.Content)
        .input('PostDate', sql.DateTime, post.PostDate) // Changed to DateTime
        .input('Likes', sql.Int, post.Likes) // Changed to Int
        .input('Comments', sql.Int, post.Comments) // Changed to Int
        .query("INSERT INTO Post (PostID, UserID, Content, PostDate, Likes, Comments) VALUES (@PostID, @UserID, @Content, @PostDate, @Likes, @Comments)");

        return result;
    } catch (error) {
        return error; // Return the entire error object for better debugging
    }
}


//