---
title: Netbeanz.com
layout: front.njk
---

<div id="siteTitleBig">
  <div id="clickable-div" class="site-title">
    netbeanz.com
  </div>
</div>

<!-- 
<audio id="background-music" loop>
  <source src="/sound/windowgazing.mp3" type="audio/mpeg" />
</audio> -->

<div id="grid">

<ul id="Top" id="grid1" class="image-grid-small">

  <li><img class="grid-image" src="/images/front/front1.gif" alt=""></li>
  <li><img class="grid-image" src="/images/front/front2.jpg" alt=""></li>
  <li><img class="grid-image" src="/images/front/front3.png" alt=""></li>
  <li><img class="grid-image" src="/images/front/front4.jpg" alt=""></li>
  <li><img class="grid-image" src="/images/front/front5.gif" alt=""></li>
  <li><img class="grid-image" src="/images/front/front7.jpg" alt=""></li>
  <li><img class="grid-image" src="/images/front/front8.gif" alt=""></li>


</ul>


</div>

<div id="Everything">


<!-- build a cool carosel here. Simple click to left or right to go to new collection.-->

  <h2>Photo Galleries</h2>
  <hr>
  <br>

  <div class="post-link-box">
    {%- for gallery in collections.galleries -%}
      <a href=".{{ gallery.url }}" class="vibrate photo-bg">{{ gallery.data.title }}</a>
  <div class="post-date-box">{{ gallery.date | date: "%B %e, %Y" }}</div>
  {%- endfor -%}
  </div>

  <h2>BOOKMARKS</h2>
  <hr>
  <br>

  <ul class="capitalize">
        <a href="https://www.youtube.com/watch?v=LkDLQ1lZc5o&list=RDLkDLQ1lZc5o&start_radio=1" target="_blank" rel="noopener noreferrer">
      Jim Hall - Concierto de Aranjuez
    </a>
    <a href="/clerical/notes/index.html">My Notes</a>
    <a href="https://www.youtube.com/watch?v=HM0EBvJe1s0&t=86s" target="_blank" rel="noopener noreferrer">
      Arc Rhythm Generator (Monome Arc demo)
    </a>
    <a href="https://www.farb-tabelle.de/en/table-of-color.htm" target="_blank" rel="noopener noreferrer">
      Farb-Tabelle
    </a>
    <a href="https://www.ryantodd.com/365-days" target="_blank" rel="noopener noreferrer">
      365 Days Ryan Todd Studio (daily visual-thinking drawings)
    </a>
    <a href="http://www.monk.co.jp/lineup/robos.html" target="_blank" rel="noopener noreferrer">
      SANYO ROBO
    </a>
    <a href="https://oasis.decart.ai/starting-point" target="_blank" rel="noopener noreferrer">
      AI Minecraft
    </a>
    <a href="https://www.thegreenhead.com/2025/05/cat-butt-birdhouse.php" target="_blank" rel="noopener noreferrer">
      Cat Butt Birdhouse
    </a>
    <a href="https://www.openstructures.net/" target="_blank" rel="noopener noreferrer">
      OpenStructures
    </a>
    <a href="https://sci-toys.com/" target="_blank" rel="noopener noreferrer">
      Science Toys
    </a>
    <a href="https://experience.arcgis.com/experience/fd496421ed254b289b48688003e4f150" target="_blank" rel="noopener noreferrer">
      Long Beach Historical Landmarks
    </a>
    <a href="https://www.britishmuseum.org/collection/object/P_1879-0614-766" target="_blank" rel="noopener noreferrer">
      A vase of flowers on a marble table Watercolour, strengthened with gum
    </a>
  </ul>

  <h2>VIDEOS</h2>
  <hr>
  <br>

  <details>
    <summary><a class="vibrate video-bg">2025 09 18 Introtest2</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/SgXTDRMDybU?modestbranding=1&rel=0&color=white" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
    Testing out a style / energy for the introduction to the Shelf video. I overplayed footage from fishing vessels, documentaries about dried cod racks in Norway, and shorts filmed inside fish processing facilities on top of my own footage of oil rigs around the Long Beach Metro Area.
    <br>
    <div style="text-align: center;">×</div>
  </details>

  <details>
    <summary><a class="vibrate video-bg">oilprelim</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/-g6IPfdUtxQ?modestbranding=1&rel=0&color=white" title="oilprelim" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
    A short movie pieced together from shots I collected in and around the Long Beach Metro Area. Part of an ongoing project. 
    <br>
    <center>×</center>
  </details>

  <details>
    <summary><a class="vibrate video-bg">The Shelf - Teaser</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/XRdKSaCw3ZI?modestbranding=1" title="The Shelf - Teaser" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
    After Tony takes what he thinks are his regular fish oil supplements, he has visions of a talking fish that tells him to do strange things.
    <br>
    <center>×</center>
  </details>

  <details>
    <summary><a class="vibrate video-bg">Splop</a></summary>
    <video controls autoplay class="responsive-iframe">
      <source src="images/splop.mp4" alt="" class="end-character">
    </video>
    <i>From the Rhino manual:</i>
    The Splop command copies, rotates, scales, and wraps objects on a surface, like pottery sprigging or appliqué.
    <br>
    <a href="https://docs.mcneel.com/rhino/8/help/en-us/commands/splop.htm" target="_blank">Read More</a>
    <center>×</center>
  </details>

  <details>
    <summary><a class="vibrate video-bg">Bourrée in E Minor by J.S. Bach</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/BLrGZjwy3B8?modestbranding=1" title="Bourrée in E Minor by J.S. Bach" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
    A performance of the Bourrée, as the fifth movement from Suite in E minor BWV 996 written by Johann Sebastian Bach between 1708 and 1717, according to Wikipedia.    
    <br>
    <center>×</center>
  </details>

  <details>
    <summary><a class="vibrate video-bg">A Lens to remember</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/j-15VQI0suQ?enablejsapi=1&modestbranding=1&rel=0&color=white" title="A Lens to Remember" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
    This has been a NETBEANZ BUREAU OF THOUGHT SHAPING AND OUTREACH approved transmission. Come with me as I briefly show you my new camera and lens. If you're lucky you might see some pictures nearby. Visit <a href="/index">www.netbeanz.com</a> for more!
    <br>
    <center>×</center>
  </details>

  <details>
    <summary><a class="vibrate video-bg">Bike in the Strange Strange Woods</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/KvrpwfNEiaY?rel=0&color=white"  title="Bike in the Strange Strange Woods" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
  Ryder goes for a seemingly normal bike ride in the woods but soon discovers an ancient secret...
    <br>
    <center>×</center>
  </details>

    <details>
    <summary><a class="vibrate video-bg">Walk with Veridis Quo</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/glr2Ny0dDFw?rel=0&color=white" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
