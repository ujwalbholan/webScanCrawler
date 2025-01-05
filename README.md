#### web crawler

## Overview
The WebScanCrawler project is a simple web crawler and vulnerability scanner designed to evaluate the security of a website. It checks for basic vulnerabilities like missing HTTP security headers, outdated software versions, and improperly configured forms. Here's a breakdown of the project.

### Features
 1. Input:
   - Accepts a URL as input to start the scanning process.

 2. Crawling:
   - Visits the given URL and follows all internal links to crawl the website comprehensively.
   - Avoids crawling external links or non-HTML resources.

 3. Vulnerability Checks:
   - HTTP Security Headers:
      - Checks for headers like X-Content-Type-Options, Strict-Transport-Security, and Content-Security-Policy.
   - Outdated Software Versions:
      - Looks for software version information in the HTTP response headers or webpage content (e.g., "Apache/2.4.6").
   - Forms Security:
      - Identifies forms without action attributes or forms using method="GET" instead of POST.

 4.Report Generation:
   - Generates a detailed vulnerability report listing all issues found during the scan.

### Table of Contents
 1 Installation
 2 Input Format
 3 Output Example
 4 Future Enhancements

## 1 Installation

### Prerequisites
- Node.js installed

### Steps to Install
1. Clone the repository:
   ```bash
     https://github.com/ujwalbholan/webScanCrawler.git

2 . change directory: cd fileName

3 . install npm: npm Install

4 . run the file: node index.js


## 2 input Format:
 https://example.com

## 3 outpur Example:
      Crawling: https://example.com

      VULNERABILITIES FOUND ON: https://example.com
      - MISSING HTTP SECURITY HEADER: Strict-Transport-Security
      - FORM WITHOUT PROPER METHOD ATTRIBUTE: /contact-form

      Crawling: https://example.com/about

      No vulnerabilities found on: https://example.com/about


## 4 Future Enhancements:
  -  Extended Vulnerability Scanning eg for cors, sql ,csrf etc.
  - Improved Crawl Depth and URL Handling.
  - Reporting Enhancements.
  - Authentication and Authorization.
  - Scheduling and Automation.

 
