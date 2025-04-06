"use client"

import { useId } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Building2, LucideIcon, UserRound } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { userTypeSchema } from "@/actions/user/schema"
import { InputTypeUserType } from "@/actions/user/types"

export function AuthSelectUserTypeForm() {
  const id = useId()
  const form = useForm<InputTypeUserType>({
    resolver: zodResolver(userTypeSchema),
  })
  const onSubmit = (data: InputTypeUserType) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-3"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  className="gap-2"
                >
                  <OptionCard
                    value="candidate"
                    icon={UserRound}
                    label="Candidate"
                    description="I'm looking for new job opportunities and want to connect with employers."
                    inputId={`${id}-1`}
                    descriptionId={`${id}-1-description`}
                  />
                  <OptionCard
                    value="employer"
                    icon={Building2}
                    label="Employer"
                    description="I'm hiring talent and want to post jobs and manage applications."
                    inputId={`${id}-2`}
                    descriptionId={`${id}-2-description`}
                  />
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button size="lg" className="self-end" type="submit">
          Continue
        </Button>
      </form>
    </Form>
  )
}

const OptionCard = ({
  value,
  icon: Icon,
  label,
  description,
  inputId,
  descriptionId,
}: {
  value: string
  icon: LucideIcon
  label: string
  description: string
  inputId: string
  descriptionId: string
}) => (
  <div className="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
    <RadioGroupItem
      value={value}
      id={inputId}
      aria-describedby={descriptionId}
      className="order-1 after:absolute after:inset-0"
    />
    <div className="flex grow items-center gap-3">
      <Icon className="size-7 stroke-1" />
      <div className="grid grow gap-2">
        <Label htmlFor={inputId}>{label}</Label>
        <p id={descriptionId} className="text-muted-foreground text-xs">
          {description}
        </p>
      </div>
    </div>
  </div>
)
