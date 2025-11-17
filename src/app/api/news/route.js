const token = process.env.TOKEN;

export async function GET(request) {
  const page = request.nextUrl.searchParams.get('page')
  const limit = request.nextUrl.searchParams.get('limit')

  const queryParams = {
    page: page ?? 1,
    limit: limit ?? 6,
  };

  const searchParams = new URLSearchParams(queryParams);

  const data = await fetch(`http://localhost:8000/api/news?${searchParams.toString()}`, {
    method: "GET", // or POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Example for an authorization header
    },
  });

  const news = await data.json();

  return Response.json(news)
}