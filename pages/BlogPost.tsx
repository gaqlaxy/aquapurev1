import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/Button';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h2>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-10 text-center">
             <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Tag className="w-3 h-3" />
                <span>{post.category}</span>
             </div>
             <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               {post.title}
             </h1>
             <div className="flex items-center justify-center space-x-6 text-slate-500 text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
             </div>
          </header>

          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full max-h-[500px] object-cover"
            />
          </div>

          <div 
            className="prose prose-lg prose-slate mx-auto prose-headings:text-slate-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
