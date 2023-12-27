const usersList = document.querySelector('.user-list');

function makeElement(tag, attr_n, attr_v, content) {
  const element = document.createElement(tag);
 
  element.setAttribute(attr_n, attr_v);
  element.textContent = content;
  return element;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // show users and email in table
    users.forEach(user => {
      const row = document.createElement('tr', 'data-user-id', user.id);
      const name = makeElement('td', 'data-user-id', user.id, user.name);
      const email = makeElement('td', 'data-user-id', user.id, user.email);
      row.appendChild(name);
      row.appendChild(email);
      usersList.appendChild(row);
      row.addEventListener('click', () => {
        // show posts
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then(response => response.json())
          .then(posts => {
            const postInfo = document.querySelector('.post-info');
            postInfo.innerHTML = '';
            posts.forEach(post => {
              const div = document.createElement('div');
              div.classList.add('post-item');
              div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
              `;
              postInfo.appendChild(div);
            })
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      })
    })
  });
1