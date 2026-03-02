---
title: "How to Set Up Google Analytics 4 on Your ClickFunnels Pages"
description: "Step-by-step guide to installing GA4 on ClickFunnels via GTM — custom events, conversions, and retargeting audiences."
author: "Carlos E. Vargas"
type: "tutorial"
tags: ["GA4", "analytics", "ClickFunnels", "tracking"]
category: "analytics"
platform: "ClickFunnels"
language: "en"
image: "ga4-clickfunnels-setup.png"
publishedAt: "2026-03-01T20:24:27.247Z"
---

# How to Set Up Google Analytics 4 on Your ClickFunnels Pages: The Complete Guide

**Meta Description:** Step-by-step guide to setting up Google Analytics 4 on ClickFunnels pages using GTM — custom events, conversion tracking, retargeting audiences, and troubleshooting.
**Target Keywords:** google analytics 4 clickfunnels, ga4 clickfunnels setup
**Secondary Keywords:** clickfunnels analytics, how to add google analytics to clickfunnels, ga4 custom events clickfunnels
**Estimated Read Time:** 10 min

---

Most ClickFunnels users have no idea what is actually happening inside their funnels.

They know how many people opted in. They know how many sales came through. But they do not know where those people came from, what they did before converting, or why the vast majority of visitors left without doing anything. They are flying blind, spending ad dollars on guesswork.

Google Analytics 4 fixes this. Not vanity metrics — real conversion data. You track every meaningful action in your funnel, see which traffic sources produce buyers (not just clicks), and build retargeting audiences based on real behavior.

This guide walks you through the complete GA4 setup for ClickFunnels using Google Tag Manager. By the end, you will have custom conversion events, retargeting audiences, and proper data settings. Let's go.

*Disclaimer: Interface details may vary as platforms update. Screenshots and steps reflect the process as of early 2026.*

---

## Step 1: Create Your GA4 Property

If you already have a GA4 property, skip to Step 2.

