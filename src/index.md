---
title: netbeanz.com
layout: base.njk
---

<div class="post-list">


</div>


<div class="chapter-container"
        data-navbar="black"
        data-title="whitesmoke">

        <div class="video-container">
             <div class="sub-container">


<div class="chapter-image">
       <iframe class="responsive-iframe" src="https://www.youtube-nocookie.com/embed/j-15VQI0suQ?modestbranding=1&rel=0&color=white" title="A Lens to Remember" frameborder="0" allowfullscreen></iframe>

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
