import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Loading from "../../components/Loading";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(posts);

    const fetchPostsAPI = async () => {
        try {
            // server request
            const res = await fetch("https://fakestoreapi.com/products");
            console.log(res);
            if (res.status !== 200) {
                setPosts([]);
            } else {
                const finalRes = await res.json();
                setPosts(finalRes);
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchPostsAPI();
    }, []);

    return (
        <div className="posts_container">
            {isLoading && <Loading />}
            {posts?.map((post) => (
                <PostCard key={post.id} title={post.title} desc={post.price} id={post.id} image={post.image} cat={post.category} />
            ))}
        </div>
    );
}
