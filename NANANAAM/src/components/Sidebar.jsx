export default function Sidebar({
  user,
  navigation,
  favorites,
  pages,
  groups,
  activeSection,
  onSelectSection,
}) {
  return (
    <aside className="left-panel">
      <div className="profile-summary">
        <img src={user.avatar} alt={user.name} />
        <span>{user.name}</span>
      </div>

      <nav className="side-nav">
        {navigation.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`side-link ${activeSection === item.key ? 'active' : ''}`}
            onClick={() => onSelectSection(item.key)}
          >
            <span className="side-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="side-section">
        <h4>Favoritos</h4>
        <ul>
          {favorites.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`side-mini-button ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => onSelectSection(item.key)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="side-section">
        <h4>Páginas</h4>
        <ul>
          {pages.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`side-mini-button ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => onSelectSection(item.key)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="side-section">
        <h4>Grupos</h4>
        <ul>
          {groups.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`side-mini-button ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => onSelectSection(item.key)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
