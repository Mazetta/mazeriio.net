import React, { ReactNode, useEffect, useState } from "react"
import { ThemeProvider } from "./ThemeProvider"
import useScheme from "src/hooks/useScheme"
import Header from "./Header"
import styled from "@emotion/styled"
import Scripts from "src/layouts/RootLayout/Scripts"
import useGtagEffect from "./useGtagEffect"
import Prism from "prismjs/prism"
import { Global, css } from "@emotion/react" 
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-js-templates.js'
import 'prismjs/components/prism-coffeescript.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-git.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-graphql.js'
import 'prismjs/components/prism-handlebars.js'
import 'prismjs/components/prism-less.js'
import 'prismjs/components/prism-makefile.js'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/components/prism-objectivec.js'
import 'prismjs/components/prism-ocaml.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-reason.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-solidity.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-stylus.js'
import 'prismjs/components/prism-swift.js'
import 'prismjs/components/prism-wasm.js'
import 'prismjs/components/prism-yaml.js'
import "prismjs/components/prism-go.js"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  const [scheme] = useScheme()
  const [mounted, setMounted] = useState(false)
  const [prevScheme, setPrevScheme] = useState(scheme)

  useGtagEffect()

  // Highlight PrismJS + set mounted = true
  useEffect(() => {
    Prism.highlightAll()
    setMounted(true) // ✅ déclenche l'ajout du wrapper pour transition
  }, [])

  // Met à jour le theme seulement après mount pour éviter flicker
  useEffect(() => {
    if (mounted && prevScheme !== scheme) {
      document.body.dataset.theme = scheme // ✅ applique le theme
      setPrevScheme(scheme)
    }
  }, [scheme, mounted, prevScheme])

  return (
    <ThemeProvider scheme={scheme}>
      {/* ✅ Global CSS : transition activée uniquement après le mount */}
      <Global
        styles={css`
          /* Pas de transition avant mount pour éviter flicker initial */
          body, * {
            transition: none !important;
          }

          /* Transition fade type Vercel après mount */
          [data-mounted="true"] * {
            transition: background-color 0.15s ease, color 0.15s ease;
          }
        `}
      />

      {/* ✅ Wrapper avec data-mounted pour activer la transition seulement après mount */}
      <div data-mounted={mounted}>
        <Scripts />
        <Header fullWidth={false} />
        <StyledMain>{children}</StyledMain>
      </div>
    </ThemeProvider>
  )
}

export default RootLayout

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`
