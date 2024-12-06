axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    const users = response.data;
    const usersList = document.getElementById('usersList');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      usersList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Ошибка при получении данных о пользователях:', error);
  });
  
axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(response => {
    const comments = response.data.slice(0, 15); 
    const commentsList = document.getElementById('commentsList');
    comments.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = `${comment.name}: ${comment.body}`;
      commentsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Ошибка при получении комментариев:', error);
  });