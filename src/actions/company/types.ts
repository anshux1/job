import { z } from "zod"

import { createCompanyInfoSchema } from "./schema"

export type InputTypeCompanyInfo = z.infer<typeof createCompanyInfoSchema>
