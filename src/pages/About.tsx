import { FC } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="bg-accent py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About InsightfulBlog
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A place where thoughtful ideas meet practical wisdom
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose mx-auto">
              <h2>Our Story</h2>
              <p>
                InsightfulBlog was founded in 2025 with a simple mission: to create a space where readers can find
                thoughtful, well-researched articles that help them navigate life's complexities. In a world of
                clickbait and shallow content, we wanted to build something different—a place for deeper reflection
                and practical wisdom.
              </p>
              
              <p>
                Our team of writers brings diverse perspectives and expertise across areas like personal development,
                wellness, sustainability, career growth, and cultural trends. What unites us is a commitment to
                quality writing that respects our readers' intelligence and time.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                Every article published on InsightfulBlog aims to be:
              </p>
              
              <ul>
                <li>
                  <strong>Well-researched:</strong> We believe in backing claims with evidence and citing reliable sources.
                </li>
                <li>
                  <strong>Thoughtful:</strong> We explore topics with nuance, acknowledging complexity rather than oversimplifying.
                </li>
                <li>
                  <strong>Practical:</strong> While we love big ideas, we make sure our content offers tangible value and actionable insights.
                </li>
                <li>
                  <strong>Engaging:</strong> Important topics deserve good writing. We craft our articles to be clear, compelling, and enjoyable to read.
                </li>
              </ul>
              <h3>Vedant Karekar</h3>
              <p>
                Vedant has a background in technology and content creation. He brings innovative approaches to blogging
                while making them accessible and practical for everyday readers.
              </p>
              <h2>Get In Touch</h2>
              <p>
                We love hearing from our readers! Whether you have feedback on an article, a topic suggestion,
                or are interested in contributing to InsightfulBlog, please reach out through our
                <a href="/contact"> contact page</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
