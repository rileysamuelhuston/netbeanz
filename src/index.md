---
title: netbeanz.com
layout: base.njk
---


<div class="post-list">

        

        <div class="chapter-container">
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
