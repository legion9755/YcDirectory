import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z.string().url().refine((url) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    return imageExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  }, "The URL must point to a valid image file"),
  pitch: z.string().min(10),
});