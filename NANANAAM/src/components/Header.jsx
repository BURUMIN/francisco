export default function Header({
  user,
  notifications,
  messages,
  searchTerm,
  onSearchChange,
  notificationsOpen,
  messagesOpen,
  onToggleNotifications,
  onToggleMessages,
}) {
  const unreadNotifications = notifications.filter((item) => !item.read).length;
  const unreadMessages = messages.filter((item) => item.unread).length;

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <div className="facebook-logo">f</div>
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Pesquisar pessoas, lugares e coisas"
              aria-label="Pesquisar"
            />
          </div>
        </div>

        <div className="topbar-right">
          <div className="user-mini">
            <img src={user.avatar} alt={user.name} />
            <span>{user.name.split(' ')[0]}</span>
          </div>

          <button type="button" className="nav-link nav-home active">Página inicial</button>
          <button type="button" className="nav-link">Criar</button>

          <div className="header-icon-wrap">
            <button type="button" className="icon-button" onClick={onToggleNotifications} aria-label="Notificações">
              <span>👥</span>
              {unreadNotifications > 0 && <span className="count-badge">{unreadNotifications}</span>}
            </button>
            <button type="button" className="icon-button" onClick={onToggleMessages} aria-label="Mensagens">
              <span>✉</span>
              {unreadMessages > 0 && <span className="count-badge">{unreadMessages}</span>}
            </button>
            <button type="button" className="icon-button" aria-label="Configurações">
              <span>⚙</span>
            </button>
          </div>
        </div>
      </div>

      {notificationsOpen && (
        <div className="floating-menu notification-menu">
          <div className="menu-header">
            <strong>Notificações</strong>
          </div>
          {notifications.map((item) => (
            <div key={item.id} className={`menu-item ${item.read ? 'read' : 'unread'}`}>
              <div className="menu-dot" />
              <div>
                <p>{item.title}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {messagesOpen && (
        <div className="floating-menu message-menu">
          <div className="menu-header">
            <strong>Mensagens</strong>
          </div>
          {messages.map((item) => (
            <div key={item.id} className={`menu-item ${item.unread ? 'unread' : ''}`}>
              <div className="message-user">{item.user.charAt(0)}</div>
              <div>
                <p>{item.user}</p>
                <small>{item.preview}</small>
              </div>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
