CREATE SCHEMA hd
    AUTHORIZATION djoxbredosokul;

CREATE TABLE IF NOT EXISTS hd.hd_oauth_client (
    client_id uuid NOT NULL,
    client_secret text COLLATE pg_catalog."default" NOT NULL,
    scope text COLLATE pg_catalog."default",
    CONSTRAINT hd_oauth_client_pkey PRIMARY KEY (client_id)
) WITH (OIDS = FALSE);


CREATE TABLE hd.hd_oauth_token (
    client_id uuid NOT NULL,
    token text COLLATE pg_catalog."default" NOT NULL,
    expires timestamp with time zone NOT NULL,
    CONSTRAINT hd_oauth_token_pkey PRIMARY KEY (client_id),
    CONSTRAINT token_ukey UNIQUE (token)

) WITH (OIDS = FALSE);

