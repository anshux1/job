import { z } from "zod"

import { changeLocationSchema } from "./schema"

export type InputTypeChangeCity = z.infer<typeof changeLocationSchema>
