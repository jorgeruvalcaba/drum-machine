import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }: { children: React.ReactChild }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="h-screen bg-layout" id="drum-machine">
      <div className="container mx-auto w-2/5 pt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {data.site.siteMetadata.title} 👩‍🎤
        </h1>
        <main id="display">{children}</main>
        <footer className="w-full m-12">
          © {new Date().getFullYear()},{" "}
          <a className="personal-link" href="https://jorgearuv.dev">
            Jorge Ruvalcaba
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
