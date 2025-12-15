import * as yup from "yup";

export const createRssUrlSchema = (existingUrls) => {
  const urlSet = new Set(existingUrls.map((u) => u.trim().toLowerCase()));

  return yup
    .string()
    .trim()
    .required("RSS URL is required")
    .url("Must be a valid URL")
    .test("not-duplicate", "RSS feed already exists", (value) => {
      if (!value) return true;
      return !urlSet.has(value.toLowerCase());
    });
};
