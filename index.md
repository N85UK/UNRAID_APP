---
layout: default
title: N85UK UNRAID Applications - Production-Ready Docker Apps
description: Production-ready Docker applications for UNRAID servers - Ultimate Messages, AA SMS App, AWS Ultimate Messaging, and X Webhook Receiver. Actively maintained, multi-arch images on GHCR.
keywords: unraid, docker, applications, webhook, sms, messaging, pinpoint, aws, postgres, mysql, unifi protect, andrews arnold
author: N85UK
image: /assets/og-card.png
lang: en-GB
---

<div class="hero">
  <h1>🚀 Professional UNRAID Applications</h1>
  <p class="subtitle">Production-ready Docker containers for messaging, webhooks, and automation</p>
  <p class="version-info">Last Updated: October 30, 2025 | 4 Applications Available</p>
</div>

<!-- Trust Indicators -->
<div class="trust-badges">
  <span class="trust-badge">✅ MIT Licensed</span>
  <span class="trust-badge">🔒 Actively Maintained</span>
  <span class="trust-badge">📦 Multi-Arch Support</span>
  <span class="trust-badge">🐳 GHCR Hosted</span>
</div>

---

## 💬 Ultimate Messages
<div class="app-showcase">
  <div class="app-header-large">
    <img src="icons/ultimate-messages.png" alt="Ultimate Messages Platform" class="app-icon-large">
    <div class="app-title-block">
      <h3>Enterprise Multi-Provider SMS Platform</h3>
      <p class="version-badge">Version 1.0.0 | Production Ready | Updated: Oct 30, 2025</p>
    </div>
  </div>

  <h3>🎯 What It Does</h3>
  <p>Ultimate unified messaging platform combining Andrews & Arnold and AWS SNS/Pinpoint providers. Intelligent routing, team collaboration, automation, and comprehensive analytics in one professional package.</p>

  <h3>✨ Key Features</h3>
  <ul>
    <li>🔀 <strong>Multi-Provider Support</strong> - Andrews & Arnold + AWS SNS/Pinpoint in one platform</li>
    <li>🧠 <strong>Intelligent Routing</strong> - Smart provider selection based on cost, reliability, and destination</li>
    <li>👥 <strong>Multi-User Authentication</strong> - Role-based access control for team collaboration</li>
    <li>💬 <strong>Unified Conversations</strong> - Thread all messages regardless of provider</li>
    <li>📋 <strong>Contact Management</strong> - Organize contacts with custom fields and groups</li>
    <li>🤖 <strong>Automation Engine</strong> - Auto-replies, keywords, templates, and scheduled messages</li>
    <li>📊 <strong>Advanced Analytics</strong> - Track costs, delivery rates, and performance across providers</li>
    <li>🌙 <strong>Modern UI</strong> - Material-UI design with dark mode and PWA support</li>
    <li>⚡ <strong>Real-time Updates</strong> - WebSocket-based live messaging</li>
    <li>🔒 <strong>Enterprise Security</strong> - JWT authentication, encrypted credentials, audit logging</li>
  </ul>

  <h3>💡 Real-World Use Cases</h3>
  <ul>
    <li><strong>Cost Optimization</strong>: Automatically route messages through cheapest provider</li>
    <li><strong>Reliability</strong>: Failover to backup provider if primary fails</li>
    <li><strong>Team Messaging</strong>: Multiple users managing customer communications</li>
    <li><strong>Business Automation</strong>: Smart auto-replies and workflow automation</li>
  </ul>

  <h3>🛠️ Tech Stack</h3>
  <div class="tech-stack">
    <span class="badge badge-node">Node.js 20</span>
    <span class="badge badge-framework">Express</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-frontend">Material-UI</span>
    <span class="badge badge-database">PostgreSQL 15</span>
    <span class="badge badge-database">Redis 7</span>
    <span class="badge badge-cloud">AWS SNS</span>
  </div>

  <h3>📋 Prerequisites</h3>
  <ul>
    <li>✅ UNRAID 6.9+ (6.12+ recommended)</li>
    <li>✅ <strong>PostgreSQL 15+ database</strong></li>
    <li>✅ <strong>Redis 7+ for session management</strong></li>
    <li>✅ Andrews & Arnold account (optional)</li>
    <li>✅ AWS account with SNS configured (optional)</li>
    <li>✅ 1GB RAM minimum (2GB recommended)</li>
  </ul>

  <h3>📦 Installation</h3>
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/ultimate-messages.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Ultimate_Messages" class="btn btn-secondary">📖 Documentation</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/Ultimate_Messages/UNRAID_DEPLOYMENT.md" class="btn btn-tertiary">🚀 Setup Guide</a>
  </div>

  <h3>🔗 Links</h3>
  <ul>
    <li><strong>Source Code</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Ultimate_Messages">GitHub Repository</a></li>
    <li><strong>Docker Image</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/ultimate-messages">ghcr.io/n85uk/ultimate-messages</a></li>
    <li><strong>Issue Tracker</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/issues">Report Bugs</a></li>
  </ul>
