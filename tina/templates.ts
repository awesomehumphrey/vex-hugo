import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
  ] as TinaField[];
}
export function productFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "price",
      label: "price",
    },
    {
      type: "string",
      name: "discount_price",
      label: "discount_price",
    },
    {
      type: "string",
      name: "colors",
      label: "colors",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "sizes",
      label: "sizes",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
