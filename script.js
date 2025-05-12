// // let data = {
// //   contributors: [
// //     { id: "michael", name: "Michael", email: "michael@gmail.com", role: "Content Creator", bio: "Specializes in transportation technology insights.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20man%20with%20dark%20hair%2C%20professional%20attire%2C%20friendly%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=michael&orientation=squarish" },
// //     { id: "silver", name: "Silver", email: "silver@gmail.com", role: "Safety Analyst", bio: "Expert in school transportation safety protocols.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20woman%20with%20blonde%20hair%2C%20professional%20attire%2C%20confident%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=silver&orientation=squarish" },
// //     { id: "ena", name: "Ena", email: "ena@gmail.com", role: "Traffic Specialist", bio: "Focuses on traffic pattern analysis for safer routes.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20woman%20with%20black%20hair%2C%20professional%20attire%2C%20friendly%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=ena&orientation=squarish" },
// //     { id: "trevor", name: "Trevor", email: "trevor@gmail.com", role: "Route Planner", bio: "Develops optimized routes for school buses.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20man%20with%20short%20hair%2C%20professional%20attire%2C%20serious%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=trevor&orientation=squarish" }
// //   ],
// //   articles: [
// //     { id: "art1", title: "How ML Models Are Revolutionizing School Bus Routes", category: "Technology", date: "2025-05-05", content: "Discover how our proprietary machine learning algorithms are creating safer, more efficient routes for school transportation systems.", image: "https://readdy.ai/api/search-image?query=Modern%20school%20bus%20with%20navigation%20system%20display%2C%20showing%20route%20optimization%20technology%20in%20action.%20Clean%2C%20minimal%20background%2C%20professional%20photography%2C%20high%20resolution&width=600&height=400&seq=article1&orientation=landscape", author: "Jennifer Wilson" }
// //   ],
// //   posts: [],
// //   ratings: {},
// //   comments: {}
// // };

// // document.addEventListener('DOMContentLoaded', () => {
// //   // Email Login Overlay
// //   const loginOverlays = document.querySelectorAll('.login-overlay');
// //   loginOverlays.forEach(overlay => {
// //     const form = overlay.querySelector('form');
// //     const contributorId = overlay.dataset.contributor;
// //     form.addEventListener('submit', (e) => {
// //       e.preventDefault();
// //       const email = form.querySelector('input[type="email"]').value;
// //       const contributor = data.contributors.find(c => c.id === contributorId);
// //       if (email === contributor.email) {
// //         overlay.classList.add('hidden');
// //         document.querySelector('.dashboard-content').classList.remove('hidden');
// //       } else {
// //         alert('Invalid email');
// //       }
// //     });
// //   });

// //   // Content Upload Form
// //   const uploadForms = document.querySelectorAll('.upload-form');
// //   uploadForms.forEach(form => {
// //     const contributorId = form.dataset.contributor;
// //     form.addEventListener('submit', (e) => {
// //       e.preventDefault();
// //       const title = form.querySelector('#title').value;
// //       const content = form.querySelector('#content').value;
// //       const imageInput = form.querySelector('#image');
// //       const fileInput = form.querySelector('#file');
// //       const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';
// //       const file = fileInput.files[0] ? { name: fileInput.files[0].name, url: URL.createObjectURL(fileInput.files[0]) } : null;

// //       const post = {
// //         id: `post${data.posts.length + 1}`,
// //         contributorId,
// //         title,
// //         content,
// //         image,
// //         file,
// //         date: new Date().toISOString().split('T')[0]
// //       };
// //       data.posts.push(post);
// //       alert('Post submitted successfully!');
// //       form.reset();
// //     });
// //   });

