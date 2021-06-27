import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Sakib", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Munif", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Sakib",
      id: 3,
    },
  ]);

	const [name, setName] = useState('Sakib')
	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs)
	}

	useEffect(() => {
		console.log('Use Effect ran')
	}, [name])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
			<button onClick={() => setName('Saqib')}>Change Name</button>
			<p>{name}</p>
    </div>
  );
};

export default Home;
