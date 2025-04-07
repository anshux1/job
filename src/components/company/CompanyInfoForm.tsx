"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Editor } from "@tiptap/react"
import { CloudUpload, Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useAction } from "@/hooks/useAction"
import { useFileUpload } from "@/hooks/useFileUpload"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { DateField, InputField } from "@/components/FormFields"
import { createCompany } from "@/actions/company"
import { createCompanySchema } from "@/actions/company/schema"
import { InputTypeCreateCompany } from "@/actions/company/types"

const MinimalTiptapEditor = dynamic(
  () => import("@/components/minimal-tiptap/minimal-tiptap"),
  { ssr: false },
)

type ImgType = {
  file: File | null
  type: "logo" | "banner"
}

export const CompanyInfoForm = () => {
  const editorRef = useRef<Editor | null>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)
  const [img, setImg] = useState<ImgType>({ file: null, type: "logo" })

  const form = useForm<InputTypeCreateCompany>({
    resolver: zodResolver(createCompanySchema),
    defaultValues: {
      companyName: "",
      about: "",
      banner: "",
      logo: "",
    },
  })

  const { uploadFile } = useFileUpload({
    onSuccess: (data) => {
      form.setValue(img.type, data.url)
    },
  })

  const { execute, isLoading } = useAction(createCompany, {
    onSuccess: () => {
      toast.success("Company created successfully")
    },
    onError: () => {
      toast.error("Failed to create company")
    },
  })

  useEffect(() => {
    if (img.file && img.type) uploadFile(img.file, img.type)
  }, [img, uploadFile])

  const handleCreate = useCallback(
    ({ editor }: { editor: Editor }) => {
      if (form.getValues("about") && editor.isEmpty) {
        editor.commands.setContent(form.getValues("about"))
      }
      editorRef.current = editor
    },
    [form],
  )
  const handleImageDelete = (type: ImgType["type"]) => form.setValue(type, "")
  const onSubmit = (data: InputTypeCreateCompany) => {
    execute(data)
  }
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
        <div className="my-2 flex max-h-52 w-full gap-4">
          <FileUploadBox
            className="md:w-2/5"
            label="Upload Logo"
            type="logo"
            onFileSelect={setImg}
            inputRef={logoInputRef}
            preview={form.getValues("logo")}
            deleteImg={handleImageDelete}
          />
          <FileUploadBox
            className="md:w-3/5"
            label="Upload Banner"
            onFileSelect={setImg}
            type="banner"
            inputRef={bannerInputRef}
            preview={form.getValues("banner")}
            deleteImg={handleImageDelete}
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
        <Button disabled={isLoading} className="mt-2 w-fit self-end" size="lg">
          <p>Save & Next</p>
          <ArrowRightIcon />
        </Button>
      </form>
    </Form>
  )
}

interface FileUploadBoxProps {
  label: string
  onFileSelect: React.Dispatch<React.SetStateAction<ImgType>>
  inputRef: React.RefObject<HTMLInputElement | null>
  preview?: string
  className?: string
  type: ImgType["type"]
  deleteImg: (type: ImgType["type"]) => void
}

const FileUploadBox = ({
  label,
  onFileSelect,
  inputRef,
  preview,
  className,
  type,
  deleteImg,
}: FileUploadBoxProps) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <h3 className="text-sm">{label}</h3>
      {preview ? (
        <div className="relative mb-10 max-h-52">
          <Image
            src={preview}
            alt={label}
            width={400}
            height={10}
            className="h-44 w-full object-contain object-center"
          />
          <div className="absolute right-0 bottom-0 z-20 cursor-pointer text-red-800">
            <Trash
              onClick={() => {
                deleteImg(type)
              }}
            />
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className={cn(
            "border-grid flex h-44 cursor-pointer flex-col items-center justify-center gap-3 rounded-md border",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0]
                if (file.size > 5 * 1024 * 1024) {
                  toast.error("File size exceeds 5 MB")
                  return
                }
                onFileSelect({
                  file: e.target.files[0],
                  type,
                })
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
