---
title: 'Apple Pay'
name: 'Invoices: Supporting Apple Pay'
URL: './apple-pay'
thumbnail: "apple-pay-thumbnail.png"
summary: "A guide on how to integrate Apple Pay as a payment method option for users within existing Priority products. Additionally, this guide outlines in detail, how and when to use Apple Pay in accordance to official guidelines from Apple."
---

{:.mb-20}
![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-thumbnail.png "an image title")

{:.text-2xl .md:text-4xl .lg:text-4xl .mt-6 .mb-3 .dark:text-white}
## Overview

{:.text-xl .mb-5}
Due to client demand, Priority has approved feature work to offer Apple Pay as a method of payment for MX Products. Although this current batch is limited to the scope of MX products, the solution should be easy to replicate and apply across Priority technologies.
For this batch of work, these are the products and touch points that must have Apple Pay support:

{:.text-xl .list-disc .list-inside .mb-20}
* Healthcare Payments
* Invoice Product
* Payment Link Product

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .dark:text-white}
## Apple Pay Guidelines

{:.text-xl .mb-5}
In order to use apple pay, users have to meet certain circumstances for it to even appear as an option. Not only will there be conditional logic on what displays apple pay as an option, but also following brand specific imagery, messaging, and content when it does appear.

{:.text-xl .mb-20}
This guide was made with use of official Apple Pay documentation. Resources are cited below for reference.

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .dark:text-white}
## Privacy Statement Requirements

{:.text-xl .mb-5}
Websites that offer Apple Pay must include a Privacy Statement. This will require some sort of legal department approval or ensure that our partners have this knowledge to update their own privacy policies on our products.
To learn more about how Apple Pay works with personal information, please refer to the official documentation and their legal policies.

{:.text-xl .mb-3 .text-blue-400 .underline .mb-20}
Apple Payment Privacy

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .mt-20 .dark:text-white}
## When to Show Apple Pay

{:.text-xl .mb-5}
First and foremost, Apple Pay is Safari only. This means that if a user has any other type of browser Apple Pay will not be supported and should not appear as an available option to users.

{:.text-xl .mb-5}
This logic is pretty simple to follow. When Apple Pay is supported, display it as a payment method.


<div class="col-span-12 md:col-start-3 md:col-span-8 bg-emerald-100 py-5 px-5">
    <div class="flex flex-row gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p class="text-md font-medium">Apple Pay Supported</p>
    </div>            
</div>


![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-supported-reference.png "an image title"){:.mb-10 .w-full}

<div class="col-span-12 md:col-start-3 md:col-span-8 bg-red-100 py-5 px-5">
    <div class="flex flex-row gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p class="text-md font-medium">Apple Pay Not Supported</p>
    </div>            
</div>
![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-not-supported-reference.png "an image title"){:.mb-10 .w-full}

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .mt-20 .dark:text-white}
## How to Display Apple Pay Buttons

{:.text-xl .mb-5}
In the Apple Pay documentation, there is a page dedicated to showing Apple Pay when it’s supported. This works using the -apple-pay-button css prefix. The easiest approach would be using CSS, but this feature can be toggled with JavaScript as well.

{:.text-xl .mb-3 .text-blue-400 .underline}
Showing Apple Pay Buttons with CSS

{:.text-xl .text-blue-400 .underline .mb-10}
Showing Apple Pay Buttons with JS


<div class="mockup-code mb-10">    
    <pre data-prefix="">
        <code>
        <span class="text-green-700">/* CSS */</span>
        <span class="text-fuchsia-300">@supports</span> <span class="text-yellow-400">(</span><span class="text-cyan-300">-webkit-appearance</span>: -apple-pay-button<span class="text-yellow-400">)</span> <span class="text-yellow-500">{</span> 
            <span class="text-yellow-200">.apple-pay-button</span> <span class="text-fuchsia-400">{</span>
                <span class="text-cyan-300">display:</span> <span class="text-orange-300">inline-block;</span>
                <span class="text-cyan-300">-webkit-appearance:</span> -apple-pay-button;
            <span class="text-fuchsia-400">}</span>
            <span class="text-yellow-200">.apple-pay-button-black</span> <span class="text-fuchsia-400">{</span>
                <span class="text-cyan-300">-apple-pay-button-style:</span> <span class="text-orange-300">black;</span>
            <span class="text-fuchsia-400">}</span>
            <span class="text-yellow-200">.apple-pay-button-white</span> <span class="text-fuchsia-400">{</span>
                <span class="text-cyan-300">-apple-pay-button-style:</span> <span class="text-orange-300">white;</span>
            <span class="text-fuchsia-400">}</span>
            <span class="text-yellow-200">.apple-pay-button-white-with-line</span> <span class="text-fuchsia-400">{</span>
                <span class="text-cyan-300">-apple-pay-button-style:</span> white-outline;
            <span class="text-fuchsia-400">}</span>
        <span class="text-yellow-400">}</span>
        </code>
    </pre>
