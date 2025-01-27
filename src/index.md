---
title: Netbeanz.com
layout: front.njk
---



<div class="post-list">     
        {% for post in collections.posts %}

        <div class="post-link-container">
        <div class="post-thumbnail"><img src="" alt=""></div>
        <div class="post-details-container">
            <div class="post-title">[{{ post.data.title }}]({{ post.url }})</div>
            <div class="post-details">
                <ul>
                  <li>  {{ post.data.crate }}</li>
                  <li>{{ post.data.category }}</li> 
                   <li>{{ post.data.author }}</li> 
                </ul>          
</div>
</div>
            
                            <div class="post-emoji">
                                {{ post.data.emoji }}
                            </div>

        </div>
        
        
        {% endfor %}
</div>
