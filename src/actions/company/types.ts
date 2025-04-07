import { z } from "zod"

import { Company } from "@prisma/client"
import { ActionState } from "@/lib/create-action"
import { createCompanySchema } from "./schema"

export type InputTypeCreateCompany = z.infer<typeof createCompanySchema>
export type ReturnTypeCreateCompany = ActionState<
  InputTypeCreateCompany,
  Company
>