// //   // Blog View Rendering
// //   const blogViewContainer = document.querySelector('#blog-view-posts');
// //   if (blogViewContainer) {
// //     const renderPosts = () => {
// //       blogViewContainer.innerHTML = '';
// //       data.posts.forEach(post => {
// //         const contributor = data.contributors.find(c => c.id === post.contributorId);
// //         const rating = data.ratings[post.id] || 0;
// //         const comments = data.comments[post.id] || [];
// //         const postElement = document.createElement('article');
// //         postElement.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
// //         postElement.innerHTML = `
// //           <div class="flex items-center mb-4">
// //             <img src="${contributor.image}" alt="${contributor.name}" class="w-12 h-12 rounded-full object-cover">
// //             <div class="ml-4">
// //               <h3 class="text-lg font-bold">${contributor.name}</h3>
// //               <p class="text-sm text-gray-500">${contributor.role} • ${post.date}</p>
// //             </div>
// //           </div>
// //           <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
// //           ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full h-64 object-cover rounded-lg mb-4">` : ''}
// //           <p class="text-gray-600 mb-4">${post.content}</p>
// //           ${post.file ? `<a href="${post.file.url}" download="${post.file.name}" class="text-primary hover:underline mb-4 inline-block">${post.file.name}</a>` : ''}
// //           <div class="flex items-center mb-4">
// //             <span class="mr-2">Rate:</span>
// //             ${[1, 2, 3, 4, 5].map(star => `
// //               <button class="rate-btn" data-post="${post.id}" data-value="${star}">
// //                 <i class="ri-star-${star <= rating ? 'fill' : 'line'} text-yellow-400"></i>
// //               </button>
// //             `).join('')}
// //           </div>
// //           <div class="comments mb-4">
// //             <h4 class="font-medium mb-2">Comments</h4>
// //             ${comments.length ? comments.map(c => `<p class="text-gray-600 mb-2"><strong>${c.author}:</strong> ${c.text}</p>`).join('') : '<p class="text-gray-500">No comments yet.</p>'}
// //           </div>
// //           <form class="comment-form" data-post="${post.id}">
// //             <textarea class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Add a comment..." rows="3"></textarea>
// //             <input type="text" class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Your name">
// //             <button type="submit" class="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-primary/90">Post Comment</button>
// //           </form>
// //         `;
// //         blogViewContainer.appendChild(postElement);
// //       });
// //     };
// //     renderPosts();

// //     // Rating System
// //     blogViewContainer.addEventListener('click', (e) => {
// //       if (e.target.closest('.rate-btn')) {
// //         const btn = e.target.closest('.rate-btn');
// //         const postId = btn.dataset.post;
// //         const value = parseInt(btn.dataset.value);
// //         data.ratings[postId] = value;
// //         renderPosts();
// //       }
// //     });

// //     // Comment System
// //     blogViewContainer.addEventListener('submit', (e) => {
// //       if (e.target.classList.contains('comment-form')) {
// //         e.preventDefault();
// //         const postId = e.target.dataset.post;
// //         const text = e.target.querySelector('textarea').value;
// //         const author = e.target.querySelector('input').value || 'Anonymous';
// //         if (text) {
// //           if (!data.comments[postId]) data.comments[postId] = [];
// //           data.comments[postId].push({ author, text });
// //           renderPosts();
// //           e.target.reset();
// //         }
// //       }
// //     });
// //   }

// //   // Articles Page Filtering
// //   const articlesContainer = document.querySelector('#articles-list');
// //   if (articlesContainer) {
// //     const categoryFilter = document.querySelector('#category-filter');
// //     const renderArticles = (category = '') => {
// //       articlesContainer.innerHTML = '';
// //       const filteredArticles = category ? data.articles.filter(a => a.category === category) : data.articles;
// //       filteredArticles.forEach(article => {
// //         const articleElement = document.createElement('article');
// //         articleElement.className = 'bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg';
// //         articleElement.innerHTML = `
// //           <div class="h-48 overflow-hidden">
// //             <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover object-top">
// //           </div>
// //           <div class="p-6">
// //             <div class="flex items-center mb-3">
// //               <span class="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">${article.category}</span>
// //               <span class="text-gray-500 text-sm ml-3">${article.date}</span>
// //             </div>
// //             <h3 class="text-xl font-bold mb-3">${article.title}</h3>
// //             <p class="text-gray-600 mb-4">${article.content}</p>
// //             <p class="text-sm font-medium text-gray-900">${article.author}</p>
// //           </div>
// //         `;
// //         articlesContainer.appendChild(articleElement);
// //       });
// //     };
// //     renderArticles();
// //     categoryFilter.addEventListener('change', (e) => renderArticles(e.target.value));
// //   }

