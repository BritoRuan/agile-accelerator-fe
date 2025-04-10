import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import { defineConfig } from "vite";

config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
  },
});
