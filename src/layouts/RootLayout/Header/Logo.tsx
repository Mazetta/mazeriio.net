import Link from "next/link"
import Image from "next/image"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <IconWrapper>
        <Image src={CONFIG.blog.icon} alt="" width={16} height={16} />
      </IconWrapper> 
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo
const IconWrapper = styled.span``
const StyledWrapper = styled(Link)``
