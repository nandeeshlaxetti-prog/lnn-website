"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Import the blog data from the main blogs page
import { blogPosts } from '../page';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blogs" 
              className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
            >
              ← Back to Legal Insights
            </Link>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="h-1 w-20 bg-[#D4AF37] rounded-full" />
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-none"
          >
            <div 
              className="bg-gray-800 rounded-2xl p-8 leading-relaxed prose prose-lg prose-invert max-w-none text-justify"
              style={{
                '--tw-prose-body': '#d1d5db',
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-lead': '#9ca3af',
                '--tw-prose-links': '#D4AF37',
                '--tw-prose-bold': '#ffffff',
                '--tw-prose-counters': '#6b7280',
                '--tw-prose-bullets': '#6b7280',
                '--tw-prose-hr': '#374151',
                '--tw-prose-quotes': '#f3f4f6',
                '--tw-prose-quote-borders': '#374151',
                '--tw-prose-captions': '#9ca3af',
                '--tw-prose-code': '#f3f4f6',
                '--tw-prose-pre-code': '#e5e7eb',
                '--tw-prose-pre-bg': '#1f2937',
                '--tw-prose-th-borders': '#374151',
                '--tw-prose-td-borders': '#374151'
              } as React.CSSProperties}
            >
              <div 
                className="space-y-8"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(
                    /<h2>/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">'
                  ).replace(
                    /<h3>/g, '<h3 class="text-xl font-semibold text-white mt-6 mb-3">'
                  ).replace(
                    /<p>/g, '<p class="text-gray-300 mb-4 leading-relaxed">'
                  ).replace(
                    /<ul>/g, '<ul class="list-disc pl-6 mb-4 text-gray-300">'
                  ).replace(
                    /<li>/g, '<li class="mb-2">'
                  ).replace(
                    /<strong>/g, '<strong class="text-white font-semibold">'
                  )
                }}
              />
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== postId && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blogs/${relatedPost.id}`}
                    className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{relatedPost.readTime}</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Back to Blogs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blogs"
              className="inline-block bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors"
            >
              View All Articles
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
