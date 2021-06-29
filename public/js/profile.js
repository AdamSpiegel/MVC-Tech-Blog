const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postName = document.querySelector('#post-name').value.trim();
    const postDescription = document.querySelector('#post-description').value.trim();
  
    if (postName && postdescription) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ postName, postDescription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog post');
      }
    }
  };
  
  document
    .querySelector('.post-list')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.delete-list')
    .addEventListener('click', delButtonHandler);
  