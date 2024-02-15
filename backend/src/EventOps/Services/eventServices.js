import { poolRequest, sql } from "../Database/dbConnect.js";
import { eventValidator } from "../Validator/eventsValidator.js";

// getGroupService
export const getEventService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Event");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addEventService = async (events) => {
    try {
        const { error } = eventValidator(events);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
        .input('EventID', sql.Int, events.EventID)
        .input('EventName', sql.VarChar, events.EventName)
        .input('Descri_ption', sql.VarChar, events.Descri_ption) 
        .input('EventDate', sql.DateTime, events.EventDate)    
        .input('Location', sql.VarChar(100), events.Location)  
        .input('EventPosterURL', sql.VarChar, events.EventPosterURL)
        .query("INSERT INTO Event (EventID, EventName, Descri_ption, EventDate, Location, EventPosterURL) VALUES (@EventID, @EventName, @Descri_ption, @EventDate, @Location, @EventPosterURL)");

        return result;
    } catch (error) {
        return error;
    }
};

