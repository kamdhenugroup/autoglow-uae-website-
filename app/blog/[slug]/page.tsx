import { getPostBySlug, getAllPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { Avatar } from "@usespaceui/avatars/react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | AutoGlow Blog",
    };
  }

  return {
    title: `${post.title} | AutoGlow Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AutoGlow UAE",
      logo: {
        "@type": "ImageObject",
        url: "https://autoglow.ae/logo.png",
      },
    },
  };

  return (
    <article className="min-h-screen bg-background text-foreground pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors mb-8"
        >
          <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        {/* Header Details */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground/60 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author Box */}
          <div className="flex items-center justify-between py-4 border-y border-border mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full relative overflow-hidden border border-border flex items-center justify-center bg-surface">
                <Avatar name={post.author} variant="glitch" size={48} circle={true} />
              </div>
              <div>
                <div className="font-semibold text-sm">{post.author}</div>
                <div className="text-xs text-foreground/50 font-mono">{post.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Share on X"
              >
                <Icon icon="ri:twitter-x-fill" className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://autoglow.ae/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Share on WhatsApp"
              >
                <Icon icon="ri:whatsapp-fill" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden mb-12 border border-border shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Markdown Content */}
        <div className="markdown-body prose prose-invert max-w-none text-foreground/90 space-y-6 text-base sm:text-lg leading-relaxed">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm sm:text-base" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-surface/80 text-foreground font-mono uppercase tracking-wider text-xs border-b border-border" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th className="px-4 py-3 font-semibold text-foreground/90 border-r border-border last:border-r-0" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="px-4 py-3 border-t border-border border-r border-border last:border-r-0 text-foreground/80" {...props} />
              ),
              tr: ({ node, ...props }) => (
                <tr className="hover:bg-surface/40 transition-colors" {...props} />
              ),
              h1: ({ node, ...props }) => (
                <h1 className="font-display text-3xl sm:text-4xl font-bold mt-10 mb-6 text-foreground tracking-tight" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="font-display text-2xl sm:text-3xl font-bold mt-10 mb-4 text-foreground tracking-tight border-b border-border/50 pb-2" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="font-display text-xl sm:text-2xl font-semibold mt-8 mb-3 text-foreground" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="font-display text-lg font-semibold mt-6 mb-2 text-foreground" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="my-4 text-foreground/90 leading-relaxed text-base sm:text-lg" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside my-4 space-y-2 text-foreground/90 pl-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside my-4 space-y-2 text-foreground/90 pl-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="leading-relaxed" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-accent pl-5 my-6 italic text-foreground/90 bg-surface/50 py-3 pr-4 rounded-r-xl" {...props} />
              ),
              a: ({ node, href, children, ...props }) => (
                <a
                  href={href}
                  className="text-accent underline hover:text-accent-hover font-medium transition-colors"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
            <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest mr-2">Tags:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-foreground/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-surface/80 border border-border/80 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="font-display text-2xl font-bold mb-3">Ready to Protect Your Vehicle?</h3>
          <p className="text-foreground/70 text-sm max-w-xl mx-auto mb-6">
            Experience industry-leading XPEL paint protection film and ceramic coatings at AutoGlow Dubai & Abu Dhabi studios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+971504670081"
              className="px-6 py-3 rounded-xl bg-surface border border-border text-foreground font-semibold text-sm hover:border-accent/50 transition-all flex items-center gap-2"
            >
              <Icon icon="solar:phone-bold-duotone" className="w-4 h-4 text-accent" />
              <span>+971 50 467 0081</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
