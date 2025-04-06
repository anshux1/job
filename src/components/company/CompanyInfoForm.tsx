"use client"

import React, { useCallback, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Editor } from "@tiptap/react"
import { CloudUpload } from "lucide-react"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { DateField, InputField } from "@/components/FormFields"
import { createCompanyInfoSchema } from "@/actions/company/schema"
import { InputTypeCompanyInfo } from "@/actions/company/types"

const MinimalTiptapEditor = dynamic(
  () => import("@/components/minimal-tiptap/minimal-tiptap"),
  {
    ssr: false,
  },
)

export const CompanyInfoForm = () => {
  const editorRef = useRef<Editor | null>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)
  const [banner, setBannner] = useState<File | null>(null)
  const [logo, setLogo] = useState<File | null>(null)
  const form = useForm<InputTypeCompanyInfo>({
    resolver: zodResolver(createCompanyInfoSchema),
    defaultValues: {
      companyName: "",
      about: "",
      banner: "",
      logo: "",
    },
  })
  const onSubmit = (data: InputTypeCompanyInfo) => {
    console.log("DAta: ", data)
  }

  const getPreview = (file: File | null) =>
    file ? URL.createObjectURL(file) : undefined

  const handleCreate = useCallback(
    ({ editor }: { editor: Editor }) => {
      if (form.getValues("about") && editor.isEmpty) {
        editor.commands.setContent(form.getValues("about"))
      }
      editorRef.current = editor
    },
    [form],
  )
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <h1 className="dark:text-secondary-foreground mb-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create Your Company Profile
        </h1>
        <p className="text-muted-foreground mb-2 max-w-2xl text-xs">
          Welcome to the first step in hiring top talent! Before you can post
          jobs, let’s set up your company profile.
        </p>
        <div className="my-2 flex h-44 w-full gap-4 md:h-52">
          <FileUploadBox
            className="md:w-2/5"
            label="Upload Logo"
            onFileSelect={setLogo}
            inputRef={logoInputRef}
            preview={getPreview(logo)}
          />
          <FileUploadBox
            className="md:w-3/5"
            label="Upload Banner"
            onFileSelect={setBannner}
            inputRef={bannerInputRef}
            preview={getPreview(banner)}
          />
        </div>
        <InputField
          label="Company Name"
          control={form.control}
          name="companyName"
        />
        <div className="my-3 flex w-full flex-col gap-2 md:flex-row">
          <div className="flex-1">
            <InputField
              control={form.control}
              name="companyEmail"
              label="Company Email"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <InputField
                control={form.control}
                name="teamSize"
                label="Team Size"
                placeholder="e.g. 50-100"
              />
            </div>
            <DateField
              className="h-10 min-w-[180px]"
              label="Year of Establishment"
              control={form.control}
              name="yearOfEstablish"
            />
          </div>
        </div>
        <InputField
          control={form.control}
          name="companyWebsite"
          label="Company Website"
          placeholder="https://example.com"
        />
        <h3 className="mt-2 mb-1 text-sm font-medium">About Us</h3>
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MinimalTiptapEditor
                  {...field}
                  throttleDelay={0}
                  className={cn("minimal-tiptap w-full", {
                    "border-destructive focus-within:border-destructive":
                      form.formState.errors.about,
                  })}
                  editorContentClassName="some-class"
                  output="html"
                  placeholder="Write down about your company here. Let the candidates know who we are..."
                  onCreate={handleCreate}
                  immediatelyRender={true}
                  editable={true}
                  injectCSS={true}
                  editorClassName="focus:outline-none p-5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2 w-fit self-end" size="lg">
          <p>Save & Next</p>
          <ArrowRightIcon />
        </Button>
      </form>
    </Form>
  )
}

interface FileUploadBoxProps {
  label: string
  onFileSelect: (file: File) => void
  inputRef: React.RefObject<HTMLInputElement | null>
  preview?: string
  className?: string
}

const FileUploadBox = ({
  label,
  onFileSelect,
  inputRef,
  preview,
  className,
}: FileUploadBoxProps) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <h3 className="text-sm">{label}</h3>
      {preview ? (
        <img
          src={preview}
          alt={label}
          className="border-grid h-52 w-full border object-contain object-center"
        />
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className={cn(
            "border-grid flex h-52 cursor-pointer flex-col items-center justify-center gap-3 rounded-md border",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                onFileSelect(e.target.files[0])
              }
            }}
          />
          <CloudUpload />
          <p className="text-sm font-semibold">Browse photo</p>
          <p className="text-muted-foreground w-4/5 text-center text-xs">
            A photo larger than 400 pixels works best. Max photo size 5 MB
          </p>
        </div>
      )}
    </div>
  )
}
