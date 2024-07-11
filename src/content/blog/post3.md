---
title: "Data Forensics Logbook - AY.2023/24"
description: "Data Forensics: training the next generation of cyber-investigators."
pubDate: "Jul 09 2024"
heroImage: "/blog_images/dataforensics.webp"
tags: ["JADS","DataForensics","Academia"]
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GHQNCCNPV0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GHQNCCNPV0');
</script>
<!-- Google tag (gtag.js) -->



<div class="text-5xl font-bold">Data Forensics Course</div>


Data forensics, also known as computer forensics, refers to the study or investigation of digital data. Data forensics is a broad term, as data forensics encompasses identifying, preserving, recovering, analyzing, and presenting attributes of digital information. As personal computers became increasingly accessible throughout the 1980s and cybercrime emerged as an issue, data forensics was developed to recover and investigate digital evidence to be used in court. Today, investigators use data forensics for crimes including fraud, espionage, cyberstalking, data theft, violent crimes, and more.
At  <a href="https://www.jads.nl/" target="_blank"><b>JADS</b></a> I just ended the 4th edition of Data Forensics course. During the course the students learn to master tools like: 
<ul>
  <li>Virtual Machines</li>
  <li>TOR Network</li>
  <li>Virtual Private Networks</li>
  <li>Operating Systems like <a href="https://www.whonix.org/" target="_blank"><b>Whonix</b></a> and <a href="https://tails.net/" target="_blank"><b>Tails</b></a></li>
</ul> 

Moreover, throughout the Data Forensics course, students learn concepts like:
 <ul>
  <li>How to access the Dark Web</li>  
  <li>How to find criminal activities in the Dark Web</li>
  <li>How to build a Dark Web crawler</li>
  <li>How to bypass Dark Web captchas and robots</li>
  <li>How to crawl data from the Dark Web</li>
  <li>How to build analysis related to the Dark Web criminal data</li>
  <li>How to use Google Dorks to extract OSINT data</li>
</ul> 

During the Data Forensics course, the students have to deal with different types of assignments, among which they have a Term Paper where they have to highlight gaps in the academic literature related to a specific Data Forensics field and a Project where they are requested to extract data from the Dark Web and develop analysis to highlight criminal trends or illegal behaviors. </b>

This academic year, the students showed that they take cybersecurity problems extremely seriously. I had the chance to grade projects that tried tackling criminal activities on the Surface, Deep, and Dark web. 
Here, I would like to discuss 3 of these projects. </b>

The Archetyp Market Dashboard, from Group 3 (students S.O. and H.T.), provides an overview of the illicit drug market on the Archetyp Dark marketplace over time, highlighting regional trends, drug references, and vendor activities. The students scraped 10958 individual listings and sales data for 1578 of the marketplace's most popular listings.
The analysis of the students revealed that <i>Europe and North America dominate the illicit drug market, benefiting from established networks, high demand, and varied law enforcement approaches. This dominance indicates that targeted regulatory and enforcement strategies in these regions could significantly impact the global market. </b>

<img src="/blog_images/data_forensics/listing_revenue.webp" alt="listing_revenue" width="750" height="254">

Stimulants are the most profitable drug category, followed by opiates and dissociatives. This trend reflects consumer preferences driven by high addiction potential and profitability. Quantifying sales and understanding these preferences is crucial for developing effective harm reduction strategies and public health interventions. </b>

Vendor analysis shows a skewed distribution, with a few dominant vendors likely tied to larger criminal organizations such as cartels or mafia moving operations online. This underscores the need for differentiated regulatory approaches, focusing on major players while addressing smaller operators who add market diversity. </b>

Estimating marketplace revenue helps law enforcement prioritize takedown efforts on the largest markets. However, large uncertainties in these estimates highlight the challenges of projecting market size due to data limitations. Robust, multi-timepoint data collection is essential for accurate analysis. </b></i>

If you want to read more from the analysis, you can follow the link to the streamlit app <a href="https://dataforensics2023.streamlit.app/" target="_blank"><b>HERE</b></a>

Group 13 (students L.P and Y.van M.) analysed Cocorico Marketplace, the goal of this project is to provide insights related to the drugs that are being sold on the marketplace. 

<iframe src="/blog_images/data_forensics/index.html" height="400" width="850" title="cocorico_analysis"></iframe> </br>


The last project I want to present here is from Group 7 (students B.D. and W.M.). \On this project, students focused their analysis on Bitcoin transactions. Specifically, by using Taint Flow Analysis, the students intend to identify transaction flows that employ bitcoin mixers to launder illegal bitcoins. They based their analysis on the paper by <em>Tovanich, N., & Cazabet, R. (2022, November). Pattern analysis of money flows in the Bitcoin blockchain</em>. </b>

To use the system for the analysis, you need to download 2 files <a href="/blog_images/data_forensics/social_network_2.txt" download>social_network_2.txt</a> and <a href="/blog_images/data_forensics/purity.txt" download>purity.txt</a>. Following the step-by-step actions from the platform (<a href="https://bwforensics.shinyapps.io/DataForensics/" target="_blank">HERE</a> the link to the page, below the iframe to the same webpage), the user will be requested to upload these files for the analysis. The 2 TXT files come from the crawling process. The students started from a known address flagged as a scam. The confirmation came from multiple reports available on the website Chainabuse.com. The address used for the analysis is: bc1ql6gqcwv8ex0vklejffcc8qh9muce2yf7xqg677, which can be found on chain abuse <a href="https://www.chainabuse.com/report/389ae122-4a2c-4278-bfe0-4802d326b6cb?context=search-address&a=bc1ql6gqcwv8ex0vklejffcc8qh9muce2yf7xqg677&chain=" target="_blank">here</a>.

<iframe src="https://bwforensics.shinyapps.io/DataForensics/" height="500" width="850" title="BitcoinTumblerDetection"></iframe> </br>


Here comes the end of another semester full of criminals, drugs, and illegal items, loaded with brilliant students who have been developing analysis, tools, techniques, and approaches to (at least trying to) fight cybercrime. </br>

However, I want to add a few more words on Data Forensics. This course started 4 years ago out of nowhere (rather than my vivid imagination) when I was requested to develop a Crime & Safety path at JADS. Initially, the course did not receive great appreciation from the management, which was mainly scared of letting students dive into the Dark web and retrieve criminal data for an assignment. However, students appreciated the initial idea. Over the years, thanks to the students' feedback, the course went through some significant refinement. A lot of work has been done since 2020. However, much work still needs to be done to keep the course updated, to continue intercepting and monitoring illegal activities from the Surface, Deep, and Dark web, and to forge a new generation of investigators able to think as criminals to intercept illegal activities. 