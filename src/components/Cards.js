import { Eye, MessageCircle } from "lucide-react";

const Cards = ({ image, title, views, comments, category, time }) => {
  return (
  
      <div 
      style={{backgroundImage: `url(${image})`}}
      className="w-[300px] h-[450px] rounded-xl  bg-cover bg-center flex flex-col justify-between p-5 font-bold shadow-2xl sharink-0 mt-[430px]">
        <div className="flex justify-between text-white">
          <span className="text-blue-500 text-4xl leading-none">.</span>
          <span className="bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md text-sm">{time} min</span>
        </div>
        <div className="flex flex-col gap-5 text-white text-size text-[px]">
          <div className="flex gap-10 text-[] ">
            <span className="flex items-center gap-1.5">
              <Eye className="w-5 h-5"/> {views}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-5 h-5"/> {comments}
            </span>
          </div>
          <h4 className="text-[20px leading-tight]">
           {title}
          </h4>
          <label className="bg-blue-500 p-2 px-4 rounded-2xl uppercase text-[12px] w-fit ">
            {category}
          </label>
        </div>
      </div>
     

  );
};
export default Cards;
