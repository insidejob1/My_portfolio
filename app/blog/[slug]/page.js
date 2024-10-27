// // @flow strict
// import { personalData } from "@/utils/data/personal-data";

// async function getBlog(slug) {
//   const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   return data;
// };

// async function BlogDetails({params}) {
//   const slug = params.slug;
//   const blog = await getBlog(slug);
 
//   return (
//     <div>
//     </div>
//   );
// };

// export default BlogDetails;


// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

// This function is required for dynamic routes when using export
export async function generateStaticParams() {
  // Here, you should define how to retrieve all the slugs you want to pre-render
  // For example, you could fetch all articles to get their slugs
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}`);
  const articles = await res.json();

  // Extract the slugs from the articles
  const slugs = articles.map(article => article.slug);

  return slugs.map(slug => ({
    slug,
  }));
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      {/* Render other blog details here */}
    </div>
  );
}

export default BlogDetails;