// //   // Contributors Page Rendering
// //   const contributorsContainer = document.querySelector('#contributors-list');
// //   if (contributorsContainer) {
// //     data.contributors.forEach(contributor => {
// //       const contributorElement = document.createElement('a');
// //       contributorElement.href = `${contributor.id}.html`;
// //       contributorElement.className = 'block no-underline';
// //       contributorElement.innerHTML = `
// //         <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
// //           <div class="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-primary">
// //             <img src="${contributor.image}" alt="${contributor.name}" class="w-32 h-32 rounded-full object-cover mx-auto mt-8 border-4 border-white">
// //           </div>
// //           <div class="p-6 text-center">
// //             <h3 class="text-xl font-bold mb-1">${contributor.name}</h3>
// //             <p class="text-gray-600 mb-4">${contributor.role}</p>
// //             <p class="text-gray-600 mb-4 text-sm">${contributor.bio}</p>
// //             <div class="flex justify-center space-x-3">
// //               <a href="${contributor.id}.html" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-user-line"></i></a>
// //               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-linkedin-fill"></i></a>
// //               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-twitter-fill"></i></a>
// //               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-mail-line"></i></a>
// //             </div>
// //           </div>
// //         </div>
// //       `;
// //       contributorsContainer.appendChild(contributorElement);
// //     });

// //     // Prevent social/dashboard links from triggering card navigation
// //     contributorsContainer.addEventListener('click', (e) => {
// //       if (e.target.closest('.stop-propagation')) {
// //         e.stopPropagation();
// //         e.preventDefault();
// //         window.location.href = e.target.closest('.stop-propagation').href;
// //       }
// //     });
// //   }
// // });


// let defaultData = {
//   contributors: [
//     { id: "michael", name: "Michael", email: "michael@gmail.com", role: "Content Creator", bio: "Specializes in transportation technology insights.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20man%20with%20dark%20hair%2C%20professional%20attire%2C%20friendly%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=michael&orientation=squarish" },
//     { id: "silver", name: "Silver", email: "silver@gmail.com", role: "Safety Analyst", bio: "Expert in school transportation safety protocols.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20woman%20with%20blonde%20hair%2C%20professional%20attire%2C%20confident%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=silver&orientation=squarish" },
//     { id: "ena", name: "Ena", email: "ena@gmail.com", role: "Traffic Specialist", bio: "Focuses on traffic pattern analysis for safer routes.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20woman%20with%20black%20hair%2C%20professional%20attire%2C%20friendly%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=ena&orientation=squarish" },
//     { id: "trevor", name: "Trevor", email: "trevor@gmail.com", role: "Route Planner", bio: "Develops optimized routes for school buses.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20man%20with%20short%20hair%2C%20professional%20attire%2C%20serious%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=trevor&orientation=squarish" }
//   ],
//   articles: [
//     { id: "art1", title: "How ML Models Are Revolutionizing School Bus Routes", category: "Technology", date: "2025-05-05", content: "Discover how our proprietary machine learning algorithms are creating safer, more efficient routes for school transportation systems.", image: "https://readdy.ai/api/search-image?query=Modern%20school%20bus%20with%20navigation%20system%20display%2C%20showing%20route%20optimization%20technology%20in%20action.%20Clean%2C%20minimal%20background%2C%20professional%20photography%2C%20high%20resolution&width=600&height=400&seq=article1&orientation=landscape", author: "Jennifer Wilson" }
//   ],
//   posts: [],
//   ratings: {},
//   comments: {}
// };

