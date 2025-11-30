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
      <TwitterShareButton url={postUrl} title={title}>
        <XIcon size={24} round />
      </TwitterShareButton>

      <CustomButton onClick={handleRedditShare}>
        <RedditIcon size={24} round />
      </CustomButton>

      <WhatsappShareButton url={postUrl} title={title}>
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <FacebookShareButton url={postUrl} title={title}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>


      <ThreadsShareButton url={postUrl} title={title}>
        <ThreadsIcon size={24} round />
      </ThreadsShareButton>

      <BlueskyShareButton url={postUrl} title={title}>
        <BlueskyIcon size={24} round />
      </BlueskyShareButton>

      <EmailShareButton url={postUrl} subject={title}>
        <EmailIcon size={24} round />
      </EmailShareButton>
    </ShareSection>
    )
}

export default ShareButtons

const ShareSection = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0 1.25rem 0;
  align-items: center;
`

const CustomButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-items: center;
`
