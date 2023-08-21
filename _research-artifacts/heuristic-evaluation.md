---
name: "Heuristic Evaluation: Texas De Brazil"
URL: './heuristic-evaluation'
---
## Overview

Doing a heuristic evaluation helps identify design problems in the user interface. For texasebrazil.com, the evaluation was judged in comparison to high-level usability guidelines known as the Nielson 10 usability heuristics.

{:.font-semibold}
## Usability principles evaluated:

1. Visibility of System Status
2. Match between the system and the real world
3. User control and freedom
4. Maintain consistency and adhere to standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help and documentation
10. Help users recognize, diagnose, and recover from Errors

{:.dark:text-white}
## Usability Tasks to Help Discovery

To help uncover design issues that overlap with the user’s journey, tasks were created based on what users are likely to do on the website.

1. Make a reservation at the Denver location for a party of two this Saturday @ 7:00 p.m.
2. Submit an online order of any menu item for delivery.
3. Find one vegetarian menu item and another that is gluten-free.
4. Find the location nearest to you and contact them for a question.
5. Sign up to the mailing list to start getting exclusive deals and offers.

# #1 Visiblity of System Status

 The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

When selecting a date and time for a reservation, there is no indication of the restaurant's business status—open or closed. Withholding information about the system violates this principal. 

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-1.jpg "an image title")

## Suggestions

Subtext communicating the restaurant hours and status could help users start the reservation process with times that align with business hours.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-2.jpg "an image title")

{:.bg-emerald-100 .text-green-900 .dark:bg-green-500/10 .dark:text-green-300 .py-3 .px-5 .font-medium .mb-5}
Success

Following the journey of making a reservation, the third-party tool OpenTable does a lot right. If the selected reservation isn’t available, the app communicates unavailable times with disabled states and suggests other time slots.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-1-img-3.jpg "an image title")

# #2 Match Between the System & the Real World

The design should speak the users’ language. Use words, phrases, and concepts familiar to the user, rather than internal jargon. Follow real-world conventions, making information appear in a natural and logical order.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

While most things are named and labeled correctly on the website for Texas de Brazil, there is one item that could be better—group dining. The misnaming can create confusion about what the service is. Users may wonder if this is for large groups trying to make a reservation when it's known as catering and should be named accordingly.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-1.jpg "an image title")

## Suggestion

Change the name of the service from “Group Dining” to “Catering”. An easy fix, but it also makes the service consistent.

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

The form and function of the menu do not match how people use a menu in the real world. On the website, there are pictures of the food items in a row that requires horizontal scrolling, without pricing information, descriptions, or even names readily available (unless users request the item name by clicking a '+' icon in the interface).

In life, menus are much more informative and designed for reading to help people make decisions. Menus are scanned from top to bottom with names of items, prices, descriptions, and photos.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-2.jpg "an image title")


## Suggestions

Implement a simple and traditional food menu that includes pricing information, photos, and descriptions.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-2-img-3.jpg "an image title")

# #3 User Control & Freedom

Users often perform actions by mistake. They need a clearly marked “emergency exit” to leave the unwanted action without having to go through an extended process.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

Since Texas de Brazil relies on third-party software for ordering pickup or delivery, the journey is a separate experience. As a result, if a user changes their mind about ordering, or wants to make a reservation in person instead, they can't. To reset the journey, users must click the back button in the browser or the logo in the main navigation.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-1.jpg "an image title")

## Suggestions

Replicating the main navigation of the website with the reservations/online ordering pages could give users more flexibility. With this change, users could easily switch to do anything the
website offers.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-2.jpg "an image title")

{:.bg-emerald-100 .text-green-900 .dark:bg-green-500/10 .dark:text-green-300 .py-3 .px-5 .font-medium .mb-5}
Success

Overall the website navigation and structure support user control and freedom when it comes to browsing the site. The consistent top-level navigation items make it easy to exit the page to go somewhere else or go back to the previous state.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-3.jpg "an image title")

Even on the nested pages, there is a supporting UI component that takes users back to the previous page.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-3-img-4.jpg "an image title")

# #4 Maintain Consistency & Adhere to Standards

Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

Internal consistency suffers from relying on third-party software to build the online systems for Texas de Brazil. The UI from the website design doesn’t match the UI of components you see for making a reservation and ordering online.

<div class="flex flex-col md:flex-row gap-4 mb-10 items-center">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-1.jpg">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-2.jpg">
</div>

## Suggestion

Invest in the software. Texas de Brazil likely has little to no control over much of the third-party services they rely on. The only way to get around this would be to build and leverage their online apps and technology.

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

External Consistency. The website has unique branded UI components that do not match what users see on other websites. While this is mostly okay, conventional UI components would have been better.

