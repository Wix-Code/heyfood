--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Catergory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Catergory" (
    id integer NOT NULL,
    img text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Catergory" OWNER TO postgres;

--
-- Name: Catergory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Catergory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Catergory_id_seq" OWNER TO postgres;

--
-- Name: Catergory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Catergory_id_seq" OWNED BY public."Catergory".id;


--
-- Name: Restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Restaurant" (
    id integer NOT NULL,
    img text NOT NULL,
    name text NOT NULL,
    rating double precision DEFAULT 0 NOT NULL,
    "reviewCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "openHour" text,
    "closeHour" text,
    discount text,
    "freeDrink" boolean NOT NULL,
    "partyJellof" boolean NOT NULL,
    shop text NOT NULL
);


ALTER TABLE public."Restaurant" OWNER TO postgres;

--
-- Name: Restaurant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Restaurant_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Restaurant_id_seq" OWNER TO postgres;

--
-- Name: Restaurant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Restaurant_id_seq" OWNED BY public."Restaurant".id;


--
-- Name: Review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Review" (
    id integer NOT NULL,
    rating integer NOT NULL,
    comment text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "restaurantId" integer NOT NULL
);


ALTER TABLE public."Review" OWNER TO postgres;

--
-- Name: Review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Review_id_seq" OWNER TO postgres;

--
-- Name: Review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Review_id_seq" OWNED BY public."Review".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Catergory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Catergory" ALTER COLUMN id SET DEFAULT nextval('public."Catergory_id_seq"'::regclass);


--
-- Name: Restaurant id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Restaurant" ALTER COLUMN id SET DEFAULT nextval('public."Restaurant_id_seq"'::regclass);


--
-- Name: Review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review" ALTER COLUMN id SET DEFAULT nextval('public."Review_id_seq"'::regclass);


--
-- Data for Name: Catergory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Catergory" (id, img, name) FROM stdin;
1	https://www.svgrepo.com/show/277657/shawarma.svg	Sharwama
2	https://upload.wikimedia.org/wikipedia/commons/b/bf/Baked_chicken_icon.svg	Chicken
3	https://www.svgrepo.com/show/232863/japanese-food-rice.svg	Rice
4	https://cheflolaskitchen.com/wp-content/uploads/2023/03/amala-8462-720x1080.jpg.webp	Amala
5	https://cdn-icons-png.flaticon.com/512/4533/4533705.png	Doughnuts
6	https://i.pinimg.com/564x/2c/6f/6e/2c6f6e502f01194d48616415eeec1eda.jpg	Ice Cream
7	https://www.svgrepo.com/show/265557/juice.svg	Juice
8	https://www.svgrepo.com/show/406568/meat-on-bone.svg	Goat Meat
9	https://www.svgrepo.com/show/251636/fast-food-burger.svg	Fastfood
10	https://cdn-icons-png.flaticon.com/512/3823/3823394.png	Soup Bowl
11	https://www.svgrepo.com/show/21407/sandwich.svg	Sandwich
\.


--
-- Data for Name: Restaurant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Restaurant" (id, img, name, rating, "reviewCount", "createdAt", "openHour", "closeHour", discount, "freeDrink", "partyJellof", shop) FROM stdin;
2	https://foodsturvs.ca/wp-content/uploads/2024/01/14_file.png	Rice	0	0	2025-05-04 16:23:51.348	07:00	16:00	10% off order	f	t	Mama Jellof Kitchen
3	https://cdn.sanity.io/images/g1s4qnmz/production/86ea7cc20cf83221e5a00e50828bab494c12f011-1364x1125.png	Sharwama	0	0	2025-05-04 16:28:17.209	07:00	20:00	\N	f	f	BTS Kitchen
4	https://images.arla.com/recordid/A299C91F-5199-4329-9B9AEA35553BEBB3/picture.jpg?width=1200&height=630&mode=crop&format=jpg	Sharwama	0	0	2025-05-04 16:30:52.16	07:00	20:00	5% off order	f	f	Richbites
5	https://njaes.rutgers.edu/fs542/fs542-main-1.jpg	Juice	0	0	2025-05-04 16:35:12.32	07:00	20:00	\N	f	f	Richbites
1	https://loveweddingsng.com/wp-content/uploads/2016/08/Nigerian-UK-Wedding-Caterer-Jollof-Rice-Eat-Jollof-London-LoveweddingsNG-2.png	Rice	4.5	4	2025-05-04 16:22:18.273	07:00	17:00	5% off order	t	t	Lolu's Cuisine On The Go
6	https://njaes.rutgers.edu/fs542/fs542-main-1.jpg	Juice	0	0	2025-05-05 03:34:02.621	07:00	20:00	10% off delivery fee	f	f	Richbites
7	https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg	Fastfood	0	0	2025-05-05 05:34:43.742	07:00	20:00	\N	t	f	Chics Foods
\.


--
-- Data for Name: Review; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Review" (id, rating, comment, "createdAt", "restaurantId") FROM stdin;
1	5	Good kitchen	2025-05-04 23:37:41.676	1
2	4	Good Rice	2025-05-04 23:39:22.054	1
3	4	Good Rice	2025-05-04 23:39:23.827	1
4	5	Very Delicious	2025-05-04 23:39:47.065	1
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
77e3c723-8026-419c-b308-0fc41216bbd3	77f3eee476b091cc7930114f7d216d8dcc2d5cc6c7d274d54679fe95ac7bceb0	2025-05-02 09:17:35.438971-07	20250502161734_added_schemas	\N	\N	2025-05-02 09:17:35.4075-07	1
472b8d25-a23f-4abc-9bbd-38c6fbaa716a	735d7ec6b5822510ad5208cda1be2cf74d7e595713136648cce7a5ea80042ce8	2025-05-03 22:46:12.75838-07	20250504054611_editing_restaurant_schema_and_adding_review_schema	\N	\N	2025-05-03 22:46:12.671672-07	1
3c1380a5-f670-467b-96f7-ecd61bc0df2f	ffd156b678944c2724a401ed5096423541836696e0fc328cfe9763f35eb1a19b	2025-05-03 23:43:53.940073-07	20250504064353_editted_restaurant_schema	\N	\N	2025-05-03 23:43:53.924824-07	1
43cc7403-ced0-48b7-9298-2f3d4a64ac46	6b0362a82f724bc3bec685943573862c2657efe5874562aa7bbacb00a831165b	2025-05-04 09:18:58.687974-07	20250504161857_edited	\N	\N	2025-05-04 09:18:58.654663-07	1
\.


--
-- Name: Catergory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Catergory_id_seq"', 11, true);


--
-- Name: Restaurant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Restaurant_id_seq"', 7, true);


--
-- Name: Review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Review_id_seq"', 4, true);


--
-- Name: Catergory Catergory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Catergory"
    ADD CONSTRAINT "Catergory_pkey" PRIMARY KEY (id);


--
-- Name: Restaurant Restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Restaurant"
    ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY (id);


--
-- Name: Review Review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Review Review_restaurantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES public."Restaurant"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

