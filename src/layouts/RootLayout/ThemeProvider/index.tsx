import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { Global } from "./Global"
import { createTheme } from "src/styles"
import { SchemeType } from "src/types"

type Props = {
  scheme: SchemeType
  children?: React.ReactNode
}

export const ThemeProvider = ({ scheme, children }: Props) => {
  const theme = createTheme({ scheme })

  return (
    <_ThemeProvider theme={theme}>
      {/* ✅ Global contient déjà les styles de base */}
      <Global />

      {/* ✅ Ajouter un data-theme sur le body pour que les transitions CSS fonctionnent */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof document !== 'undefined') {
              document.body.dataset.theme = '${scheme}';
            }
          `,
        }}
      />

      {children}
    </_ThemeProvider>
  )
}