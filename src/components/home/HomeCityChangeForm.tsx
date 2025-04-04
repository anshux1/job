"use client"

import React from "react"
import { cities } from "@/constants/cities"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form } from "@/components/ui/form"
import { SelectField } from "@/components/FormFields"
import { changeLocationSchema } from "@/actions/user/schema"
import { InputTypeChangeCity } from "@/actions/user/types"

export const CityChangeForm = () => {
  const form = useForm<InputTypeChangeCity>({
    resolver: zodResolver(changeLocationSchema),
    defaultValues: {
      city: "Bangalore",
    },
  })
  const onSubmit = (input: InputTypeChangeCity) => {
    console.log(input)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <SelectField
          className="h-9 w-[120px] rounded-r-none border-none px-3 py-1.5 md:h-10 md:w-[140px]"
          control={form.control}
          name="city"
          options={cities.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </form>
    </Form>
  )
}
