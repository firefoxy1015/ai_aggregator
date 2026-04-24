import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Image, Video, Music, Trash2, Download, Clock, Cpu, Filter, Grid, List, Search, Zap } from 'lucide-react';
import './Gallery.css';

function Gallery() {
  const navigate = useNavigate();
  const [works, setWorks] = useState([]);
  const [filter, setFilter] = useState('all'); // all, image, video, audio
  const [viewMode, setViewMode] = useState('grid'); // grid, list
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('nexus_gallery') || '[]');
    setWorks(saved.sort((a, b) => b.timestamp - a.timestamp));
  }, []);

  const deleteWork = (id) => {
    const updated = works.filter(w => w.id !== id);
    setWorks(updated);
    localStorage.setItem('nexus_gallery', JSON.stringify(updated));
    if (selectedWork?.id === id) setSelectedWork(null);
  };

  const clearAll = () => {
    if (window.confirm('确认清空所有作品记录？此操作不可恢复。')) {
      setWorks([]);
      localStorage.removeItem('nexus_gallery');
      setSelectedWork(null);
    }
  };

  const filteredWorks = works.filter(w => {
    const matchesFilter = filter === 'all' || w.mediaType === filter;
    const matchesSearch = w.prompt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.modelTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.modelId?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: works.length,
    images: works.filter(w => w.mediaType === 'image').length,
    videos: works.filter(w => w.mediaType === 'video').length,
    audios: works.filter(w => w.mediaType === 'audio').length,
  };

  const formatTime = (ts) => {
    const d = new Date(ts);
    const now = new Date();
    const diff = now - d;
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return `${Math.floor(diff/60000)}分钟前`;
    if (diff < 86400000) return `${Math.floor(diff/3600000)}小时前`;
    return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const getTypeIcon = (type) => {
    if (type === 'video') return <Video size={14} />;
    if (type === 'audio') return <Music size={14} />;
    return <Image size={14} />;
  };

  const getTypeLabel = (type) => {
    if (type === 'video') return '视频';
    if (type === 'audio') return '音频';
    return '图片';
  };

  return (
    <div className="gallery-page">
      <aside className="gallery-sidebar">
        <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon"><Zap size={24} color="#fff" /></div>
          <span className="logo-text">Nexus AI</span>
        </div>

        <nav className="gallery-nav">
          <div className="nav-item active" onClick={() => navigate('/')}>
            <ArrowLeft size={20} />
            <span>返回首页</span>
          </div>
        </nav>

        <div className="gallery-stats-sidebar">
          <h4>作品统计</h4>
          <div className="stat-row"><span>📊 总计</span><span className="stat-num">{stats.total}</span></div>
          <div className="stat-row"><span>🖼️ 图片</span><span className="stat-num">{stats.images}</span></div>
          <div className="stat-row"><span>🎬 视频</span><span className="stat-num">{stats.videos}</span></div>
          <div className="stat-row"><span>🎵 音频</span><span className="stat-num">{stats.audios}</span></div>
        </div>
      </aside>

      <main className="gallery-main">
        <header className="gallery-header">
          <div className="gallery-header-left">
            <h1>我的作品集</h1>
            <p className="gallery-subtitle">所有AI模型生成的作品都在这里</p>
          </div>
          <div className="gallery-header-right">
            <div className="gallery-search">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="搜索提示词或模型..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
              />
            </div>
          </div>
        </header>

        <div className="gallery-toolbar">
          <div className="filter-tabs">
            {[
              { id: 'all', label: '全部', icon: <Grid size={14} /> },
              { id: 'image', label: '图片', icon: <Image size={14} /> },
              { id: 'video', label: '视频', icon: <Video size={14} /> },
              { id: 'audio', label: '音频', icon: <Music size={14} /> },
            ].map(f => (
              <button 
                key={f.id} 
                className={`filter-tab ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.icon} {f.label}
                {f.id !== 'all' && <span className="tab-count">{stats[f.id + 's'] || 0}</span>}
              </button>
            ))}
          </div>
          <div className="toolbar-actions">
            <button className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}><Grid size={16} /></button>
            <button className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}><List size={16} /></button>
            {works.length > 0 && (
              <button className="clear-all-btn" onClick={clearAll}><Trash2 size={14} /> 清空</button>
            )}
          </div>
        </div>

        {filteredWorks.length === 0 ? (
          <div className="gallery-empty">
            <div className="empty-icon">🎨</div>
            <h2>还没有作品</h2>
            <p>去工作台生成一些精彩的内容吧！</p>
            <button className="go-create-btn" onClick={() => navigate('/')}>
              <Zap size={16} /> 开始创作
            </button>
          </div>
        ) : (
          <motion.div className={`gallery-grid ${viewMode}`} layout>
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  className="gallery-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="card-media">
                    {work.mediaType === 'video' ? (
                      <video src={work.url} muted preload="metadata" />
                    ) : work.mediaType === 'audio' ? (
                      <div className="audio-placeholder">
                        <Music size={40} />
                        <span>音频文件</span>
                      </div>
                    ) : (
                      <img src={work.url} alt={work.prompt} loading="lazy" />
                    )}
                    <div className="media-type-badge">
                      {getTypeIcon(work.mediaType)} {getTypeLabel(work.mediaType)}
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-model">
                      <Cpu size={12} />
                      <span>{work.modelTitle || work.modelId}</span>
                    </div>
                    <p className="card-prompt">{work.prompt || '无提示词'}</p>
                    <div className="card-meta">
                      <span className="card-time"><Clock size={12} /> {formatTime(work.timestamp)}</span>
                      <div className="card-actions">
                        <a href={work.url} download target="_blank" rel="noreferrer" className="action-btn" onClick={e => e.stopPropagation()}>
                          <Download size={14} />
                        </a>
                        <button className="action-btn danger" onClick={e => { e.stopPropagation(); deleteWork(work.id); }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div 
            className="lightbox-overlay" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div 
              className="lightbox-content" 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedWork(null)}>✕</button>
              <div className="lightbox-media">
                {selectedWork.mediaType === 'video' ? (
                  <video src={selectedWork.url} controls autoPlay loop style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '12px' }} />
                ) : selectedWork.mediaType === 'audio' ? (
                  <div className="audio-lightbox">
                    <Music size={64} />
                    <audio src={selectedWork.url} controls autoPlay style={{ width: '100%', marginTop: '20px' }} />
                  </div>
                ) : (
                  <img src={selectedWork.url} alt={selectedWork.prompt} style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '12px' }} />
                )}
              </div>
              <div className="lightbox-details">
                <div className="detail-row">
                  <span className="detail-label"><Cpu size={14} /> 模型</span>
                  <span className="detail-value">{selectedWork.modelTitle} ({selectedWork.modelId})</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label"><Clock size={14} /> 时间</span>
                  <span className="detail-value">{new Date(selectedWork.timestamp).toLocaleString('zh-CN')}</span>
                </div>
                <div className="detail-row full-width">
                  <span className="detail-label">📝 提示词</span>
                  <p className="detail-prompt">{selectedWork.prompt || '无提示词'}</p>
                </div>
                <div className="lightbox-actions">
                  <a href={selectedWork.url} download target="_blank" rel="noreferrer" className="lb-btn primary">
                    <Download size={16} /> 下载原文件
                  </a>
                  <button className="lb-btn danger" onClick={() => { deleteWork(selectedWork.id); }}>
                    <Trash2 size={16} /> 删除
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
