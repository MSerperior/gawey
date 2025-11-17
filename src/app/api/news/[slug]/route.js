const token = process.env.TOKEN;

export async function GET(request, { params }) {
  const { slug } = await params

  const data = await fetch(`http://localhost:8000/api/news/${slug}`, {
    method: "GET", // or POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Example for an authorization header
    },
  });

  const news = await data.json();

  return Response.json( news )
}