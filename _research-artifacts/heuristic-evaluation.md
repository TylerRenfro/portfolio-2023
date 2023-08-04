---
name: "Heuristic Evaluation: Texas De Brazil"
URL: './heuristic-evaluation'
---
{:.text-2xl .md:text-4xl .lg:text-4xl .mb-5 .dark:text-white}
## Overview

{:.text-xl .mb-10}
The following document is a heuristic evaluation of texasdebrazil.com, a website that allows users to make reservations, order delivery/pickup, browse menu options, and find locations. The analysis includes an evaluation of the Nielson 10 usability heuristics of interface design.

{:.text-xl .md:text-xl .mb-5 .dark:text-white .font-semibold}
# Usability principles evaluated:

{:.list-decimal .list-inside .leading-relaxed .text-lg .mb-10 .opacity-75}
- {: .mb-2 } Visibility of System Status
- {: .mb-2 } Match Between the System & the Real World
- {: .mb-2 } User Control & Freedom
- {: .mb-2 } Maintain Consistency & Adhere to Standards
- {: .mb-2 } Error Prevention
- {: .mb-2 } Recognition Rather than Recall
- {: .mb-2 } Flexibility & Efficiency of Use
- {: .mb-2 } Aesthetic & Minimalist Design
- {: .mb-2 } Help & Documentation
- {: .mb-2 } Help Users Recognize, Diagnose, & Recover from Errors

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-5 .dark:text-white}
## Usability Tasks to Help Discovery

{:.text-xl .mb-5}
To help discover where the usability heuristics overlap with the user’s journey, I performed some tasks that I thought users may wish to do on the website. While performing these tasks, I took notes and outlined usability heuristic successes and failures along with possible solutions.

{:.list-decimal .list-inside .leading-relaxed .text-lg .mb-20 .opacity-75}
- {: .mb-2 } Make a reservation at the Denver location for two guests, this Saturday @ 7:00 p.m.
- {: .mb-2 } Submit an online order of any menu item for delivery.
- {: .mb-2 } Find one vegetarian menu item and another that is gluten-free.
- {: .mb-2 } Find the location nearest to you and contact them for a question.
- {: .mb-2 } Sign up to the mailing list to start getting exclusive deals and offers.

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #1 Visiblity of System Status

{:.text-xl .mb-5}
 The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-10}
**Withholding information about the system.** When selecting a date and time for a reservation, there is no indication of the restaurant's business status—open or closed.

{:.mb-10}
![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-1.jpg "an image title"){:.w-full}

{:.mb-5 .text-3xl .dark:text-white}
Suggestions

{:.text-xl .mb-10}
Subtext communicating the restaurant hours and status could help users start the reservation process with times that align with business hours.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-2.jpg "an image title"){:.w-full .mb-10}

{:.bg-emerald-100 .text-green-900 .dark:bg-green-500/10 .dark:text-green-300 .py-3 .px-5 .font-medium .mb-5}
Success

{:.text-xl .mb-10}
Following the journey of making a reservation, the third-party tool OpenTable does a lot right. If the selected reservation isn’t available, the app communicates unavailable times with disabled states and suggests other time slots.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-3.jpg "an image title"){:.mb-10 .w-full}

{:.text-xl .mb-10}
When confirming the reservation, there’s a banner at the top with a timer informing users that
their reservation can only be held for so long.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-4.jpg "an image title"){:.mb-20}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #2 Match Between the System & the Real World

{:.text-xl .mb-5}
The design should speak the users’ language. Use words, phrases, and concepts familiar to the user, rather than internal jargon. Follow real-world conventions, making information appear in a natural and logical order.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-10}
While most things are named and labeled correctly on the website for Texas de Brazil, there is one item that could be better—group dining. The misnaming can create confusion about what the service is. Users may wonder if this is for large groups trying to make a reservation when it's known as catering and should be named accordingly.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-1.jpg "an image title"){:.mb-20 .w-full}

{:.mb-5 .text-3xl .dark:text-white}
Suggestion

{:.text-xl .mb-10}
Change the name of the service from “Group Dining” to “Catering”. An easy fix, but it also makes the service consistent

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-10}
The form and function of the menu do not match how people use a menu in the real world. On the website, there are pictures of the food items in a row that requires horizontal scrolling, without pricing information, descriptions, or even names readily available (unless users request the item name by clicking a '+' icon in the interface).

