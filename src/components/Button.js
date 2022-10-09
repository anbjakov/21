import PropTypes from 'prop-types'
const Button = ({handleClick, btnTitle})=>{
    return <button onClick={handleClick} className="btn btn-primary">{btnTitle}</button>
}
Button.propTypes = {
    handleClick: PropTypes.func,
    btnTitle: PropTypes.string,
}
export default Button