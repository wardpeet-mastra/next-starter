"use server";

import { mastra } from "@/mastra";
import { z } from "zod";

// Server Action
export async function getWeatherStream(prevState: any, formData: FormData) {
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const result = await mastra
    .getAgent("weatherAgent")
    .generate(`tell me the weather in ${city}, ${country}`, {
      output: z.object({
        city: z.string(),
        country: z.string(),
        details: z.string(),
      }),
    });

  console.log(result);
  return {
    message: result.object,
  };
}
