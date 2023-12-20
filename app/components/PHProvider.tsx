'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactElement } from 'react'

if (typeof window !== 'undefined') {
  posthog.init('<ph_project_api_key>', {
    api_host: '<ph_instance_address>'
  })
}

type LayoutProps = {
    children: ReactElement
}
export function PHProvider({ children }: LayoutProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}