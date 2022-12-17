import "../images/userpic.png";
import userPicture from "../images/userpic.png";
const Card = ({name,following,followers,pictureUrl,isError}) => {
  let imageUrl =pictureUrl ||userPicture
  return (
    <div>
       <div className="w-96 flex mt-9 bg-gray-100 p-6 rounded hover:bg-gray-200 shadow-lg transition-all duration-200">

      <img src={imageUrl} alt="image" width={90} className="rounded-full" />
      <div className="flex w-full flex-col ml-4">
        <div className="flex">
          <span className="text-gray-800 font-bold">Full name :</span>
          <span className="text-gray-800">{name}</span>
        </div>
       
        <div className="flex">
          <span className="text-gray-800">Following : </span>
          <span>{following}</span>
        </div>
        <div className="flex">
          <span className="text-gray-800">Followers :</span>
          <span>{followers}</span>
        </div>
      </div>
      
    </div>
    {isError &&  <div className="text-center mt-3 text-red-600">{"Profile not found"}</div>}

    </div>
   
  );
};

export default Card;