</div>

---

## 📱 AA SMS App
<div class="app-showcase">
  <div class="app-header-large">
    <img src="icons/aa-sms-app.png" alt="AA SMS App Dashboard" class="app-icon-large">
    <div class="app-title-block">
      <h3>Andrews & Arnold SMS Platform</h3>
      <p class="version-badge">Version 1.0.0 | Production Ready | Updated: Oct 30, 2025</p>
    </div>
  </div>

  <h3>🎯 What It Does</h3>
  <p>Professional SMS messaging platform specifically built for Andrews & Arnold's UK SMS service. Perfect for businesses using AA for reliable UK-based messaging with automation and analytics.</p>

  <h3>✨ Key Features</h3>
  <ul>
    <li>🇬🇧 <strong>Andrews & Arnold Integration</strong> - Native support for AA's UK SMS service</li>
    <li>💬 <strong>Two-Way Messaging</strong> - Send and receive SMS with conversation threading</li>
    <li>👥 <strong>Contact Management</strong> - Organize contacts with groups and custom fields</li>
    <li>🤖 <strong>Keyword Automation</strong> - Auto-replies based on keywords or phrases</li>
    <li>📅 <strong>Message Scheduling</strong> - Schedule messages for future delivery</li>
    <li>📊 <strong>Analytics Dashboard</strong> - Track delivery rates, costs, and performance</li>
    <li>🌙 <strong>Modern UI</strong> - React-based interface with dark mode</li>
    <li>🔌 <strong>RESTful API</strong> - Integrate with other applications</li>
  </ul>

  <h3>💡 Real-World Use Cases</h3>
  <ul>
    <li><strong>UK Business Messaging</strong>: Reliable UK-based SMS with AA's excellent delivery rates</li>
    <li><strong>Customer Support</strong>: Manage customer inquiries with threading and automation</li>
    <li><strong>Appointment Reminders</strong>: Automated scheduling for service businesses</li>
  </ul>

  <h3>🛠️ Tech Stack</h3>
  <div class="tech-stack">
    <span class="badge badge-node">Node.js 20</span>
    <span class="badge badge-framework">Express</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-database">PostgreSQL 15</span>
  </div>

  <h3>📋 Prerequisites</h3>
  <ul>
    <li>✅ UNRAID 6.9+ (6.12+ recommended)</li>
    <li>✅ <strong>PostgreSQL database</strong></li>
    <li>✅ <strong>Andrews & Arnold account with SMS service</strong></li>
    <li>✅ 512MB RAM minimum (1GB recommended)</li>
  </ul>

  <h3>📦 Installation</h3>
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/aa-sms-app.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App" class="btn btn-secondary">📖 Documentation</a>
  </div>

  <h3>🔗 Links</h3>
  <ul>
    <li><strong>Source Code</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App">GitHub Repository</a></li>
    <li><strong>Docker Image</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/aa-sms-app">ghcr.io/n85uk/aa-sms-app</a></li>
    <li><strong>Issue Tracker</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/issues">Report Bugs</a></li>
  </ul>
