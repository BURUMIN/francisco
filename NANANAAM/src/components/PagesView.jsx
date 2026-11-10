export default function PagesView({
  section,
  activeMessage,
  onSelectMessage,
  onOpenProfile,
  messageThreads,
  eventList,
  friendProfiles,
  friends,
  favorites,
  pages,
  groups,
}) {
  if (section === 'messages') {
    return (
      <div className="section-page">
        <div className="section-header">
          <h3>Mensagens</h3>
        </div>

        <div className="messages-layout">
          <aside className="conversations-list">
            {messageThreads.map((thread) => (
              <button
                key={thread.id}
                type="button"
                className={`conversation-item ${activeMessage?.id === thread.id ? 'active' : ''}`}
                onClick={() => onSelectMessage(thread)}
              >
                <img src={thread.avatar} alt={thread.participant} />
                <div>
                  <strong>{thread.participant}</strong>
                  <span>{thread.messages[thread.messages.length - 1]?.text}</span>
                </div>
                {thread.online && <i className="online-dot" />}
              </button>
            ))}
          </aside>

          <div className="chat-panel">
            {activeMessage ? (
              <>
                <div className="chat-header">
                  <img src={activeMessage.avatar} alt={activeMessage.participant} />
                  <div>
                    <strong>{activeMessage.participant}</strong>
                    <small>{activeMessage.online ? 'Online agora' : 'Offline'}</small>
                  </div>
                </div>

                <div className="chat-body">
                  {activeMessage.messages.map((msg, index) => (
                    <div key={`${msg.time}-${index}`} className={`bubble ${msg.from === 'me' ? 'mine' : 'theirs'}`}>
                      <span>{msg.text}</span>
                      <small>{msg.time}</small>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="empty-chat">Selecione uma conversa</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (section === 'events') {
    return (
      <div className="section-page">
        <div className="section-header">
          <h3>Eventos</h3>
        </div>

        <div className="event-grid">
          {eventList.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-body">
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <small>{event.description}</small>
                <button type="button">Participar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'friends') {
    return (
      <div className="section-page">
        <div className="section-header">
          <h3>Amigos</h3>
        </div>

        <div className="friends-grid">
          {friends.map((friend) => (
            <div key={friend.name} className="friend-card">
              <img src={friend.avatar} alt={friend.name} />
              <strong>{friend.name}</strong>
              <small>{friend.mutuals}</small>
              <button type="button" onClick={() => onOpenProfile(friend.id)}>
                Ver perfil
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === 'profile') {
    const profile = friendProfiles.find((person) => person.id === activeMessage?.id) || friendProfiles[0];

    return (
      <div className="section-page">
        <div className="profile-hero">
          <img src={profile.cover} alt={profile.name} className="profile-cover" />
          <div className="profile-header-row">
            <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
            <div>
              <h3>{profile.name}</h3>
              <span>{profile.city}</span>
            </div>
            <button type="button">Adicionar amigo</button>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-info-card">
            <h4>Sobre</h4>
            <p>{profile.bio}</p>
            <ul>
              <li><strong>Seguidores:</strong> {profile.followers}</li>
              <li><strong>Amigos:</strong> {profile.friendsCount}</li>
              <li><strong>Em comum:</strong> {profile.mutuals}</li>
            </ul>
          </div>

          <div className="profile-feed-card">
            <h4>Publicações recentes</h4>
            <div className="mini-post">
              <strong>{profile.name}</strong>
              <p>Hoje foi um dia incrível para explorar cenários e capturar momentos especiais com a cidade ao fundo.</p>
            </div>
            <div className="mini-post">
              <strong>{profile.name}</strong>
              <p>Minha semana está mais leve com bons encontros e ótimas ideias para os próximos projetos.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (section === 'photos') {
    return (
      <div className="section-page">
        <div className="section-header">
          <h3>Fotos</h3>
        </div>
        <div className="gallery-grid">
          {friendProfiles.map((profile) => (
            <div key={profile.id} className="gallery-item" onClick={() => onOpenProfile(profile.id)}>
              <img src={profile.cover} alt={profile.name} />
              <span>{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const sectionTitle =
    section === 'favorites' ? 'Favoritos' :
    section === 'pages' ? 'Páginas' :
    section === 'groups' ? 'Grupos' :
    'Seção';

  const sectionData =
    section === 'favorites' ? favorites :
    section === 'pages' ? pages :
    section === 'groups' ? groups : [];

  return (
    <div className="section-page">
      <div className="section-header">
        <h3>{sectionTitle}</h3>
      </div>

      <div className="section-list-grid">
        {sectionData.map((item) => (
          <button
            key={item.key}
            type="button"
            className="section-list-card"
            onClick={() => {
              if (section === 'favorites') onOpenProfile(item.key.includes('cafe') ? 'sofia-martins' : 'bruno-costa');
              else if (section === 'pages') onOpenProfile(item.key.includes('musica') ? 'sofia-martins' : 'lucas-pereira');
              else onOpenProfile(item.key.includes('cafe') ? 'sofia-martins' : 'henrique-dias');
            }}
          >
            <span>{item.icon}</span>
            <strong>{item.label}</strong>
            <small>
              {section === 'favorites' ? 'Conteúdo favorito' : section === 'pages' ? 'Página popular' : item.members}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}
