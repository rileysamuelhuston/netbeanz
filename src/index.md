---
title: netbeanz.com
layout: base.njk
---



<div class="post-list">     
 

        <div class="chapter-container">
<div class="chapter-image">
        <img src="./images/computer.gif" alt="">

        <H2>Chapter 1</H2>
        <h1>Welcome to Netbeanz</h1>
        <ul class="sequenced-list">
                {%- for chapter in collections.chapter_1 -%}
                <li><a href="{{ chapter.url }}" class="bouncing-link">{{ chapter.data.title }}</a></li> 
              {%- endfor -%}
        </ul>
       

</div>
</div>

</div>