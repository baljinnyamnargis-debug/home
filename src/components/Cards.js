import { Eye, MessageCircle } from "lucide-react";

let Cards = ({ image, title, views, comments, category, time }) => {
  return (
    <div>
      <div 
      style={{backgroundImage: `url(${image})`}}
      className="w-[280px] h-120 rounded-xl bg-[url('/images/5f8e470aa018b22b68a43253e4bd0c61.jpg')] bg-cover bg-center mt-130 flex flex-col justify-between p-5 font-bold">
        <div className="flex justify-between text-white">
          <span class="blue-dot">.</span>
          <span class="read">0 min</span>
        </div>
        <div className="flex flex-col gap-5 text-white text-size text-[24px]">
          <div className="flex gap-10 text-[18px] ">
            <span className="flex gap-1.5">
              <Eye className="w-5 h-5" />
              2000
            </span>

            <span className="flex gap-1.5">
              <MessageCircle className="w-5 h-5" />0
            </span>
          </div>
          <h4 className="text-[20px]">
            Unread туршив: Тоглоомын дүрмийг өөрчлөх 600 долларын үнэтэй MacBook
          </h4>
          <label className="bg-blue-500 p-2 rounded-2xl uppercase text-[12px] w-fit ">
            Techworm
          </label>
        </div>
      </div>
    </div>
  );
};
export default Cards;
