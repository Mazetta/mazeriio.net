import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import NavButtons from "./NavButtons"
import CommentBox from "./CommentBox"
import Category from "src/components/Category"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
import useScheme from "src/hooks/useScheme"
import {
  BlueskyShareButton,
  TwitterShareButton,
  ThreadsShareButton,
  EmailShareButton,
  BlueskyIcon,
  XIcon,
  ThreadsIcon,
  RedditIcon,
  EmailIcon,
} from "react-share"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()
  const [scheme] = useScheme()


  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined
  const postUrl = `${typeof window !== "undefined" ? window.location.href : ""}`
  const title = data.title || "The Word of Maz"

   const handleRedditShare = () => {
    const width = 660
    const height = 460
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
      postUrl
    )}&title=${encodeURIComponent(title)}`
    window.open(
      redditUrl,
      "RedditShare",
      `width=${width},height=${height},top=${top},left=${left},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`
    )
  }

  return (
    <StyledWrapper>
      <article>
        {data.type[0] === "Post" && <NavButtons />}
        {category && (
          <div css={{ marginBottom: "0.5rem" }}>
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}

        {data.type[0] === "Post" && <ShareSection>
          <TooltipWrapper>
            <span>Share on Bluesky</span>
            <BlueskyShareButton url={postUrl} title={title}>
              <BlueskyIcon size={24} round />
            </BlueskyShareButton>
          </TooltipWrapper>

          <TooltipWrapper>
            <span>Share on X</span>
            <TwitterShareButton url={postUrl} title={title}>
              <XIcon size={24} round />
            </TwitterShareButton>
          </TooltipWrapper>

          <TooltipWrapper>
            <span>Share on Threads</span>
            <ThreadsShareButton url={postUrl} title={title}>
              <ThreadsIcon size={24} round />
            </ThreadsShareButton>
          </TooltipWrapper>

          <TooltipWrapper>
            <span>Share on Reddit</span>
            <CustomRedditButton onClick={handleRedditShare}>
              <RedditIcon size={24} round />
            </CustomRedditButton>
          </TooltipWrapper>

          <TooltipWrapper>
            <span>Share via Email</span>
            <EmailShareButton url={postUrl} subject={title}>
              <EmailIcon size={24} round />
            </EmailShareButton>
          </TooltipWrapper>

        </ShareSection>}

        <div>
          <NotionRenderer recordMap={data.recordMap} />
        </div>

        {data.type[0] === "Post" && (
          <>
            <CommentBox data={data} />
            <Footer />
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
  margin: 0.75rem 0 1.25rem 0;
  align-items: center;
`

const CustomRedditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
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

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -4px);
  }

  span {
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translate(-50%, 0);
    padding: 4px 8px;

    background: ${({ theme }) =>
      theme.scheme === "light"
        ? "rgba(0,0,0,0.75)"
        : "rgba(255,255,255,0.85)"};

    color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : "black"};

    font-size: 0.75rem;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    pointer-events: none;
  }
`
