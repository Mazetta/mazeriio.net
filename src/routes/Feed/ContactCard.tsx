import styled from "@emotion/styled"
import React from "react"
import { FaEnvelope, FaBluesky, FaXTwitter, FaRss, FaYoutube, FaGithub } from "react-icons/fa6"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const FaEnvelopeIcon = FaEnvelope as unknown as React.ComponentType<any>
const FaBlueskyIcon = FaBluesky as unknown as React.ComponentType<any>
const FaXTwitterIcon = FaEnvelope as unknown as React.ComponentType<any>
const FaRssIcon = FaRss as unknown as React.ComponentType<any>
const FaYoutubeIcon = FaYoutube as unknown as React.ComponentType<any>
const FaGithubIcon = FaGithub as unknown as React.ComponentType<any>

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledWrapper>
      {CONFIG.profile.rss && (
          <a
            href={`${CONFIG.profile.rss}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaRssIcon className="icon" />
            <div className="name">RSS</div>
          </a>
        )}
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <FaEnvelopeIcon className="icon" />
            <div className="name">Email</div>
          </a>
        {CONFIG.profile.bluesky && (
          <a
            href={`https://bsky.app/profile/${CONFIG.profile.bluesky}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaBlueskyIcon className="icon" />
            <div className="name">Bluesky</div>
          </a>
        )}
        {CONFIG.profile.twitter && (
          <a
            href={`https://x.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaXTwitterIcon className="icon" />
            <div className="name">X</div>
          </a>
        )}
        {CONFIG.profile.youtube && (
          <a
            href={`https://www.youtube.com/${CONFIG.profile.youtube}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaYoutubeIcon className="icon" />
            <div className="name">YouTube</div>
          </a>
        )}
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithubIcon className="icon" />
            <div className="name">GitHub</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
