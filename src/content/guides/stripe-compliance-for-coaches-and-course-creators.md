---
title: "How Coaches and Course Creators Get in Trouble with Stripe (And How to Stay Protected)"
description: "Stripe is shutting down coaches and course creators who violate its updated policies. Learn the dispute thresholds, restricted business rules, and compliance steps to protect your revenue."
author: "Carlos E. Vargas"
type: "guide"
tags: ["Stripe", "compliance", "coaching", "payment-processing", "business-protection"]
category: "compliance"
language: "en"
image: "stripe-compliance-coaches-course-creators.jpg"
publishedAt: "2026-03-03T15:00:00.000Z"
---

## TL;DR

Stripe updated its Services Agreement on November 18, 2025, adding "content creation" to its restricted businesses list — directly affecting coaches and course creators. If your dispute rate exceeds 0.75%, Stripe can freeze your funds, place rolling reserves on your account, or terminate you entirely and land you on the MATCH blacklist for five years. This guide covers exactly what is and is not allowed under Stripe's current policies, the chargeback thresholds that trigger enforcement, and a complete compliance checklist to protect your revenue.

---

## Why Stripe Is Flagging Coaches and Course Creators

Stripe is a payment aggregator. Unlike a dedicated merchant account where you have a direct relationship with a bank, Stripe processes payments under its own merchant ID and distributes them to your account. This means your risk is Stripe's risk. If your customers file chargebacks, Stripe pays the card networks first and comes after you second. If your dispute rate climbs too high, Stripe's entire merchant relationship with Visa and Mastercard is affected — not just your account.

This is the fundamental dynamic that every coach and course creator needs to understand: Stripe is not your bank. Stripe is a middleman, and middlemen protect themselves first.

### The November 2025 Policy Update

On November 18, 2025, Stripe updated its Services Agreement and added "content creation" to its list of restricted business categories. Before this update, coaching programs and digital courses existed in a gray area. After the update, they are explicitly flagged for additional scrutiny.

This does not mean Stripe banned coaching. It means Stripe now categorizes content-based businesses as higher risk and subjects them to stricter monitoring, lower dispute thresholds before action, and faster enforcement timelines.

### Why Coaching Is Considered "High Risk"

Payment processors classify businesses as high risk based on three factors:

1. **High-ticket pricing.** Programs priced at $997, $2,000, $5,000, or more generate larger individual chargebacks. A single dispute on a $5,000 coaching program costs Stripe significantly more than a dispute on a $29 SaaS subscription.

2. **Intangible delivery.** When a customer buys a physical product, there is a tracking number, a delivery confirmation, and a package on their doorstep. When a customer buys a coaching program, the "delivery" is access to a portal, a series of calls, or a community. Proving delivery in a chargeback dispute is significantly harder.

3. **Subscription and recurring billing models.** Many coaching programs use monthly billing or payment plans. Customers who lose interest, forget they signed up, or experience buyer's remorse often dispute the charge rather than canceling — especially if the cancellation process is not obvious or easy.

---

## What IS and ISN'T Allowed on Stripe

Stripe's restricted business policies are not a blanket ban on coaching or courses. They are restrictions on specific business models that tend to generate high dispute rates. Understanding the distinction is critical.

### Allowed on Stripe

- **One-time course purchases.** A customer pays $497 for lifetime access to a course. Clear product, clear delivery, one transaction.
- **Full-catalog subscriptions.** A customer pays $49/month for access to your entire library of content. This mirrors the Netflix model and Stripe treats it as standard subscription billing.
- **Consulting services billed per session or per project.** Invoiced consulting with clear deliverables and scope.

### Restricted on Stripe (Higher Scrutiny)

- **Gated content with tiered access.** Different membership levels where higher-paying members get "exclusive" content. Stripe flags these because the perceived value gap between tiers often leads to disputes.
- **Tips, donations, and "pay what you want" models.** These create ambiguity about what the customer is actually paying for, which complicates dispute resolution.
- **Tiered membership perks.** VIP access, priority coaching slots, or bonus materials tied to higher payment tiers.