// // Load data from localStorage or use default
// let data = JSON.parse(localStorage.getItem('blogData')) || defaultData;

// function saveData() {
//   localStorage.setItem('blogData', JSON.stringify(data));
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Email Login Overlay
//   const loginOverlays = document.querySelectorAll('.login-overlay');
//   loginOverlays.forEach(overlay => {
//     const form = overlay.querySelector('form');
//     const contributorId = overlay.dataset.contributor;
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const email = form.querySelector('input[type="email"]').value;
//       const contributor = data.contributors.find(c => c.id === contributorId);
//       if (email === contributor.email) {
//         overlay.classList.add('hidden');
//         document.querySelector('.dashboard-content').classList.remove('hidden');
//       } else {
//         alert('Invalid email');
//       }
//     });
//   });

//   // Content Upload Form
//   const uploadForms = document.querySelectorAll('.upload-form');
//   uploadForms.forEach(form => {
//     const contributorId = form.dataset.contributor;
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const title = form.querySelector('#title').value;
//       const content = form.querySelector('#content').value;
//       const imageInput = form.querySelector('#image');
//       const fileInput = form.querySelector('#file');
//       if (!title || !content) {
//         alert('Title and content are required!');
//         return;
//       }
//       const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';
//       const file = fileInput.files[0] ? { name: fileInput.files[0].name, url: URL.createObjectURL(fileInput.files[0]) } : null;

//       const post = {
//         id: `post${data.posts.length + 1}`,
//         contributorId,
//         title,
//         content,
//         image,
//         file,
//         date: new Date().toISOString().split('T')[0]
//       };
//       data.posts.push(post);
//       saveData();
//       console.log('Post submitted:', post);
//       alert('Post submitted successfully!');
//       form.reset();
//       window.location.href = 'blog-view.html'; // Redirect to blog-view.html
//     });
//   });

//   // Blog View Rendering
//   const blogViewContainer = document.querySelector('#blog-view-posts');
//   if (blogViewContainer) {
//     const renderPosts = () => {
//       blogViewContainer.innerHTML = '';
//       if (data.posts.length === 0) {
//         blogViewContainer.innerHTML = '<p class="text-gray-500 text-center">No posts yet.</p>';
//         return;
//       }
//       data.posts.forEach(post => {
//         const contributor = data.contributors.find(c => c.id === post.contributorId);
//         const rating = data.ratings[post.id] || 0;
//         const comments = data.comments[post.id] || [];
//         const postElement = document.createElement('article');
//         postElement.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
//         postElement.innerHTML = `
//           <div class="flex items-center mb-4">
//             <img src="${contributor.image}" alt="${contributor.name}" class="w-12 h-12 rounded-full object-cover">
//             <div class="ml-4">
//               <h3 class="text-lg font-bold">${contributor.name}</h3>
//               <p class="text-sm text-gray-500">${contributor.role} • ${post.date}</p>
//             </div>
//           </div>
//           <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
//           ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full h-64 object-cover rounded-lg mb-4">` : ''}
//           <p class="text-gray-600 mb-4">${post.content}</p>
//           ${post.file ? `<a href="${post.file.url}" download="${post.file.name}" class="text-primary hover:underline mb-4 inline-block">${post.file.name}</a>` : ''}
//           <div class="flex items-center mb-4">
//             <span class="mr-2">Rate:</span>
//             ${[1, 2, 3, 4, 5].map(star => `
//               <button class="rate-btn" data-post="${post.id}" data-value="${star}">
//                 <i class="ri-star-${star <= rating ? 'fill' : 'line'} text-yellow-400"></i>
//               </button>
//             `).join('')}
//           </div>
//           <div class="comments mb-4">
//             <h4 class="font-medium mb-2">Comments</h4>
//             ${comments.length ? comments.map(c => `<p class="text-gray-600 mb-2"><strong>${c.author}:</strong> ${c.text}</p>`).join('') : '<p class="text-gray-500">No comments yet.</p>'}
//           </div>
//           <form class="comment-form" data-post="${post.id}">
//             <textarea class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Add a comment..." rows="3"></textarea>
//             <input type="text" class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Your name">
//             <button type="submit" class="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-primary/90">Post Comment</button>
//           </form>
//         `;
//         blogViewContainer.appendChild(postElement);
//       });
//     };
//     renderPosts();

