CREATE TABLE IF NOT EXISTS public."Tip"
(
    "Id" bigserial,
    "TipText" character varying(5000),
    "TipTitle" character varying(500),
    "TimeStamp" timestamp without time zone,
    CONSTRAINT Tip_pkey PRIMARY KEY ("Id")
);

ALTER TABLE public."Tip"
    OWNER to postgres;