### Gray Areas (Proceed with Caution)

- **Dripped content.** Courses released module-by-module over weeks or months. The risk is that a customer disputes before all content is delivered, and Stripe sees an incomplete fulfillment.
- **Community access as the primary product.** If your $197/month membership is primarily access to a Slack group or Circle community, the intangible nature of the product makes disputes harder to defend.
- **High-ticket coaching programs.** One-on-one or group coaching priced above $2,000. Not banned, but Stripe monitors these accounts more closely.

### Comparison: Allowed vs. Restricted Models

| Business Model | Stripe Classification | Risk Level | Notes |
|---|---|---|---|
| One-time course purchase | Allowed | Low | Clear product, single transaction |
| Full-catalog subscription | Allowed | Low | Mirrors SaaS/streaming model |
| Per-session consulting | Allowed | Low | Clear deliverable per payment |
| Tiered membership with gated content | Restricted | Medium-High | Perceived value gaps cause disputes |
| Dripped content over time | Gray area | Medium | Incomplete delivery risk |
| Community-only membership | Gray area | Medium | Hard to prove "delivery" |
| High-ticket coaching ($2K+) | Gray area | High | Large individual chargebacks |
| Tips / donations / PWYW | Restricted | Medium | Ambiguous transaction purpose |

---

## The Chargeback Trap: Dispute Rates That Shut You Down

This is where most coaches and course creators get blindsided. They assume a few chargebacks here and there are normal. They are — until they are not.

### The 0.75% Threshold

Stripe's internal dispute rate threshold is approximately 0.75%. This sounds like a small number until you do the math.

If you process 200 transactions per month, 0.75% is 1.5 disputes. That means two disputes in a single month can put you over the threshold. For a coach running a $997 program with 200 sales per month, two unhappy customers filing chargebacks — not asking for a refund, but going directly to their bank — can trigger a Stripe review.

**Here is the critical detail most coaches do not know: both won AND lost disputes count toward your dispute rate.** Even if you submit evidence and the bank rules in your favor, that dispute still counts. The card networks measure disputes filed, not disputes lost.

### Card Network Thresholds

Stripe's 0.75% threshold is their internal policy. The card networks have their own programs with their own thresholds, and the consequences escalate dramatically.

| Program | Network | Entry Threshold | Monthly Fine Range | Consequences |
|---|---|---|---|---|
| Visa VAMP (Visa Acquirer Monitoring Program) | Visa | 0.5% dispute rate | $1,000–$100,000+/month | Escalating fines, potential termination |
| Mastercard ECM (Excessive Chargeback Merchant) | Mastercard | 1.5% dispute rate + 100 disputes | $1,000–$200,000+/month | Escalating fines, potential MATCH listing |
| Stripe Internal | Stripe | ~0.75% dispute rate | N/A (account action) | Review, reserves, suspension, termination |

### How Fines Escalate

Card network fines are not a one-time penalty. They escalate monthly until you bring your dispute rate back below the threshold:

- **Month 1:** Warning and monitoring
- **Months 2–3:** $1,000–$25,000/month in fines
- **Months 4–6:** $25,000–$50,000/month
- **Months 7+:** $50,000–$100,000+ per month, plus potential removal from the network

These fines are assessed to Stripe (as the acquirer), and Stripe passes them directly to you. If you cannot pay them, Stripe deducts them from your held funds.

---

## What Happens When Stripe Takes Action

Stripe's enforcement follows a predictable four-stage escalation. Understanding each stage helps you recognize where you are and act before it gets worse.

### Stage 1: Review

Stripe flags your account and opens an internal review. You may receive an email requesting additional information about your business model, refund policy, or fulfillment process. At this stage, you can usually resolve the issue by providing documentation and making policy changes.

**What to do:** Respond immediately. Provide every document Stripe requests. Do not ignore this email — it is not a suggestion, it is the beginning of an enforcement timeline.

