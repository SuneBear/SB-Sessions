var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets('ul:not(.no-bullets) li, ol:not(.no-bullets) li, .bullet'),
  scale(),
  backdrop(),
  hash()
]);

// Syntax highlighting
require('prism');
require('prism/components/prism-scss.js');
require('prism/components/prism-less.js');
require('prism/components/prism-stylus.js');
require('prism-clojure/prism.clojure.js');
