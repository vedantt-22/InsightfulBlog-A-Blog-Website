import { blogPosts } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  // Featured post is the most recent one
  const featuredPost = blogPosts[0];
  // Other posts
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section with Featured Post */}
        <section className="bg-accent py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <img 
                    src={featuredPost.author.avatar} 
                    alt={featuredPost.author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{featuredPost.author.name}</p>
                    <p className="text-xs text-gray-500">{featuredPost.date} · {featuredPost.readTime}</p>
                  </div>
                </div>
                <a 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-block bg-secondary hover:bg-secondary/90 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                >
                  Read Article
                </a>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={featuredPost.coverImage} 
                  alt={featuredPost.title} 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles, insights and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary sm:w-72"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary/90 text-white py-2 px-6 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
