import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENTID as string, // Get this from tina.io
  token: process.env.TINA_TOKEN as string, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "navigations",
        label: "Navigations",
        path: "navigations",
        format: "yml",
        fields: [
          {
            type: "number",
            name: "order",
            label: "#",
            required: true,
          },
          {
            type: "string",
            name: "label",
            label: "Label",
            required: true,
          },
          {
            type: "string",
            name: "anchor",
            label: "Anchor",
            required: true,
          },
        ],
      },
      {
        name: "intros",
        label: "Intros",
        path: "intros",
        format: "yml",
        fields: [
          {
            type: "number",
            name: "order",
            label: "#",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            required: true,
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "projects",
        format: "yml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
          },
          {
            type: "string",
            name: "label",
            label: "Label",
            required: true,
          },
          {
            type: "rich-text",
            name: "desc",
            label: "desc",
            isBody: true,
            required: true,
          },
        ],
      },
      {
        name: "links",
        label: "Links",
        path: "links",
        format: "yml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
          },
          {
            type: "string",
            name: "label",
            label: "Label",
            required: true,
          },
          {
            type: "string",
            name: "anchor",
            label: "Anchor",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "rich-text",
            name: "desc",
            label: "desc",
            isBody: false,
            required: true,
          },
        ],
      },
    ],
  },
});
