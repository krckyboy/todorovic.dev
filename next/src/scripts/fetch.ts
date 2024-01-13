export const fetchWrapper = async <T>(url: string | URL) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`, {
    credentials: 'include',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(txt);
  }

  return await response.json() as T;
};
