CREATE TABLE IF NOT EXISTS public."Category"
(
    "Id" bigserial,
    "Name" character varying(100),
    PRIMARY KEY ("Id")
);

ALTER TABLE public."Category"
    OWNER to postgres;