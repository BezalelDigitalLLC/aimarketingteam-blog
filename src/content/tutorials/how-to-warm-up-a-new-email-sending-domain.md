---
title: "How to Warm Up a New Email Sending Domain (Week-by-Week Plan)"
description: "A step-by-step week-by-week plan to warm up a new email sending domain, protect deliverability, and land in the inbox — not spam."
author: "Carlos E. Vargas"
type: "tutorial"
tags: ["email-warmup", "deliverability", "domain-reputation", "email-marketing"]
category: "email"
language: "en"
image: "warm-up-email-sending-domain.jpg"
publishedAt: "2026-03-02T13:10:00.000Z"
---

## TL;DR

When you send email from a brand-new domain, inbox providers like Gmail, Outlook, and Yahoo have no history on you. No history means no trust. No trust means your emails go to spam — or get blocked entirely — regardless of how good your content is. Domain warmup is the process of slowly building that trust by starting with small send volumes to your most engaged contacts and gradually increasing volume over four weeks. Follow this plan and you will establish a strong sender reputation before you ever send a marketing campaign.

---

## Why Domain Warmup Matters More Than You Think

Every email domain has a reputation score. That score is maintained by inbox providers (Google, Microsoft, Yahoo) and is based on signals like open rates, spam complaint rates, bounce rates, and engagement patterns. A brand-new domain has a score of zero — which is effectively suspicious.

When a new domain suddenly sends hundreds or thousands of emails, inbox providers interpret this as spam behavior. Their filters do not know if you are a legitimate business or a spammer who just registered a fresh domain to evade existing blocks. The default response is to route your mail to the spam folder or reject it outright.

The warmup process solves this by mimicking the behavior of a trustworthy, established sender: sending small volumes consistently, maintaining high engagement, and avoiding spam triggers. Over four weeks, you accumulate a positive reputation signal that carries forward into all your future campaigns.

**This process is non-negotiable.** Skipping warmup is one of the fastest ways to permanently damage a domain's reputation. Unlike a personal credit score, a domain reputation that gets blacklisted is extremely difficult to recover — and sometimes impossible. It is better to spend four weeks warming up properly than to spend months trying to repair a damaged domain.

---

## Prerequisites Before You Start Warmup

Before sending a single email, your domain must pass technical authentication. If you skip these, your warmup will fail regardless of how carefully you manage volume.

### SPF, DKIM, and DMARC

These three DNS records tell inbox providers that you are authorized to send email from your domain, and that your emails have not been tampered with in transit. Setting them up is a technical step that requires access to your domain's DNS settings.

For a complete, step-by-step walkthrough of setting up all three records, see: [Email Authentication Setup: SPF, DKIM, and DMARC](/tutorials/email-authentication-setup-spf-dkim-and-dmarc-so-y)

Once you have set up these records, verify them using MXToolbox (free at mxtoolbox.com). Run an SPF lookup, a DKIM lookup (you will need your selector name from your email provider), and a DMARC lookup. All three should return valid results before you proceed.

### Google Postmaster Tools Setup

Google Postmaster Tools is a free dashboard that shows you how Gmail specifically rates your domain and IP reputation. Since Gmail handles a significant portion of all email traffic, this data is invaluable during warmup.

To set it up:
1. Go to postmaster.google.com and sign in with a Google account
2. Click the "+" button to add your domain
3. Verify domain ownership by adding a TXT record to your DNS (Google provides the exact record value)
4. Wait 24–48 hours after verification for data to start populating

During your warmup, check Postmaster Tools weekly. The key metrics to watch are Domain Reputation (aim for High, avoid Low or Bad), IP Reputation, and Spam Rate (must stay below 0.10% — Gmail begins filtering at this threshold and may suspend sending at 0.30%).

### mail-tester.com Scoring

Before you send to any real subscribers, send a test email to the address provided by mail-tester.com. This tool analyzes your email and gives it a score out of 10 based on authentication, content, formatting, and technical factors. Aim for a score of 9/10 or higher before starting warmup. A score below 8 indicates problems that will hurt your deliverability and should be fixed before proceeding.

---

## The Four-Week Warmup Plan

### Week 1: 10–20 Emails Per Day

**Who to send to:** Your most engaged contacts only. These are people who have actively communicated with you recently — people who have replied to your personal emails, clients you work with currently, colleagues, or personal contacts who genuinely want to hear from you. Do not pull from a cold list, a purchased list, or even your general subscriber list yet.

**What to send:** Personal, conversational emails. Not newsletters, not promotional content, not broadcasts. Send one-to-one style messages that invite a reply. The content should feel like something you would send from your personal inbox. This is critical: high reply rates are one of the strongest positive reputation signals you can generate during warmup.

Examples of warmup-appropriate content:
- A personal note asking for feedback on something you are working on
- A short, valuable insight relevant to your audience with a question at the end
- A behind-the-scenes update on a project you are launching, framed conversationally
- A simple check-in with a client or colleague

