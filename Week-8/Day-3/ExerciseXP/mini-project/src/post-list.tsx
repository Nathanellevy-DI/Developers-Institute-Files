import {useEffect, useState} from "react";
import axios from "axios";

type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

type PostStateType = {
    posts: PostType[],
    errorMsg: string,
}

async function fetchPosts(url: string): Promise<PostType[]> {
    try {
        const response = await axios.get<PostType[]>(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function PostList() {
    const [ postListState, setPostListState ] = useState<PostStateType>({
        posts: [],
        errorMsg: '',
    });
    const { posts }  = postListState;

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        async function load() {
            const data = await fetchPosts(url);
            setPostListState((prev) => ({ ...prev, posts: data }));
        }
        load()
    }, []);

    return (
        <>
        { posts.length > 0  && (
            <>
                <h1>List of posts</h1>
                {posts.map((post) =>
                <div key={post.id}>
                    <p><b>ID:</b>{post.id}</p>
                    <p><b>Title:</b>{post.title}</p>
                    <p><b>Body:</b>{post.body}</p>
                </div>
                )}
            </>
            )
        }
        </>
    )
}

