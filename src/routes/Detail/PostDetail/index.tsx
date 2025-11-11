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
  ThreadsShareButton,
  EmailShareButton,
  BlueskyIcon,
  XIcon,
  ThreadsIcon,
  EmailIcon,
} from "react-share"
import { RedditShare } from "react-share-kit"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined
  const postUrl = `${typeof window !== "undefined" ? window.location.href : ""}`
  const title = data.title || "The Word of Maz"

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

        <ShareSection>

          <BlueskyShareButton url={postUrl} title={title}>
            <BlueskyIcon size={24} round />
          </BlueskyShareButton>

          <TwitterShareButton url={postUrl} title={title}>
            <XIcon size={24} round color="gray" />
          </TwitterShareButton>

          <ThreadsShareButton url={postUrl} title={title}>
            <ThreadsIcon size={24} round />
          </ThreadsShareButton>

          <RedditShare url={postUrl} title={title} size={24} round />
          
          <EmailShareButton url={postUrl} subject={title}>
            <EmailIcon size={24} round />
          </EmailShareButton>

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
  gap: 0.5rem;
  margin: 1.5rem 0;
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
