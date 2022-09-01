export async function getProducts() {
	const res = await fetch(`http://localhost:3000/api/products`);
	return await res.json();
}

export async function addProduct(task) {
	const res = await fetch(`http://localhost:3000/api/product`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(task)
	});
	return await res.json();
}

export async function getProductsByCategory(){

}
