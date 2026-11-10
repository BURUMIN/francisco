export default function Composer({
  composerTab,
  onTabChange,
  composerText,
  onTextChange,
  composerImage,
  onImageChange,
  onPublish,
  onRemoveImage,
}) {
  return (
    <div className="composer-panel">
      <div className="composer-tabs">
        <button type="button" className={composerTab === 'status' ? 'active' : ''} onClick={() => onTabChange('status')}>
          Status
        </button>
        <button type="button" className={composerTab === 'photo' ? 'active' : ''} onClick={() => onTabChange('photo')}>
          Foto/vídeo
        </button>
        <button type="button" className={composerTab === 'question' ? 'active' : ''} onClick={() => onTabChange('question')}>
          Perguntar
        </button>
      </div>

      <div className="composer-body">
        <textarea
          value={composerText}
          onChange={(event) => onTextChange(event.target.value)}
          placeholder={composerTab === 'status' ? 'No que você está pensando?' : 'Compartilhe uma novidade com seus amigos...'}
        />

        {composerImage && (
          <div className="composer-image-preview">
            <img src={composerImage} alt="Pré-visualização da publicação" />
            <button type="button" className="remove-image" onClick={onRemoveImage}>Remover</button>
          </div>
        )}
      </div>

      <div className="composer-footer">
        <label className="upload-button">
          <input type="file" accept="image/*" onChange={onImageChange} />
          <span>📷 Foto</span>
        </label>

        <button type="button" className="publish-button" onClick={onPublish}>Publicar</button>
      </div>
    </div>
  );
}
