import Link from "next/link"
import Image from "next/image"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <IconWrapper>
        <Image
          src={CONFIG.blog.icon}
          alt="Logo icon"
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </IconWrapper>
      <Title>{CONFIG.blog.title}</Title>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1;
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
`

const Title = styled.span`
  display: flex;
  align-items: center;
  line-height: 1;
`