</div>

---

## 💬 AWS Ultimate Messaging
<div class="app-showcase">
  <div class="app-header-large">
    <img src="icons/aws-ultimate-messaging.png" alt="AWS Ultimate Messaging Platform" class="app-icon-large">
    <div class="app-title-block">
      <h3>Professional SMS/MMS Messaging Platform</h3>
      <p class="version-badge">Version 1.0.0 | Build 1e418c0 | Updated: Oct 25, 2025</p>
    </div>
  </div>

  <h3>🎯 What It Does</h3>
  <p>Full-featured SMS/MMS messaging platform for businesses. Manage two-way conversations, automate responses, and handle customer communications through a modern web interface powered by AWS Pinpoint.</p>

  <h3>✨ Key Features</h3>
  <ul>
    <li>💬 <strong>Two-Way SMS/MMS Messaging</strong> - Send and receive messages with full conversation threading</li>
    <li>👥 <strong>Contact Management</strong> - Organize contacts with custom fields and conversation history</li>
    <li>🧵 <strong>Threaded Conversations</strong> - WhatsApp-style conversation view with unread indicators</li>
    <li>🤖 <strong>Automated Keyword Responses</strong> - Set up auto-replies based on keywords or phrases</li>
    <li>📸 <strong>Media Attachment Support</strong> - Send and receive images, videos, and files</li>
    <li>☁️ <strong>AWS Pinpoint Integration</strong> - Enterprise-grade SMS delivery with global reach</li>
    <li>🔍 <strong>Advanced Search</strong> - Find messages and contacts instantly with full-text search</li>
    <li>📊 <strong>Message Analytics</strong> - Track delivery rates, costs, and conversation metrics</li>
    <li>🔐 <strong>Multi-User Support</strong> - Role-based access control for teams</li>
    <li>📱 <strong>Real-Time Updates</strong> - WebSocket-based live message delivery</li>
  </ul>

  <h3>💡 Real-World Use Cases</h3>
  <ul>
    <li><strong>Customer Support</strong>: Manage customer SMS inquiries from a central dashboard</li>
    <li><strong>Appointment Reminders</strong>: Send automated appointment confirmations and reminders</li>
    <li><strong>Marketing Campaigns</strong>: Broadcast promotional messages to customer segments</li>
    <li><strong>Two-Factor Auth</strong>: Build custom 2FA systems with SMS verification</li>
    <li><strong>Order Updates</strong>: Notify customers about order status changes via SMS</li>
  </ul>

  <h3>🛠️ Tech Stack</h3>
  <div class="tech-stack">
    <span class="badge badge-node">Node.js 20</span>
    <span class="badge badge-framework">Express</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-frontend">Vite</span>
    <span class="badge badge-database">MySQL 8</span>
    <span class="badge badge-cloud">AWS Pinpoint</span>
    <span class="badge badge-realtime">WebSockets</span>
  </div>

  <h3>📋 Prerequisites</h3>
  <p>Before installing, ensure you have:</p>
  <ul>
    <li>✅ UNRAID 6.9+ (6.12+ recommended)</li>
    <li>✅ MySQL/MariaDB database</li>
    <li>✅ <strong>AWS Account with Pinpoint configured</strong> (required)</li>
    <li>✅ AWS Pinpoint phone number (required for sending)</li>
    <li>✅ SNS topic for incoming messages (webhook endpoint)</li>
    <li>✅ Network access (port 3000 default)</li>
    <li>✅ 1GB RAM minimum (2GB recommended for production)</li>
  </ul>

  <h3>🏗️ Architecture</h3>
  <pre><code>React Frontend ← WebSocket → Node.js API
                                    ↓
                              MySQL Database
                                    ↓
                         AWS Pinpoint (SMS) ← SNS Webhooks
</code></pre>

  <h3>🎬 Quick Start</h3>
  <pre><code class="language-bash"># 1. Pull the latest image
docker pull ghcr.io/n85uk/aws-ultimate-messaging:latest

