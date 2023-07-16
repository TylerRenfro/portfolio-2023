---
layout: default
currentJobURL: "https://prioritycommerce.com/"
introLineOne: UX Designer
introLineTwo: Typeface fanatic
introLineThree: Usability nerd
--- 
<div class="container mx-auto px-4"> 
  {% include navbar.html %}
  <div class="grid grid-cols-12 gap-4 mb-10 md:mb-20 flex-wrap items-center">
    <div class="col-span-12 md:col-start-3 md:col-span-3">
      <img class="w-96 md:w-full rounded-2xl" src="images/homepage/headshot.jpg">
    </div>
    <div class="col-span-12 md:col-span-5">
      <h1 class="text-2xl md:text-3xl lg:text-5xl text-left md:text-right font-bold dark:text-white leading-normal md:mb-3">{{ page.introLineOne }}</h1>
      <h1 class="text-2xl md:text-3xl lg:text-5xl text-left md:text-right font-medium leading-normal md:mb-3 text-zinc-600 dark:text-zinc-400">
      {{ page.introLineTwo }}
      </h1>
      <h1 class="text-2xl md:text-3xl lg:text-5xl text-left md:text-right font-light text-zinc-500 dark:text-zinc-500 leading-normal mb-5 md:mb-10">{{ page.introLineThree }}</h1>
      <p class="text-xs md:text-sm text-left md:text-right text-indigo-500 dark:text-indigo-400 font-medium">Currently leading <a class ="transition underline-offset-4 ease-in-out hover:underline hover:text-fuchsia-400" target="_blank" href="{{page.currentJobURL}}">@PRTH</a></p>      
    </div>
  </div>
  {% for portfolio in site.portfolio %}
  <div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-start-2 md:col-span-10">
      <div class="card w-full bg-base-100 dark:bg-zinc-900 shadow-2xl">        
        <div class="card-body w-full md:w-2/3 mx-auto">
          <h2 class="text-lg md:text-xl lg:text-3xl dark:text-white mb-3">{{ portfolio.previewName}}</h2>         
          <a href="{{portfolio.URL}}" class="text-zinc-500 dark:text-base-content hover:text-amber-600 hover:dark:text-amber-400 transition hover:underline fill-zinc-500 dark:fill-base-content hover:fill-amber-600 hover:dark:fill-amber-400">
            <p class="text-md md:text-md lg:text-lg flex flex-row items-center leading-none">View case study
              <svg class="mt-[2px]" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>
              </p>
          </a>
        </div>
        <figure><img class="w-96 md:w-5/6 md:px-5" src="/images/homepage/{{ portfolio.thumbnail }}" alt="Shoes" /></figure>
      </div>
    </div>
  </div>
  {% endfor %}    
</div>
