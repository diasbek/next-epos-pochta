# Google keyword layer (не замена Wordstat)

Wordstat остаётся источником кластер → URL. Этот слой — только для **Google.uz**
приоритетов и CTR, без смены посадочных и без новых env/полей в коде.

## Как собирать

1. Автоподсказки Google.uz или Keyword Planner (регион Узбекистан) — вне репо.
2. Money-кластеры: calc, door, ecommerce, documents, cod, courier, business, Tashkent, top-6 cities, TAS-коридоры.
3. Фиксировать объёмы/позиции в `google-serp-baseline.tsv` (колонки baseline), не в env.
4. UZ Latin: ожидать низкие объёмы; не раздувать новые URL под нулевые запросы.
5. Приоритет контента: RU money queries + бренд + навигация UZ.

## Правила

- Не менять `targetPath` кластера без 4+ недель данных GSC и проверки каннибализации с Яндексом.
- Ежемесячно сверять `google-serp-baseline.tsv` с фактической выдачей.
- При CTR низком и ≥100 показов в GSC — править title/description посадочной, не плодить дубли.
- GA4 / GBP / новые `NEXT_PUBLIC_*` — отложены; GSC уже подключён.