</div>

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .mt-20 .dark:text-white}
## Using Apple Pay Mark

{:.text-xl .mb-5}
Use the Apple Pay mark in relation to your payment options. Do not use the mark in general product or company promotions.

{:.text-xl .mb-5 .font-bold}
Do's & Don'ts

<table class="table-auto table border-separate border-spacing-2 mb-10">
  <tbody>
    <tr>
        <td class="bg-emerald-100 w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-emerald-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Do
            </div>
        </td>
      <td class="w-5/6">Use only the artwork provided by Apple.</td>
    </tr>
    <tr>
        <td class="bg-emerald-100 w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-emerald-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Do
            </div>
        </td>
        <td class="w-5/6">Use the Apple Pay mark when other payment identities are also displayed in a similar format.</td>
    </tr>
    <tr>
        <td class="bg-emerald-100 w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-emerald-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Do
            </div>
        </td>
        <td class="w-5/6">Use the mark in marketing communications when the main message of the communication promotes Apple Pay.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not create your own version of the Apple Pay mark.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not alter the artwork in any way. Do not adjust the width or the aspect ratio of the artwork.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not display a mark that is smaller than other payment identities in a similar format.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not adjust the corner radius on the artwork.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not translate the word Pay within the Apple Pay mark.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Do not add messages to the mark.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-full md:w-5/6">Do not add visual effects such as shadows, glows, or reflections to the mark.</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-full md:w-5/6">Do not flip, rotate, or animate the mark.</td>
    </tr>
  </tbody>
</table>

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <p class="text-2xl font-semibold mb-3">Apple Pay</p>
        <p class="text-lg md:text-xl">The Apple Pay mark is available only in white with an outline rule. Other color options are not available. Do not alter the artwork in any way or create your own version of the Apple Pay mark. Use only the artwork provided by Apple.</p>
    </div>
    <div class="col-span-12 md:col-span-6 bg-white py-4 px-4">
        <img src="{{ site.baseurl }}/images/apple-pay/apple-pay-artwork.png">
    </div>
</div>

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <p class="text-2xl font-semibold mb-3">Clear Space</p>
        <p class="text-lg md:text-xl">The minimum clear space for the mark is one quarter the height of the mark. Do not place graphics or typography in the clear space area. Do not allow the Apple Pay mark to share its surrounding border with another button or graphic. Maintain clear space around the mark.</p>
    </div>
    <div class="col-span-12 md:col-span-6 bg-white py-4 px-4">
        <img src="{{ site.baseurl }}/images/apple-pay/apple-pay-clear-space.png">
    </div>
</div>

<div class="grid grid-cols-12 gap-4 mb-20">
    <div class="col-span-12 md:col-span-6">
        <p class="text-2xl font-semibold mb-3">Background Color</p>
        <p class="text-lg md:text-xl">A white or light background is preferred when displaying the Apple Pay mark. The mark can also appear on a marketing layout that features a dark background.</p>
    </div>
    <div class="col-span-12 md:col-span-6 bg-white py-4 px-4">
        <img src="{{ site.baseurl }}/images/apple-pay/apple-pay-background-color.png">
    </div>
</div>

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Where to get the Apple Pay Mark

{:.text-xl .mb-5}
You can always find the latest from their design resources.

{:.text-xl .mb-20 .text-blue-400 .underline}
Official Apple Pay Mark


