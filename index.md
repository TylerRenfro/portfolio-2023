---
layout: default
title: "Tyler Renfro"
jobTitle: "UX Design"
currentJobURL: "https://prioritycommerce.com/"
--- 

<div class="container mx-auto px-4 mt-20">
  <div class="grid grid-cols-12 gap-4 mb-20">
    <div class="col-start-4 col-span-2">
      <img src="images/homepage/headshot.jpg">
    </div>
    <div class="col-span-4">
      <h1 class="text-5xl text-right font-semibold dark:text-white leading-normal">{{page.title}}</h1>
      <h2 class="text-5xl text-right mb-10 font-light text-zinc-500 dark:text-base-content">{{page.jobTitle}}</h2>
      <p class="text-right text-indigo-500 dark:text-indigo-400 font-medium">Currently leading <a class ="transition underline-offset-4 ease-in-out hover:underline hover:text-fuchsia-400" target="_blank" href="{{page.currentJobURL}}">@PRTH</a></p>
    </div>
  </div>
  {% for portfolio in site.portfolio %}
  <div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-start-2 col-span-10">
      <div class="card w-full bg-base-100 dark:bg-zinc-900 shadow-2xl">        
        <div class="card-body w-2/3 mx-auto">
          <h2 class="text-3xl  dark:text-white mb-3">{{ portfolio.previewName}}</h2>         
          <a href="{{portfolio.URL}}" class="text-zinc-500 dark:text-base-content hover:text-amber-600 hover:dark:text-amber-400 transition hover:underline fill-zinc-500 dark:fill-base-content hover:fill-amber-600 hover:dark:fill-amber-400">
            <p class="text-lg flex flex-row items-center leading-none">View case study
              <svg class="mt-[2px]" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>
              </p>
          </a>
        </div>
        <figure><img class="w-3/4" src="/images/homepage/{{ portfolio.thumbnail }}" alt="Shoes" /></figure>
      </div>
    </div>
  </div>
  {% endfor %}    
</div>
