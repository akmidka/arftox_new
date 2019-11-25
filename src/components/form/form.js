import React from 'react'
import InputMask from 'react-input-mask';
import ReCAPTCHA from "react-google-recaptcha";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            phone: "",
            email: "",
            text: "",
            errorInput1: "",
            errorInput2: "",
            errorInput3: "",
            errorInput4: "",
            showPopUp: ""
        }
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangePhone=this.onChangePhone.bind(this)
        this.onChangeEmail=this.onChangeEmail.bind(this)
        this.onChangeText=this.onChangeText.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    onChangeName(event){
        this.setState({
            name:event.target.value
        })
        if(event.target.value.length>1){
            this.setState({
                errorInput1: ""
            })
        }
    }
    onChangePhone(event){
        this.setState({
            phone:event.target.value
        })
        if(event.target.value.length==16){
            this.setState({
                errorInput2: ""
            })
        }
    }
    onChangeEmail(event){
        this.setState({
            email:event.target.value
        })
        if(event.target.value.length>=5){
            this.setState({
                errorInput3: ""
            })
        }
    }
    onChangeText(event){
        this.setState({
            text:event.target.value
        })
        if(event.target.value.length>=2){
            this.setState({
                errorInput4: ""
            })
        }
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.state.name.length <=1 ){
            this.setState({
                errorInput1:"error_input"
            })
            return false
        }else{
            this.setState({
                errorInput1:""
            })
        }
        if(this.state.phone.length <16 ){
            this.setState({
                errorInput2:"error_input"
            })
            return false
        }else{
            this.setState({
                errorInput2:""
            })
        }
        if(this.state.email.length <5 ){
            this.setState({
                errorInput3:"error_input"
            })
            return false
        }else{
            this.setState({
                errorInput3:""
            })
        }
        if(this.state.text.length <2 ){
            this.setState({
                errorInput4:"error_input_textarea"
            })
            return false
        }else{
            this.setState({
                errorInput4:""
            })
        }
        this.setState({
            showPopUp: "pop_up_active"
        })
        
    }
    render(){
        return(
            <div className="form_wrapper">
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="first_block">
                        <input type="text" className={this.state.errorInput1} name="name" placeholder="Имя*" onChange={this.onChangeName} value={this.state.name}/>
                        <InputMask maskChar={null} className={this.state.errorInput2} mask='+7(999)999-99-99' placeholder="Телефон*" value={this.state.phone} onChange={this.onChangePhone}/>

                    </div>
                    <input type="email"  placeholder="E-mail*" className={this.state.errorInput3} value={this.state.email} onChange={this.onChangeEmail}/>
                    
                    <textarea placeholder="Ваше сообщение*" className={this.state.errorInput4} value={this.state.text} onChange={this.onChangeText}>

                    </textarea>
                    <ReCAPTCHA
                        sitekey="6LecPsQUAAAAAC1DZjaDqTAu5QqW4riRv9bodM7j"
                        onChange={this.handleSubmit}
                    />
                    <input type="submit" value="Отправить"/>
                    
                </form>
                <div className={"pop_up "+this.state.showPopUp}>
                    <h3>
                        Благодарим за обращение!                
                    </h3>
                    <p>
                        Скоро мы свяжемся с Вами
                    </p>
                </div>
            </div>
            
        )
    }
}
export default Form