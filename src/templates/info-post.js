import * as React from "react"
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPost  = ({ data }) => (
    
    <Layout>
        <Seo title={data.markdownRemark.frontmatter.title} />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                {data.markdownRemark.frontmatter.title}
            </div>

        {/* 記事詳細ブロック */}
            <div class="col-start-2 col-span-10 p-3">
                <div class="w-full font-medium text-base mb-3">
                    {data.markdownRemark.frontmatter.date}
                </div>
                <div 
                    class="col-span-12 p-3" 
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>

        </div>
    </Layout>
)

export default InformationPost


export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug }}) {
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
      }
    }
  }
`
