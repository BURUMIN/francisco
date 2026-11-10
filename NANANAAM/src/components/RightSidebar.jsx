export default function RightSidebar({ birthdays, pageSuggestions, peopleYouMayKnow }) {
  return (
    <aside className="right-panel">
      <div className="side-card">
        <h4>Aniversariantes</h4>
        <ul className="mini-list">
          {birthdays.map((person) => (
            <li key={person.name}>
              <img src={person.avatar} alt={person.name} />
              <div>
                <strong>{person.name}</strong>
                <small>{person.day}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="side-card">
        <h4>Sugestões de páginas</h4>
        {pageSuggestions.map((page) => (
          <div key={page.name} className="page-suggestion">
            <img src={page.cover} alt={page.name} />
            <div>
              <strong>{page.name}</strong>
              <small>{page.likes} curtidas</small>
            </div>
            <button type="button">Curtir</button>
          </div>
        ))}
      </div>

      <div className="side-card">
        <h4>Pessoas que talvez você conheça</h4>
        {peopleYouMayKnow.map((person) => (
          <div key={person.name} className="person-card">
            <img src={person.avatar} alt={person.name} />
            <div>
              <strong>{person.name}</strong>
              <small>{person.mutuals}</small>
            </div>
            <button type="button">Adicionar</button>
          </div>
        ))}
      </div>

      <div className="side-card ad-card">
        <span className="ad-tag">Anúncio</span>
        <h4>Visit Recife</h4>
        <p>Descubra os melhores pontos da cidade e aproveite experiências inesquecíveis.</p>
        <button type="button">Saiba mais</button>
      </div>
    </aside>
  );
}
