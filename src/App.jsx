import React, { useState } from 'react';
import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronRight, LayoutGrid, MessageSquare, Palette, Video, Bot,
  Code, Sparkles, Image, Aperture, Brush, Film, Clapperboard, PlaySquare, 
  BookOpen, ShoppingBag, PenTool, Zap, FolderOpen
} from 'lucide-react';
import { menuItems, toolsData } from './data';
import Workspace from './Workspace';
import Gallery from './Gallery';

const IconMap = {
  LayoutGrid, MessageSquare, Palette, Video, Bot,
  Code, Sparkles, Image, Aperture, Brush, Film,
  Clapperboard, PlaySquare, BookOpen, ShoppingBag, PenTool, Zap, FolderOpen
};

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const activeMenu = searchParams.get('menu') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = (menuId) => {
    setSearchParams({ menu: menuId });
    setSearchQuery('');
  };

  const filteredTools = toolsData.filter(tool => {
    const matchesMenu = activeMenu === 'all' || tool.category === activeMenu;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMenu && matchesSearch;
  });

  const getMenuLabel = () => {
    const menu = menuItems.find(m => m.id === activeMenu);
    return menu ? menu.label : '全部工具';
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <Zap size={24} color="#fff" />
          </div>
          <span className="logo-text">Nexus AI</span>
        </div>
        
        <nav className="nav-menu">
          {menuItems.map((menu) => {
            const Icon = IconMap[menu.icon] || Bot;
            const isActive = activeMenu === menu.id;
            return (
              <div 
                key={menu.id} 
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu.id)}
              >
                <Icon size={20} />
                <span>{menu.label}</span>
              </div>
            );
          })}
          <div className="nav-divider"></div>
          <div className="nav-item" onClick={() => navigate('/gallery')}>
            <FolderOpen size={20} />
            <span>我的作品集</span>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div>
            <h1 className="header-title">{getMenuLabel()}</h1>
            <p className="header-subtitle">一站式调用全球顶尖AI大模型，开启无限创造力</p>
          </div>
          <div className="search-bar">
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="搜索应用或功能..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <motion.div className="tools-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const ToolIcon = IconMap[tool.icon] || Bot;
              return (
                <motion.div 
                  key={tool.id}
                  className="tool-card"
                  onClick={() => navigate(`/tool/${tool.id}`)}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-header">
                    <div className="card-icon">
                      <ToolIcon size={24} color="#fff" />
                    </div>
                    <div>
                      <h3 className="card-title">{tool.title}</h3>
                    </div>
                    {tool.tag && <span className="card-tag">{tool.tag}</span>}
                  </div>
                  
                  <p className="card-desc">{tool.desc}</p>
                  
                  <div className="card-footer">
                    {tool.hot ? <span className="hot-badge">HOT</span> : <span></span>}
                    <div className="card-action">
                      进入工作台 <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredTools.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}
            >
              <Bot size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <h2>未找到相关AI工具</h2>
              <p>请尝试其他搜索词或分类</p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/:id" element={<Workspace />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
