import { getAllPosts } from "@/lib/blogs";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoGlow Blog | Expert Automotive Detailing & PPF Insights UAE",
  description: "Read expert articles, guides, and news on paint protection film, ceramic coatings, supercar detailing, and automotive care in Dubai and Abu Dhabi.",
  keywords: "autoglow blog, ppf guide dubai, car detailing tips uae, ceramic coating abu dhabi, xpel protection",
};

export default function BlogPageIndex() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-widest mb-4">
          <Icon icon="solar:document-text-bold" className="w-3.5 h-3.5" />
          <span>AutoGlow Editorial</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Automotive Intelligence & Journal
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Expert insights, technical breakdowns, and maintenance guides on paint protection, ceramic coatings, and supercar craftsmanship in Dubai and Abu Dhabi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-surface/40 border border-border rounded-2xl">
            <Icon icon="solar:document-add-linear" className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">No Articles Published Yet</h3>
            <p className="text-foreground/60 text-sm max-w-md mx-auto">
              Our marketing and editorial team are preparing in-depth guides. Drop markdown files in <code className="font-mono text-accent">content/blogs/</code> to publish instantly!
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="group block mb-16 bg-surface/60 border border-border rounded-3xl overflow-hidden hover:border-accent/60 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[420px] overflow-hidden">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider font-semibold shadow-lg">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs font-mono text-foreground/50 mb-3">
                        <span className="text-accent">{featuredPost.category}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readingTime}</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative border border-border">
                          <Image
                            src={featuredPost.authorAvatar}
                            alt={featuredPost.author}
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-semibold">{featuredPost.author}</div>
                          <div className="text-[10px] text-foreground/50 font-mono">{featuredPost.authorRole}</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent group-hover:translate-x-1 transition-transform">
                        Read Article <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Posts Grid */}
            {remainingPosts.length > 0 && (
              <div>
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                  <Icon icon="solar:layers-bold-duotone" className="w-6 h-6 text-accent" />
                  Latest Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-surface/60 border border-border rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300 flex flex-col justify-between shadow-md hover:-translate-y-1"
                    >
                      <div>
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md text-foreground text-[10px] font-mono uppercase tracking-wider border border-border/80">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs font-mono text-foreground/50 mb-2">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                          </div>
                          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/60 mt-auto pt-4">
                        <span className="text-xs font-semibold">{post.author}</span>
                        <span className="text-xs font-mono text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