<div class="flex flex-col md:flex-row gap-4 mb-10 items-center">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-3.jpg">
    <img class="w-full h-full" src="{{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-4.jpg">
</div>

Comparing it to common UI form elements, it’s not drastically different. However, it is enough to make someone think and take a look at the form to realize what it is.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-5.jpg "an image title")

Some areas on the website start to get questionable if they are buttons or not.

The biggest violation of this principle is on the locations page. There’s a large map with all the locations spread out, but unfortunately, the form for filtering and searching is at the bottom of the page. For most searching interfaces, controls are placed at the top.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-4-img-6.jpg "an image title")

## Suggestions

- Simplify UI components when it comes to inputs and buttons.
- Place the location search controls above the map.

# #5 Error Prevention

Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

The default selected restaurant location does not consider where users are located. This is a problem because it’s easy to start the reservation process for a date and time at the wrong location.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-1.jpg "an image title")


## Suggestions

One solution could be requesting a user’s location and populating the default location to be the one closest to the user. 

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-2.jpg "an image title")

Another could be to leave the select blank and allow users to select a location before starting a reservation.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-5-img-3.jpg "an image title")

# #6 Recognition Rather than Recall

Minimize the user’s memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

The names of food items are only available by request. Users must recall menu items from the previous page and show the actual menu item name one at a time from clicking a photo.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-6-img-1.jpg "an image title")

## Suggestion

Without doing an entire menu redesign, a solution could be to keep the names of menu items always visible.

# #7 Flexibility & Efficiency of Use

Shortcuts—hidden from novice users—may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

Lack of accelerators for repetitious usage. Texas de Brazil doesn’t have much to offer returning patrons. This is a missed opportunity to capture engaged users and reward them with an easier checkout experience for repeated use.

## Suggestion

Enhance the experience for returning online users by supporting account sign-up. By providing account information, returning users could save previous orders and payment info for faster checkouts and smoother transactions.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-7-img-1.jpg "an image title")

# #8 Aesthetic & Minimalist Design

Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

There are multiple violations of distracting design that take focus away from users. The biggest problem is the background video on the home page. The constant movement naturally draws attention to the video instead of the form for making a reservation.

Another concern is readability—text is illegible because of the design aesthetics. The site contains a large amount of low-contrast text that is difficult to read.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-8-img-1.jpg "an image title")

## Suggestions

- Replace the background video with a static image.
- Find all occurrences of low contrast text and adjust the design to make it pass AA compliance.

# #9 Help Users Recognize, Diagnose, & Recover from Errors

Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-emerald-100 .text-emerald-900 .dark:bg-emerald-500/10 .dark:text-emerald-300 .py-3 .px-5 .font-medium .mb-5}
Success

This is something that texasdebrazil.com demonstrates consistent success in. Moments that stand out include: error notifications, requiring correct formatted information, and showing availability statuses.

Another example is the form for making a reservation. If time slots are unavailable, they are visually disabled, and the UI suggests other available times close to your reservation.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-9-img-1.jpg "an image title")

# #10 Help & Documentation

It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.

___

<div class="not-prose">
  <p class="uppercase tracking-widest my-5 text-xs md:text-sm opacity-75">Findings</p>
</div>

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

When searching for dietary restrictions, no information is found on the menu. However, at the bottom of the page in the footer, there is a tool for filtering menu items by dietary restrictions.

## Suggestions

Make the allergy and nutrition tool more prominent on the menu page. Additionally, vegetarian and gluten-free labels on the menu would go a long way.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-10-img-1.jpg "an image title")

{:.bg-red-100 .text-red-900 .dark:bg-red-500/10 .dark:text-red-300 .py-3 .px-5 .font-medium .mb-5}
Issue

It’s hard for users to get help. Users have no quick and efficient way to contact the restaurants. Even on the contact page, the only way to reach out is to fill out a form. This process is not fast enough for users with questions that demand immediate answers. 

There is contact information available for each location on the website. However, finding that information is a little challenging.

## Suggestion

Add the contact page link to the primary navigation bar and on that page list out the locations by the state with their contact information.

Another solution to get users who need help quickly would be to add a chatbot that queues requests to a real person.

![an image alt text]({{ site.baseurl }}/images/heuristic-evaluation/heuristic-10-img-2.jpg "an image title")

# Conclusion

Ultimately, there were five individual usability problems identified. Of the five, one was deemed a “major issue”; three a “minor issue”; and one a “cosmetic problem”. This resulted in four actionable redesign recommendations:

1. Rename “Group Dining” to “Catering”.
2. Redesign the menu to follow the form and function of a dine-in menu.
3. Adjust the location search controls and move them to the top of the page.
4. Introduce rewards for returning users
5. Adjust component aesthetics to pass AA compliance
6. Add vegetarian and gluten-free labels on the menu
7. Add a chatbot that queues to a real person