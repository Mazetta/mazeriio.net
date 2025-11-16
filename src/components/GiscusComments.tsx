import Giscus from "@giscus/react"
import useScheme from "src/hooks/useScheme"
import { useEffect } from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

const GiscusComments: React.FC = () => {
  const [scheme] = useScheme()
  const router = useRouter()

  useEffect(() => {
    const theme = `github-${scheme}`
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return
      script.setAttribute("src", "https://giscus.app/client.js")
      script.setAttribute("repo", "Mazetta/mazeriio.net")
      script.setAttribute("repoid", "R_kgDOQQyKPQ")
      script.setAttribute("category", "Comments")
      script.setAttribute("categoryid", "DIC_kwDOQQyKPc4Cx1DI")
      script.setAttribute("mapping", "og:title")
      script.setAttribute("reactionsenabled", "1")
      script.setAttribute("emitmetadata", "0")
      script.setAttribute("inputposition", "top")
      script.setAttribute("theme", theme)
      script.setAttribute("loading", "lazy")
      script.setAttribute("lang", "en")
      script.setAttribute("crossorigin", "anonymous")
      script.setAttribute("async", `true`)
      anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ""
    }
  }, [scheme, router])
  return (
    <>
      <StyledWrapper id="comments">
        <div className="giscus-frame"></div>
      </StyledWrapper>
    </>
  )
}

export default GiscusComments

const StyledWrapper = styled.div``