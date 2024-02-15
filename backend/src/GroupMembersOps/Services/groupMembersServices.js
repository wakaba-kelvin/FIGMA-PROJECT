import { poolRequest, sql } from "../Database/dbConnect.js";
import { groupMemberValidator } from "../Validator/groupMembersValidator.js";

// getGroupService
export const getGroupMemberService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM GroupMembers");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addGroupMemberService = async (groupmember) => {
    try {
        const { error } = groupMemberValidator(groupmember);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
            .input('GroupID', sql.Int, groupmember.GroupID)
            .input('MemberID', sql.Int, groupmember.MemberID)
            .query("INSERT INTO GroupMembers (GroupID, MemberID) VALUES (@GroupID, @MemberID)");

        return result;
    } catch (error) {
        return error;
    }
};

