const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('.new-comment').value.trim();
    const comment_id = document.querySelector('.comment-id').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment, comment_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/comment');
      } else {
        alert('Failed to create new comment');
      }
    }
  };