**What to avoid during all four weeks of warmup:**
- Promotional subject lines ("50% off," "Last chance," "Don't miss this")
- Heavy HTML templates with multiple images
- Attachments
- More than one link in the email body
- Purchased or rented email lists

**Week 1 monitoring checklist:**
- Open rate: Should be 40%+ (you are sending to warm contacts)
- Bounce rate: Should be 0% (remove any bounced address immediately)
- Spam complaints: Should be 0%
- Replies received: Track this — replies are a positive signal
- Postmaster Tools: Check domain reputation

---

### Week 2: Increase to 50 Emails Per Day

By Week 2, you have demonstrated to inbox providers that your domain sends mail that people open and reply to. Now you carefully expand volume.

**Who to send to:** Continue with your engaged personal contacts from Week 1, and begin introducing your most active email subscribers — people who have opened or clicked in the last 60 days. If you do not have a subscriber list yet, continue with personal contacts and slowly expand to professional acquaintances.

**What to send:** You can begin sending slightly more structured content, but keep it personal in tone. A short email series (2–3 emails over the week) works well here. Each email should still invite a reply or a low-friction action (answering a one-question survey, clicking a single link to a piece of content).

**Week 2 monitoring checklist:**
- Open rate: Aim for 35%+ (slightly lower is acceptable as you add new contacts)
- Bounce rate: Must stay below 2% — if higher, your list quality is a problem
- Spam complaint rate: Must stay below 0.08%
- Check mail-tester.com with a fresh test email — score should still be 9+
- Review Postmaster Tools for any reputation changes

**If you see a problem at Week 2:** Do not push through it. If bounce rates spike above 2% or spam complaints appear, stop and diagnose. Common causes are list quality issues (sending to old, unverified addresses) or content triggering spam filters. Fix the issue before continuing.

---

### Week 3: Increase to 100 Emails Per Day

You are now halfway through the warmup process. Your domain has two weeks of positive sending history. Week 3 is where you start to see your sender reputation solidifying in Postmaster Tools.

**Who to send to:** Expand to your active subscriber list (opened in the last 90 days). You can begin sending to a slightly broader audience, but still exclude anyone who has not engaged with your emails in the last 6 months.

**What to send:** You can now introduce a light newsletter format — still text-heavy, still personal in tone, but with slightly more structure. You might include two or three short sections or a brief roundup. Keep the HTML minimal: one or two images at most, clean formatting. The email should look like something a human wrote, not a marketing automation template.

**Week 3 monitoring checklist:**
- Open rate: 30%+ acceptable at this volume with a broader audience
- Bounce rate: Below 2%
- Spam complaint rate: Below 0.08% — this is your hard limit
- Postmaster Tools: Domain reputation should read Medium or High
- Check that DMARC reports are coming in (your email provider should be sending these weekly)

**A note on sending time:** Spread your sends across normal business hours. Sending 100 emails at exactly 9:00 AM looks automated. Spreading sends across 9 AM–5 PM looks human. Many email platforms allow you to enable send time optimization or stagger sends — use these features during warmup.

---

### Week 4: Increase to Full Campaign Volume

In Week 4, you scale to your intended full sending volume. What "full volume" means depends on your list size and sending cadence. If your list is 500 people and you send weekly, your full volume is 500 emails per week. If your list is 5,000 and you send twice weekly, that is 10,000 emails per week.

Do not jump to full volume on Day 1 of Week 4. Ramp up across the week: start at 200/day, increase to 300/day, then 500/day, then full volume by the end of the week. If you are sending to large volumes (10,000+/week), consider extending your warmup to 6–8 weeks to be safe.

**What to send in Week 4:** You can now send your standard email content — newsletters, nurture sequences, promotional emails. Continue monitoring closely. The warmup does not end when Week 4 ends — it ends when your metrics are stable and your Postmaster Tools shows High reputation consistently.

**Week 4 monitoring checklist:**
- Open rate: Benchmark against your industry average (most B2B industries average 25–35%)
- Bounce rate: Below 2% — if above, implement regular list cleaning
- Spam complaint rate: Below 0.08%
- Unsubscribe rate: Below 0.5% per send
- Postmaster Tools: Domain reputation should be High
- No blacklist appearances (check MXToolbox blacklist lookup weekly)

---

## What to Do If You Get Blacklisted

Despite careful warmup, blacklisting can happen — especially if an old list contains spam trap addresses or if a batch of contacts report your email as spam.

**Step 1: Identify which blacklist(s) you are on.** Use MXToolbox Blacklist Check (mxtoolbox.com/blacklists.aspx) to see which lists have flagged your domain or IP.

**Step 2: Diagnose the cause.** Common causes include spam trap hits (old or purchased addresses), a sudden spike in spam complaints, or sending to unverified addresses. You must find and fix the root cause before requesting removal — otherwise, you will be re-listed quickly.

