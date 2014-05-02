$(document).ready(function() {
  // Some click events
  $(document).on('click', '.number-of-guests', function(Event) {
    $(".number-of-guests").hide();
    $(".guests").addClass("on");
  });

  var winWidth = $( window ).width();

  if (winWidth < 481) {
    $(document).on('click', '.mobile-menu-btn', 'nav ul li a', function(Event) {
      $("nav ul").toggle();
    });
  }

  // Audio player
  var node = $('#audioPlayer');
  var tag = node.get();
  var as = audiojs.create(tag, {
    css: false,
    createPlayer: {
      markup: '\
        <div class="volume-buttons js-volume-buttons"> \
          <span class="vol-down js-volume-down"></span> \
          <span class="vol-up js-volume-up"></span> \
        </div> \
        <div class="play-pause"> \
          <span class="play"></span> \
          <span class="pause"></span> \
          <span class="loading"></span> \
          <span class="error"></span> \
        </div> \
        <div class="title js-audio-title"></div> \
        <div class="scrubber"> \
          <div class="progress"></div> \
          <div class="loaded"></div> \
        </div> \
        <div class="time"> \
          <em class="played">00:00</em> / <strong class="duration">00:00</strong> \
        </div> \
        <div class="error-message"></div>',
        playPauseClass: 'play-pause',
        scrubberClass: 'scrubber',
        progressClass: 'progress',
        loaderClass: 'loaded',
        timeClass: 'time',
        durationClass: 'duration',
        playedClass: 'played',
        errorMessageClass: 'error-message',
        playingClass: 'playing',
        loadingClass: 'loading',
        errorClass: 'error'
    }
  });
  var player = as[0];

  if(player.element.volume) {
    var curVolume = player.element.volume;

    if(curVolume === 1) {
      $('.js-volume-up').addClass('disabled');
    } else if(curVolume === 0) {
      $('.js-volume-down').addClass('disabled');
    }

    $('.js-volume-up').on('click', function(event) {
      console.log('here');
      curVolume = curVolume + 0.1;
      if(curVolume > 1) curVolume = 1;

      player.setVolume(curVolume);

      if(curVolume === 1) {
        $(this).addClass('disabled');
      }

      event.preventDefault();
    });

    $('.js-volume-down').on('click', function(event) {
      console.log('here2');
      curVolume = curVolume - 0.1;
      if(curVolume < 0) curVolume = 0;

      player.setVolume(curVolume);

      if(curVolume === 0) {
        $(this).addClass('disabled');
      }

      event.preventDefault();
    })

    $('.js-volume-buttons').addClass("on");
  }

  $('.js-audio-title').text(node.attr('data-original-title'));

  $(document).on('click', '.js-player-go', function() {
    var audioFile = $(this).attr('data-audio-url');
    var title = $(this).attr('data-audio-title');

    player.load(audioFile);
    $('.js-audio-title').text(title);

    player.play();
  });
});

