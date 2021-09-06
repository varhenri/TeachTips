CREATE TABLE IF NOT EXISTS public."TipCategory"
(
    "Id" bigserial,
    "TipId" bigint NOT NULL,
    "CategoryId" bigint NOT NULL,
    CONSTRAINT TipCategory_pkey PRIMARY KEY ("Id"),
    CONSTRAINT TipCategory_Category FOREIGN KEY ("CategoryId")
        REFERENCES public."Category" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT TipCategory_Tip FOREIGN KEY ("TipId")
        REFERENCES public."Tip" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

ALTER TABLE public."TipCategory"
    OWNER to postgres;