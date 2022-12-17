import "./App.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { useState } from "react";
import axios, * as others from "axios";

function App() {
  const [getName, setName] = useState(null);
  const [getPictureUrl,setPictureUrl]=useState(null)
  const [getFollowers,setFollowers]=useState(null)
  const [getFollowing,setFollowing]=useState(null)
  const [isError,setError]=useState(false)

  async function getData(input) {
    try {
      setError(false)
      setName(null)
      setFollowers(null)
      setFollowing(null)
      setPictureUrl(null)
      
      const response = await axios.get("https://api.github.com/users/" + input);
     
      setName(response.data.name)
      setPictureUrl(response.data.avatar_url)
      setFollowers(response.data.followers)
      setFollowing(response.data.following)
      return response.data;
    } catch (error) {
      setError(true)
      return [];
    }
  }
  return (
    <div className="flex flex-col p-10 items-center bg-gray-200 h-screen">
      <h1 className="text-2xl font-bold mb-3">GitHub Profile Search</h1>
      <SearchBar getData={getData}  />
      <Card name={getName} pictureUrl={getPictureUrl} followers={getFollowers} following={getFollowing} isError={isError} />
    </div>
  );
}

export default App;
