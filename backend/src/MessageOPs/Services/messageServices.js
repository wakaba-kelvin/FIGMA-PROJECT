import { poolRequest, sql } from "../Database/dbConnect.js";

// getMessageService
export const getMessageService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Message");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addMessageService
export const addMessageService = async (message) => {
    try {
        const result = await poolRequest()
            .input('MessageID', sql.Int, message.MessageID)
            .input('SenderID', sql.Int, message.SenderID)
            .input('ReceiverID', sql.Int, message.ReceiverID)
            .input('MessageDate', sql.DateTime, message.MessageDate)
            .input('Content', sql.Text, message.Content)
            .query("INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate, Content) VALUES (@MessageID, @SenderID, @ReceiverID, @MessageDate, @Content)");

        return result;
    } catch (error) {
        return error;
    }
}