**Step 3: Request removal.** Most blacklists have a self-service removal form. Provide your domain, your sending domain, and a brief explanation of what happened and how you have fixed it. Major lists like Spamhaus require you to demonstrate the issue is resolved.

**Step 4: Reduce volume temporarily.** After removal, drop back to Week 2 volumes for 5–7 days while your reputation recovers.

**Step 5: Switch to a dedicated IP (if appropriate).** If you are using a shared IP from your email provider and getting repeatedly blacklisted, consider upgrading to a dedicated IP. This separates your reputation from other senders on the same provider.

---

## Monitoring Checklist Summary

| Metric | Warmup Target | Action if Exceeded |
|---|---|---|
| Open rate | 30%+ | Review subject lines and sender name |
| Bounce rate | Below 2% | Clean list, verify addresses |
| Spam complaint rate | Below 0.08% | Pause, diagnose, clean list |
| Unsubscribe rate | Below 0.5%/send | Review content relevance |
| Postmaster Domain Reputation | Medium → High | Reduce volume, increase engagement |
| mail-tester.com score | 9/10+ | Fix authentication or content issues |

---

## FAQ

**Q: Do I have to warm up my domain if I am using a well-known ESP like Mailchimp or ConvertKit?**
Yes — but the situation is slightly different. These platforms often use shared IPs with built-in warmup infrastructure. However, your domain reputation is still separate from the IP reputation. If you are sending from a custom domain (yourcompany.com), that domain still needs warmup regardless of which platform you use.

**Q: Can I use an automated warmup tool instead of doing this manually?**
Tools like Lemlist's warmup, Warmup Inbox, and Mailreach can automate portions of the warmup process by having accounts automatically open and engage with your emails. These tools are useful supplements, but they do not replace sending to real, engaged human contacts. Use them in addition to, not instead of, the plan above.

**Q: How long does it take for a damaged domain reputation to recover?**
It depends on the severity of the damage. Minor reputation dips can recover in 2–4 weeks of careful, low-volume sending to highly engaged contacts. Serious blacklisting or a domain flagged by Spamhaus can take months, and some domains never fully recover. Prevention is vastly easier than recovery.

**Q: What is a spam trap and how do I avoid hitting one?**
Spam traps are email addresses used by inbox providers and blacklist operators to catch senders with poor list hygiene. They come in two types: pristine traps (addresses that have never signed up for anything) and recycled traps (old addresses that were valid but abandoned). Avoid them by never purchasing lists, using double opt-in for new subscribers, and regularly cleaning your list to remove contacts who have not engaged in 6+ months.

**Q: Should I use my primary business domain or a separate sending domain?**
Many email deliverability experts recommend using a subdomain for email sending (e.g., mail.yourbusiness.com or news.yourbusiness.com) rather than your root domain. This protects your root domain's reputation if something goes wrong during a campaign. If you do this, set up SPF, DKIM, and DMARC on the subdomain, not the root domain.

---

## Key Takeaways

- Domain warmup is not optional — skipping it will cause your emails to land in spam or get blocked entirely
- Complete your SPF, DKIM, and DMARC setup and verify with MXToolbox before sending a single warmup email
- Set up Google Postmaster Tools to monitor Gmail reputation throughout the process
- Week 1: 10–20/day to personal, engaged contacts only; Week 2: 50/day; Week 3: 100/day; Week 4: ramp to full volume
- Send personal, reply-worthy content during warmup — not promotional campaigns
- Monitor open rate, bounce rate, and spam complaint rate every week without exception
- If you get blacklisted, diagnose the root cause before requesting removal or your reputation damage will repeat

---

## What to Read Next

- [Email Authentication Setup: SPF, DKIM, and DMARC](/tutorials/email-authentication-setup-spf-dkim-and-dmarc-so-y) — Complete these technical steps before you start your warmup. Without proper authentication, no warmup strategy will protect your deliverability.
- [How to Build a 7-Email Welcome Sequence That Converts](/tutorials/how-to-build-a-7-email-welcome-sequence-that-conve) — Once your domain is warmed up and your authentication is in place, this tutorial walks you through building the email sequence that turns new subscribers into buyers.

---

## About the Author

**Carlos E. Vargas** is the founder of Bezalel Digital, a technology consulting firm helping entrepreneurs, coaches, and small business owners build and scale the technology infrastructure behind their businesses. Carlos specializes in email marketing systems, marketing automation, and the technical setup that makes digital marketing actually work.

Need help diagnosing a deliverability issue or setting up your email infrastructure from scratch? [Book a free strategy call](https://www.carlosvargas.com/strategy-call) and get a clear action plan.

---

*Disclaimer: Email deliverability results vary based on domain age, list quality, ESP configuration, and recipient behavior. The timelines and thresholds in this guide are general recommendations and may not apply to every situation. This guide is for educational purposes only and does not constitute professional IT or legal advice. Always verify technical configurations with your email service provider.*
