import { CONFIG } from "site.config"
import { useEffect } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"

//TODO: useRef?

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  const [scheme] = useScheme()
  const router = useRouter()

  useEffect(() => {
    const theme = `github-${scheme}`
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return

    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", `true`)
    script.setAttribute("issue-term", issueTerm)
    script.setAttribute("theme", theme)
    const config: Record<string, string> = CONFIG.utterances.config
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ""
    }
  }, [scheme, router])
  return (
    <>
      <StyledWrapper id="comments">
        <div className="utterances-frame"></div>
      </StyledWrapper>
    </>
  )
}

export default Utterances

const StyledWrapper = styled.div`
  margin-bottom: 0;

  @media (min-width: 768px) {
    margin-left: -4rem;
  }

  .utterances-frame {
    /* let the injected iframe determine its height so we don't create an artificial gap */
    min-height: 0;
    overflow: visible;
  }

  /* ensure the iframe can shrink/expand naturally and doesn't add extra space */
  .utterances-frame iframe {
    display: block;
    width: 100%;
    height: auto;
    min-height: 0;
  }
`
