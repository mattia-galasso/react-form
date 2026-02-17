import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const initialArticles = [
  "Kyoto, Giappone",
  "Santorini, Grecia",
  "Machu Picchu, Perù",
  "New York, Stati Uniti",
];

export default function App() {
  //* Articles Iniziale
  const [articles, setArticles] = useState(initialArticles);

  //* useState New Article
  const [newArticle, setNewArticle] = useState("");

  //* useState Modify Article
  const [editArticleIndex, setEditArticleIndex] = useState();

  //* Input Edit Article
  const [inputEditArticle, setInputEditArticle] = useState("");

  //* Article Corresponding to Index
  const editArticle = articles[editArticleIndex];

  /* Event Handle */
  //* Form Submit
  const handleNewArticleFormSubmit = (e) => {
    e.preventDefault();

    if (!newArticle) return;

    setArticles([...articles, newArticle]);
    setNewArticle("");
  };

  const handleEditArticleFormSubmit = (e) => {
    e.preventDefault();

    const updateArticles = articles.map((article, index) =>
      index === editArticleIndex ? inputEditArticle : article,
    );
    setArticles(updateArticles);
    setEditArticleIndex(null);
  };

  /* MODIFY ARTICLE */
  const editSelectedArticle = (indexEdit) => {
    setEditArticleIndex(indexEdit);
    setInputEditArticle(articles[indexEdit]);
  };

  /* DELETE ARTICLE */
  const deleteArticleBtn = (indexDelete) => {
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
                {article}

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Modify and Delete Button"
                >
                  {/* Modify Button */}
                  <button
                    onClick={() => editSelectedArticle(index)}
                    className="btn btn-warning"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteArticleBtn(index)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ADD FORM */}
      <div className="container text-center">
        <div className="card">
          <div className="card-header">
            <h1>Aggiungi Articoli</h1>
          </div>
          <form onSubmit={handleNewArticleFormSubmit} className="mx-5 my-4">
            <div className="d-flex flex-column justify-content-center gap-1">
              <div className="input-group mb-3">
                <span className="input-group-text" id="title-new-article">
                  Titolo
                </span>
                <input
                  value={newArticle}
                  onChange={(e) => setNewArticle(e.target.value)}
                  type="text"
                  className="form-control"
                  aria-label="Titolo"
                  aria-describedby="title-new-article"
                />
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-primary">Aggiungi!</button>
            </div>
          </form>
        </div>
      </div>

      {/* MODIFY FORM */}
      {editArticleIndex && (
        <div className="container text-center my-4">
          <div className="card">
            <div className="card-header">
              <h1>Modifica {editArticle}</h1>
            </div>
            <form onSubmit={handleEditArticleFormSubmit} className="mx-5 my-4">
              <div className="d-flex flex-column justify-content-center gap-1">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="title-new-article">
                    Titolo
                  </span>
                  <input
                    value={inputEditArticle}
                    onChange={(e) => setInputEditArticle(e.target.value)}
                    type="text"
                    className="form-control"
                    aria-label="Titolo"
                    aria-describedby="title-new-article"
                  />
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <button className="btn btn-primary">Modifica!</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