1. Go to [analytics.google.com](https://analytics.google.com) and sign in.
2. Click **Admin** (gear icon) > **Create** > **Account**. Name it after your business.
3. Click **Next**, create a **Property**, and name it descriptively (e.g., "Main Funnel").
4. Set your **reporting time zone** to match your ad account — mismatched time zones make daily conversion data unreliable.
5. Click **Create**.

You now have a GA4 property, but it is not collecting data yet.

---

## Step 2: Create a Web Data Stream

The data stream tells GA4 where to collect data from.

1. In GA4, go to **Admin** > **Data Streams** > **Add stream** > **Web**.
2. Enter your ClickFunnels custom domain (e.g., `yourdomain.com`).
3. Leave **Enhanced Measurement** toggled on.
4. Click **Create stream**.

You will see your **Measurement ID** (`G-XXXXXXXXXX`). Copy it — you need it next.

---

## Step 3: Install via Google Tag Manager (GTM)

Most guides tell you to paste the GA4 tag directly into ClickFunnels headers. That works for pageviews but locks you out of custom event tracking — which is where the real value lives. Use GTM instead.

### 3A: Create a GTM Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com), click **Create Account**.
2. Name the container "ClickFunnels Pages," select **Web**, click **Create**.
3. GTM shows two code snippets (one for `<head>`, one for `<body>`). Keep this open.

### 3B: Install GTM on ClickFunnels

1. In ClickFunnels, go to **Site** > **Site Settings** > **Header/Footer Code Injection**.
2. Paste the first GTM snippet into **Header**, the second into **Body** (or Footer).
3. Save. This covers every page in your workspace.

### 3C: Add the GA4 Configuration Tag

1. In GTM, click **Tags** > **New** > name it "GA4 Configuration."
2. Tag Configuration: **Google Tag**. Paste your Measurement ID.
3. Trigger: **All Pages**. Save, then **Submit** to publish.

Verify by visiting your ClickFunnels page, then checking GA4 > **Reports** > **Realtime**. You should see yourself as an active user.

**Why GTM:** One control panel for all your tracking. Add a Facebook Pixel, fire custom events, or pause tracking — all without touching ClickFunnels code again.

---

## Step 4: Enable Enhanced Measurement

Enhanced Measurement auto-tracks common interactions. Review the defaults:

1. In GA4, go to **Admin** > **Data Streams** > click your stream > **Enhanced Measurement** settings.
2. Confirm these are on:
   - **Scrolls** — Fires at 90% scroll depth. Shows if people read your sales page or bounce after the headline.
   - **Outbound clicks** — Catches traffic leaving your funnel when it should be converting.
   - **Video engagement** — Tracks play, progress, and completion for embedded YouTube videos.
   - **File downloads** — Tracks lead magnet PDF downloads.
   - **Site search** — Turn off if your ClickFunnels site has no search function.
3. Save.

This gives you behavioral data with zero extra tags. Most funnel owners never look at this section, which means they miss signals like visitors scrolling only 30 percent of their sales page (your copy is losing them) or clicking outbound links to competitor sites (you have a leak).

---

## Step 5: Configure Custom Events via GTM

This separates analytics amateurs from people who use data to make decisions. Here are the seven events to set up for a ClickFunnels funnel:

For each event below, the GTM process is the same: **Tags** > **New** > Tag Configuration: **GA4 Event** > enter your Measurement ID > set the Event Name > create a trigger.

| Event Name | What It Tracks | Trigger Type |
|-----------|---------------|-------------|
| `lead_magnet_view` | Opt-in page load | Page View where URL contains `/your-optin-slug` |
| `lead_magnet_optin` | Form submission (thank-you page load) | Page View where URL contains `/your-thank-you-slug` |
| `video_play` | Intro video played | Enhanced Measurement covers YouTube; for Vimeo/Wistia, use a Click trigger on the play button |
| `application_start` | Booking page load | Page View where URL contains `/your-booking-slug` |
| `application_submit` | Application form submitted | Page View where URL contains `/your-confirmation-slug` |
| `call_booked` | Calendly confirmation | Page View on your custom confirmation page (set Calendly to redirect to a page on your domain) |
| `cta_click` | Strategy call button clicked | Click trigger where Click URL contains `/your-booking-page` (enable Click variables in GTM first) |

**Pro tip:** To find the right click class or URL for `cta_click`, right-click your CTA button in Chrome, select "Inspect," and look at the `href` attribute.

After creating all seven tags, click **Submit** in GTM to publish.

**Why this matters:** Without custom events, GA4 only knows someone visited a page. With them, you see the full picture: "500 visitors, 83 opted in, 47 watched the video, 12 started the application, 4 booked a call." That tells you exactly where your funnel leaks.

---

## Step 6: Mark Conversion Events

Some events represent business outcomes. Marking them as conversions gives them priority in reports and lets you optimize ad campaigns toward them.

1. In GA4, go to **Admin** > **Events**.
2. Toggle **Mark as conversion** for:
   - `lead_magnet_optin` — top-of-funnel conversion
   - `application_submit` — mid-funnel conversion
   - `call_booked` — bottom-of-funnel conversion

Events appear in this list only after firing at least once. Walk through your funnel to trigger them if needed.

**Why this matters:** You can import these conversions into Meta Ads or Google Ads as optimization targets. Instead of optimizing for link clicks (vanity), you optimize for actual opt-ins and booked calls.

---

## Step 7: Create Retargeting Audiences

This turns your GA4 data into a revenue engine. Generic retargeting — showing the same ad to everyone — is lazy and expensive. Behavior-based retargeting recovers lost revenue.

In GA4, go to **Admin** > **Audiences** > **New Audience** > **Create a custom audience**. Build these five:

| Audience | Condition | Duration | Use Case |
|---------|-----------|----------|----------|
| **All Visitors** | `session_start` occurred | 30 days | Broad awareness retargeting |
| **Opt-In Viewers (No Conversion)** | `lead_magnet_view` occurred AND `lead_magnet_optin` did NOT | 14 days | Show a different angle or testimonial |
| **Email Subscribers** | `lead_magnet_optin` occurred | 30 days | Nurture toward application/booking |
| **Application Starters (No Submit)** | `application_start` occurred AND `application_submit` did NOT | 14 days | Social proof and urgency ads |
| **Application Submitted** | `application_submit` occurred | 30 days | Exclude from apply ads; run pre-call nurture |

GA4 auto-shares audiences with linked Google Ads accounts. For Meta Ads, build parallel audiences in Meta Ads Manager using the same behavioral logic. The key insight: someone who viewed the opt-in page but did not convert needs a completely different ad than someone who started your application and abandoned it. The first needs a reason to trust you. The second needs a reason to finish what they started. One-size-fits-all retargeting ignores this, and it shows in your cost per acquisition.

---

## Step 8: Set Data Retention to 14 Months

GA4 defaults to 2-month data retention. After 60 days, you lose detailed historical data — too short for quarter-over-quarter funnel analysis.

1. Go to **Admin** > **Data Settings** > **Data Retention**.
2. Change to **14 months**. Toggle **Reset user data on new activity** to On.
3. Save.

---

## Step 9: Review Data Sharing Settings

1. Go to **Admin** > **Account Settings** > **Account Data Sharing Settings**.
2. Disable anything you do not actively benefit from. The principle: share data intentionally, not by default. Your analytics data is a business asset — treat it like one.

Key options to review: Google products & services, Benchmarking, Technical support, and Account specialists. None are required; each is a trade-off between utility and data exposure.

---

## Step 10: Test Everything

### Real-Time Verification

1. Open your funnel in incognito mode (avoids ad blockers).
2. Open GA4 > **Reports** > **Realtime** in a second tab.
3. Walk through each funnel step and confirm every custom event fires.

### GTM Preview Mode

Click **Preview** in GTM, enter your page URL. The debug panel shows every tag — whether it fired, and why or why not.

### Troubleshooting Quick Reference

| Problem | Fix |
|---------|-----|
| No data at all | Publish your GTM container (click Submit) |
| Pageviews work, custom events do not | Submit a new GTM version after adding event tags |
| Events fire in GTM Preview but not in GA4 | Wrong Measurement ID — check for typos |
| Double-counting | Remove direct GA4 code from ClickFunnels; use GTM only |
| Events not marked as conversions | Toggle Mark as conversion in Admin > Events |
| Audiences show zero users | Audiences populate forward, not retroactively — wait 48 hours |
| Standard reports delayed | Normal — GA4 reports take 24-48 hours; Realtime is instant |

---

## What to Do With This Data

**Weekly (5 minutes):** Check GA4 > Engagement > Events. Look at your funnel events in order. The biggest drop-off between steps is your top optimization priority.

**Monthly (30 minutes):** Check Acquisition > Traffic Acquisition, filtered by conversions. Shift ad budget toward sources that produce actual conversions, not just clicks.

**Retargeting:** Run differentiated ad creative for each audience segment. Someone who viewed the opt-in page needs a different message than someone who abandoned the application. This single change — segmenting your retargeting by funnel stage — can meaningfully reduce your cost per acquisition compared to showing generic "come back" ads to everyone.

---

## Your Next Step

You now have a fully instrumented ClickFunnels funnel — custom events, conversion tracking, behavior-based retargeting audiences, proper data retention. Most of your competitors are still staring at pageview counts and guessing.

If you want this done for you — the full GA4 setup, GTM configuration, and custom event architecture tailored to your funnel — [book a free strategy call](/services). We handle the technical implementation so you can focus on running your business.

---

**Related reading:**
- [The AI-Powered Sales Funnel: How to Use AI at Every Stage](/blog/04-ai-powered-sales-funnel) — Once your tracking is in place, learn how AI can optimize every stage of your funnel.
- [All Services](/services) — Technology consulting, funnel builds, analytics setup, and AI implementation.

---

*Carlos Vargas is the founder of Bezalel Digital, a technology consulting firm that helps entrepreneurs and small business owners implement the right technology to grow. He specializes in funnel engineering, analytics architecture, and AI integration for businesses ready to stop guessing and start measuring.*

