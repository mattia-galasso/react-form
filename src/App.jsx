import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const initialArticles = [
  {
    title: "Kyoto, Giappone",
    description:
      "Antica capitale giapponese famosa per i templi, i ciliegi in fiore e le tradizioni millenarie.",
  },
  {
    title: "Santorini, Grecia",
    description:
      "Isola iconica con case bianche e cupole blu, tramonti spettacolari e mare cristallino.",
  },
  {
    title: "Machu Picchu, Perù",
    description:
      "Antica città Inca immersa tra le montagne andine, uno dei siti archeologici più affascinanti al mondo.",
  },
  {
    title: "New York, Stati Uniti",
    description:
      "La città che non dorme mai, tra grattacieli, Central Park e un’energia unica.",
  },
];

export default function App() {
  //* Articles Iniziale
  const [articles, setArticles] = useState(initialArticles);

  //* useState New Article Title
  const [newTitleArticle, setNewTitleArticle] = useState("");

  //* useState New Article Description
  const [newDescArticle, setNewDescArticle] = useState("");

  //* useState New Title Modified
  const [modifiedTitle, setModifiedTitle] = useState("Titolo Modificato");

  /* Event Handle */
  //* Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!newTitleArticle || !newDescArticle) return;

    setArticles([
      ...articles,
      { title: newTitleArticle, description: newDescArticle },
    ]);

    setNewTitleArticle("");
    setNewDescArticle("");
  };

  // New Article Title and Description Input Change
  const handleNewTitleArticle = (e) => {
    setNewTitleArticle(e.target.value);
  };

  const handleNewDescArticle = (e) => {
    setNewDescArticle(e.target.value);
  };

  const handleModifyArticleBtn = (indexModify) => {
    console.log(indexModify);
    console.table(articles);
  };

  const handleDeleteArticleBtn = (indexDelete) => {
    setArticles(articles.filter((article, index) => index !== indexDelete));
  };

  return (
    <>
      {/* ARTICLES LIST */}
      <div className="container text-center">
        <div className="card my-5">
          <div className="card-header">
            <h1>Articoli</h1>
          </div>
          <ul className="list-group list-group-flush">
            {articles.map((article, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {article.title}

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Modify and Delete Button"
                >
                  {/* Modify Button */}
                  <button
                    onClick={() => handleModifyArticleBtn(index)}
                    className="btn btn-primary"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteArticleBtn(index)}
                    className="btn btn-primary"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* INPUT FORM */}
      <div className="container text-center">
        <div className="card">
          <div className="card-header">
            <h1>Aggiungi Articoli</h1>
          </div>
          <form onSubmit={handleFormSubmit} className="mx-5 my-4">
            <div className="d-flex flex-column justify-content-center gap-1">
              <div className="input-group mb-3">
                <span className="input-group-text" id="title-new-article">
                  Titolo
                </span>
                <input
                  value={newTitleArticle}
                  onChange={handleNewTitleArticle}
                  type="text"
                  className="form-control"
                  aria-label="Titolo"
                  aria-describedby="title-new-article"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Descrizione</span>
                <textarea
                  value={newDescArticle}
                  onChange={handleNewDescArticle}
                  className="form-control"
                  aria-label="Descrizione"
                ></textarea>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-primary">Aggiungi!</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