//     // Rating System
//     blogViewContainer.addEventListener('click', (e) => {
//       if (e.target.closest('.rate-btn')) {
//         const btn = e.target.closest('.rate-btn');
//         const postId = btn.dataset.post;
//         const value = parseInt(btn.dataset.value);
//         data.ratings[postId] = value;
//         saveData();
//         renderPosts();
//       }
//     });

//     // Comment System
//     blogViewContainer.addEventListener('submit', (e) => {
//       if (e.target.classList.contains('comment-form')) {
//         e.preventDefault();
//         const postId = e.target.dataset.post;
//         const text = e.target.querySelector('textarea').value;
//         const author = e.target.querySelector('input').value || 'Anonymous';
//         if (text) {
//           if (!data.comments[postId]) data.comments[postId] = [];
//           data.comments[postId].push({ author, text });
//           saveData();
//           renderPosts();
//           e.target.reset();
//         }
//       }
//     });
//   }

//   // Articles Page Filtering
//   const articlesContainer = document.querySelector('#articles-list');
//   if (articlesContainer) {
//     const categoryFilter = document.querySelector('#category-filter');
//     const renderArticles = (category = '') => {
//       articlesContainer.innerHTML = '';
//       const filteredArticles = category ? data.articles.filter(a => a.category === category) : data.articles;
//       filteredArticles.forEach(article => {
//         const articleElement = document.createElement('article');
//         articleElement.className = 'bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg';
//         articleElement.innerHTML = `
//           <div class="h-48 overflow-hidden">
//             <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover object-top">
//           </div>
//           <div class="p-6">
//             <div class="flex items-center mb-3">
//               <span class="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">${article.category}</span>
//               <span class="text-gray-500 text-sm ml-3">${article.date}</span>
//             </div>
//             <h3 class="text-xl font-bold mb-3">${article.title}</h3>
//             <p class="text-gray-600 mb-4">${article.content}</p>
//             <p class="text-sm font-medium text-gray-900">${article.author}</p>
//           </div>
//         `;
//         articlesContainer.appendChild(articleElement);
//       });
//     };
//     renderArticles();
//     categoryFilter.addEventListener('change', (e) => renderArticles(e.target.value));
//   }

//   // Contributors Page Rendering
//   const contributorsContainer = document.querySelector('#contributors-list');
//   if (contributorsContainer) {
//     data.contributors.forEach(contributor => {
//       const contributorElement = document.createElement('a');
//       contributorElement.href = `${contributor.id}.html`;
//       contributorElement.className = 'block no-underline';
//       contributorElement.innerHTML = `
//         <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
//           <div class="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-primary">
//             <img src="${contributor.image}" alt="${contributor.name}" class="w-32 h-32 rounded-full object-cover mx-auto mt-8 border-4 border-white">
//           </div>
//           <div class="p-6 text-center">
//             <h3 class="text-xl font-bold mb-1">${contributor.name}</h3>
//             <p class="text-gray-600 mb-4">${contributor.role}</p>
//             <p class="text-gray-600 mb-4 text-sm">${contributor.bio}</p>
//             <div class="flex justify-center space-x-3">
//               <a href="${contributor.id}.html" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-user-line"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-linkedin-fill"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-twitter-fill"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-mail-line"></i></a>
//             </div>
//           </div>
//         </div>
//       `;
//       contributorsContainer.appendChild(contributorElement);
//     });