# 2. Set required environment variables
DATABASE_URL=mysql://user:pass@host:3306/messaging
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
PINPOINT_APPLICATION_ID=your_app_id

# 3. Deploy via UNRAID template (see below)
</code></pre>

  <h3>📦 Installation</h3>
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/aws-ultimate-messaging.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/AWS-Ultimate-Messaging-Setup" class="btn btn-secondary">📖 Setup Guide</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/AWS_SETUP.md" class="btn btn-tertiary">☁️ AWS Setup</a>
  </div>

  <h3>🔗 Links</h3>
  <ul>
    <li><strong>Source Code</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AWS_Ultimate_Messaging">GitHub Repository</a></li>
    <li><strong>Docker Image</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/aws-ultimate-messaging">ghcr.io/n85uk/aws-ultimate-messaging</a></li>
    <li><strong>Support Forum</strong>: <a href="https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/">UNRAID Community Thread</a></li>
    <li><strong>Issue Tracker</strong>: <a href="https://github.com/N85UK/UNRAID_APP/issues/new?template=bug_report.yml">Report Bugs</a></li>
    <li><strong>Changelog</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/releases">Release Notes</a></li>
    <li><strong>AWS Setup Guide</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/AWS_SETUP.md">Complete AWS Configuration</a></li>
  </ul>

  <h3>📊 Configuration Example</h3>
  <pre><code class="language-yaml"># Auto-Reply for Business Hours
Keyword: "HOURS"
Response: "We're open Mon-Fri 9am-5pm EST"
Match Type: Exact
Priority: High
</code></pre>

  <h3>💰 Cost Considerations</h3>
  <ul>
    <li>SMS costs vary by destination country (AWS Pinpoint pricing)</li>
    <li>US/Canada: ~$0.00645 per message segment</li>
    <li>UK: ~$0.0392 per message segment</li>
    <li>Built-in cost tracking shows per-message expenses</li>
  </ul>
</div>

---

## 📱 X Webhook Receiver
<div class="app-showcase">
  <div class="app-header-large">
    <img src="icons/x-webhook-receiver.png" alt="X Webhook Receiver Dashboard" class="app-icon-large">
    <div class="app-title-block">
      <h3>Universal Webhook Processing Platform</h3>
      <p class="version-badge">Version 2.0.0 | Build f33b95d | Updated: Oct 25, 2025</p>
    </div>
  </div>

  <h3>🎯 What It Does</h3>
  <p>Transform any webhook into actionable alerts. Monitor your UniFi Protect cameras, process GitHub events, or handle custom webhooks with powerful transformation, validation, and routing capabilities.</p>

  <h3>✨ Key Features</h3>
  <ul>
    <li>🔔 <strong>UniFi Protect Integration</strong> - Smart detection alerts for person, vehicle, and package detection</li>
    <li>🔄 <strong>Universal Webhook Transform</strong> - Map any JSON payload to your desired format</li>
    <li>📊 <strong>Real-time Dashboard</strong> - React-based UI for monitoring and managing webhooks</li>
    <li>🔐 <strong>HMAC Signature Verification</strong> - Secure webhook validation with multiple algorithms</li>
    <li>📱 <strong>AWS SNS/SMS Notifications</strong> - Send alerts via SMS, email, or push notifications</li>
    <li>🗄️ <strong>PostgreSQL Event Storage</strong> - Persistent storage with full search and filtering</li>
    <li>🎨 <strong>Custom Field Mapping</strong> - Extract, transform, and route specific data fields</li>
    <li>📈 <strong>Event Analytics</strong> - Track webhook performance and patterns</li>
  </ul>

  <h3>💡 Real-World Use Cases</h3>
  <ul>
    <li><strong>Home Security</strong>: Get instant SMS alerts when your security cameras detect a person at your door</li>
    <li><strong>DevOps Monitoring</strong>: Route GitHub deployment webhooks to your team's Slack channel</li>
    <li><strong>IoT Integration</strong>: Process sensor data from smart home devices and trigger automated actions</li>
    <li><strong>Business Automation</strong>: Transform customer form submissions into CRM entries</li>
  </ul>

  <h3>🛠️ Tech Stack</h3>
  <div class="tech-stack">
    <span class="badge badge-python">Python 3.11</span>
    <span class="badge badge-framework">FastAPI</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-frontend">Vite</span>
    <span class="badge badge-database">PostgreSQL 15</span>
    <span class="badge badge-cloud">AWS SNS</span>
  </div>

  <h3>📋 Prerequisites</h3>
  <p>Before installing, ensure you have:</p>
  <ul>
    <li>✅ UNRAID 6.9+ (6.12+ recommended)</li>
    <li>✅ <strong>PostgreSQL 15+ database</strong> - Run as separate UNRAID container (recommended) or use included docker-compose setup</li>
    <li>✅ AWS account with SNS configured (optional, for notifications)</li>
    <li>✅ Network access for webhooks (port 8000 default)</li>
    <li>✅ 512MB RAM minimum (1GB recommended)</li>
  </ul>

  <h3>🏗️ Architecture</h3>
  <pre><code>Webhook Source → HMAC Verification → Transform Engine → Storage
                                              ↓
                                         Alert Rules
                                              ↓
                                      SNS/SMS/Email