{:.text-xl .mb-10}
In life, menus are much more informative and designed for reading to help people make decisions. Menus are scanned from top to bottom with names of items, prices, descriptions, and photos.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-2.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white}
Suggestions

{:.text-xl .mb-10}
Implement a simple and traditional food menu that includes pricing information, photos, and descriptions.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-3.jpg "an image title"){:.mb-10 .w-full}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #3 User Control & Freedom

{:.text-xl .mb-5}
Users often perform actions by mistake. They need a clearly marked “emergency exit” to leave the unwanted action without having to go through an extended process.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
Since Texas de Brazil relies on third-party software for ordering pickup or delivery, the journey is a separate experience. As a result, if a user changes their mind about ordering, or wants to make a reservation in person instead, they can't. To reset the journey, users must click the back button in the browser or the logo in the main navigation.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white}
Suggestions

{:.text-xl .mb-10}
Replicating the main navigation of the website with the reservations/online ordering pages could give users more flexibility. With this change, users could easily switch to do anything the
website offers.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-2.jpg "an image title"){:.mb-10 .w-full}

{:.bg-emerald-100 .text-green-900 .dark:bg-green-500/10 .dark:text-green-300 .py-3 .px-5 .font-medium .mb-5}
Success

{:.text-xl .mb-10}
Overall the website navigation and structure support user control and freedom when it comes to browsing the site. The consistent top-level navigation items make it easy to completely exit the page to go somewhere else or go back to the previous state.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-3.jpg "an image title"){:.mb-10 .w-full}

{:.text-xl .mb-10}
Even on the nested pages, there is a supporting UI component that takes users back to the previous page.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-4.jpg "an image title"){:.mb-10 .w-full}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #4 Maintain Consistency & Adhere to Standards

{:.text-xl .mb-5}
Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
Internal consistency suffers from relying on third-party software to build the online systems for Texas de Brazil. The UI from the website design doesn’t match the UI of components you see for making a reservation and ordering online.

<div class="flex flex-col md:flex-row gap-4 mb-10 items-center">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-1.jpg">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-2.jpg">
</div>

{:.mb-5 .text-3xl .dark:text-white}
Suggestion

{:.text-xl .mb-10}
Invest in the software. Texas de Brazil likely has little to no control over much of the third-party services they rely on. The only way to get around this would be to build and leverage their online apps and technology.

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-10}
External Consistency. The website has unique branded UI components that do not match what users see on other websites. While this is mostly okay, conventional UI components would have been better. 

<div class="flex flex-col md:flex-row gap-4 mb-10 items-center">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-3.jpg">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-4.jpg">
</div>

{:.text-xl .mb-10}
Comparing it to common UI form elements, it’s not drastically different. However, it is enough to make someone think and take a look at the form to realize what it is.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-5.jpg "an image title"){:.mb-10 .w-full}

{:.text-xl .mb-5}
Some areas on the website start to get questionable if they are buttons or not.

{:.text-xl .mb-10}
The biggest violation of this principle is on the locations page. There’s a large map with all the locations spread out, but unfortunately, the form for filtering and searching is at the bottom of the page. For most searching interfaces, controls are placed at the top.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-6.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white.dark:text-white}
Suggestions

{:.list-disc .list-inside .leading-relaxed .text-xl .mb-20}
- Simplify UI components when it comes to inputs and buttons.
- Place the location search controls above the map.

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #5 Error Prevention

{:.text-xl .mb-5}
Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
The default selected restaurant location does not consider where users are located. This is a problem because it’s easy to start the reservation process for a date and time at the wrong locatio

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white.dark:text-white}
Suggestions

{:.mb-5 .text-3xl}
One solution could be requesting a user’s location and populating the default location to be the one closest to the user. 

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-2.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl}
Another could be to leave the select blank and allow users to select a location before starting a reservation.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-3.jpg "an image title"){:.mb-10 .w-full}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #6 Recognition Rather than Recall

