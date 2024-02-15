import { poolRequest, sql } from "../Database/dbConnect.js";

export const getUserService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Users");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addUserService = async (user) => {
    try {
        const result = await poolRequest()
        .input('UserID', sql.Int, user.UserID)
        .input('Username', sql.VarChar, user.Username)
        .input('Email', sql.VarChar, user.Email)
        .input('Password', sql.VarChar, user.Password)
        .input('TagName', sql.VarChar, user.TagName)
        .input('Location', sql.VarChar, user.Location)
        .query("INSERT INTO Users (UserID, Username, Email, Password, TagName, Location) VALUES (@UserID, @Username, @Email, @Password, @TagName, @Location)");

        return result;
    } catch (error) {
        return error;
    }
}
