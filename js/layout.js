// Shared sidebar and navbar HTML generator
window.renderLayout = function(pageTitle, activeHref) {
  const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">📚</div>
        <div class="logo-text">
          <div>Remote Tutor</div>
          <div class="logo-sub">AI Education Platform</div>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section">Main</div>
        <a href="dashboard.html" class="nav-item">
          <span class="nav-icon">🏠</span> Dashboard
        </a>
        <a href="chat.html" class="nav-item">
          <span class="nav-icon">🤖</span> AI Tutor Chat
          <span class="nav-badge">AI</span>
        </a>
        
        <div class="nav-section">Learning</div>
        <a href="upload.html" class="nav-item">
          <span class="nav-icon">📤</span> Upload Book
        </a>
        <a href="notes.html" class="nav-item">
          <span class="nav-icon">📝</span> Notes Generator
        </a>
        <a href="test.html" class="nav-item">
          <span class="nav-icon">📋</span> Test Generator
        </a>
        <a href="pdfs.html" class="nav-item">
          <span class="nav-icon">📄</span> My PDFs
        </a>
        
        <div class="nav-section">Insights</div>
        <a href="analytics.html" class="nav-item">
          <span class="nav-icon">📊</span> Analytics
        </a>
        
        <div class="nav-section">Account</div>
        <a href="#" class="nav-item" onclick="showToast('Settings coming soon','info')">
          <span class="nav-icon">⚙️</span> Settings
        </a>
        <a href="login.html" class="nav-item" onclick="showToast('Logging out...','info')">
          <span class="nav-icon">🚪</span> Logout
        </a>
      </nav>
      
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="avatar ring-indicator">AS</div>
          <div class="user-info">
            <div class="user-name">Arjun Sharma</div>
            <div class="user-role">Student · Class 10</div>
          </div>
          <span style="color:var(--text-light);font-size:0.8rem">⋮</span>
        </div>
      </div>
    </aside>
    
    <nav class="navbar">
      <button class="mobile-menu-btn" id="menu-btn">☰</button>
      <h2 class="navbar-title">${pageTitle}</h2>
      <div class="navbar-actions">
        <button class="icon-btn" onclick="showToast('No new notifications','info')" data-tooltip="Notifications">
          🔔
        </button>
        <button class="icon-btn theme-btn" data-tooltip="Toggle theme">
          <span class="theme-icon">🌙</span>
        </button>
        <div class="avatar" style="cursor:pointer;width:36px;height:36px;font-size:0.8rem" onclick="window.location.href='dashboard.html'">AS</div>
      </div>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  
  // Set active nav
  document.querySelectorAll('.nav-item').forEach(item => {
    if(item.getAttribute('href') === activeHref) {
      item.classList.add('active');
    }
  });
};