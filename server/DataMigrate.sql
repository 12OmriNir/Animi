PGDMP                          z           postgres    14.4    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13754    postgres    DATABASE     d   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Hebrew_Israel.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3355            �            1259    16583    products    TABLE     �   CREATE TABLE animi.products (
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
    DROP TABLE animi.products;
       animi         heap    postgres    false                      0    16583    products 
   TABLE DATA           ~   COPY animi.products (product_name, id, category, description, price, is_in_stock, image_url, origin, "character") FROM stdin;
    animi          postgres    false    234   �          �   x^͐�j�@E�/_�H�ML]�*��P(� �8&�ɼa�i��7J��ۺ��sw���ƺ4RgnP�����u~�A+65��T��D�gKnXe	h�}�	���Ll��rۊ�g����[R�(
,
��{�d$wq\�Y�x�}l=IЍ
J�	�L~�~Ӝ�d�������&��&����UU|��y��n�Я���<I�ozӊ     