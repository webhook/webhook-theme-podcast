## Webhook Podcast Theme

Design by Dave Snider. MIT License. Do what you will with it.

## Anything I should know?

Uses [audio.js](http://kolber.github.io/audiojs/) for the player and [ajaxify.js](https://github.com/browserstate/ajaxify) for the persistance.

## Sass

I've included the Sass files if you're so inclined. I'm using my [Wyrm Sass](http://www.wyrmsass.org) framwork.
Just run a `bower install` after you've installed the theme, then add the following to your Gruntfile.js.

```
sass: {
  dev: {
    options: {
      style: 'expanded',
      loadPath: ['vendor/bourbon/app/assets/stylesheets', 'vendor/neat/app/assets/stylesheets', 'vendor/font-awesome/scss', 'vendor/wyrm/sass']
    },
    files: [{
      expand: true,
      cwd: 'sass',
      src: ['*.sass'],
      dest: 'static/css',
      ext: '.css'
    }]
  }
},
watch: {
  options : {
    files: ['sass/**/*.sass', 'vendor/wyrm/sass/**/*.sass'],
    tasks: ['sass','build']
  },
}
```

The majority of the styles are in `_layout.sass` and `_player.sass`.
