import { CONFIG } from "site.config"
import { useEffect } from "react"
import { useRef } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"

function Utterances() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scriptElement = document.createElement('script');
    const theme = `github-${scheme}`
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';
    scriptElement.src = 'https://utteranc.es/client.js';

    scriptElement.setAttribute('issue-term', 'pathname');
    scriptElement.setAttribute('label', 'comment');
    scriptElement.setAttribute(
      'repo',
      'Mazetta/mazeriio.net',
    );
    scriptElement.setAttribute(
      'theme',
      theme,
    );

    ref.current?.appendChild(scriptElement);
  }, []);

  return <div ref={ref} />;
}


export default Utterances

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`