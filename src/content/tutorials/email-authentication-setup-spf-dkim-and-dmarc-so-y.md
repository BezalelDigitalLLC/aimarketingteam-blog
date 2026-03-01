---
title: "Email Authentication Setup: SPF, DKIM, and DMARC So Your Emails Get Delivered"
description: "Set up SPF, DKIM, and DMARC records so your business emails land in the inbox — not spam. Step-by-step DNS setup with verification."
author: "Carlos E. Vargas"
type: "tutorial"
tags: ["email", "SPF", "DKIM", "DMARC", "deliverability"]
category: "email-marketing"
language: "en"
publishedAt: "2026-03-01T20:24:33.475Z"
---

# Email Authentication Setup: SPF, DKIM, and DMARC So Your Emails Actually Get Delivered

**Meta Description:** Learn how to set up SPF, DKIM, and DMARC records for your business domain so your emails stop landing in spam. Step-by-step guide with ClickFunnels-specific instructions.
**Target Keywords:** spf dkim dmarc setup, email authentication for business
**Secondary Keywords:** email deliverability setup, how to set up spf record, dmarc setup guide, emails going to spam fix
**Estimated Read Time:** 9 min

---

You spent $500 on ads, got 50 leads, sent them your best email sequence... and 30 of them never saw it because your emails landed in spam.

That is not a hypothetical. That is what happens when your domain is not authenticated. Three DNS records — SPF, DKIM, and DMARC — are the difference between your emails reaching the inbox and disappearing into a spam folder nobody checks. Setting them up takes about 30 minutes. Not setting them up can cost you thousands in lost leads.

Every email in spam is a lead you paid for and then lost. When 30 to 50 percent of your emails get filtered because your domain is not authenticated, you are burning half your ad budget. And it compounds: email providers track your domain reputation, so early spam flags mean even more of your future emails get filtered. It is a downward spiral that is much harder to fix than prevent.

If you are sending email sequences from ClickFunnels, this is not optional. Gmail and Outlook now require SPF, DKIM, and DMARC for bulk senders. No authentication, no inbox.

This guide walks you through what each record does, how to set them up, and how to verify everything works.

*Disclaimer: DNS interfaces vary by registrar. Steps reflect the general process as of early 2026.*

---

## What SPF, DKIM, and DMARC Actually Do (Plain English)

**SPF (Sender Policy Framework)** tells email providers which servers are allowed to send email on behalf of your domain. Think of it as a guest list — if the sending server is not on the list, the email gets flagged.

**DKIM (DomainKeys Identified Mail)** adds a digital signature to every email so the receiving server can verify it was not tampered with in transit. It is like a wax seal on a letter — proof it came from you and nobody changed it.

**DMARC (Domain-based Message Authentication, Reporting, and Conformance)** tells email providers what to do when an email fails SPF or DKIM checks. You decide whether failed emails get delivered, quarantined, or rejected.

All three work together. SPF says who can send. DKIM proves the email is legitimate. DMARC enforces the rules. You need all three.

---

## Step 1: Set Up Your SPF Record

SPF is the simplest record and has the most immediate impact.

You are adding a TXT record to your domain's DNS that lists every service authorized to send email from your domain. When Gmail receives an email from you, it checks this list.

**1. Log into your domain registrar** (GoDaddy, Namecheap, Cloudflare, etc.) and navigate to DNS management.

**2. Check for an existing SPF record.** Look for a TXT record starting with `v=spf1`. If one exists, you will modify it — not create a second one.

**3. Add or update your SPF record:**

| Field | Value |
|---|---|
| **Type** | TXT |
| **Host / Name** | `@` (or leave blank, varies by registrar) |
| **Value** | `v=spf1 include:_spf.clickfunnels.com ~all` |
| **TTL** | 3600 (or default) |

If you also send through Google Workspace:

`v=spf1 include:_spf.google.com include:_spf.clickfunnels.com ~all`

The key rule: **one SPF record, multiple includes.** If you use additional services (Mailgun, SendGrid), add their `include:` statement to the same record.

**Common mistake:** Having two separate SPF records. If you created one for Google and another for ClickFunnels, both break. Merge them into one TXT record. If you see two records starting with `v=spf1`, combine them.

---

## Step 2: Set Up DKIM

DKIM is more involved because it requires generating keys in your email platform, then adding them to DNS.

You are creating a cryptographic key pair. Your email platform holds the private key and signs every outgoing email. You publish the public key in DNS so receiving servers can verify the signature.

### ClickFunnels DKIM setup

**1. Access your ClickFunnels email settings.** Navigate to your SMTP or domain authentication area. Look for "Domain Authentication" or "DKIM."

**2. Generate your DKIM keys.** ClickFunnels provides a CNAME or TXT record to add. Copy the record name and value exactly — DKIM values are long strings, so copy and paste rather than retyping.

**3. Add the DKIM record to your DNS:**

| Field | Value |
|---|---|
| **Type** | CNAME or TXT (as specified) |
| **Host / Name** | The selector provided (e.g., `cf._domainkey`) |
| **Value** | The key string from ClickFunnels |
| **TTL** | 3600 (or default) |

**4. Verify in ClickFunnels.** Click the "Verify" button in your dashboard. Propagation usually takes minutes to an hour, though it can take up to 48 hours.

If you also use Google Workspace, set up DKIM there too (Admin Console > Apps > Gmail > Authenticate email). Unlike SPF, you can have multiple DKIM records because each uses a different selector.

---

## Step 3: Set Up DMARC

DMARC is your enforcement layer. Without it, SPF and DKIM help but email providers lack clear instructions on what to do with failed messages.

**1. Start with quarantine.** Do not jump to `reject` on day one. Quarantine sends failed emails to spam rather than deleting them, giving you time to review reports and confirm your legitimate emails pass.