### Stage 2: Rolling Reserves

Stripe begins holding a percentage of your incoming payments in reserve. Typical reserve rates are 5–10% of your processing volume, held for 45–120 days. This means if you process $50,000 in a month, Stripe may hold $2,500–$5,000 in a reserve account that you cannot access for up to four months.

**What to do:** Immediately reduce your dispute rate. Issue proactive refunds to customers who are likely to dispute. Improve your billing descriptors and customer communication. The reserve will be released once your dispute rate stabilizes below the threshold.

### Stage 3: Suspension

Stripe suspends your ability to process new payments. Existing subscriptions may continue to bill, but you cannot create new charges. Your funds in reserve are still held.

**What to do:** At this point, you need an alternative payment processor ready. Contact Stripe's support team to understand the specific conditions for reinstatement. Begin migrating your billing to a backup processor.

### Stage 4: Termination and MATCH Listing

Stripe terminates your account and may report you to the MATCH (Member Alert to Control High-Risk Merchants) list, formerly known as the TMF (Terminated Merchant File). The MATCH list is a shared database that all payment processors check before approving new merchant accounts.

**Being placed on the MATCH list effectively blacklists you from standard payment processing for five years.** You can still process payments through high-risk processors, but you will pay significantly higher fees (often 5–8% per transaction plus monthly minimums) and face stricter terms.

**What to do:** Consult a payment processing attorney immediately. There are limited grounds for MATCH removal, and the process requires formal disputes with the card networks. Do not attempt to open a new Stripe account under a different name or entity — this violates Stripe's terms and can result in additional legal consequences.

---

## How to Stay Compliant: The Complete Checklist

Compliance is not a one-time setup. It is an ongoing operational discipline. The following checklist covers the four areas that matter most for coaches and course creators on Stripe.

### Legal Documents

- [ ] **Refund policy displayed at checkout.** Your refund policy must be visible before the customer enters payment information — not buried in your Terms of Service, not on a separate page the customer has to find. Place it directly on the checkout page, above or adjacent to the payment button.
- [ ] **Terms of Service linked and accessible.** Your ToS should clearly describe what the customer is purchasing, what they will receive, the delivery timeline, and the refund terms.
- [ ] **Signed client agreements for high-ticket programs.** For any program priced above $1,000, require a signed agreement (electronic signature with IP address logging) that outlines the scope of the engagement, expected deliverables, and refund conditions.
- [ ] **Earnings disclaimer if applicable.** If your coaching or course makes any implied or explicit income claims, include an earnings disclaimer per FTC guidelines. See our [FTC Compliance Guide](/guides/ftc-compliance-guide-coaches-consultants) for details.

### Billing Practices

- [ ] **Clear billing descriptor.** The charge description on your customer's credit card statement should clearly identify your business. "BEZALEL*COACHING" is clear. "STRIPE*1847283" is not. Unclear descriptors cause "friendly fraud" — customers who do not recognize the charge and dispute it.
- [ ] **Branded invoices and receipts.** Send a professional invoice or receipt for every transaction that includes your business name, the product purchased, and the amount charged. Stripe can do this automatically if configured properly.
- [ ] **Confirmation emails for every purchase.** Immediately after purchase, send an email confirming the transaction, describing what was purchased, and providing access instructions. This email is your first piece of evidence in any future dispute.
- [ ] **Clear payment plan terms.** If you offer payment plans, the total cost, number of payments, payment schedule, and what happens if a payment is missed must all be disclosed before the first charge.

### Chargeback Prevention

