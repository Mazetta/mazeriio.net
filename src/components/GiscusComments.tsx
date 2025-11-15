import Giscus from '@giscus/react';
import useScheme from 'src/hooks/useScheme';

export default function GiscusComments() {
    const [scheme] = useScheme()
    const theme = `github-${scheme}`;
  return (
    <Giscus
      id="comments"
      repo="Mazetta/mazeriio.net"
      repoId="R_kgDOQQyKPQ"
      category="Comments"
      categoryId="DIC_kwDOQQyKPc4Cx1DI"
      mapping="og:title"
      term="Giscus Comments"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    /> 
  );
}