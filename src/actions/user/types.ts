import { z } from "zod"

import { changeLocationSchema, userTypeSchema } from "./schema"

export type InputTypeChangeCity = z.infer<typeof changeLocationSchema>

export type InputTypeUserType = z.infer<typeof userTypeSchema>