- [ ] **Proof of delivery documentation.** For digital products, log when the customer accesses the content — portal login timestamps, email open tracking, course completion data. For coaching, keep records of scheduled and attended calls with calendar invites and session notes.
- [ ] **Fast refund responses.** When a customer requests a refund, process it quickly. A refund costs you the transaction amount. A chargeback costs you the transaction amount plus a $15–$25 fee from Stripe, plus damage to your dispute rate. Always choose the refund over the chargeback.
- [ ] **Pre-purchase acknowledgment checkbox.** Add a checkbox at checkout that the customer must check before purchasing: "I understand that this is a digital product and I agree to the refund policy stated above." Log the checkbox state, timestamp, and IP address.
- [ ] **Easy cancellation flow.** If you offer subscriptions or memberships, the cancellation process should be obvious and simple. A customer who cannot figure out how to cancel will call their bank instead. One-click cancellation in your portal or a clearly labeled "Cancel Subscription" link in every billing email.

### Operations

- [ ] **Monitor your dispute rate weekly.** Check your Stripe Dashboard > Disputes section every week. Set up Stripe webhook alerts for new disputes so you are notified immediately. Do not wait for Stripe to tell you there is a problem.
- [ ] **Do not scale transaction volume too fast.** A sudden spike in processing volume (going from $10,000/month to $100,000/month in one week from a launch) triggers automated fraud detection. Ramp gradually, or notify Stripe in advance of a planned launch.
- [ ] **Respond to every dispute within the deadline.** Stripe gives you 7–21 days (depending on the card network) to respond to a dispute. Always respond with evidence, even if you think you will lose. Non-response is an automatic loss and signals to Stripe that you are not managing your account.

---

## Refund Policies That Protect You

Your refund policy is your single most important compliance document for payment processing. A clear, enforceable refund policy prevents disputes, provides evidence in chargeback cases, and sets customer expectations before purchase.

### Option 1: No-Refund Policy

**Best for:** One-time digital product purchases, course access

**Language example:**
> All sales are final. Due to the digital nature of this product, no refunds will be issued after purchase. By completing this purchase, you acknowledge that you have read and agree to this no-refund policy.

**US law note:** There is no federal requirement to offer refunds on digital products in the United States, as long as the no-refund policy is clearly disclosed before purchase. Some states have specific consumer protection laws — California, for example, requires refund policies to be posted conspicuously. When in doubt, disclose prominently.

### Option 2: Conditional Refund Policy

**Best for:** Coaching programs, group programs, courses with completion requirements

**Language example:**
> Refunds are available within 14 days of purchase, provided the buyer has not accessed more than 20% of the course content. Refund requests must be submitted in writing to [support email]. Refunds for coaching programs are available only if no coaching sessions have been attended. All refund requests are subject to review and verification of access logs.

### Option 3: Money-Back Guarantee

**Best for:** High-ticket programs where the guarantee reduces purchase friction

**Language example:**
> If you complete all program modules and implement the strategies as directed, and you are not satisfied with your results after 30 days, contact us for a full refund. You must demonstrate completion of all assigned modules and implementation steps to qualify for the guarantee.

### Making Your Refund Policy Enforceable

Regardless of which option you choose:

1. **Display the policy at checkout** — directly on the payment page, not on a separate page.
2. **Require a checkbox acknowledgment** — "I have read and agree to the refund policy" with a link to the full policy.
3. **Log the acknowledgment** — record the checkbox state, timestamp, customer IP address, and browser user agent. This is your evidence if a dispute is filed.
4. **Include the policy in your confirmation email** — reiterate the refund terms in the post-purchase email.
5. **Include the policy in your Terms of Service** — the checkout acknowledgment is your primary evidence, but the ToS serves as a secondary reference.

---

## When Stripe Holds Your Money

If Stripe places a reserve on your account or suspends payouts, do not panic — but do act immediately.

### Immediate Steps

1. **Read the notification carefully.** Stripe will specify why the hold was placed and what information they need. Do not guess — respond to the specific requests.
2. **Gather your documentation.** Collect your refund policy (with proof it was displayed at checkout), customer agreements, proof of delivery (access logs, email records, call recordings), and your business registration documents.
3. **Respond within 24 hours.** Speed matters. A prompt, thorough response signals to Stripe that you are a legitimate business that takes compliance seriously.
4. **Do not process refunds to circumvent the hold.** Issuing mass refunds while your account is under review can be interpreted as an attempt to move funds before termination. Continue normal operations unless Stripe specifically instructs otherwise.

