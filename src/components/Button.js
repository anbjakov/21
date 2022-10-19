import PropTypes from 'prop-types'
const Button = ({onClick, children})=>{
    return <button onClick={onClick} className="btn btn-primary">{children}</button>
}
Button.defaultProps = {
    children: 'Open Title',
}
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOf(['Open Title','Close Title']).isRequired,
}
export default Button