import React from 'react'
import Img from 'gatsby-image'
class Block extends React.Component{
    render(){
        return(
            <div className="mc_block">
                <Img fluid={this.props.image} className="block_mini_img"/>
                <hr></hr>
                <p>{this.props.mcName}<br/>{this.props.price}</p>
            </div>
        )
    }
}
export default Block