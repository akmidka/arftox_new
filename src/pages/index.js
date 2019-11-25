import React from "react"
import { Link } from "gatsby"
import "../components/style/global.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Block from "../components/block/block"
import Form from "../components/form/form"
import mc1 from "../images/mc1.png"
import mc2 from "../images/mc2.png"
import mc3 from "../images/mc3.png"
import class1 from "../images/class1.png"
import class2 from "../images/class2.png"
import class3 from "../images/class3.png"
import about_us from "../images/about_us.png"
import name from "../images/name.png"
import {StaticQuery, graphql} from 'gatsby'
const IndexPage = () => (
  <StaticQuery
        query={graphql`
        query{
            allContentfulMasterClass(sort: {fields: createdAt, order: DESC}, limit: 3) {
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
                <SEO title="Home" />
                <div className="top_container">
                  <div className="header_name">
                      <img src={name} />
                      <h1>art makes you happy</h1>
                    </div>
                </div>
                <div className="mc container">
                  <h3>
                    БЛИЖАЙШИЕ МАСТЕР КЛАССЫ
                  </h3>
                  <hr/>
                  <div className="mc_blocks">
                  {data.allContentfulMasterClass.edges.map(document => (
                            <Block 
                                image={document.node.image.fluid}
                                mcName={document.node.title}
                                key={document.node.id}
                                price="2000р"
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
                            <Block 
                                image={document.node.image.fluid}
                                mcName={document.node.title}
                                key={document.node.id}
                                price="2000р"
                            />
                        ))}
                   
                  </div>
                </div>
                <div className="about_us">
                  <div className="about_us_left" >

                  </div>
                  <div className="about_us_right">
                    <h3>О НАС</h3>
                    <p>
                      Если у вас совсем нет навыков рисунка, но вы всегда мечтали создавать красивые иллюстрации или познакомиться с графическим и живописными техниками в стиле скетчинг, то данные курсы для вас!
                    </p>
                    <p>
                      Основной целью экспресс-курса является научиться рисовать скетчи для использования их в жизни и раскрытия творческого потенциала. Скетчи прекрасно подходят для составления конспектов и изучения языка, ведения дневника  и взиуализации основной идеи чего-либо. В них не важны детали, нужен только фокус на ключевых идеях.
                    </p>
                  </div>
                </div>
                <div className="contact_us">
                  <h3>
                    СВЯЗАТЬСЯ С НАМИ
                  </h3>
                  <Form />
                </div>
              </Layout>
            </div>
        )}
    />  
)

export default IndexPage
