import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import useScheme from "src/hooks/useScheme"
import usePostQuery from "src/hooks/usePostQuery"
import usePostsQuery from "src/hooks/usePostsQuery"

type Props = {}

const NavButtons: React.FC<Props> = () => {
  const router = useRouter()
  const [scheme] = useScheme()
  const allPosts = usePostsQuery()

  const data = usePostQuery()
  if (!data) return null

  const currentIndex = allPosts.findIndex((p) => p.slug === data.slug)

  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <StyledWrapper data-count={(nextPost && previousPost) ? 2 : 1}>

      {previousPost && (
        <a onClick={() => router.push(`/${previousPost.slug}`)}>
          ← Last Post
        </a>
      )}

      {nextPost && (
        <a onClick={() => router.push(`/${nextPost.slug}`)}>
          Next Post →
        </a>
      )}

    </StyledWrapper>
  )
}

export default NavButtons

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &[data-count="1"] {
    justify-content: center;
  }
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-bottom: 1.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
