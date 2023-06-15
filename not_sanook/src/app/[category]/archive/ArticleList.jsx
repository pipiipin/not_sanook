export default function ArticleList({ data }) {
    return data.map((article) => {
        return (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <h3>{article.channel}</h3>
            <div>{article.date}</div>
            <div>{article.views}</div>
            <div><img src={article.image}/></div>
          </article>
        )
    })
}