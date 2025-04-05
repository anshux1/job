import { z } from "zod"

import { conpanyFoundingSchema, createCompanyInfoSchema } from "./schema"

export type InputTypeCompanyInfo = z.infer<typeof createCompanyInfoSchema>
export type InputTypeCompanyFounding = z.infer<typeof conpanyFoundingSchema>