//     // Prevent social/dashboard links from triggering card navigation
//     contributorsContainer.addEventListener('click', (e) => {
//       if (e.target.closest('.stop-propagation')) {
//         e.stopPropagation();
//         e.preventDefault();
//         window.location.href = e.target.closest('.stop-propagation').href;
//       }
//     });
//   }
// });




// let defaultData = {
//   contributors: [
//     { id: "michael", name: "Michael", email: "michael@gmail.com", role: "Content Creator", bio: "Specializes in transportation technology insights.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20man%20with%20dark%20hair%2C%20professional%20attire%2C%20friendly%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=michael&orientation=squarish" },
//     { id: "silver", name: "Silver", email: "silver@gmail.com", role: "Safety Analyst", bio: "Expert in school transportation safety protocols.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20woman%20with%20blonde%20hair%2C%20professional%20attire%2C%20confident%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=silver&orientation=squarish" },
//     { id: "ena", name: "Ena", email: "ena@gmail.com", role: "Traffic Specialist", bio: "Focuses on traffic pattern analysis for safer routes.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20woman%20with%20black%20hair%2C%20professional%20attire%2C%20friendly%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=ena&orientation=squarish" },
//     { id: "trevor", name: "Trevor", email: "trevor@gmail.com", role: "Route Planner", bio: "Develops optimized routes for school buses.", image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20man%20with%20short%20hair%2C%20professional%20attire%2C%20serious%20expression%2C%20neutral%20background%2C%20professional%20lighting&width=400&height=400&seq=trevor&orientation=squarish" }
//   ],
//   articles: [
//     { id: "art1", title: "How ML Models Are Revolutionizing School Bus Routes", category: "Technology", date: "2025-05-05", content: "Discover how our proprietary machine learning algorithms are creating safer, more efficient routes for school transportation systems.", image: "https://readdy.ai/api/search-image?query=Modern%20school%20bus%20with%20navigation%20system%20display%2C%20showing%20route%20optimization%20technology%20in%20action.%20Clean%2C%20minimal%20background%2C%20professional%20photography%2C%20high%20resolution&width=600&height=400&seq=article1&orientation=landscape", author: "Jennifer Wilson" }
//   ],
//   posts: [],
//   ratings: {},
//   comments: {}
// };

// // Load data from server
// let data = defaultData;

// async function fetchData() {
//   try {
//     const response = await fetch('http://localhost:3000/api/data');
//     if (response.ok) {
//       data = await response.json();
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// async function saveData() {
//   try {
//     const response = await fetch('http://localhost:3000/api/data', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     });
//     if (!response.ok) {
//       throw new Error('Failed to save data');
//     }
//     console.log('Data saved to server');
//   } catch (error) {
//     console.error('Error saving data:', error);
//   }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   await fetchData(); // Fetch initial data from server

//   // Email Login Overlay
//   const loginOverlays = document.querySelectorAll('.login-overlay');
//   loginOverlays.forEach(overlay => {
//     const form = overlay.querySelector('form');
//     const contributorId = overlay.dataset.contributor;
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const email = form.querySelector('input[type="email"]').value;
//       const contributor = data.contributors.find(c => c.id === contributorId);
//       if (email === contributor.email) {
//         overlay.classList.add('hidden');
//         document.querySelector('.dashboard-content').classList.remove('hidden');
//       } else {
//         alert('Invalid email');
//       }
//     });
//   });

//   // Content Upload Form
//   const uploadForms = document.querySelectorAll('.upload-form');
//   uploadForms.forEach(form => {
//     const contributorId = form.dataset.contributor;
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       const title = form.querySelector('#title').value;
//       const content = form.querySelector('#content').value;
//       const imageInput = form.querySelector('#image');
//       const fileInput = form.querySelector('#file');
//       if (!title || !content) {
//         alert('Title and content are required!');
//         return;
//       }
//       const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';
//       const file = fileInput.files[0] ? { name: fileInput.files[0].name, url: URL.createObjectURL(fileInput.files[0]) } : null;

