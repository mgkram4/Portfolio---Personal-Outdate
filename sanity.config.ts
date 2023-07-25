import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "Sanity Project",

  projectId: "ibq8a34o",
  dataset: "production",

  plugins: [deskTool(), visionTool()],
});
