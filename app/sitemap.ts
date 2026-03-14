import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sanityprime.com",
      lastModified: new Date(),
    },
    {
      url: "https://sanityprime.com/services",
      lastModified: new Date(),
    },
  ];
}