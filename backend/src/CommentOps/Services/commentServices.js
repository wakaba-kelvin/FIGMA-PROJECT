import { poolRequest, sql } from "../Database/dbConnect.js";

export const getCommentService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Comment");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addCommentService = async (comment) => {
    try {
        const result = await poolRequest()
        .input('CommentID', sql.Int, comment.CommentID)
        .input('PostID', sql.Int, comment.PostID)
        .input('UserID', sql.Int, comment.UserID)
        .input('CommentDate', sql.DateTime, comment.CommentDate)
        .input('Content', sql.VarChar, comment.Content)
        .query("INSERT INTO Comment (CommentID, PostID, UserID, CommentDate, Content) VALUES (@CommentID, @PostID, @UserID, @CommentDate, @Content)");

        return result;
    } catch (error) {
        return error;
    }
}
