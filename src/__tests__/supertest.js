const request = require("supertest");
const express = require("express");

const app = express();

const clientNodeAPI = "http://localhost:31000";

describe("client-node API route integration", () => {
  describe("GET /api/podList", () => {
    test("responds with application/json content type and 200 status", () =>
      request(clientNodeAPI)
        .get("/api/podList")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200));
  });
  describe("GET /api/nodeList", () => {
    test("responds with application/json content type and 200 status", () =>
      request(clientNodeAPI)
        .get("/api/nodeList")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200));
  });
});
