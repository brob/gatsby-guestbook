import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
         
          <p className='is-size-5'>
             This is a demo for this Smashing Magazine article
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
