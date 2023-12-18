const Button = (props) => {
    return <button type="button" onClick={() => alert(`io sono il ${props.label}`)}>{props.label}</button>
}

export default Button;