INSERT INTO public."Category"
    ("Name")
SELECT 'Guitar'
WHERE
    NOT EXISTS (
        SELECT "Name" FROM public."Category" WHERE "Name" = 'Guitar'
    );

INSERT INTO public."Category"
    ("Name")
SELECT 'Bass'
WHERE
    NOT EXISTS (
        SELECT "Name" FROM public."Category" WHERE "Name" = 'Bass'
    );

INSERT INTO public."Category"
    ("Name")
SELECT 'Piano'
WHERE
    NOT EXISTS (
        SELECT "Name" FROM public."Category" WHERE "Name" = 'Piano'
    );

INSERT INTO public."Category"
    ("Name")
SELECT 'Drums'
WHERE
    NOT EXISTS (
        SELECT "Name" FROM public."Category" WHERE "Name" = 'Drums'
    );

INSERT INTO public."Category"
    ("Name")
SELECT 'Fipple flute"'
WHERE
    NOT EXISTS (
        SELECT "Name" FROM public."Category" WHERE "Name" = 'Fipple flute'
    );
