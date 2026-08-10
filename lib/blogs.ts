import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  excerpt: string;
  coverImage?: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(blogsDirectory)) {
    fs.mkdirSync(blogsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Estimate reading time (approx 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'AutoGlow Editorial Team',
        authorRole: data.authorRole || 'Senior Detailing Specialist',
        authorAvatar: data.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
        category: data.category || 'Automotive Care',
        tags: data.tags || ['PPF', 'Dubai', 'Detailing'],
        readingTime: data.readingTime || readingTime,
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      const altPath = path.join(blogsDirectory, `${realSlug}.mdx`);
      if (!fs.existsSync(altPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(altPath, 'utf8');
      const { data, content } = matter(fileContents);
      const wordCount = content.split(/\s+/).length;
      return {
        slug: realSlug,
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'AutoGlow Editorial Team',
        authorRole: data.authorRole || 'Senior Detailing Specialist',
        authorAvatar: data.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
        category: data.category || 'Automotive Care',
        tags: data.tags || ['PPF', 'Dubai', 'Detailing'],
        readingTime: `${Math.ceil(wordCount / 200)} min read`,
        content,
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const wordCount = content.split(/\s+/).length;

    return {
      slug: realSlug,
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'AutoGlow Editorial Team',
      authorRole: data.authorRole || 'Senior Detailing Specialist',
      authorAvatar: data.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      category: data.category || 'Automotive Care',
      tags: data.tags || ['PPF', 'Dubai', 'Detailing'],
      readingTime: `${Math.ceil(wordCount / 200)} min read`,
      content,
    };
  } catch (error) {
    return null;
  }
}
