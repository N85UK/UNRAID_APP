---
layout: default
title: N85UK UNRAID Applications
description: Production-ready Docker applications for UNRAID servers
keywords: unraid, docker, applications, sms, messaging, webhooks
author: N85UK
lang: en-GB
---

<div class="hero-section">
  <h1>UNRAID Applications — N85UK</h1>
  <p class="subtitle">Production-ready Docker containers for servers</p>
  <p class="version-info">Last Updated: November 4, 2025 | 5 Applications</p>
  
  <div class="trust-badges">
    <span class="badge">MIT Licensed</span>
    <span class="badge">Maintained</span>
    <span class="badge">Multi-Arch</span>
    <span class="badge">GHCR</span>
  </div>
</div>

<div class="apps-grid">

<article class="card">
  <h2>Ultimate Messages</h2>
  <p><strong>Enterprise SMS platform with multi-provider support (AA + AWS)</strong></p>
  <p><strong>What it does:</strong> Unified messaging with intelligent routing, team collaboration, and automation</p>
  
  <h3>Key Features:</h3>
  <ul>
    <li>Multi-provider (Andrews & Arnold + AWS)</li>
    <li>Smart routing & cost optimization</li>
    <li>Team collaboration with RBAC</li>
    <li>Automation & analytics</li>
    <li>Modern UI with dark mode</li>
  </ul>
  
  <p class="requirements"><strong>Requirements:</strong> PostgreSQL 15+, Redis 7+</p>
  
  <div class="card-actions">
    <a href="https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/ultimate-messages.xml" class="btn btn-primary">Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Ultimate_Messages" class="btn">Docs</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/ultimate-messages" class="btn">Image</a>
  </div>
</article>

<article class="card">
  <h2>AA SMS App</h2>
  <p><strong>Andrews & Arnold SMS management platform</strong></p>
  <p><strong>What it does:</strong> Send and receive SMS through Andrews & Arnold with conversation threading</p>
  
  <h3>Key Features:</h3>
  <ul>
    <li>Bi-directional SMS</li>
    <li>Contact management</li>
    <li>Real-time updates</li>
    <li>Clean Material-UI interface</li>
  </ul>
  
  <p class="requirements"><strong>Requirements:</strong> MariaDB/MySQL, Andrews & Arnold account</p>
  
  <div class="card-actions">
    <a href="https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/aa-sms-app.xml" class="btn btn-primary">Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App" class="btn">Docs</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/aa-sms-app" class="btn">Image</a>
  </div>
</article>

<article class="card">
  <h2>AWS Ultimate Messaging</h2>
  <p><strong>AWS SNS/Pinpoint SMS platform</strong></p>
  <p><strong>What it does:</strong> Modern two-way SMS using AWS services with real-time updates</p>
  
  <h3>Key Features:</h3>
  <ul>
    <li>AWS SNS/Pinpoint integration</li>
    <li>WebSocket real-time messaging</li>
    <li>Multi-user authentication</li>
    <li>Auto-replies & templates</li>
    <li>Analytics dashboard</li>
  </ul>
  
  <p class="requirements"><strong>Requirements:</strong> MariaDB/MySQL, AWS account</p>
  
  <div class="card-actions">
    <a href="https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/aws-ultimate-messaging.xml" class="btn btn-primary">Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AWS_Ultimate_Messaging" class="btn">Docs</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/aws-ultimate-messaging" class="btn">Image</a>
  </div>
</article>

<article class="card">
  <h2>X Webhook Receiver</h2>
  <p><strong>Event processing for UniFi Protect & custom webhooks</strong></p>
  <p><strong>What it does:</strong> Process webhooks from UniFi Protect and other services with custom actions</p>
  
  <h3>Key Features:</h3>
  <ul>
    <li>UniFi Protect smart detections</li>
    <li>Gotify notifications</li>
    <li>PostgreSQL logging</li>
    <li>Custom webhook handlers</li>
    <li>Real-time event processing</li>
  </ul>
  
  <p class="requirements"><strong>Requirements:</strong> PostgreSQL 15+</p>
  
  <div class="card-actions">
    <a href="https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/x-webhook-receiver.xml" class="btn btn-primary">Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/X_Webhook-Receiver" class="btn">Docs</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/x-webhook-receiver" class="btn">Image</a>
  </div>
</article>

<article class="card">
  <h2>Octopus Energy Monitor</h2>
  <p><strong>Monitor Octopus Energy consumption & costs</strong></p>
  <p><strong>What it does:</strong> Track electricity usage and costs from Octopus Energy with Grafana dashboards</p>
  
  <h3>Key Features:</h3>
  <ul>
    <li>Auto-discover meters</li>
    <li>Sync consumption data</li>
    <li>Cost calculations with tariffs</li>
    <li>SQLite or MySQL support</li>
    <li>Grafana dashboard templates</li>
  </ul>
  
  <p class="requirements"><strong>Requirements:</strong> SQLite or MySQL, Octopus Energy account</p>
  
  <div class="card-actions">
    <a href="https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/octopus-energy-monitor.xml" class="btn btn-primary">Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Octopus_Energy_Monitor" class="btn">Docs</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/octopus-energy-monitor" class="btn">Image</a>
  </div>
</article>

</div>

<section class="installation-section card">
  <h2>Installation</h2>
  <ol>
    <li>Download the template XML file</li>
    <li>In UNRAID, go to <strong>Docker > Add Container</strong></li>
    <li>Click <strong>Template repositories</strong> and add: <code>https://github.com/N85UK/UNRAID_App</code></li>
    <li>Select the app from the dropdown</li>
    <li>Configure environment variables</li>
    <li>Click <strong>Apply</strong></li>
  </ol>
</section>

<section class="support-section card">
  <h2>Support</h2>
  <ul>
    <li><strong>Issues:</strong> <a href="https://github.com/N85UK/UNRAID_Apps/issues">GitHub Issues</a></li>
    <li><strong>Source:</strong> <a href="https://github.com/N85UK/UNRAID_Apps">UNRAID_Apps Repository</a></li>
    <li><strong>License:</strong> MIT</li>
  </ul>
</section>
