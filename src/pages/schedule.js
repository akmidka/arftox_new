import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import mc1 from "../images/mc1.png"
import mc2 from "../images/mc2.png"
import mc3 from "../images/mc3.png"
import BlockMini from "../components/block/blockmini"
const Schedule = () => (
    <StaticQuery
        query={graphql`
        query{
            allContentfulMasterClass {
                edges {
                node {
                    title
                    date(formatString: "DD.MM.YYYY HH:mm")
                    id
                    image {
                        fluid{
                            ...GatsbyContentfulFluid
                            }
                        }
                    }
                }   
            }
        }            
        `}
        render={data => (
            <div className="wrapper">
                <Layout>
                    <SEO title="Полное расписание" />
                    <div className="mcs_top">

                    </div>
                    <div className="mc container">
                        <h3>
                        БЛИЖАЙШИЕ МАСТЕР КЛАССЫ
                        </h3>
                        <hr/>
                        <div className="mc_blocks">
                        {data.allContentfulMasterClass.edges.map(document => (
                            <BlockMini 
                                image={document.node.image.fluid}
                                mcName={document.node.title}
                                key={document.node.id}
                                whatsappDate={document.node.date}
                                whatsappText={document.node.title}
                            />
                        ))}
                        
                        </div>
                    </div>
                    <div className="class container">
                        <h3>
                        БЛИЖАЙШИЕ ТВОРЧЕСКИЕ КУРСЫ
                        </h3>
                        <hr/>
                        <div className="mc_blocks">
                        {data.allContentfulMasterClass.edges.map(document => (
                            <BlockMini 
                                image={document.node.image.fluid}
                                mcName={document.node.title}
                                key={document.node.id}
                                whatsappDate={document.node.date}
                                whatsappText={document.node.title}
                            />
                        ))}
                        </div>
                    </div>
                </Layout>
            </div>
        )}
    />
)
export default Schedule