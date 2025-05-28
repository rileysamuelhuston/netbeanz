---
title: netbeanz.com
layout: base.njk
---

   <audio id="background-music" loop>
  <source src="/sound/windowgazing.mp3" type="audio/mpeg" />
</audio>


<div class="post-list">





<div class="chapter-container gainsboro-bg" 
data-navbar="gainsboro"
data-title="firebrick"
data-background-image="conic-gradient(from 116.56deg at calc(100%/3) 0, #0000 90deg,#f2f2f2 0),
      conic-gradient(from -63.44deg at calc(200%/3) 100%, #0000 90deg,#f2f2f2 0)
      #ffffff;">

<div class="sub-container gainsboro-bg">

        <div class="chapter-image">
                <img src="/images/sf.jpg" alt="">
        </div>

       <h2 class="firebrick">Chapter 2</h2>
        <h1 class="firebrick">A Trip to San Francisco</h1>
        <h4 class="firebrick">{{ authors.riley.name }}</h4>
        <ul class="sequenced-list">
                        {%- for chapter in collections.chapter_2 -%}
                <li>
                        <div class="post-link-box">
                                <a href=".{{ chapter.url }}" class="bouncing-link">{{ chapter.data.title }}</a>
                                <p>{{ chapter.date | date: "%B %e, %Y" }}</p>
                        </div>
                       <div class="date">{{ chapter.data.crate }}</div>
                        
                       </li> 
              {%- endfor -%}
        </ul>
</div>
</div>

<div class="chapter-container"
        data-navbar="black"
        data-title="whitesmoke"
        data-background-image="">

        <div class="video-container">
             <div class="sub-container">


<div class="chapter-image">
       <iframe 
                class="responsive-iframe"
                id="embedded-video"
                src="https://www.youtube-nocookie.com/embed/j-15VQI0suQ?enablejsapi=1&modestbranding=1&rel=0&color=white" 
                title="A Lens to Remember" 
                frameborder="0" 
                allowfullscreen></iframe>

<h2 class="red">Video</h2>
<h1>A Lens to Remember</h1>
<h4>Netbeanz Bureau of Thought Shaping & Outreach</h4>

</div>
             </div>
        </div>

</div>




<div class="chapter-container"
        data-navbar="#4EDF41"
        data-title="black">

<div class="sub-container">
        <div class="chapter-image">
        <img src="/images/computer.gif" alt="e">
</div>
 <H2>Chapter 1</H2>
        <h1>Welcome to Netbeanz</h1>
        <h5>{{ authors.riley.name }}</h5>
        <ul class="sequenced-list">
                {%- for chapter in collections.chapter_1 -%}
                <li>
                        <div class="post-link-box">
                                <a href=".{{ chapter.url }}" class="bouncing-link">{{ chapter.data.title }}</a>
                                <p>{{ chapter.date | date: "%B %e, %Y" }}</p>
                        </div>
                       <div class="date">{{ chapter.data.crate }}</div>
                        
                       </li> 
              {%- endfor -%}
        </ul>
</div>
       
</div>

</div>
