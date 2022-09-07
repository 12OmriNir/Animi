const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://animie.herokuapp.com"
    : "http://localhost:300d0";
export async function getProducts(filters) {
  const qParams = new URLSearchParams({});
  for (let key of Object.keys(filters)) {
    if (filters[key]) {
      qParams.set(key, filters[key]);
    }
  }

  const res = await fetch(`${API_URL}/api/products?${qParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export async function addProduct(task) {
  const res = await fetch(`${API_URL}/api/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/api/product/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}
