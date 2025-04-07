"use server"

import { headers } from "next/headers"

import { auth } from "@/lib/auth"
import { createAction } from "@/lib/create-action"
import prisma from "@/db"
import { createCompanySchema } from "./schema"
import { InputTypeCreateCompany, ReturnTypeCreateCompany } from "./types"

const createConpanyHandler = async (
  values: InputTypeCreateCompany,
): Promise<ReturnTypeCreateCompany> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const userId = session?.user.id
  if (!userId) return { error: "Unauthorized" }
  try {
    const userType = await prisma.user.findUnique({
      where: { id: userId },
      select: { type: true },
    })
    if (userType?.type !== "employer") {
      return { error: "Only employers can create a company." }
    }

    const data = await prisma.company.create({
      data: {
        logo: values.logo,
        banner: values.banner,
        name: values.companyName,
        about: values.about,
        email: values.companyEmail,
        yearOfEstablish: values.yearOfEstablish,
        teamSize: values.teamSize.toString(),
        website: values.companyWebsite,
        userId,
      },
    })
    return { data }
  } catch {
    return { error: "Failed to create company! Try again" }
  }
}

export const createCompany = createAction(
  createCompanySchema,
  createConpanyHandler,
)
