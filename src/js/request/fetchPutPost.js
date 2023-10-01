export async function fetchPutPost(id, data) {
    const url = `/social/posts/${id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to update post');
    }

    return await response.json();
}