{:.text-xl .mb-5}
Minimize the user’s memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
The names of food items are only available by request. Users must recall menu items from the previous page and show the actual menu item name one at a time from clicking a photo.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-6-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white}
Suggestion

{:.mb-5 .text-xl}
Without doing an entire menu redesign, a solution could be to keep the names of menu items always visible.

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #7 Flexibility & Efficiency of Use

{:.text-xl .mb-5}
Shortcuts — hidden from novice users — may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
Lack of accelerators for repetitious usage. Texas de Brazil doesn’t have much to offer returning patrons. This is a missed opportunity to capture engaged users and reward them with an easier checkout experience for repeated use.

{:.mb-5 .text-3xl .dark:text-white}
Suggestion

{:.text-xl .mb-5}
Enhance the experience for returning online users by supporting account sign-up. By providing account information, returning users could save previous orders and payment info for faster checkouts and smoother transactions.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-7-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #8 Aesthetic & Minimalist Design

{:.text-xl .mb-5}
Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
There are multiple violations of distracting design that take focus away from users. The biggest problem is the background video on the home. The constant movement naturally draws attention to the video instead of the form for making a reservation.

{:.text-xl .mb-5}
Another concern is readability—text is illegible because of the design aesthetics. The site contains a large amount of low-contrast text that is difficult to read.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-8-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.mb-5 .text-3xl .dark:text-white.dark:text-white}
Suggestions

{:.list-disc .list-inside .leading-relaxed .text-xl .mb-20}
- Replace the background video with a static image.
- Find all occurrences of low contrast text and adjust the design to make it pass AA compliance.

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #9 Help Users Recognize, Diagnose, & Recover from Errors

{:.text-xl .mb-5}
Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-emerald-100 .text-emerald-900 .dark:bg-emerald-500/10 .dark:text-emerald-300 .py-3 .px-5 .font-medium .mb-5}
Success

{:.text-xl .mb-5}
This is something that texasdebrazil.com demonstrates consistent success in. Moments that stand out the most include resolution instructions on error notifications, requiring correctly formatted information on the mailing sign-up form, and showing time slot availability status on the reservation form.

{:.text-xl .mb-5}
Another example is the form for making a reservation. If time slots are unavailable, they are visually disabled, and the UI suggests other available times close to your reservation. If the day is completely unavailable like a holiday, there is a message for that too.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-9-img-1.jpg "an image title"){:.mb-20 .w-full}

{:.text-4xl .md:text-5xl .lg:text-6xl .mb-5 .dark:text-white}
## #10 Help & Documentation

{:.text-xl .mb-5}
It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.

{:.mb-5 .dark:border-base-100}
___

{:.uppercase .tracking-widest .mb-5 .text-sm .text-zinc-500}
Findings

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
When searching for dietary restrictions, no information was available on the menu. However, at the bottom of the page in the footer, there is a tool for filtering menu items by dietary restrictions.

{:.mb-5 .text-3xl .dark:text-white.dark:text-white}
Suggestions

{:.text-xl .mb-5}
Make the allergy and nutrition tool more prominent on the menu page. Additionally, vegetarian and gluten-free labels on the menu would go a long way.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-10-img-1.jpg "an image title"){:.mb-10 .w-full}

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

{:.text-xl .mb-5}
It’s hard for users to get help. Users have no quick and efficient way to contact the restaurants. Even on the contact page, the only way to reach out is to fill out a form. This process is not fast enough for users with questions that need immediate answers. 

{:.text-xl .mb-5}
There is contact information available for each location on the website. However, finding that information is a little challenging. To find that info, users need to first go to the locations page, find the location pin on the map, click a location, and finally, a page with all the location information will show.

{:.mb-5 .text-3xl .dark:text-white}
Suggestion

{:.text-xl .mb-5}
Add the contact page link to the primary navigation bar and on that page list out the locations by the state with their contact information. It may seem overwhelming since there are so many locations, but there are clever ways to condense this, and even then at least it’s easily available for users. Whereas today it is almost completely hidden.

{:.text-xl .mb-5}
Another solution to get users who need help quickly would be to add a chatbot that queues requests to a real person. This would help users who want immediate answers and don’t have time to fill out a
form and wait for a response.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-10-img-2.jpg "an image title"){:.mb-10 .w-full}