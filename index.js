'use strict';

// hexo.extend.filter.register('after_post_render', require('./lib/filter'));
hexo.extend.filter.register('after_generate', require('./lib/generate-images'));
