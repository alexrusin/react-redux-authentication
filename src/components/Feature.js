import requireAuth from 'components/requireAuth'

const Feature = () => {
   return <div>This is feature</div>
}

export default requireAuth(Feature)