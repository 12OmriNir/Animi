export async function getProducts(filters) {
	const res = await fetch(`http://localhost:3000/api/products?
	category=${filters["category"]}
	&origin=${filters["origin"]}
	&character=${filters["character"]}
	&minPrice=${filters["minPrice"]}
	&maxPrice=${filters["maxPrice"]}`, 
	{
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
	});
	return await res.json();
}

export async function addProduct(task) {
	const res = await fetch(`http://localhost:3000/api/product`, 
	{
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(task)
	});
	return await res.json();
}

export async function getProductById(id) {
	const res = await fetch(`http://localhost:3000/api/product/${id}`, 
	{
		method: 'GET',
		headers : {'Content-Type': 'application/json'}
	})
	return await res.json
}
