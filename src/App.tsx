import { useState } from "react";
import { PeopleRenderer } from "./components/renderers/PeopleRenderer";
import { ArticleRenderer } from "./components/renderers/ArticleRenderer";
import { SearchSortFilter } from "./components/SearchSortFilter";

import people from "./mock-data/people";
import articles from "./mock-data/articles";

function App() {
  const [showPeople, setShowPeople] = useState<boolean>(false);
  const buttonText = showPeople ? "Switch To Articles" : "Switch To People";

  return (
    <main>
      <section className="intro">
        <div className="intro--container">
          <h1 className="intro__title">
            TypeScript <br />& Generics
          </h1>
          <div className="intro--container__flex">
            <p className="intro__subtitle">
              A deep dive into generic type functions, using randomly-generated
              fake articles and people as examples!
            </p>
            <p className="intro__subtitle">
              The fake data below the <strong>Item Display Widget</strong> can
              be searched, sorted and filtered with generic TypeScript functions
              that can consume any data interface.
            </p>

            <a
              href="https://github.com/strudel05/typescript-generics-fun"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn--data">link to repo</button>
            </a>
          </div>
        </div>
      </section>
      <section className="data">
        <div className="widget">
          <h2>Item Display Widget</h2>
          <button
            className="btn btn--widget"
            onClick={() => setShowPeople(!showPeople)}
          >
            {buttonText}
          </button>
        </div>

        {showPeople || (
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
        )}
        {showPeople && (
          <SearchSortFilter
            title="People"
            dataSource={people}
            searchProperties={["company", "address", "firstName", "lastName"]}
            initialSearchQuery=""
            initialSortProperty={{
              property: "firstName",
              isDescending: false,
            }}
            initialFilterProperties={[]}
          >
            {(person) => <PeopleRenderer key={person.id} {...person} />}
          </SearchSortFilter>
        )}
      </section>
    </main>
  );
}

export default App;
