import Cards from "@/components/Cards";

const Home = () => {
  const newsData = [
    {
      id: 1,
      image: "/images/5f8e470aa018b22b68a43253e4bd0c61.jpg",
      title: "Unread туршив: Тоглоомын дүрмийг өөрчлөх MacBook",
      views: "",
      comments: "",
      category: "Techworm",
      time: ""

    },
    {
      id: 2,
      image: "/images/11bd0975b391570b68622e82fd2022c1.jpg",
      title: "Гоо сайханд золиос хэрэгтэй, гэхдээ золиосыг нь байгаль төлсөөр байх",
      views: "",
      comments: "",
      category: "мэдүүштэй",
      time: ""
    }
  ]
  return (
    <div className="bg-[url('/images/84480520678a47413ea2f77e8526ca69.jpeg')]  bg-cover bg-center bg-no-repeat bg-fixed w-full h-[700px]">
      <div className="flex flex-wrap gap-4">
        {newsData.map((item) => (
          <Cards
          key={item.id}
          image={item.image}
          title={item.title}
          views={item.views}
          comments={item.comments}
          category={item.category}
          time={item.time}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