</code></pre>

  <h3>🎬 Quick Start</h3>
  <pre><code class="language-bash"># 1. Pull the latest image
docker pull ghcr.io/n85uk/x-webhook-receiver:latest

# 2. Set required environment variables
DATABASE_URL=postgresql://user:pass@host:5432/webhooks
AWS_REGION=us-east-1  # Optional for SNS

# 3. Deploy via UNRAID template (see below)
</code></pre>

  <h3>📦 Installation</h3>
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/x-webhook-receiver.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-Setup" class="btn btn-secondary">📖 Setup Guide</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-API" class="btn btn-tertiary">🔌 API Docs</a>
  </div>

  <h3>🔗 Links</h3>
  <ul>
    <li><strong>Source Code</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/X_Webhook-Receiver">GitHub Repository</a></li>
    <li><strong>Docker Image</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/pkgs/container/x-webhook-receiver">ghcr.io/n85uk/x-webhook-receiver</a></li>
    <li><strong>Support Forum</strong>: <a href="https://forums.unraid.net/">UNRAID Community Thread</a> <em>(Coming Soon)</em></li>
    <li><strong>Issue Tracker</strong>: <a href="https://github.com/N85UK/UNRAID_APP/issues/new?template=bug_report.yml">Report Bugs</a></li>
    <li><strong>Changelog</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/releases">Release Notes</a></li>
  </ul>

  <h3>📊 Configuration Example</h3>
  <pre><code class="language-yaml"># UniFi Protect Smart Detection Alert
Source: UniFi Protect
Event Type: smart_detection
Transform:
  - Extract: detection_type, camera_name, timestamp
  - Filter: detection_type == "person"
Action:
  - Send SMS: "Person detected at {camera_name}"
</code></pre>
</div>

---

## 🚀 Quick Installation Guide

