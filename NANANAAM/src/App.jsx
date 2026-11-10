import { useMemo, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Composer from './components/Composer';
import PostCard from './components/PostCard';
import RightSidebar from './components/RightSidebar';
import PagesView from './components/PagesView';
import {
  currentUser,
  navigation,
  favorites,
  pages,
  groups,
  birthdays,
  pageSuggestions,
  peopleYouMayKnow,
  notifications,
  messages,
  initialPosts,
  friendProfiles,
  messageThreads,
  eventList,
} from './data/mockData';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('feed');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(messageThreads[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [composerTab, setComposerTab] = useState('status');
  const [composerText, setComposerText] = useState('');
  const [composerImage, setComposerImage] = useState('');
  const [commentDrafts, setCommentDrafts] = useState({});
  const [posts, setPosts] = useState(initialPosts);

  const friends = [...friendProfiles, { ...currentUser, id: 'current-user', mutuals: 'Você mesmo' }];

  const filteredPosts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return posts;
    }

    return posts.filter((post) => {
      const text = `${post.author} ${post.text}`.toLowerCase();
      return text.includes(term);
    });
  }, [posts, searchTerm]);

  const toggleLike = (postId) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        const liked = !post.liked;

        return {
          ...post,
          liked,
          likes: liked ? post.likes + 1 : Math.max(post.likes - 1, 0),
        };
      }),
    );
  };

  const handlePublish = () => {
    const text = composerText.trim();
    if (!text && !composerImage) {
      return;
    }

    const freshPost = {
      id: Date.now(),
      author: currentUser.name,
      avatar: currentUser.avatar,
      date: 'Agora mesmo',
      text,
      image: composerImage || '',
      likes: 0,
      liked: false,
      comments: [],
    };

    setPosts((previousPosts) => [freshPost, ...previousPosts]);
    setComposerText('');
    setComposerImage('');
    setComposerTab('status');
  };

  const handleCommentSubmit = (postId) => {
    const draft = (commentDrafts[postId] || '').trim();
    if (!draft) {
      return;
    }

    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        return {
          ...post,
          comments: [
            ...post.comments,
            {
              author: currentUser.name,
              avatar: currentUser.avatar,
              text: draft,
            },
          ],
        };
      }),
    );

    setCommentDrafts((previousDrafts) => ({
      ...previousDrafts,
      [postId]: '',
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setComposerImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    if (['messages', 'feed', 'events', 'friends', 'photos', 'favorites', 'pages', 'groups'].includes(section)) {
      setSelectedProfile(null);
    }
  };

  const handleOpenProfile = (friendId) => {
    setSelectedProfile(friendId);
    setActiveSection('profile');
  };

  const resolveSection = (sectionKey) => {
    if (sectionKey.startsWith('favorites')) return 'favorites';
    if (sectionKey.startsWith('page-')) return 'pages';
    if (sectionKey.startsWith('group-')) return 'groups';
    return sectionKey;
  };

  const currentSection = resolveSection(activeSection);

  const renderMainContent = () => {
    if (currentSection === 'feed') {
      return (
        <section className="feed-column">
          <Composer
            composerTab={composerTab}
            onTabChange={setComposerTab}
            composerText={composerText}
            onTextChange={setComposerText}
            composerImage={composerImage}
            onImageChange={handleImageUpload}
            onPublish={handlePublish}
            onRemoveImage={() => setComposerImage('')}
          />

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUser={currentUser}
                commentDrafts={commentDrafts}
                setCommentDrafts={setCommentDrafts}
                onToggleLike={toggleLike}
                onCommentSubmit={handleCommentSubmit}
              />
            ))
          ) : (
            <div className="empty-state">Nenhuma publicação encontrada para sua busca.</div>
          )}
        </section>
      );
    }

    return (
      <PagesView
        section={currentSection}
        activeMessage={selectedMessage}
        onSelectMessage={setSelectedMessage}
        onOpenProfile={handleOpenProfile}
        messageThreads={messageThreads}
        eventList={eventList}
        friendProfiles={friendProfiles}
        friends={friends}
        favorites={favorites}
        pages={pages}
        groups={groups}
      />
    );
  };

  return (
    <div className="facebook-app">
      <Header
        user={currentUser}
        notifications={notifications}
        messages={messages}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        notificationsOpen={notificationsOpen}
        messagesOpen={messagesOpen}
        onToggleNotifications={() => {
          setNotificationsOpen((value) => !value);
          setMessagesOpen(false);
        }}
        onToggleMessages={() => {
          setMessagesOpen((value) => !value);
          setNotificationsOpen(false);
        }}
      />

      <main className="page-shell">
        <Sidebar
          user={currentUser}
          navigation={navigation}
          favorites={favorites}
          pages={pages}
          groups={groups}
          activeSection={activeSection}
          onSelectSection={handleNavigation}
        />

        {renderMainContent()}

        {activeSection === 'feed' && (
          <RightSidebar
            birthdays={birthdays}
            pageSuggestions={pageSuggestions}
            peopleYouMayKnow={peopleYouMayKnow}
          />
        )}
      </main>
    </div>
  );
}
