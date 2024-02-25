const Button = (props) => {
    return <button 
    onClick={props.callBack} 
    style={{background: "purple", 
    color:props.txtColor}}>
        {props.label}
        </button>
}

export default Button