//       const post = {
//         id: `post${data.posts.length + 1}`,
//         contributorId,
//         title,
//         content,
//         image,
//         file,
//         date: new Date().toISOString().split('T')[0]
//       };
//       data.posts.push(post);
//       await saveData();
//       console.log('Post submitted:', post);
//       alert('Post submitted successfully!');
//       form.reset();
//       window.location.href = 'blog-view.html';
//     });
//   });

//   // Blog View Rendering
//   const blogViewContainer = document.querySelector('#blog-view-posts');
//   if (blogViewContainer) {
//     const renderPosts = () => {
//       blogViewContainer.innerHTML = '';
//       if (data.posts.length === 0) {
//         blogViewContainer.innerHTML = '<p class="text-gray-500 text-center">No posts yet.</p>';
//         return;
//       }
//       data.posts.forEach(post => {
//         const contributor = data.contributors.find(c => c.id === post.contributorId);
//         const rating = data.ratings[post.id] || 0;
//         const comments = data.comments[post.id] || [];
//         const postElement = document.createElement('article');
//         postElement.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
//         postElement.innerHTML = `
//           <div class="flex items-center mb-4">
//             <img src="${contributor.image}" alt="${contributor.name}" class="w-12 h-12 rounded-full object-cover">
//             <div class="ml-4">
//               <h3 class="text-lg font-bold">${contributor.name}</h3>
//               <p class="text-sm text-gray-500">${contributor.role} • ${post.date}</p>
//             </div>
//           </div>
//           <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
//           ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full h-64 object-cover rounded-lg mb-4">` : ''}
//           <p class="text-gray-600 mb-4">${post.content}</p>
//           ${post.file ? `<a href="${post.file.url}" download="${post.file.name}" class="text-primary hover:underline mb-4 inline-block">${post.file.name}</a>` : ''}
//           <div class="flex items-center mb-4">
//             <span class="mr-2">Rate:</span>
//             ${[1, 2, 3, 4, 5].map(star => `
//               <button class="rate-btn" data-post="${post.id}" data-value="${star}">
//                 <i class="ri-star-${star <= rating ? 'fill' : 'line'} text-yellow-400"></i>
//               </button>
//             `).join('')}
//           </div>
//           <div class="comments mb-4">
//             <h4 class="font-medium mb-2">Comments</h4>
//             ${comments.length ? comments.map(c => `<p class="text-gray-600 mb-2"><strong>${c.author}:</strong> ${c.text}</p>`).join('') : '<p class="text-gray-500">No comments yet.</p>'}
//           </div>
//           <form class="comment-form" data-post="${post.id}">
//             <textarea class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Add a comment..." rows="3"></textarea>
//             <input type="text" class="w-full px-4 py-2 bg-gray-50 border-none rounded focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" placeholder="Your name">
//             <button type="submit" class="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-primary/90">Post Comment</button>
//           </form>
//         `;
//         blogViewContainer.appendChild(postElement);
//       });
//     };
//     renderPosts();

//     // Rating System
//     blogViewContainer.addEventListener('click', async (e) => {
//       if (e.target.closest('.rate-btn')) {
//         const btn = e.target.closest('.rate-btn');
//         const postId = btn.dataset.post;
//         const value = parseInt(btn.dataset.value);
//         data.ratings[postId] = value;
//         await saveData();
//         renderPosts();
//       }
//     });

//     // Comment System
//     blogViewContainer.addEventListener('submit', async (e) => {
//       if (e.target.classList.contains('comment-form')) {
//         e.preventDefault();
//         const postId = e.target.dataset.post;
//         const text = e.target.querySelector('textarea').value;
//         const author = e.target.querySelector('input').value || 'Anonymous';
//         if (text) {
//           if (!data.comments[postId]) data.comments[postId] = [];
//           data.comments[postId].push({ author, text });
//           await saveData();
//           renderPosts();
//           e.target.reset();
//         }
//       }
//     });
//   }

