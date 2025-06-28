import type { Post, User } from "@/types/api";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch posts: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export async function fetchPost(id: string | number): Promise<Post> {
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch post: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
