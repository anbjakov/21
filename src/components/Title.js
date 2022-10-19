import PropTypes from 'prop-types'

const Title = ({type="normal", name="product name"})=>{
   return (
       <div>
           <h1 style={{fontWeight: type}}>{name}</h1>
       </div>
   )
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default Title
