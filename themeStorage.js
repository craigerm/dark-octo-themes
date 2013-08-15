window.ThemeStorage = {

  defaultTheme: 'vibrantink',

  save: function(themeName) {
    localStorage.setItem('github_theme', themeName);
  },

  getCurrent: function() {
    return localStorage.getItem('github_theme') || this.defaultTheme;
  }
};

