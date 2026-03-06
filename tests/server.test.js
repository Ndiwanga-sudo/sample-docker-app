const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Docker!");
});

describe("GET /", () => {
  it("should return 'Hello from Docker!'", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello from Docker!");
    expect(res.statusCode).toBe(200);
  });
});