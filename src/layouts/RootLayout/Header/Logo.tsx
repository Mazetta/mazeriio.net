import Link from "next/link"
import Image from "next/image"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <Image src={CONFIG.blog.icon} fill alt="" /> {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
