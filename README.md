
# Good vs Poor Web Vitals - React App

## Overview
This project demonstrates how poor web vitals can affect the user experience of a website. The application is built using React, and the focus is on measuring and displaying different core web vitals scores like FID (First Input Delay), LCP (Largest Contentful Paint), and CLS (Cumulative Layout Shift).

It has separate routes for each of these web vitals, with both good and bad scores for each, allowing you to explore how performance metrics can impact your site.

## Web Vitals Overview

**Web Vitals** are a set of metrics developed by Google to measure the user experience of a website. These metrics focus on loading performance, interactivity, and visual stability, which are critical factors in determining the overall user experience.

### Key Metrics:
- **FID (First Input Delay)**: Measures the time it takes for the browser to respond to the first user interaction (like a click or tap). A good score is under 100ms.
- **LCP (Largest Contentful Paint)**: Measures the time it takes for the largest visible element to load, helping to gauge how quickly the main content of a page appears. A good score is under 2.5 seconds.
- **CLS (Cumulative Layout Shift)**: Measures how much the layout shifts unexpectedly during page load, which can cause a poor user experience. A good score is below 0.1.

## Lighthouse Tool

We are using the **Lighthouse tool** to measure the core web vitals. Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be run in Chrome DevTools, from the command line, or as a Node module. Lighthouse provides insights into performance, accessibility, SEO, and more.

## Routes for Web Vitals Scores

This app includes different routes to view the performance scores for each metric. You can check how the website performs with good or bad scores for each of the core web vitals:

- **FID (Good)**: `/fid-good`
- **FID (Bad)**: `/fid-bad`
- **LCP (Good)**: `/lcp-good`
- **LCP (Bad)**: `/lcp-bad`
- **CLS (Good)**: `/cls-good`
- **CLS (Bad)**: `/cls-bad`

## How to Check Each Score

To check the score for each web vital, follow these steps:

1. Start the development server (`npm start` or `yarn start`).
2. Open your browser and go to the relevant route for the score you want to check. For example:
   - For good FID: `http://localhost:3000/fid-good`
   - For bad FID: `http://localhost:3000/fid-bad`
   - For good LCP: `http://localhost:3000/lcp-good`
   - For bad LCP: `http://localhost:3000/lcp-bad`
   - For good CLS: `http://localhost:3000/cls-good`
   - For bad CLS: `http://localhost:3000/cls-bad`
3. Once the page loads, right-click anywhere on the page and click **Inspect**.
4. In the Developer Tools, click on the **Lighthouse** tab.
5. Click on **Generate Report** to analyze the page and view the scores for Core Web Vitals (FID, LCP, and CLS).

---

## Installation and Setup

To get started with this project locally, follow these steps:

### Prerequisites
Ensure that you have the following installed:
- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **npm**: npm comes with Node.js, but you can check if it's installed by running `npm -v` in your terminal.

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/poor-web-vitals.git
cd poor-web-vitals
```

### 2. Install Dependencies

Run the following command to install all the dependencies:

```bash
npm install
```

### 3. Start the Development Server

To start the application, run:

```bash
npm start
```

This will start the development server on `http://localhost:3000`, and you can access the app at this URL.

### 4. Run Lighthouse for Performance Insights

Once the app is running, you can use the **Lighthouse tool** to measure the web vitals:

1. Open the page you want to test (e.g., `http://localhost:3000/fid-good`).
2. Open Chrome DevTools (right-click and select **Inspect**).
3. Click on the **Lighthouse** tab.
4. Click on **Generate Report** to analyze the page's web vital scores.

---

## Conclusion

This project serves as an educational tool to explore web performance issues and how different web vitals like FID, LCP, and CLS can impact a website. By analyzing different routes for good and bad scores, users can see the real effects of these metrics on user experience.

