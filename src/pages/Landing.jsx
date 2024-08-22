import Hero from "../components/Hero"
import Popular from "../components/Popular"
import Recommendation from "../components/Recommendation"
import Adds from "../components/Adds"

function Landing() {
    return (
      <>
        <div>
          <Hero/>
          <Popular/>
          <Recommendation/>
          <Adds/>
        </div>      
      </>
    )
  }
  
  export default Landing