A boy wanders after his mother whilst she takes the dog for a walk.

    <br>
    <center>×</center>
  </details>

      <details>
    <summary><a class="vibrate video-bg">MOUNTAINS - Episode 2</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/lB9UyBKsFlU?rel=0&color=white" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
The long-awaited second episode of the nature documentary. Enjoy! Now with narration... (captions available).

Diamond Head is a large volcanic crater formed over 300,000 years ago by a large eruption. This episode focuses on the natural beauty that we see today!

    <br>
    <center>×</center>
  </details>

      <details>
    <summary><a class="vibrate video-bg">BACKYARDS - Episode 1</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/NIxlLXb8ugE?rel=0&color=white" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
Earth is home to many different creatures. The Backyard is an environment that is often uncharted and unexplored. Join us in this documentation!

    <br>
    <center>×</center>
  </details>

     <details>
    <summary><a class="vibrate video-bg">The Quest for the 4Hz Tone</a></summary>
    <iframe class="responsive-iframe" id="embedded-video" src="https://www.youtube-nocookie.com/embed/aQbFQ2lWA9Y?rel=0&color=white" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <i>Description:</i>
"If we lower the octave once you'd expect to go down one octave lower, and actually that is what happens." With Professor Jeff B. Jongles from the Sydney Conservatory of Music. Also featuring the lowest rendition of "Amazing Grace" ever recorded.

    <br>
    <center>×</center>
  </details>

  <h2>Reg Posts</h2>
  <hr>
  <br>

  
  <ul class="sequenced-list">
    {%- for chapter in collections.chapter_4 -%}
      <li>
        <div class="post-link-box">
          <a href=".{{ chapter.url }}" class="vibrate cyan">{{ chapter.data.title }}</a>
        </div>
        <div class="post-date-box">{{ chapter.data.crate | date: "%B %e, %Y" }}</div>
      </li>
    {%- endfor -%}
  </ul>


  <h2>Chapters</h2>
  <hr>
  <br>

  <img src="/images/exit.png" alt="" class="end-character">
  <h1 class="office-yellow office-heading">Office Supplies</h1>
  <ul class="sequenced-list">
    {%- for chapter in collections.chapter_3 -%}
      <li>
        <div class="post-link-box">
          <a href=".{{ chapter.url }}" class="vibrate office-yellow-bg">{{ chapter.data.title }}</a>
        </div>
        <div class="post-date-box">{{ chapter.date | date: "%B %e, %Y" }}</div>
      </li>
    {%- endfor -%}

    <details>
      <summary>
        <a class="vibrate office-yellow-bg urgent">MEMO: New Formatting Guidelines for All Inter-Office Communications</a>
        <div class="post-date-box">June 28, 2025</div>
      </summary>
      <h3>Just a Little Heads up about what's gonna be going on around here in the future, m'kay?</h3>
      <p>Thanks for opening this memo, EMPLOYEE. I'll just cut to the chase, there're gonna be some new rules around here. I'm switching things up and I'm going to enact a new resolution: "SUPREME GUIDELINES FOR FORMATTING AND INFORMATION DENSITY" before the day is done. I've updated the look of all posts (except those designated "Heritage Posts" by the "NETBEANZ SOCIETY FOR PRESERVATION AND HERITAGE"), and now the main sort of "FORMAT," if you will, is going to be a two-column layout, sort of like a newspaper. I'm doing this to increase the INFORMATION DENSITY of the site, and I'm excited to roll out this new change, along with the brand-new "POST-ITs" Tool (visible above).</p>
      <p>In the future, information will be much denser, and you will have to use a magnifying glass to read posters, for example, like spies did during the Cold War to read sensitive intel. Read more about <a href="https://en.wikipedia.org/wiki/Microdot">Microdots</a>.</p>
      <p>It's going to be great. It's gonna be dense. Thanks for your attention, F.O.N.s (Fans of Netbeanz).</p>
    </details>
  </ul>

  <p><img src="/images/sfdude.png" alt="" class="end-character"></p>
  <h1 class="firebrick firebrick-heading">A Trip to San Francisco</h1>
  <div class="chapter-byline">
    <h2 class="firebrick">Chapter 2</h2>
    <h2 class="firebrick">by Riley Huston</h2>
  </div>

  <ul class="sequenced-list">
    {%- for chapter in collections.chapter_2 -%}
      <li>
        <div class="post-link-box">
          <a href=".{{ chapter.url }}" class="vibrate firebrick-bg gainsboro">{{ chapter.data.title }}</a>
        </div>
        <div class="post-date-box">{{ chapter.date | date: "%B %e, %Y" }}</div>
      </li>
    {%- endfor -%}
  </ul>

  <p><img src="/images/pinto.png" alt="" class="end-character"></p>
  <h1 class="classic-heading">Welcome to Netbeanz</h1>
  <div class="chapter-byline">
    <h2>Chapter 1</h2>
    <h2>By Riley Huston</h2>
  </div>

  <ul class="sequenced-list">
    {%- for chapter in collections.chapter_1 -%}
      <li>
        <div class="post-link-box">
          <a href=".{{ chapter.url }}" class="vibrate">{{ chapter.data.title }}</a>
        </div>
        <div class="post-date-box">{{ chapter.date | date: "%B %e, %Y" }}</div>
      </li>
    {%- endfor -%}
  </ul>
</div>

<script src="/scripts/tts.js"></script>