# Prompt Engineering Exercises XP
## Week 10 - Day 1

---

## 🌟 Exercise 1: Rewrite and Optimize a Vague Prompt

### Original Vague Prompt:
> "Write something about productivity tips."

### Task 1: Identify 3 Critical Issues

1. **No Brand Context** - The prompt doesn't mention FlowNest, the product being promoted, or any brand voice guidelines
2. **No Target Audience** - It doesn't specify who the content is for (professionals, students, entrepreneurs?)
3. **No Platform/Format Specifications** - LinkedIn has specific best practices (hashtags, character limits, engagement hooks) that aren't addressed

### Task 2: Rewritten Prompt Using All Three Techniques

```
Act as a social media marketing specialist for FlowNest, a focus and productivity app designed for busy professionals.

Write a LinkedIn post promoting FlowNest that:
- Starts with an attention-grabbing question or statistic
- Provides 3 actionable productivity tips that relate to maintaining focus
- Naturally integrates FlowNest as a solution
- Includes a clear call-to-action

Format constraints:
- Use bullet points for the tips
- Maximum 200 words
- Include 3-5 relevant hashtags at the end
- Maintain a professional yet approachable tone

Use this format whenever we promote productivity tools on social media.
```

---

## 🌟 Exercise 2: Multi-Part Prompt for Quiz Generation

### Complete Prompt:

```
You are a friendly 7th-grade science teacher creating engaging learning materials.

Based on the article provided about volcanic eruptions, please create the following:

**Part 1: Summary**
- Summarize the key concepts in exactly 2 simple bullet points
- Use vocabulary appropriate for 11-13 year olds
- Keep each bullet under 25 words

**Part 2: Quiz Questions**
Generate 3 multiple-choice questions that:
- Test understanding (not memorization)
- Have exactly 4 options each: 1 correct answer and 3 plausible distractors
- Include the correct answer marked with ✓
- Are age-appropriate and engaging

**Tone & Style:**
- Friendly and encouraging ("Great question!" style)
- Simple vocabulary (avoid jargon)
- Add fun emoji where appropriate 🌋

**Output Format:**
Structure everything for easy copy-paste into Google Slides:
- Use clear headings
- Separate sections with blank lines
- Bold key terms

[INSERT ARTICLE HERE]
```

### Comparison with Vague Prompt

**Vague Prompt:** "Make a quiz for kids about this article."

**3 Key Improvements That Prevent Low-Quality Output:**

1. **Age Specification** - "11-13 year olds" and "7th-grade" ensures vocabulary and complexity match the audience, whereas "kids" could mean ages 5-17

2. **Structured Output Format** - Specifying "exactly 4 options" and "Google Slides format" prevents random formatting that wouldn't be usable

3. **Quality Controls** - Requiring "plausible distractors" and "test understanding" prevents obvious wrong answers or pure memorization questions

---

## 🌟 Exercise 3: Add Context, Get Better Results

### Task 1: Context Analysis Table

| Context Type | Is it Missing? | What Should Be Added? |
|-------------|----------------|----------------------|
| Role | Yes | "Act as a financial analyst preparing executive briefings" |
| Audience | Yes | "For a non-technical executive team with limited time" |
| Purpose | Yes | "For a 3-minute verbal presentation at monthly review" |
| Input Source | Yes | "Based on the attached Q4 Financial Report" |
| Format/Style | Yes | "Use 3 bullet points with key metrics highlighted" |
| Constraints | Yes | "Focus on revenue, expenses, and YoY growth only" |

### Task 2: Rewritten Prompt

```
Act as a senior financial analyst preparing an executive briefing.

Summarize the attached Q4 Financial Report for a non-technical executive team. This summary will be presented verbally in under 3 minutes at our monthly leadership meeting.

Requirements:
- Provide exactly 3 key takeaways
- Each takeaway must include at least one specific figure or percentage
- Focus only on: revenue performance, major expense changes, and year-over-year growth
- Use plain language (avoid financial jargon)
- End with one forward-looking insight or recommendation

Format: Numbered list with bold headers for each takeaway.
```

---

## 🌟 Exercise 4: Match Prompt to Purpose

### Selected Style: **Functional**

### Complete Prompt for Customer Support Chatbot:

```
You are the customer support assistant for ShopEase, an e-commerce platform.

When a customer describes an issue with their order, execute the following steps in order:

1. **Identify Issue Type**: Classify as one of: [Shipping Delay | Wrong Item | Damaged Product | Refund Request | Other]

2. **Extract Key Information**:
   - Order number (if provided)
   - Product name
   - Date of purchase/expected delivery

3. **Generate Response** that includes:
   - Acknowledgment of the issue
   - Specific next steps based on issue type
   - Estimated resolution time
   - Reference ticket number (format: SE-[YYYYMMDD]-[4 random digits])

4. **Offer Escalation**: If the issue involves a refund over $100 or a third complaint from the same customer, include: "Would you like me to connect you with a senior support specialist?"

Always maintain a helpful, apologetic tone without admitting fault.
```

### 2 Key Features That Match Functional Style:

1. **Step-by-step execution** - The prompt follows a precise workflow (classify → extract → generate → escalate) rather than open-ended conversation

2. **Specific output rules** - Ticket number format, classification categories, and escalation triggers are explicitly defined

### Justification:

**Why Functional over others:**
- **Not Exploratory** - Customer support needs consistent answers, not brainstorming
- **Not Conversational** - While friendly, the primary goal is task completion (resolving issues), not chatting
- **Not purely Structured** - While it uses structure, the focus is on executing specific actions based on input

Functional is best because customer support requires **precision and consistency** - every customer with a "wrong item" issue should receive similar handling.

---

## 🌟 Exercise 5: Prompt Refinement Challenge

### Task 1: Initial Prompt with Strict Constraints

```
Write a product blurb for PulseOne Mini smartwatch.

STRICT REQUIREMENTS:
- Exactly 3 bullet points
- Maximum 50 words TOTAL (count carefully)
- Friendly, enthusiastic tone
- MUST mention all three features: battery life, fitness tracking, Bluetooth compatibility

Format:
• [Feature 1]
• [Feature 2]  
• [Feature 3]

Do not exceed 50 words under any circumstances. Count your words before responding.
```

### Task 2: Expected Output Evaluation

**Sample Output:**
```
• 7-day battery life keeps you going without constant charging!
• Track steps, heart rate, and workouts effortlessly on your wrist.
• Seamless Bluetooth connectivity syncs with all your devices instantly.
```
*(Word count: 28 words ✓)*

**Evaluation:**
- ✅ Word count: Under 50 words
- ✅ All 3 features mentioned: battery life, fitness tracking, Bluetooth
- ✅ Friendly tone: Uses "effortlessly," "keeps you going," exclamation points

### Task 3: Refined Prompt (if needed)

```
Write a product blurb for PulseOne Mini smartwatch.

ABSOLUTE CONSTRAINTS (failure to follow = rejection):
□ Exactly 3 bullet points - no more, no less
□ Total word count: 40-50 words (count twice before submitting)
□ Each bullet must be 12-18 words

MANDATORY MENTIONS (one per bullet):
1. Battery life (include specific days/hours)
2. Fitness tracking capabilities
3. Bluetooth compatibility

TONE: Friendly, upbeat, use action verbs. Include at least one exclamation point.

Begin each bullet with "•" followed by a space.
```

---

## 🌟 Exercise 6: Hallucination Spotting and Mitigation

### Hallucinated Claim Identified:
> "Over 50% of marine species are projected to go extinct by 2050."

This is a fabricated statistic not present in the source article.

### Task 1: Anti-Hallucination Prompt

```
Summarize the following peer-reviewed article on climate change and marine biodiversity.

CRITICAL INSTRUCTIONS:
- Base your summary EXCLUSIVELY on information explicitly stated in the provided text
- Do NOT add external statistics, studies, or claims from your training data
- Do NOT extrapolate or make predictions beyond what the article states
- If a percentage or specific figure is mentioned, quote it exactly as written

Before including any claim, verify it appears verbatim or is directly paraphrased from the article.

[INSERT ARTICLE TEXT HERE]
```

### Task 2: Rewritten Prompt with Verification Language

```
You are a research assistant creating an accurate summary of a peer-reviewed article.

Summarize the attached article on climate change and marine biodiversity following these rules:

1. Only include claims explicitly stated in the article
2. For any statistic or figure, include the exact wording from the source
3. If the article does not provide specific data on a topic, state: "The article does not specify this information"
4. If uncertain whether a claim appears in the text, err on the side of exclusion
5. End with a confidence statement: "All information above is directly sourced from the provided article"

Flag any areas where you are uncertain with [VERIFY IN SOURCE].
```

### Task 3: 2 Mitigation Strategies Used

1. **Source Restriction** - Explicitly stating "EXCLUSIVELY on information explicitly stated" and "Do NOT add external statistics" forces the model to treat the provided text as the only valid source

2. **Uncertainty Acknowledgment** - Requiring the model to say "The article does not specify this information" when data is unavailable prevents it from filling gaps with fabricated content

### Task 4: Professional Domains Where Hallucinations Are Especially Risky

1. **Healthcare/Medical**
   - **Risk**: A hallucinated drug dosage, contraindication, or diagnosis could directly harm patients
   - **Example**: AI suggesting a medication interaction that doesn't exist could lead to dangerous prescriptions

2. **Legal**
   - **Risk**: Fabricated case citations, statutes, or legal precedents could result in invalid legal arguments, malpractice, or wrongful outcomes
   - **Example**: An AI "citing" a non-existent Supreme Court ruling could derail an entire legal strategy

---

## Summary

These exercises demonstrate key prompt engineering principles:
- **Specificity beats vagueness** - Always define role, audience, format, and constraints
- **Structure prevents chaos** - Multi-part prompts with clear sections produce usable output
- **Context is king** - The more relevant context provided, the better the output quality
- **Verification prevents fabrication** - Explicit anti-hallucination instructions are critical for factual content
