import { useQuery } from '@tanstack/react-query';

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: true,
    keepPreviousData: true
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading posts...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        <h2>Error: {error.message}</h2>
        <button onClick={() => refetch()} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Posts from JSONPlaceholder</h1>
        <button 
          onClick={() => refetch()}
          disabled={isFetching}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: isFetching ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isFetching ? 'not-allowed' : 'pointer'
          }}
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
      </div>

      <p style={{ color: '#666', marginBottom: '20px' }}>
        Total Posts: {data?.length || 0} | 
        {isFetching && ' Updating...'}
      </p>

      <div style={{ display: 'grid', gap: '15px' }}>
        {data?.slice(0, 10).map((post) => (
          <div 
            key={post.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ color: '#007bff', marginBottom: '10px' }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{post.body}</p>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#e7f3ff', 
        borderRadius: '8px',
        border: '1px solid #b3d9ff'
      }}>
        <h3>React Query Features Demo:</h3>
        <ul>
          <li>✅ Data is cached for 5 minutes</li>
          <li>✅ Data stays fresh for 1 minute</li>
          <li>✅ keepPreviousData: Shows old data while refetching</li>
          <li>✅ Click "Refetch Posts" to manually update</li>
          <li>✅ Navigate away and back - instant load from cache!</li>
        </ul>
      </div>
    </div>
  );
}

export default