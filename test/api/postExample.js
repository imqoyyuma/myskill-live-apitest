const request = require("supertest");
const baseUrl = require("../../env");

describe("Post Request Example", () => {
    it("Success create user", async () => {
        const response = request(baseUrl()).post("/user").send({
            id: 12345,
            username: "imqoyyuma",
            firstName: "IIF",
            lastName: "MQ",
            email: "if.al.mq@gmail.com",
            password: "123456",
            phone: "081234567890",
            userStatus: 1,
        });
        console.log((await response).status);
        console.log((await response).body);
    });
});
