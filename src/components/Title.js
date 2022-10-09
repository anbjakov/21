import PropTypes from 'prop-types'

const Title = ({type, name})=>{
   return (
       <div>
           <h1 style={{fontWeight: type}}>{name}</h1>
       </div>
   )
}

Title.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
}
export default Title
