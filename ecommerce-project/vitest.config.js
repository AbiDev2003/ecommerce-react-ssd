import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
    // server: {
    //   deps: {
    //     inline: ["@testing-library/react", "@testing-library/user-event"],
    //   },
    // },
  },
});