**2. Add the DMARC record:**

| Field | Value |
|---|---|
| **Type** | TXT |
| **Host / Name** | `_dmarc` |
| **Value** | `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@yourdomain.com; pct=100` |
| **TTL** | 3600 (or default) |

Replace `yourdomain.com` with your actual domain. The `rua` tag tells providers where to send aggregate reports showing which servers are sending from your domain and whether they pass authentication.

**3. Monitor for 30 days.** Check reports weekly. Confirm your ClickFunnels emails are passing. If they are failing, your SPF or DKIM setup needs adjustment.

**4. Tighten to reject.** After 30 days, update to:

`v=DMARC1; p=reject; rua=mailto:dmarc-reports@yourdomain.com; pct=100`

This rejects any email from your domain that fails authentication — the strongest protection against spoofing.

The XML reports are hard to read raw. Free tools like [DMARC Analyzer](https://www.dmarcanalyzer.com/) or [Postmark's DMARC tool](https://dmarc.postmarkapp.com/) parse them into readable dashboards.

---

## Step 4: Verify and Test Everything

Allow 24 to 48 hours for DNS propagation, then test. Most changes propagate within a few hours.

**mail-tester.com** — Send a test email to the address shown on the site. Target a 9/10 or 10/10 score. Tests SPF, DKIM, DMARC, and other deliverability factors in one shot.

**MXToolbox** — Use their individual checkers for SPF (mxtoolbox.com/spf.aspx), DKIM (mxtoolbox.com/dkim.aspx), and DMARC (mxtoolbox.com/dmarc.aspx) to verify each record is published and valid.

**If a test fails:**

- **SPF:** Confirm you have only one SPF record and all sending services are included. Check for typos in `include:` statements.
- **DKIM:** Make sure you copied the entire value string — they are long and easy to truncate. Confirm the selector matches what your email platform specified.
- **DMARC:** Verify the host is `_dmarc` (with the underscore). Some registrars auto-append your domain, creating `_dmarc.yourdomain.com.yourdomain.com` — check for this.

---

## Step 5: Set Up Google Postmaster Tools

Google Postmaster Tools gives you ongoing visibility into how Google views your domain. It is free and takes five minutes.

1. Go to [postmaster.google.com](https://postmaster.google.com) and sign in.
2. Add your domain and verify ownership (one more DNS record).
3. Monitor your dashboards for spam rate, domain reputation, and authentication pass rates.

**Key thresholds:** Keep spam rate below 0.1%. Above 0.3%, Gmail throttles your emails. Above 0.5% is a serious problem. Domain reputation should stay "High" or "Medium." Authentication pass rates should be 100%.

---

## Ongoing Monitoring Schedule

Email deliverability is not set-and-forget. Here is a simple schedule:

**Weekly (10 minutes):** Check bounce reports in ClickFunnels. Review spam complaint rate in Google Postmaster Tools. Watch for sudden volume spikes — going from 50 emails/day to 5,000 triggers filters even with perfect authentication.

**Monthly (30 minutes):** Run an engagement audit — identify subscribers who have not opened or clicked in 90 days and move them to a re-engagement sequence or remove them. Re-check DNS records with MXToolbox, especially if you have made other DNS changes recently.

**Quarterly (1 hour):** Run a deliverability audit by sending your actual marketing emails to test accounts on Gmail, Outlook, and Yahoo. Review DMARC reports for unauthorized senders. Audit your list for inactive subscribers, role addresses (info@, admin@), and possible spam traps.

---

## Set Up Your Sender Profile the Right Way

While you are in the settings, configure your sender profile correctly:

**Sender Name:** Use a personal name. "Carlos Vargas" outperforms "Bezalel Digital" because people open emails from people, not brands.

**Sender Email:** Use your branded domain — `carlos@yourdomain.com`, never a Gmail or Yahoo address. Free email addresses kill deliverability and look unprofessional.

**Reply-To:** Same as your sender email. When someone replies, you want to see it.

**Physical Address:** CAN-SPAM requires a mailing address in every marketing email footer. A PO Box or registered agent address works — you do not need your home address.

---

## Quick-Reference Checklist

- [ ] Add SPF TXT record: `v=spf1 include:_spf.clickfunnels.com ~all` (merge with existing)
- [ ] Generate DKIM keys in ClickFunnels and add record to DNS
- [ ] If using Google Workspace, set up DKIM for Google as well
- [ ] Add DMARC TXT record with `p=quarantine` policy
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Test with mail-tester.com (target 9/10 or higher)
- [ ] Verify SPF, DKIM, DMARC with MXToolbox
- [ ] Set up Google Postmaster Tools
- [ ] Configure sender profile (personal name, branded email, physical address)
- [ ] After 30 days, tighten DMARC to `p=reject`
- [ ] Set weekly/monthly/quarterly monitoring schedule

---

## This Is the Boring Stuff That Makes Everything Else Work

DNS records are not exciting. Nobody starts a business because they are passionate about email authentication. But every email campaign you run, every welcome sequence you write, every launch email you send — all of it depends on these three records being in place.

You can have the best copy, the smartest funnel, and the most dialed-in targeting in the world, and none of it matters if your emails land in spam. Thirty minutes of setup protects every dollar you spend on email marketing from this point forward.

---

**Need help setting this up?** If you would rather have a professional handle your email authentication and deliverability optimization, [Bezalel Digital offers done-for-you setup](/services) as part of our technology consulting services. We configure your records, verify everything works, set up monitoring, and make sure your emails reach the inbox from day one.

[Book a free consultation →](/services)

---

*Published by Bezalel Digital. This article is for informational and educational purposes. DNS interfaces vary by registrar. Steps reflect the general process as of early 2026.*
