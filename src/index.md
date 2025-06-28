---
title: netbeanz.com
layout: front.njk
---

   <audio id="background-music" loop>
  <source src="/sound/windowgazing.mp3" type="audio/mpeg" />
</audio>



<div class="list-container">
  <div class="list-column-left">
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
    <a class="vibrate office-yellow-bg urgent">MEMO: New Formatting Guidelines for All Inter-Office Communications </a>
                <div class="post-date-box">June 28, 2025</div>
  </summary>

### Just a Little Heads up about what's gonna be going on around here in the future, m'kay?

Thanks for opening this memo, EMPLOYEE. I’ll just cut to the chase, there’re gonna be some new rules around here. I’m switching things up and I'm going to enact a new resolution: “SUPREME GUIDELINES FOR FORMATTING AND INFORMATION DENSITY” before the day is done. I’ve updated the look of all posts (except those designated "Heritage Posts" by the "NETBEANZ SOCIETY FOR PRESERVATION AND HERITAGE"), and now the main sort of “FORMAT,” if you will, is going to be a two-column layout, sort of like a newspaper. I’m doing this to increase the INFORMATION DENSITY of the site, and I’m excited to roll out this new change, along with the brand-new “POST-ITs” Tool (visible above).

In the future, information will be much denser, and you will have to use a magnifying glass to read posters, for example, like spies did during the Cold War to read sensitive intel. Read more about [Microdots](https://en.wikipedia.org/wiki/Microdot).

It’s going to be great. It’s gonna be dense. Thanks for your attention, F.O.N.s (Fans of Netbeanz). 

        </details>

        </ul>





<details>
  <summary><a class="vibrate">A Lens to remember</a></summary>
   <iframe 
                class="responsive-iframe"
                id="embedded-video"
                src="https://www.youtube-nocookie.com/embed/j-15VQI0suQ?enablejsapi=1&modestbranding=1&rel=0&color=white" 
                title="A Lens to Remember" 
                frameborder="0" 
                allowfullscreen></iframe>
        </details>
      





                <img src="/images/sfdude.png" alt="" class="end-character">

                <h1 class="firebrick">A Trip to San Francisco</h1>
                <div class="chapter-byline">
       <h2 class="firebrick">Chapter 2</h2>
        <h2 class="firebrick">by {{ authors.riley.name }}</h4>
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







                <img src="/images/pinto.png" alt="" class="end-character">

          <h1>Welcome to Netbeanz</h1>
               <div class="chapter-byline">
       <h2>Chapter 1</h2>
        <h2>By {{ authors.riley.name }}</h4>
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

</div>








