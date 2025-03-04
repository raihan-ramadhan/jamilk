"use server";

import { constantStrings } from "@/utils/constants";

export async function checkout(formData: FormData): Promise<{
  status: string;
}> {
  return { status: constantStrings("STATUS_SUCCESS") };
}