<div class="installation-guide">
  <h3>Method 1: UNRAID Community Applications (Recommended)</h3>
  
  <ol>
    <li><strong>Add Template Repository</strong>
      <ul>
        <li>Navigate to: <code>Docker → Add Container → Template repositories</code></li>
        <li>Add URL: <code>https://github.com/N85UK/UNRAID_APP</code></li>
        <li>Click "Add"</li>
      </ul>
    </li>
    
    <li><strong>Search for Applications</strong>
      <ul>
        <li>Go to <code>Apps</code> tab in UNRAID</li>
        <li>Search for "Ultimate Messages", "AA SMS App", "AWS Ultimate Messaging", or "X Webhook Receiver"</li>
        <li>Click application name to view details</li>
      </ul>
    </li>
    
    <li><strong>Configure & Deploy</strong>
      <ul>
        <li>Fill in required environment variables (see Prerequisites above)</li>
        <li>Adjust port mappings if needed</li>
        <li>Set volume paths for persistent data</li>
        <li>Click "Apply" to deploy</li>
      </ul>
    </li>
  </ol>

  <h3>Method 2: Manual XML Template</h3>
  
  <ol>
    <li><strong>Download Template</strong>
      <ul>
        <li>Download the <code>.xml</code> template for your chosen app (links above)</li>
      </ul>
    </li>
    
    <li><strong>Import to UNRAID</strong>
      <ul>
        <li>Go to <code>Docker → Add Container</code></li>
        <li>Click "Template" dropdown → "Add Template"</li>
        <li>Browse and select downloaded XML file</li>
      </ul>
    </li>
    
    <li><strong>Configure & Deploy</strong>
      <ul>
        <li>Same as Method 1, step 3</li>
      </ul>
    </li>
  </ol>

  <h3>Method 3: Docker Command Line</h3>
  
  <pre><code class="language-bash"># Ultimate Messages
docker run -d \
  --name ultimate-messages \
  -p 3000:3000 \
  -e DB_HOST=postgres \
  -e DB_PASSWORD=your_password \
  -e REDIS_HOST=redis \
  -e JWT_SECRET=your_jwt_secret \
  -e ENCRYPTION_KEY=your_encryption_key \
  -v /mnt/user/appdata/ultimate-messages:/data \
  ghcr.io/n85uk/ultimate-messages:latest

# AA SMS App
docker run -d \
  --name aa-sms-app \
  -p 3001:3000 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/aa_sms \
  -e AA_USERNAME=your_aa_username \
  -e AA_PASSWORD=your_aa_password \
  -v /mnt/user/appdata/aa-sms:/data \
  ghcr.io/n85uk/aa-sms-app:latest

# X Webhook Receiver
docker run -d \
  --name x-webhook-receiver \
  -p 8000:8000 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/webhooks \
  -e AWS_REGION=us-east-1 \
  -v /mnt/user/appdata/x-webhook:/app/data \
  ghcr.io/n85uk/x-webhook-receiver:latest

# AWS Ultimate Messaging
docker run -d \
  --name aws-ultimate-messaging \
  -p 3000:3000 \
  -e DATABASE_URL=mysql://user:pass@host:3306/messaging \
  -e AWS_REGION=us-east-1 \
  -e AWS_ACCESS_KEY_ID=your_key \
  -e AWS_SECRET_ACCESS_KEY=your_secret \
  -e PINPOINT_APPLICATION_ID=your_app_id \
  -v /mnt/user/appdata/aws-messaging:/app/data \
  ghcr.io/n85uk/aws-ultimate-messaging:latest
</code></pre>
</div>

---

## 📚 Documentation & Resources

<div class="documentation-grid">
  <div class="doc-card">
    <h3>📖 Setup Guides</h3>
    <ul>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/Ultimate_Messages/UNRAID_DEPLOYMENT.md">Ultimate Messages Installation</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App">AA SMS App Setup</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/AWS-Ultimate-Messaging-Setup">AWS Ultimate Messaging Installation</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-Setup">X Webhook Receiver Installation</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/AWS_SETUP.md">AWS Pinpoint Configuration</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/X_Webhook-Receiver/UNIFI_PROTECT_SETUP.md">UniFi Protect Integration</a></li>
    </ul>
  </div>

  <div class="doc-card">
    <h3>🔌 API Documentation</h3>
    <ul>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-API">X Webhook API Reference</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/API.md">AWS Messaging API Reference</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/WEBSOCKET_EVENTS.md">WebSocket Events</a></li>
    </ul>
  </div>

  <div class="doc-card">
    <h3>🛠️ Troubleshooting</h3>
    <ul>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/Common-Issues">Common Issues & Solutions</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/TROUBLESHOOTING.md">AWS Messaging Troubleshooting</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/X_Webhook-Receiver/TESTING_GUIDE.md">Testing & Validation</a></li>
    </ul>
  </div>

  <div class="doc-card">
    <h3>🔄 Updates & Releases</h3>
    <ul>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/releases">Release Notes & Changelog</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/MIGRATION_GUIDE.md">Migration Guide</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_Apps/blob/main/CHANGELOG.md">Detailed Changelog</a></li>
    </ul>
  </div>
