import * as React from "react"
import type { Content, Editor } from "@tiptap/react"
import { EditorContent } from "@tiptap/react"

import { cn } from "@/lib/utils"
import { LinkBubbleMenu } from "./components/bubble-menu/link-bubble-menu"
import { MeasuredContainer } from "./components/measured-container"
import { SectionFour } from "./components/section/four"
import { SectionOne } from "./components/section/one"
import { SectionThree } from "./components/section/three"
import { SectionTwo } from "./components/section/two"
import type { UseMinimalTiptapEditorProps } from "./hooks/use-minimal-tiptap"
import { useMinimalTiptapEditor } from "./hooks/use-minimal-tiptap"

export interface MinimalTiptapProps
  extends Omit<UseMinimalTiptapEditorProps, "onUpdate"> {
  value?: Content
  onChange?: (value: Content) => void
  className?: string
  editorContentClassName?: string
  showToolbar?: boolean
}

const Toolbar = ({ editor }: { editor: Editor }) => (
  <div className="border-border shrink-0 overflow-x-auto border-b p-2">
    <div className="flex w-max items-center gap-px">
      <SectionOne editor={editor} activeLevels={[1, 2, 3, 4, 5, 6]} />
      <SectionTwo
        editor={editor}
        activeActions={[
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          "clearFormatting",
        ]}
        mainActionCount={3}
      />
      <SectionThree editor={editor} />
      <SectionFour
        editor={editor}
        activeActions={["orderedList", "bulletList"]}
        mainActionCount={0}
      />
    </div>
  </div>
)

export const MinimalTiptapEditor = React.forwardRef<
  HTMLDivElement,
  MinimalTiptapProps
>(
  (
    {
      value,
      onChange,
      className,
      showToolbar = true,
      editorContentClassName,
      ...props
    },
    ref,
  ) => {
    const editor = useMinimalTiptapEditor({
      value,
      onUpdate: onChange,
      ...props,
    })

    if (!editor) {
      return null
    }

    return (
      <MeasuredContainer
        as="div"
        name="editor"
        ref={ref}
        className={cn(className)}
      >
        {showToolbar && <Toolbar editor={editor} />}
        <EditorContent
          editor={editor}
          className={cn("minimal-tiptap-editor", editorContentClassName)}
        />
        <LinkBubbleMenu editor={editor} />
      </MeasuredContainer>
    )
  },
)

MinimalTiptapEditor.displayName = "MinimalTiptapEditor"

export default MinimalTiptapEditor
