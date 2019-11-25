import React from 'react'
import whatsapp from "../../images/whatsapp.png"
import Img from 'gatsby-image'
class BlockMini extends React.Component{
    render(){
        return(
            <div className="mc_block_mini">
                <Img fluid={this.props.image} className="block_mini_img"/>
                <p>{this.props.mcName}<br/>{this.props.price}</p>
                <p>Записаться на мастер класс:</p>
                <a href={"https://wa.me/79243614055?text=Здравствуйте, хочу записаться на мастер класс '"+this.props.whatsappText+"' "+this.props.whatsappDate} target="_blank"><img className="whatsapp_logo" src={whatsapp} /></a>
                <p>Или</p>
                <a className="a_call"href="tel:+79243614055">Позвонить</a>
            </div>
        )
    }
}
export default BlockMini