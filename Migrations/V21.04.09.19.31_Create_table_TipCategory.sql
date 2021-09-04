CREATE TABLE IF NOT EXISTS public."TipCategory"
(
    "Id" bigserial,
    "Category_Id" bigint NOT NULL,
    "Tip_Id" bigint NOT NULL,
    CONSTRAINT TipCategory_pkey PRIMARY KEY ("Id"),
    CONSTRAINT TipCategory_Category FOREIGN KEY ("Category_Id")
        REFERENCES public."Category" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT TipCategory_Tip FOREIGN KEY ("Tip_Id")
        REFERENCES public."Tip" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

ALTER TABLE public."TipCategory"
    OWNER to postgres;