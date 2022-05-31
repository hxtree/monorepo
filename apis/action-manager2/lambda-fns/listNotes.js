"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
async function listNotes() {
    const params = {
        TableName: process.env.NOTES_TABLE,
    };
    try {
        const data = await docClient.scan(params).promise();
        return data.Items;
    }
    catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}
exports.default = listNotes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdE5vdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdE5vdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVwRCxLQUFLLFVBQVUsU0FBUztJQUNwQixNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7S0FDckMsQ0FBQTtJQUNELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0tBQ3BCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLE9BQU8sSUFBSSxDQUFBO0tBQ2Q7QUFDTCxDQUFDO0FBRUQsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xyXG5jb25zdCBkb2NDbGllbnQgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsaXN0Tm90ZXMoKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5OT1RFU19UQUJMRSxcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRvY0NsaWVudC5zY2FuKHBhcmFtcykucHJvbWlzZSgpXHJcbiAgICAgICAgcmV0dXJuIGRhdGEuSXRlbXNcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEeW5hbW9EQiBlcnJvcjogJywgZXJyKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3ROb3RlczsiXX0=