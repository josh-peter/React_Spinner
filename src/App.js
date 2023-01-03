import './App.css'; 
import { useState, useEffect } from "react"
import HashLoader from "react-spinners/HashLoader"

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    },[])
  return (
    <div className='App'>
      {
        loading ? 
          <HashLoader color={'000000'} loading={loading} size={130} /> :
          
        <div className="Content">
            <h1>Good Day Mr Oluwabukunmi D. Alias<br/> <span>our very own Pastor</span></h1>
            <p>
            Thank you for your concern over our spiritual life. You are an exemplary and visionary church leader who has dedicated his life to planting churches all over the world and winning more souls into the kingdom of God. Your messages are always supported by good Bible quotations and are clear and understandable to the congregation. As you celebrate your special day, may the Lord shower you with more grace and blessings!
            </p>
        </div>
      }

    </div>
  );
}

export default App;