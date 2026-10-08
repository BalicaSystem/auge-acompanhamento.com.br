import dotenv from "dotenv";
import type { Config } from "jest";
import nextJest from "next/jest.js";

dotenv.config({
  path: ".env.development",
});

const createJestConfig = nextJest({
  dir: ".",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>"],
};

export default createJestConfig(config);
