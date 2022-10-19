import PropTypes from 'prop-types'

const Title = ({type, name})=>{
   return (
       <div>
           <h1 style={{fontWeight: type}}>{name}</h1>
       </div>
   )
}

Title.defaultProps  = {
        type: "bold",
        name: "Products"
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bold','normal']),
}
export default Title
