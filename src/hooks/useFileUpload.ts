import { useCallback, useState } from "react"

import { useEdgeStore } from "@/lib/services/edgestore"

interface useFileUploadOptions {
  onSuccess?: (data: { url: string; type?: string }) => void
  onError?: (error: string) => void
  onComplete?: () => void
}
export const useFileUpload = (options?: useFileUploadOptions) => {
  const { edgestore } = useEdgeStore()
  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const uploadFile = useCallback(
    async (file: File, type?: string) => {
      if (!file) return
      setIsUploading(true)
      setProgress(0)
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            setProgress(progress)
          },
          options: {
            temporary: true,
          },
        })
        if (!res) {
          if (options?.onError) options.onError("Failed to upload file")
          return
        }
        if (res.url) {
          if (options?.onSuccess)
            options.onSuccess({
              url: res.url,
              type: type,
            })
        }
      } catch {
        return { Error: "Failed to upload file" }
      } finally {
        setIsUploading(false)
        if (options?.onComplete) options.onComplete()
      }
    },
    [edgestore],
  )

  return {
    progress,
    uploadFile,
    isUploading,
  }
}
