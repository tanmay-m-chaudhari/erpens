"use server"

import { supabaseAdmin } from "@/lib/supabase-admin"
import { revalidatePath } from "next/cache"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone,
          message,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
      }
    }

    revalidatePath("/")

    return {
      success: true,
      message: "Thank you! We'll get back to you soon.",
      data,
    }
  } catch (error) {
    console.error("Submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
