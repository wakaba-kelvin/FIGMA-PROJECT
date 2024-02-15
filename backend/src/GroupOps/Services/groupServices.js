import { poolRequest, sql } from "../Database/dbConnect.js";
import { groupValidator } from "../Validator/groupValidator.js";

// getGroupService
export const getGroupService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM GroupTable");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addGroupService = async (group) => {
    try {
        const { error } = groupValidator(group);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
            .input('GroupID', sql.Int, group.GroupID)
            .input('GroupName', sql.VarChar(255), group.GroupName)
            .input('Description', sql.Text, group.Description)
            .input('CreatedDate', sql.DateTime, group.CreatedDate)
            .query("INSERT INTO GroupTable (GroupID, GroupName, Description, CreatedDate) VALUES (@GroupID, @GroupName, @Description, @CreatedDate)");

        return result;
    } catch (error) {
        return error;
    }
};

