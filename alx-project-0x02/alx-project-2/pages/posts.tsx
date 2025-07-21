import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostPage: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <Header />
            <div className="grid grid-cols-3 gap-4 mt-4 p-4">
                {posts.map((post, index) => (
                    <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
                ))}
            </div>
        </>
    );
}

export default PostPage;


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId
    }));

    return {
        props: {
            posts,
        },
    };
}