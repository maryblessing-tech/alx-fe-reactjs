import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Post #{id}</h1>
      <p>This is the content of blog post {id}. The ID is dynamically loaded from the URL!</p>
      <p style={{ color: '#666', fontStyle: 'italic' }}>
        Dynamic routing in action: /blog/{id}
      </p>
    </div>
  );
}

export default BlogPost;