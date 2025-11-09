import { useEffect, useRef } from "react"

const Utterances = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://utteranc.es/client.js"
    script.async = true
    script.crossOrigin = "anonymous"

    // Ton repo public pour les commentaires :
    script.setAttribute("repo", "Mazetta/mazeriio.net")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "💬 Utterances")

    // Détection auto du thème clair/sombre
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    script.setAttribute("theme", prefersDark ? "github-dark" : "github-light")

    // Ajout du script dans le DOM
    if (ref.current) {
      ref.current.innerHTML = ""
      ref.current.appendChild(script)
    }
  }, [])

  return (
    <div
      ref={ref}
    />
  )
}

export default Utterances
