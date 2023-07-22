---
title: 'Design Hire Challenge'
name: 'Qualitative Surveys: Requirements & Team Satisfaction'
URL: './apple-pay'
thumbnail: "apple-pay-thumbnail.png"
apple-pay-docs:
    - name: Privacy Statement Requirements
      url: 
    - name: When to Show Apple Pay
      url:
    - name: How to Display Apple Pay Buttons
      url:
    - name: Using Apple Pay Mark
      url: 
    - name: Where to get the Apple Pay Mark
      url:
    - name: Using the Name Apple Pay
      url:       

---
        
<!-- {:.mb-20}
![an image alt text]({{ site.baseurl }}/images/apple-pay/stock-illustration-pitch.jpg "an image title") -->

{:.text-2xl .md:text-4xl .lg:text-4xl .mt-6 .mb-3 .dark:text-white}
## Overview

{:.text-xl .mb-5}
Etab is an ordering and payment software service focused on online ordering, dine-in, carryout, and delivery. Currently, the platform handles dine-in services if managed by a restaurant server, but the workflow doesn’t truly support a contactless dine-in experience. Since the service industry has adapted to accommodating contactless dine-in experiences, many of our customers have been asking for this feature support. 

{:.text-2xl .md:text-4xl .lg:text-4xl .mt-6 .mb-3 .dark:text-white}
## Problem

{:.text-xl .mb-10}
In order to remain competitive in the market and keep our customers satisfied, Priority has requested a UX plan for accommodating this demand. Create a solution for restaurants using Etab to support contactless dine-in ordering and payment. 

{:.text-xl .mb-10}
There are five main tools restaurants have been using to accommodate contactless dine-in experiences. 

{:.list-decimal .list-inside .leading-relaxed .text-lg .mb-10 .opacity-75}
- {: .mb-2 } A virtual waiting list that they can join from their phone, rather than speaking to a host.
- {: .mb-2 } A scannable QR code at the table that takes them to an interactive, online menu.
- {: .mb-2 } Contactless ordering from the restaurant’s website, which they can access from their own devices.
- {: .mb-2 } Pay-at-the-table technology that allows them to split the bill and pay using their debit or credit card or a digital wallet like Apple Pay.

![an image alt text]({{ site.baseurl }}/images/apple-pay/invoice-legacy-ui.png "an image title"){:.mb-10 .w-full}

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .dark:text-white}
## Solution

{:.text-xl .mb-5}
In order to use apple pay, users have to meet certain circumstances for it to even appear as an option. Not only will there be conditional logic on what displays apple pay as an option, but also following brand specific imagery, messaging, and content when it does appear.

{:.text-xl .mb-10}
This guide was made with use of official Apple Pay documentation. Resources are cited below for reference.

<div class="flex flex-col mb-20">
{% for apple-pay-doc in page.apple-pay-docs %}
    <a href="{{ written-comm.URL }}" class="flex flex-row gap-4 py-3 px-8 border-y border-t-0 border-base-200 dark:border-base-100 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition">
        <div class="basis-1 self-center">
            <svg class="fill-zinc-500 mx-auto" xmlns="http://www.w3.org/2000/svg" height="24"
                viewBox="0 -960 960 960" width="24"><path d="M277-279h275v-60H277v60Zm0-171h406v-60H277v60Zm0-171h406v-60H277v60Zm-97 501q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>
        </div>
        <div class="basis-full self-center">{{ apple-pay-doc.name }}</div>
        <div class="basis-1 self-center">
            <button class="btn btn-square btn-ghost mx-auto hover:bg-transparent">
                <svg class="h-6 w-6 fill-blue-500 dark:fill-blue-300" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" /></svg>
            </button>
        </div>
    </a>
{% endfor %}
</div>


{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .dark:text-white}
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

{:.text-xl .mb-10}
After the device is authorized, the processing can begin and if the account can make the payment it completes successfully.

{:.text-2xl .md:text-4xl .lg:text-4xl .mb-3 .dark:text-white}
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