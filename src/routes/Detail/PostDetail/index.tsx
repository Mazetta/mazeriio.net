import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "src/components/Category"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
import {
  BlueskyShareButton,
  TwitterShareButton,
  RedditShareButton,
  ThreadsShareButton,
  BlueskyIcon,
  TwitterIcon,
  RedditIcon,
  ThreadsIcon,
} from "react-share"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined
  const postUrl = `${typeof window !== "undefined" ? window.location.href : ""}`
  const title = data.title || "Partager cet article"

  return (
    <StyledWrapper>
      <article>
        {category && (
          <div css={{ marginBottom: "0.5rem" }}>
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        <div>
          <NotionRenderer recordMap={data.recordMap} />
        </div>

        {/* --- Section partage --- */}
        <ShareSection>

          <BlueskyShareButton url={postUrl}>
            <BlueskyIcon size={32} />
          </BlueskyShareButton>

          <TwitterShareButton url={postUrl} title={title}>
            <TwitterIcon size={32} />
          </TwitterShareButton>

          <RedditShareButton url={postUrl} title={title}>
            <RedditIcon size={32} />
          </RedditShareButton>

          <ThreadsShareButton url={postUrl} title={title}>
            <ThreadsIcon size={32} />
          </ThreadsShareButton>

        </ShareSection>

        {data.type[0] === "Post" && (
          <>
            <Footer />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const ShareSection = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 2rem 0;
  align-items: center;
`

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`
