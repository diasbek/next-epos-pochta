# Google keyword layer (не замена Wordstat)

Wordstat остаётся источником кластер → URL. Этот слой — только для **Google.uz**
приоритетов и CTR, без смены посадочных.

## Как собирать

1. Google Keyword Planner (регион Узбекистан) или автоподсказки Google.uz.
2. Money-кластеры: calc, door, ecommerce, documents, cod, courier, business, Tashkent, top-6 cities, TAS-коридоры.
3. Записать ориентир объёма в `SEO_SERP_MATRIX[].googleVolumeHint` (число или оставить пустым).
4. UZ Latin: ожидать низкие объёмы; не раздувать новые URL под нулевые запросы.
5. Приоритет контента: RU money queries + бренд + навигация UZ.

## Правила

- Не менять `targetPath` кластера без 4+ недель данных GSC и проверки каннибализации с Яндексом.
- Ежемесячно сверять `google-serp-baseline.tsv` с фактической выдачей.
- При CTR &lt; ожидаемого и ≥100 показов в GSC — править title/description посадочной, не плодить дубли.
