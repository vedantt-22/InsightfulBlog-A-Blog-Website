
import { Link } from "react-router-dom";
import { BlogPost } from "../data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <div className="flex text-xs text-gray-500">
              <span>{post.date}</span>
              <span className="mx-1">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-secondary">{post.title}</h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-medium text-secondary-foreground">
            {post.category}
          </span>
          <Link to={`/blog/${post.slug}`} className="text-secondary font-medium text-sm hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
