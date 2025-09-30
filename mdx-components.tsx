import type { MDXComponents } from 'mdx/types'
import { Img, Callout, ButtonLink } from '@/components/MDX'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: Img,
    Callout,
    ButtonLink,
    ...components,
  }
}
