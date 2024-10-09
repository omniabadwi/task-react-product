import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ title, desc,id,image,cat }) {
    return (
        <Link to={`/posts/articles/${id}/${title}`} className="post_card">
            <img src={image}></img>
            <h4>{title}</h4>
            <h6>{cat}</h6>
            <p>price:{desc}</p>
        </Link>
    );
}