</div>

---

## 🛟 Support & Community

<div class="support-section">
  <div class="support-grid">
    <div class="support-card">
      <h3>💬 Community Forum</h3>
      <p>Get help from the UNRAID community</p>
      <ul>
        <li><a href="https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/">AWS Ultimate Messaging Thread</a></li>
        <li><a href="https://forums.unraid.net/">Other Applications</a> (Threads Coming Soon)</li>
      </ul>
    </div>

    <div class="support-card">
      <h3>🐛 Bug Reports</h3>
      <p>Found a bug? Help us improve!</p>
      <ul>
        <li><a href="https://github.com/N85UK/UNRAID_APP/issues/new?template=bug_report.yml">Report a Bug</a></li>
        <li><a href="https://github.com/N85UK/UNRAID_APP/issues">View Open Issues</a></li>
      </ul>
    </div>

    <div class="support-card">
      <h3>✨ Feature Requests</h3>
      <p>Suggest new features and improvements</p>
      <ul>
        <li><a href="https://github.com/N85UK/UNRAID_APP/issues/new?template=feature_request.yml">Request a Feature</a></li>
        <li><a href="https://github.com/N85UK/UNRAID_APP/issues?q=is%3Aissue+label%3Aenhancement">View Roadmap</a></li>
      </ul>
    </div>

    <div class="support-card">
      <h3>🆘 Get Help</h3>
      <p>Need assistance with setup or configuration?</p>
      <ul>
        <li><a href="https://github.com/N85UK/UNRAID_APP/issues/new?template=help.yml">Ask for Help</a></li>
        <li><a href="https://github.com/N85UK/UNRAID_APP/wiki">Browse Wiki</a></li>
      </ul>
    </div>
  </div>
</div>

---

## 🔒 Security & Privacy

<div class="security-section">
  <h3>🛡️ Security Commitments</h3>
  <ul>
    <li>✅ <strong>Open Source</strong>: All code is publicly auditable on GitHub</li>
    <li>✅ <strong>No Telemetry</strong>: We don't collect usage data or analytics</li>
    <li>✅ <strong>Self-Hosted</strong>: Your data stays on your UNRAID server</li>
    <li>✅ <strong>Active Maintenance</strong>: Regular security updates and patches</li>
    <li>✅ <strong>Vulnerability Reporting</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/SECURITY.md">Security Policy</a></li>
  </ul>

  <p>🔐 Report security vulnerabilities privately: <a href="mailto:security@apps.n85.uk">security@apps.n85.uk</a></p>
</div>

---

## 🎓 Developer Resources

<div class="developer-section">
  <h3>🔧 For Developers</h3>
  <ul>
    <li>📦 <strong>Source Repository</strong>: <a href="https://github.com/N85UK/UNRAID_Apps">UNRAID_Apps</a> - Full application source code</li>
    <li>📋 <strong>Template Repository</strong>: <a href="https://github.com/N85UK/UNRAID_APP">UNRAID_App</a> - This site and XML templates</li>
    <li>🔨 <strong>Contributing Guide</strong>: <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/CONTRIBUTING.md">How to Contribute</a></li>
    <li>📜 <strong>License</strong>: MIT License - Free to use, modify, and distribute</li>
  </ul>
</div>

---

<div class="footer-cta">
  <h2>Ready to Get Started?</h2>
  <p>Choose your application and follow the installation guide above.</p>
  <p>Need help? Check our <a href="https://github.com/N85UK/UNRAID_APP/wiki">documentation</a> or <a href="https://github.com/N85UK/UNRAID_APP/issues">ask the community</a>.</p>
</div>

---

**Maintained by:** [@N85UK](https://github.com/N85UK)  
**Last Updated:** October 30, 2025  
**License:** MIT