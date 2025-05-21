
// Default data structure
let defaultData = {
  contributors: [
    { id: "michael", name: "Michael", email: "michael@gmail.com", role: "Content Creator", bio: "Specializes in transportation technology insights." },
    { id: "silver", name: "Silver", email: "silver@gmail.com", role: "Safety Analyst", bio: "Expert in school transportation safety protocols." },
    { id: "ena", name: "Ena", email: "ena@gmail.com", role: "Traffic Specialist", bio: "Focuses on traffic pattern analysis for safer routes." },
    { id: "trevor", name: "Trevor", email: "trevor@gmail.com", role: "Route Planner", bio: "Develops optimized routes for school buses." }
  ],
  articles: [
    { id: "art1", title: "How ML Models Are Revolutionizing School Bus Routes", category: "Technology", date: "2025-05-05", content: "Discover how our proprietary machine learning algorithms are creating safer, more efficient routes for school transportation systems.", author: "Jennifer Wilson" }
  ],
  posts: [],
  ratings: {},
  comments: {}
};

let data = defaultData;

async function fetchData() {
  try {
    // const response = await fetch('http://localhost:3000/api/data');
    // const response = await fetch('http://127.0.0.1:5500/test/data.json');
    const response = await fetch('/data.json');
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function saveData() {
  try {
    const response = await fetch('/data.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to save data');
    console.log('Data saved to server');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchData();

  // Email login
  document.querySelectorAll('.login-overlay').forEach(overlay => {
    const form = overlay.querySelector('form');
    const contributorId = overlay.dataset.contributor;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      const contributor = data.contributors.find(c => c.id === contributorId);
      if (email === contributor.email) {
        overlay.classList.add('hidden');
        document.querySelector('.dashboard-content').classList.remove('hidden');
      } else {
        alert('Invalid email');
      }
    });
  });

  // Upload form (without images)
  document.querySelectorAll('.upload-form').forEach(form => {
    const contributorId = form.dataset.contributor;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = form.querySelector('#title').value;
      const content = form.querySelector('#content').value;
      const fileInput = form.querySelector('#file');

      if (!title || !content) {
        alert('Title and content are required!');
        return;
      }

      const file = fileInput.files[0]
        ? { name: fileInput.files[0].name, url: URL.createObjectURL(fileInput.files[0]) }
        : null;

      const post = {
        id: `post${data.posts.length + 1}`,
        contributorId,
        title,
        content,
        image: '', // image intentionally left blank
        file,
        date: new Date().toISOString().split('T')[0]
      };

      data.posts.push(post);
      await saveData();
      alert('Post submitted successfully!');
      form.reset();
      window.location.href = 'blog-view.html';
    });
  });

  // Blog view rendering
  const blogViewContainer = document.querySelector('#blog-view-posts');
  if (blogViewContainer) {
    const renderPosts = () => {
      blogViewContainer.innerHTML = '';
      if (data.posts.length === 0) {
        blogViewContainer.innerHTML = '<p class="text-gray-500 text-center">No posts yet.</p>';
        return;
      }
      data.posts.forEach(post => {
        const contributor = data.contributors.find(c => c.id === post.contributorId);
        const rating = data.ratings[post.id] || 0;
        const comments = data.comments[post.id] || [];
        const postElement = document.createElement('article');
        postElement.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
        postElement.innerHTML = `
          <div class="flex items-center mb-4">
            <div class="ml-4">
              <h3 class="text-lg font-bold">${contributor.name}</h3>
              <p class="text-sm text-gray-500">${contributor.role} • ${post.date}</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
          <p class="text-gray-600 mb-4">${post.content}</p>
          ${post.file ? `<a href="${post.file.url}" download="${post.file.name}" class="text-primary hover:underline mb-4 inline-block">${post.file.name}</a>` : ''}
      `;
        blogViewContainer.appendChild(postElement);
      });
    };

    renderPosts();

    blogViewContainer.addEventListener('click', async (e) => {
      if (e.target.closest('.rate-btn')) {
        const btn = e.target.closest('.rate-btn');
        const postId = btn.dataset.post;
        const value = parseInt(btn.dataset.value);
        data.ratings[postId] = value;
        await saveData();
        renderPosts();
      }
    });

    blogViewContainer.addEventListener('submit', async (e) => {
      if (e.target.classList.contains('comment-form')) {
        e.preventDefault();
        const postId = e.target.dataset.post;
        const text = e.target.querySelector('textarea').value;
        const author = e.target.querySelector('input').value || 'Anonymous';
        if (text) {
          if (!data.comments[postId]) data.comments[postId] = [];
          data.comments[postId].push({ author, text });
          await saveData();
          renderPosts();
          e.target.reset();
        }
      }
    });
  }

  // Articles rendering
  const articlesContainer = document.querySelector('#articles-list');
  if (articlesContainer) {
    const categoryFilter = document.querySelector('#category-filter');
    const renderArticles = (category = '') => {
      articlesContainer.innerHTML = '';
      const filteredArticles = category ? data.articles.filter(a => a.category === category) : data.articles;
      filteredArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
        articleElement.innerHTML = `
          <h3 class="text-xl font-bold mb-2">${article.title}</h3>
          <p class="text-sm text-gray-500 mb-2">${article.category} • ${article.date}</p>
          <p class="text-gray-700 mb-4">${article.content}</p>
          <p class="text-sm text-gray-800">By ${article.author}</p>
        `;
        articlesContainer.appendChild(articleElement);
      });
    };
    renderArticles();
    categoryFilter.addEventListener('change', (e) => renderArticles(e.target.value));
  }

  // Contributors rendering
  const contributorsContainer = document.querySelector('#contributors-list');
  if (contributorsContainer) {
    data.contributors.forEach(contributor => {
      const contributorElement = document.createElement('div');
      // contributorElement.href = '#';
      contributorElement.className = 'block no-underline';
      contributorElement.innerHTML = `
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 class="text-xl font-bold mb-1">${contributor.name}</h3>
          <p class="text-gray-600 mb-4">${contributor.role}</p>
          <p class="text-gray-600 text-sm">${contributor.bio}</p>
        </div>
      `;
      contributorsContainer.appendChild(contributorElement);
    });
  }
});
