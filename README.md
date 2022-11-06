# A deep dive into TypeScript Generics

## Project Overview

This app uses TypeScript's generic functions to make possible searching, sorting and filtering data objects of any type.

In App.tsx, you'll see that data is rendered via its respective rendered named under src/components/renderers. As its parent, you'll see a _SearchSortFilter_ function which combines all three functionalities into one.

```
// using articles as an example

<SearchSortFilter
  title="Articles"
  dataSource={articles}
  searchProperties={["title"]}
  initialSearchQuery=""
  initialSortProperty={{ property: "title", isDescending: false }}
  initialFilterProperties={[]}
>
  {(article) => <ArticleRenderer key={article.id} {...article} />}
</SearchSortFilter>

```

To introduce another data object into the app, you'll need to create three simple things:

1. A new .ts file containing the object under src/mock-data (I used local data for convenience, but this can easily be fetched from somewhere else with an API).
2. A new interface .ts file under src/interfaces matching the object's shape.
3. A new UI renderer similar to the ones that already exist under src/components/renderers.

Lastly, call the new renderer inside the SearchSortFilter function with the appropriate props, similar to above!