### Timeline for Fund Holds

| Scenario | Typical Hold Duration | Maximum Duration |
|---|---|---|
| Routine review with quick resolution | 3–7 days | 14 days |
| Elevated dispute rate review | 30–60 days | 90 days |
| Rolling reserve on active account | 45–120 days | 120 days |
| Account termination fund hold | 90–120 days | 180 days |

### When to Get a Payment Processing Attorney

Contact an attorney if:

- Stripe has terminated your account and you believe the termination is unjustified
- You have been placed on the MATCH list and need to file a dispute
- Your held funds exceed $10,000 and Stripe has not provided a clear timeline for release
- You have received notice of card network fines (Visa VAMP or Mastercard ECM)
- You are considering opening a new merchant account after termination and need to understand legal implications

A payment processing attorney (not a general business attorney) understands the card network rules, MATCH dispute procedures, and acquirer relationships. This is a specialized area of law — general counsel is usually not sufficient.

---

## Stripe Alternatives for Coaches

Relying on a single payment processor is a business risk. If Stripe terminates your account, you need to be processing payments within days — not weeks. Build redundancy before you need it.

### Dedicated Merchant Accounts

Unlike Stripe (an aggregator), a dedicated merchant account gives you a direct relationship with a processing bank. You go through an underwriting process, the bank evaluates your business model, and you receive your own merchant ID. The advantage is that your account is evaluated based on your performance alone — not aggregated with thousands of other businesses.