//   // Articles Page Filtering
//   const articlesContainer = document.querySelector('#articles-list');
//   if (articlesContainer) {
//     const categoryFilter = document.querySelector('#category-filter');
//     const renderArticles = (category = '') => {
//       articlesContainer.innerHTML = '';
//       const filteredArticles = category ? data.articles.filter(a => a.category === category) : data.articles;
//       filteredArticles.forEach(article => {
//         const articleElement = document.createElement('article');
//         articleElement.className = 'bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg';
//         articleElement.innerHTML = `
//           <div class="h-48 overflow-hidden">
//             <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover object-top">
//           </div>
//           <div class="p-6">
//             <div class="flex items-center mb-3">
//               <span class="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">${article.category}</span>
//               <span class="text-gray-500 text-sm ml-3">${article.date}</span>
//             </div>
//             <h3 class="text-xl font-bold mb-3">${article.title}</h3>
//             <p class="text-gray-600 mb-4">${article.content}</p>
//             <p class="text-sm font-medium text-gray-900">${article.author}</p>
//           </div>
//         `;
//         articlesContainer.appendChild(articleElement);
//       });
//     };
//     renderArticles();
//     categoryFilter.addEventListener('change', (e) => renderArticles(e.target.value));
//   }

//   // Contributors Page Rendering
//   const contributorsContainer = document.querySelector('#contributors-list');
//   if (contributorsContainer) {
//     data.contributors.forEach(contributor => {
//       const contributorElement = document.createElement('a');
//       contributorElement.href = `${contributor.id}.html`;
//       contributorElement.className = 'block no-underline';
//       contributorElement.innerHTML = `
//         <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
//           <div class="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-primary">
//             <img src="${contributor.image}" alt="${contributor.name}" class="w-32 h-32 rounded-full object-cover mx-auto mt-8 border-4 border-white">
//           </div>
//           <div class="p-6 text-center">
//             <h3 class="text-xl font-bold mb-1">${contributor.name}</h3>
//             <p class="text-gray-600 mb-4">${contributor.role}</p>
//             <p class="text-gray-600 mb-4 text-sm">${contributor.bio}</p>
//             <div class="flex justify-center space-x-3">
//               <a href="${contributor.id}.html" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-user-line"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-linkedin-fill"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-twitter-fill"></i></a>
//               <a href="#" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary stop-propagation"><i class="ri-mail-line"></i></a>
//             </div>
//           </div>
//         </div>
//       `;
//       contributorsContainer.appendChild(contributorElement);
//     });

//     // Prevent social/dashboard links from triggering card navigation
//     contributorsContainer.addEventListener('click', (e) => {
//       if (e.target.closest('.stop-propagation')) {
//         e.stopPropagation();
//         e.preventDefault();
//         window.location.href = e.target.closest('.stop-propagation').href;
//       }
//     });
//   }
// });




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
    const response = await fetch('http://localhost:3000/api/data', {
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
          <div class="flex items-center mb-4">
            <span class="mr-2">Rate:</span>
            ${[1, 2, 3, 4, 5].map(star => `
              <button class="rate-btn" data-post="${post.id}" data-value="${star}">
                <i class="ri-star-${star <= rating ? 'fill' : 'line'} text-yellow-400"></i>
              </button>
            `).join('')}
          </div>
          <div class="comments mb-4">
            <h4 class="font-medium mb-2">Comments</h4>
            ${comments.length ? comments.map(c => `<p class="text-gray-600 mb-2"><strong>${c.author}:</strong> ${c.text}</p>`).join('') : '<p class="text-gray-500">No comments yet.</p>'}
          </div>
          <form class="comment-form" data-post="${post.id}">
            <textarea class="w-full px-4 py-2 bg-gray-50 rounded mb-2" placeholder="Add a comment..." rows="3"></textarea>
            <input type="text" class="w-full px-4 py-2 bg-gray-50 rounded mb-2" placeholder="Your name">
            <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Post Comment</button>
          </form>
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
      const contributorElement = document.createElement('a');
      contributorElement.href = `${contributor.id}.html`;
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
