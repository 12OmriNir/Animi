
--

CREATE TABLE animi.products (
    product_name text,
    id text,
    category text,
    description text,
    price double precision,
    is_in_stock boolean,
    image_url text,
    origin text,
    "character" text
);


ALTER TABLE animi.products OWNER TO postgres;

--
-- TOC entry 3349 (class 0 OID 16583)
-- Dependencies: 234
-- Data for Name: products; Type: TABLE DATA; Schema: animi; Owner: postgres
--

INSERT INTO animi.products (product_name, id, category, description, price, is_in_stock, image_url, origin, "character") VALUES ('somthin something somthing', '0XEkxBv6P', 'category 1', 'description 1', 44, false, 'https://animeshop.co.il/wp-content/uploads/2022/07/20220731_100624-500x500.jpg', 'origin 1', 'character 1');
INSERT INTO animi.products (product_name, id, category, description, price, is_in_stock, image_url, origin, "character") VALUES ('somthin something somthing', '9I-wZ9LjU', 'category 1', 'description 1', 44, true, 'https://animeshop.co.il/wp-content/uploads/2022/07/20220731_100624-500x500.jpg', 'origin 1', 'character 1');
INSERT INTO animi.products (product_name, id, category, description, price, is_in_stock, image_url, origin, "character") VALUES ('somthin something so', 'kBwFl355s', 'category 1', 'description 1', 44, false, 'https://animeshop.co.il/wp-content/uploads/2022/07/20220731_100624-500x500.jpg', 'origin 1', 'character 1');
INSERT INTO animi.products (product_name, id, category, description, price, is_in_stock, image_url, origin, "character") VALUES ('somthin something so', 'DQQRRC0pN', 'category 1', 'description 1', 44, true, 'https://animeshop.co.il/wp-content/uploads/2022/07/20220731_100624-500x500.jpg', 'origin 1', 'character 1');


-- Completed on 2022-09-01 15:27:28

--
-- PostgreSQL database dump complete
--