Dedicated merchant accounts typically charge 2.5–3.5% per transaction (compared to Stripe's flat 2.9% + $0.30) plus a monthly gateway fee of $10–$25. The application process takes 3–10 business days.

### High-Risk Payment Processors

If you have been placed on the MATCH list or your business model is classified as high-risk, these processors specialize in working with coaching and digital product businesses:

- **PaymentCloud** — Specializes in high-risk merchant accounts. Approval rates are high even for MATCH-listed merchants. Expect 3.5–6% per transaction.
- **Corepay** — Focused on digital products, coaching, and online education. Offers chargeback management tools built into the platform.
- **DirectPayNet** — Works with high-ticket coaching programs and course creators. Provides dedicated account managers who understand the industry.

### Platform-Native Payment Processing

Some course and coaching platforms include built-in payment processing that may be simpler to manage:

- **Kajabi** — Includes Stripe and PayPal integration with built-in subscription management and dunning (failed payment recovery).
- **Teachable** — Offers its own payment processing (Teachable Payments) in addition to Stripe/PayPal integration.
- **Thinkific** — Integrates with Stripe and PayPal with built-in order management.

**Important:** Platform-native processors still use Stripe or PayPal under the hood in most cases. They do not insulate you from Stripe's policies — they simply manage the integration. If Stripe terminates your account, your platform's Stripe integration stops working too.

### The Diversification Rule

**Never rely on a single payment processor.** At minimum, maintain two active processing options:

1. **Primary processor** (Stripe, dedicated merchant account) for day-to-day transactions
2. **Backup processor** (PayPal, secondary merchant account, high-risk processor) configured and tested so you can switch within 24 hours

If your business processes more than $50,000/month, consider splitting volume across two processors proactively. This reduces your dispute rate on each processor individually and ensures that a problem with one does not halt your entire revenue stream.

---

## FAQ

**Q: Can Stripe freeze my money without warning?**
Yes. Stripe's Services Agreement gives them the right to hold funds, place reserves, or suspend payouts at any time if they determine your account poses a risk. In practice, Stripe usually sends a notification before or at the time of the hold, but they are not required to give advance notice. The best protection is maintaining a low dispute rate and keeping your compliance documentation current.

**Q: Do I need a refund policy if I sell digital products?**
You are not legally required to offer refunds on digital products in the United States, but you are effectively required to have a clearly stated refund policy (even if that policy is "no refunds"). The absence of a refund policy is worse than a no-refund policy because it leaves the terms ambiguous — and ambiguity almost always favors the customer in a chargeback dispute.

**Q: What counts as a "dispute" for dispute rate calculations?**
Any chargeback or inquiry filed by a cardholder with their issuing bank counts as a dispute. This includes chargebacks you win. It includes "friendly fraud" (where the customer forgot they made the purchase). It includes disputes that are later withdrawn. The card networks count disputes filed, not disputes lost.

**Q: How quickly do I need to respond to a Stripe dispute?**
Stripe typically gives you 7–21 days to submit evidence, depending on the card network and dispute type. However, you should respond within 48 hours whenever possible. Faster responses with thorough evidence have higher win rates, and prompt responses signal to Stripe that you actively manage your account.

**Q: Can I open a new Stripe account if my first one is terminated?**
No. Stripe's terms explicitly prohibit opening a new account after termination. Stripe uses identity verification (SSN, EIN, address, bank account) to detect duplicate accounts. Attempting to circumvent a termination by opening a new account under a different name or entity can result in additional legal consequences and may constitute fraud.

**Q: What is the MATCH list and how long does it last?**
The MATCH (Member Alert to Control High-Risk Merchants) list is a database maintained by Mastercard and used by all major card networks and payment processors. When a processor terminates your account for excessive chargebacks, fraud, or terms violations, they can add you to the MATCH list. Once listed, you remain on MATCH for five years. During that time, most standard payment processors will decline your application. You can still process payments through high-risk processors, but at significantly higher rates.

---

## Key Takeaways

- **Stripe updated its policies on November 18, 2025** to add "content creation" to its restricted businesses list — coaches and course creators are now under increased scrutiny
- **Your dispute rate threshold is 0.75%** — for a business processing 200 transactions per month, just two disputes can trigger a review
- **Won and lost disputes both count** toward your dispute rate — winning a chargeback does not remove it from your metrics
- **Visa's VAMP program triggers at 0.5%** and Mastercard's ECM at 1.5% plus 100 disputes — with fines escalating from $1,000 to $100,000+ per month
- **Stripe's enforcement escalates through four stages:** review, rolling reserves, suspension, and termination with potential MATCH listing
- **The MATCH blacklist lasts five years** and effectively locks you out of standard payment processing
- **Your refund policy must be displayed at checkout** with a mandatory acknowledgment checkbox — not buried in your Terms of Service
- **Never rely on a single payment processor** — maintain a tested backup that you can activate within 24 hours

---

## What to Read Next

- [FTC Compliance Guide for Online Coaches and Consultants](/guides/ftc-compliance-guide-coaches-consultants) — Understand the FTC rules for testimonials, income claims, and disclosures that affect your marketing compliance alongside payment processing
- [How to Add Legal Pages to Your ClickFunnels Funnel](/tutorials/how-to-add-legal-pages-to-your-clickfunnels-funnel) — Set up the refund policy, Terms of Service, and Privacy Policy pages that Stripe compliance requires
- [The Online Business Security Checklist for Entrepreneurs](/guides/entrepreneur-security-checklist) — Protect your payment infrastructure, customer data, and business accounts from the technical security side

---

## About the Author

**Carlos E. Vargas** is the founder of Bezalel Digital, a technology consulting firm helping entrepreneurs, coaches, and small business owners build the systems and infrastructure that scale their businesses. Carlos specializes in digital marketing strategy, marketing technology implementation, and building the automated systems that turn online visibility into consistent revenue.

Need help reviewing your payment processing setup, building compliant checkout flows, or creating a backup payment strategy? [Book a free strategy call](https://www.carlosvargas.com/strategy-call) and let's make sure your revenue is protected.

---

*Disclaimer: This article is for informational and educational purposes only and does not constitute legal, financial, or tax advice. Payment processing regulations, card network rules, and platform policies change frequently. The information in this guide reflects policies as of early 2026 and may not reflect future changes. Consult a qualified payment processing attorney for advice specific to your business situation before making legal or compliance decisions.*
