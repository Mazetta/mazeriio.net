import React from "react"
import styled from "@emotion/styled"
import usePostQuery from "src/hooks/usePostQuery"
import useScheme from "src/hooks/useScheme"

import {
  BlueskyShareButton,
  TwitterShareButton,
  ThreadsShareButton,
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  BlueskyIcon,
  XIcon,
  ThreadsIcon,
  EmailIcon,
  RedditIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share"

type Props = {}

const ShareButtons: React.FC<Props> = () => {
  const data = usePostQuery()
  const [scheme] = useScheme()

  if (!data) return null

  const postUrl = `${typeof window !== "undefined" ? window.location.href : ""}`
  const title = data.title || "The Word of Maz"

  const handleRedditShare = () => {
    const width = 660
    const height = 460
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`
    window.open(redditUrl,"RedditShare",`width=${width},height=${height},top=${top},left=${left},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`)
  }

  return (
    <ShareSection>

      {/* X */}
      <TooltipWrapper>
        <span>Share on X</span>
        <TwitterShareButton url={postUrl} title={title}>
          <XIcon size={24} round />
        </TwitterShareButton>
      </TooltipWrapper>

      {/* Reddit */}
      <TooltipWrapper>
        <span>Share on Reddit</span>
        <CustomButton onClick={handleRedditShare}>
          <RedditIcon size={24} round />
        </CustomButton>
      </TooltipWrapper>

      {/* WhatsApp */}
      <TooltipWrapper>
        <span>Share on WhatsApp</span>
        <WhatsappShareButton url={postUrl} title={title}>
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>
      </TooltipWrapper>

      {/* Facebook */}
      <TooltipWrapper>
        <span>Share on Facebook</span>
        <FacebookShareButton url={postUrl} title={title}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>
      </TooltipWrapper>

      {/* Threads */}
      <TooltipWrapper>
        <span>Share on Threads</span>
        <ThreadsShareButton url={postUrl} title={title}>
          <ThreadsIcon size={24} round />
        </ThreadsShareButton>
      </TooltipWrapper>

      {/* Bluesky */}
      <TooltipWrapper>
        <span>Share on Bluesky</span>
        <BlueskyShareButton url={postUrl} title={title}>
          <BlueskyIcon size={24} round />
        </BlueskyShareButton>
      </TooltipWrapper>

      {/* Email */}
      <TooltipWrapper>
        <span>Email</span>
        <EmailShareButton url={postUrl} subject={title}>
          <EmailIcon size={24} round />
        </EmailShareButton>
      </TooltipWrapper>

    </ShareSection>
    )
}

export default ShareButtons

const ShareSection = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.75rem 0 1.25rem 0;
  align-items: center;
`

const CustomButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-items: center;
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
