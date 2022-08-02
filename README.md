# emoji-recipes 🍎

Sms app built with Twilio that responds with a recipe using the emoji as the main ingredient

<br>

![pic](./hibernationhacks.png)

<br>

# Table Of Contents

- [emoji-recipes 🍎](#emoji-recipes-)
- [Table Of Contents](#table-of-contents)
  - [Background](#background)
  - [Technology Used](#technology-used)
  - [File Descriptions](#file-descriptions)
  - [Learnings](#learnings)

## Background

This was a project started while participating in [Hibernation Hacks](https://organize.mlh.io/participants/events/7795-hibernationhacks), one of the first hackathons I participated in with the goal of exploring new technologies and skills.

I wanted to focus on building something simple while exploring the API sponsors. That channeled my ideas down the line of creating a simple text service that would deliver useful data with me only texting a single emoji.

That's how this project was born. Other ideas included :

- Implementing a translator service that accepted text followed by the emoji of a country flag, which translated the text to the primary language of that country
- Implementing a service that returned a restaurant near your location to try based on the food emoji you texted

## Technology Used

- Text service: **Twilio**
- Web Server: **NodeJS / Express**
- Web Scraper: **Python / Selenium**

## File Descriptions

| Name             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| server.js        | Web server, app logic, and main point of entry for app |
| emoji_scraper.py | Web scraper that populates the file foodEmojis.json    |
| foodEmojis.json  | JSON object for emojis and unicode escape sequences    |

## Learnings

This was a simple project in terms of what I wanted to accomplish, but the real value in doing it was in what I learned.

**Challenge:**
The biggest challenge I faced early on was around getting emojis to work in an expected way on different platforms. The thing I took away most from this project was the general idea that character encodings matter. This was the start
of me understanding that a text file isn't just a text file. And the way text is interpreted depends on the character encoding of the file.

**Resolution:**
Ultimately, I overcame this blocker by making a JSON mapping of all the food emojis on [Emojipedia](https://emojipedia.org/food-drink/) and mapping them to their corresponding Unicode escape sequences using a Python web scraper.

**Challenge:**
The second challenge I faced was with the the recipe APIs I wanted to use.
I found suitable APIs, but with all the testing I was doing, it would have required me to invest in more credits on a paid subscription - I should've been proactive about looking up the rate limit before starting, which were shockingly limited.
That makes sense, as it's likely costing the owners a little bit to keep it online.

**Resolution:**
I ended up circumventing this by hardcoding some links to a few recipes for the most common emojis and randomly selecting between those, and chalking it up to a "demo version" :).
