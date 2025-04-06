
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate("/404");
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-sm text-gray-600 hover:text-secondary mb-8"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to all articles
          </button>
          
          {/* Article header */}
          <header className="mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-accent text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>
          
          {/* Article content */}
          <div className="prose">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Author bio */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">About {post.author.name}</h3>
                <p className="text-gray-600">
                  {post.author.name} is a passionate writer and expert in {post.category.toLowerCase()}. 
                  They bring years of experience and insight to their articles.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
