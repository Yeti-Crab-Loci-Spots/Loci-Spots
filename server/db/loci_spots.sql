--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE resto (
	"resto_id" integer NOT NULL,
	"restoname" varchar,
	"address" varchar,
	"city" varchar,
	"foodtype" varchar,
	"link" varchar,
	"votes" integer,
  "add_by_user" integer,

	CONSTRAINT "resto_pkey" PRIMARY KEY ("resto_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE user (
	"user_id" integer NOT NULL,
	"github_id" varchar,
	CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.user_resto_votes (
	"_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"resto_id" integer NOT NULL,
  "vote" integer,
	CONSTRAINT "votes_pkey" PRIMARY KEY ("user_id", "resto_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE public.resto ADD CONSTRAINT "resto_fk0" FOREIGN KEY ("add_by_user") REFERENCES  public.user("user_id");


ALTER TABLE  public.user_resto_votes ADD CONSTRAINT "votes_fk0" FOREIGN KEY ("user_id") REFERENCES public.user("user_id");
ALTER TABLE  public.user_resto_votes ADD CONSTRAINT "votes_fk1" FOREIGN KEY ("resto_id") REFERENCES public.resto("resto_id");


 INSERT INTO public.user VALUES (1, 'mlamchamkee');
 INSERT INTO public.user VALUES (2, 'iannkila');
 INSERT INTO public.user VALUES (3, 'crgb0s');


 INSERT INTO public.resto VALUES (1, 'Jade Garden', '211 Main St', 'New York', 'Chinese', 'www.google.com', 0, 1);
 INSERT INTO public.resto VALUES (2, 'Hot Dougs', '21 Archer St', 'Toronto', 'Sandwich', 'www.google.com', 0, 1);
 

 INSERT INTO public.user_resto_votes VALUES (1, 1, 1, 1);
 INSERT INTO public.user_resto_votes VALUES (2, 1, 2, -1);
 INSERT INTO public.user_resto_votes VALUES (3, 2, 1, 1);

select setval('user_resto_votes__id_seq', 4, false);


