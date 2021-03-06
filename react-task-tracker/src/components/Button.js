import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    return (
        <button style={{ backgroundColor: color }}
             className={'btn'}
             onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultPros = { color: 'steelblue', }

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button;