{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Using the Name Apple Pay

{:.text-xl .mb-5}
When using the name Apple Pay in headlines or copy, always typeset Apple Pay as two words with an uppercase A and uppercase P followed by lowercase letters. Never use the Apple logo to represent the name Apple in text.

{:.text-xl .mb-5}
In U.S. communications, use the registered trademark symbol (®) the first time Apple Pay appears in body copy.

<table class="table-auto table border-separate border-spacing-2 mb-10">
  <tbody>
    <tr>
        <td class="bg-emerald-100 w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-emerald-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Do
            </div>
        </td>
      <td class="w-5/6">Purchase with Apple Pay</td>
    </tr>
    <tr>
        <td class="bg-emerald-100 w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-emerald-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Do
            </div>
        </td>
        <td class="w-5/6">Purchase with Apple Pay®</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Purchase with ApplePay</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Purchase with  Pay</td>
    </tr>
    <tr>
        <td class="bg-red-100 w-10 md:w-1/6">
            <div class="flex flex-row gap-2 items-center font-medium">
                <svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                Don't
            </div>
        </td>
        <td class="w-5/6">Purchase with APPLE PAY</td>
    </tr>    
  </tbody>
</table>

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Mobile Experience

{:.text-xl .mb-5}
Since Apple Pay is a mobile payment platform, the experience is most tailored to work with mobile phone devices. This is the journey a customer takes to use apply payment using Apple Pay.

![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-mobile-1.png "an image title"){:.mb-10 .w-1/2 .mx-auto}

{:.text-xl .mb-5}
After continuing with Apple Pay, Safari prompts users with a modal to confirm from the device they are using to approve this authorization. The actions users must take to approve Apple Pay from Desktop are outlined below.

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-mobile-2.png">
        <p class="text-md italic text-center">Double Click to Pay</p>
    </div>
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-mobile-3.png">
        <p class="text-md italic text-center">Authorize Device</p>
    </div>
</div>

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-mobile-3.png">
        <p class="text-md italic text-center">Processing</p>
    </div>
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-mobile-4.png">
        <p class="text-md italic text-center">Done</p>
    </div>
</div>

{:.text-xl .mb-5}
After the device is authorized, the processing can begin and if the account can make the payment it completes successfully.

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Desktop Experience

{:.text-xl .mb-5}
The desktop experience is a little different from the mobile journey. Even though it starts on desktop, to complete payment with Apple Pay it requires approval from a secondary device from the account owner—like an Apple Watch, or an iPhone.

![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-desktop-1.png "an image title"){:.mb-10 .w-full}

{:.text-xl .mb-5}
After continuing with Apple Pay, Safari prompts users with a modal to confirm from their secondary device to approve this authorization. The actions users must take to approve Apple Pay from Desktop are outlined below.

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-desktop-2.png">
        <p class="text-md italic text-center">Double Click to Pay</p>
    </div>
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-desktop-3.png">
        <p class="text-md italic text-center">Unlock Device</p>
    </div>
</div>

{:.text-xl .mb-5}
First users must authorize the payment from their device and with Face ID, Touch ID or by entering their unique Passcode.

<div class="grid grid-cols-12 gap-4 mb-10">
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-desktop-4.png">
        <p class="text-md italic text-center">Processing</p>
    </div>
    <div class="col-span-12 md:col-span-6">
        <img class="mb-3" src="{{ site.baseurl }}/images/apple-pay/apple-pay-desktop-5.png">
        <p class="text-md italic text-center">Done</p>
    </div>
</div>

{:.text-xl .mb-10}
After that’s approved the processing can begin and if the account can make the payment it completes successfully.

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Leagcy Apple Pay Design

{:.text-xl .mb-5}
How the email invoices looks currently. At a glance it's obvious it's not following the official guidelienes or using the official assets.

![an image alt text]({{ site.baseurl }}/images/apple-pay/invoice-legacy-ui.png "an image title"){:.mb-10 .w-full}

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## Payment Component

{:.text-xl .mb-5}
The most ideal solution is to revise the payment method component and make it consistent across payment experiences.

{:.text-xl .mb-5}
This approach is advantageous in many ways, but most importantly this would create a standard for a payment selection experience and it would allow the component to support any amount or mixing of payment methods.

![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-payment-component.png "an image title"){:.mb-10 .w-full}

{:.text-2xl .mb-5 .font-semibold .mb-3 .dark:text-white}
## New Apple Pay Designs

![an image alt text]({{ site.baseurl }}/images/apple-pay/apple-pay-invoices.jpeg "an image title"){:.mb-10 .w-full}

![an image alt text]({{ site.baseurl }}/images/apple-pay/mx-epay-apple-pay.jpeg "an image title"){:.mb-10 .w-full}