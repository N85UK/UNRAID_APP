---
layout: default
title: N85UK UNRAID Applications - Production-Ready Docker Apps
---

<div class="hero">
  <h1>🚀 Professional UNRAID Applications</h1>
  <p class="subtitle">Production-ready Docker containers for webhook processing and SMS messaging</p>
  <p class="version-info">Last Updated: October 25, 2025 | 2 Applications Available</p>
</div>

<!-- Trust Indicators -->
<div class="trust-badges">
  <span class="trust-badge">✅ MIT Licensed</span>
  <span class="trust-badge">🔒 Actively Maintained</span>
  <span class="trust-badge">📦 Multi-Arch Support</span>
  <span class="trust-badge">🐳 GHCR Hosted</span>
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

  ### 🎯 What It Does
  Transform any webhook into actionable alerts. Monitor your UniFi Protect cameras, process GitHub events, or handle custom webhooks with powerful transformation, validation, and routing capabilities.

  ### ✨ Key Features
  - 🔔 **UniFi Protect Integration** - Smart detection alerts for person, vehicle, and package detection
  - 🔄 **Universal Webhook Transform** - Map any JSON payload to your desired format
  - 📊 **Real-time Dashboard** - React-based UI for monitoring and managing webhooks
  - 🔐 **HMAC Signature Verification** - Secure webhook validation with multiple algorithms
  - 📱 **AWS SNS/SMS Notifications** - Send alerts via SMS, email, or push notifications
  - 🗄️ **PostgreSQL Event Storage** - Persistent storage with full search and filtering
  - 🎨 **Custom Field Mapping** - Extract, transform, and route specific data fields
  - 📈 **Event Analytics** - Track webhook performance and patterns

  ### 💡 Real-World Use Cases
  - **Home Security**: Get instant SMS alerts when your security cameras detect a person at your door
  - **DevOps Monitoring**: Route GitHub deployment webhooks to your team's Slack channel
  - **IoT Integration**: Process sensor data from smart home devices and trigger automated actions
  - **Business Automation**: Transform customer form submissions into CRM entries

  ### 🛠️ Tech Stack
  <div class="tech-stack">
    <span class="badge badge-python">Python 3.11</span>
    <span class="badge badge-framework">FastAPI</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-frontend">Vite</span>
    <span class="badge badge-database">PostgreSQL 15</span>
    <span class="badge badge-cloud">AWS SNS</span>
  </div>

  ### � Prerequisites
  Before installing, ensure you have:
  - ✅ UNRAID 6.9+ (6.12+ recommended)
  - ✅ PostgreSQL database (can be another Docker container)
  - ✅ AWS account with SNS configured (optional, for notifications)
  - ✅ Network access for webhooks (port 8000 default)
  - ✅ 512MB RAM minimum (1GB recommended)

  ### 🏗️ Architecture
  ```
  Webhook Source → HMAC Verification → Transform Engine → Storage
                                              ↓
                                         Alert Rules
                                              ↓
                                      SNS/SMS/Email
  ```

  ### 🎬 Quick Start
  ```bash
  # 1. Pull the latest image
  docker pull ghcr.io/n85uk/x-webhook-receiver:latest
  
  # 2. Set required environment variables
  DATABASE_URL=postgresql://user:pass@host:5432/webhooks
  AWS_REGION=us-east-1  # Optional for SNS
  
  # 3. Deploy via UNRAID template (see below)
  ```

  ### 📦 Installation
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/x-webhook-receiver.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-Setup" class="btn btn-secondary">📖 Setup Guide</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-API" class="btn btn-tertiary">🔌 API Docs</a>
  </div>

  ### 🔗 Links
  - **Source Code**: [GitHub Repository](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/X_Webhook-Receiver)
  - **Docker Image**: [ghcr.io/n85uk/x-webhook-receiver](https://github.com/N85UK/UNRAID_Apps/pkgs/container/x-webhook-receiver)
  - **Support Forum**: [UNRAID Community Thread](https://forums.unraid.net/) *(Coming Soon)*
  - **Issue Tracker**: [Report Bugs](https://github.com/N85UK/UNRAID_APP/issues/new?template=bug_report.yml)
  - **Changelog**: [Release Notes](https://github.com/N85UK/UNRAID_Apps/releases)

  ### 📊 Configuration Example
  ```yaml
  # UniFi Protect Smart Detection Alert
  Source: UniFi Protect
  Event Type: smart_detection
  Transform:
    - Extract: detection_type, camera_name, timestamp
    - Filter: detection_type == "person"
  Action:
    - Send SMS: "Person detected at {camera_name}"
  ```
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

  ### 🎯 What It Does
  Full-featured SMS/MMS messaging platform for businesses. Manage two-way conversations, automate responses, and handle customer communications through a modern web interface powered by AWS Pinpoint.

  ### ✨ Key Features
  - 💬 **Two-Way SMS/MMS Messaging** - Send and receive messages with full conversation threading
  - 👥 **Contact Management** - Organize contacts with custom fields and conversation history
  - 🧵 **Threaded Conversations** - WhatsApp-style conversation view with unread indicators
  - 🤖 **Automated Keyword Responses** - Set up auto-replies based on keywords or phrases
  - 📸 **Media Attachment Support** - Send and receive images, videos, and files
  - ☁️ **AWS Pinpoint Integration** - Enterprise-grade SMS delivery with global reach
  - 🔍 **Advanced Search** - Find messages and contacts instantly with full-text search
  - 📊 **Message Analytics** - Track delivery rates, costs, and conversation metrics
  - 🔐 **Multi-User Support** - Role-based access control for teams
  - 📱 **Real-Time Updates** - WebSocket-based live message delivery

  ### 💡 Real-World Use Cases
  - **Customer Support**: Manage customer SMS inquiries from a central dashboard
  - **Appointment Reminders**: Send automated appointment confirmations and reminders
  - **Marketing Campaigns**: Broadcast promotional messages to customer segments
  - **Two-Factor Auth**: Build custom 2FA systems with SMS verification
  - **Order Updates**: Notify customers about order status changes via SMS

  ### 🛠️ Tech Stack
  <div class="tech-stack">
    <span class="badge badge-node">Node.js 20</span>
    <span class="badge badge-framework">Express</span>
    <span class="badge badge-frontend">React 18</span>
    <span class="badge badge-frontend">Vite</span>
    <span class="badge badge-database">MySQL 8</span>
    <span class="badge badge-cloud">AWS Pinpoint</span>
    <span class="badge badge-realtime">WebSockets</span>
  </div>

  ### 📋 Prerequisites
  Before installing, ensure you have:
  - ✅ UNRAID 6.9+ (6.12+ recommended)
  - ✅ MySQL/MariaDB database
  - ✅ **AWS Account with Pinpoint configured** (required)
  - ✅ AWS Pinpoint phone number (required for sending)
  - ✅ SNS topic for incoming messages (webhook endpoint)
  - ✅ Network access (port 3000 default)
  - ✅ 1GB RAM minimum (2GB recommended for production)

  ### 🏗️ Architecture
  ```
  React Frontend ← WebSocket → Node.js API
                                    ↓
                              MySQL Database
                                    ↓
                         AWS Pinpoint (SMS) ← SNS Webhooks
  ```

  ### 🎬 Quick Start
  ```bash
  # 1. Pull the latest image
  docker pull ghcr.io/n85uk/aws-ultimate-messaging:latest
  
  # 2. Set required environment variables
  DATABASE_URL=mysql://user:pass@host:3306/messaging
  AWS_REGION=us-east-1
  AWS_ACCESS_KEY_ID=your_key
  AWS_SECRET_ACCESS_KEY=your_secret
  PINPOINT_APPLICATION_ID=your_app_id
  
  # 3. Deploy via UNRAID template (see below)
  ```

  ### 📦 Installation
  <div class="install-buttons">
    <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/aws-ultimate-messaging.xml" class="btn btn-primary">📥 Download Template</a>
    <a href="https://github.com/N85UK/UNRAID_APP/wiki/AWS-Ultimate-Messaging-Setup" class="btn btn-secondary">📖 Setup Guide</a>
    <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/AWS_SETUP.md" class="btn btn-tertiary">☁️ AWS Setup</a>
  </div>

  ### 🔗 Links
  - **Source Code**: [GitHub Repository](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AWS_Ultimate_Messaging)
  - **Docker Image**: [ghcr.io/n85uk/aws-ultimate-messaging](https://github.com/N85UK/UNRAID_Apps/pkgs/container/aws-ultimate-messaging)
  - **Support Forum**: [UNRAID Community Thread](https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/)
  - **Issue Tracker**: [Report Bugs](https://github.com/N85UK/UNRAID_APP/issues/new?template=bug_report.yml)
  - **Changelog**: [Release Notes](https://github.com/N85UK/UNRAID_Apps/releases)
  - **AWS Setup Guide**: [Complete AWS Configuration](https://github.com/N85UK/UNRAID_Apps/blob/main/Apps/AWS_Ultimate_Messaging/AWS_SETUP.md)

  ### 📊 Configuration Example
  ```yaml
  # Auto-Reply for Business Hours
  Keyword: "HOURS"
  Response: "We're open Mon-Fri 9am-5pm EST"
  Match Type: Exact
  Priority: High
  ```

  ### 💰 Cost Considerations
  - SMS costs vary by destination country (AWS Pinpoint pricing)
  - US/Canada: ~$0.00645 per message segment
  - UK: ~$0.0392 per message segment
  - Built-in cost tracking shows per-message expenses
</div>

---

## 🚀 Quick Installation Guide

<div class="installation-guide">
  ### Method 1: UNRAID Community Applications (Recommended)
  
  1. **Add Template Repository**
     - Navigate to: `Docker → Add Container → Template repositories`
     - Add URL: `https://github.com/N85UK/UNRAID_APP`
     - Click "Add"

  2. **Search for Applications**
     - Go to `Apps` tab in UNRAID
     - Search for "X Webhook Receiver" or "AWS Ultimate Messaging"
     - Click application name to view details

  3. **Configure & Deploy**
     - Fill in required environment variables (see Prerequisites above)
     - Adjust port mappings if needed (defaults: 8000 for X Webhook, 3000 for AWS Messaging)
     - Set volume paths for persistent data
     - Click "Apply" to deploy

  ### Method 2: Manual XML Template
  
  1. **Download Template**
     - Download the `.xml` template for your chosen app (links above)
  
  2. **Import to UNRAID**
     - Go to `Docker → Add Container`
     - Click "Template" dropdown → "Add Template"
     - Browse and select downloaded XML file
  
  3. **Configure & Deploy**
     - Same as Method 1, step 3

  ### Method 3: Docker Command Line
  
  ```bash
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
  ```
</div>

---

## 📚 Documentation & Resources

<div class="documentation-grid">
  <div class="doc-card">
    <h3>📖 Setup Guides</h3>
    <ul>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/X-Webhook-Receiver-Setup">X Webhook Receiver Installation</a></li>
      <li><a href="https://github.com/N85UK/UNRAID_APP/wiki/AWS-Ultimate-Messaging-Setup">AWS Ultimate Messaging Installation</a></li>
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
      <h3>� Community Forum</h3>
      <p>Get help from the UNRAID community</p>
      <ul>
        <li><a href="https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/">AWS Ultimate Messaging Thread</a></li>
        <li><a href="https://forums.unraid.net/">X Webhook Receiver Thread</a> (Coming Soon)</li>
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
  <h3>�️ Security Commitments</h3>
  <ul>
    <li>✅ **Open Source**: All code is publicly auditable on GitHub</li>
    <li>✅ **No Telemetry**: We don't collect usage data or analytics</li>
    <li>✅ **Self-Hosted**: Your data stays on your UNRAID server</li>
    <li>✅ **Active Maintenance**: Regular security updates and patches</li>
    <li>✅ **Vulnerability Reporting**: <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/SECURITY.md">Security Policy</a></li>
  </ul>

  <p>🔐 Report security vulnerabilities privately: <a href="mailto:security@apps.n85.uk">security@apps.n85.uk</a></p>
</div>

---

## 📊 Comparison: Which App Do I Need?

| Feature | X Webhook Receiver | AWS Ultimate Messaging |
|---------|-------------------|------------------------|
| **Primary Purpose** | Process incoming webhooks | Send/receive SMS messages |
| **Database** | PostgreSQL | MySQL/MariaDB |
| **Cloud Service** | AWS SNS (optional) | AWS Pinpoint (required) |
| **External API** | Any webhook source | AWS only |
| **Two-Way Communication** | ❌ One-way (incoming) | ✅ Two-way messaging |
| **Real-Time UI** | ✅ Event dashboard | ✅ Conversation threads |
| **Automation** | ✅ Transform & route | ✅ Keyword auto-reply |
| **Best For** | IoT, DevOps, Monitoring | Customer service, Marketing |
| **Cost** | Free (AWS optional) | AWS Pinpoint charges apply |

---

## 🎓 Video Tutorials

<div class="videos-section">
  <h3>📺 Watch & Learn</h3>
  <p><em>Video tutorials coming soon! Subscribe to the GitHub repository to get notified.</em></p>
  
  <h4>Planned Tutorial Series:</h4>
  <ul>
    <li>🎬 X Webhook Receiver: Complete Installation & Setup (10 min)</li>
    <li>🎬 UniFi Protect Integration: Smart Detection Alerts (15 min)</li>
    <li>🎬 AWS Ultimate Messaging: From Zero to First Message (20 min)</li>
    <li>🎬 AWS Pinpoint Setup: Complete Configuration Guide (25 min)</li>
    <li>🎬 Advanced Features: Keyword Automation & Custom Transforms (15 min)</li>
  </ul>
  
  <p>📧 Want early access? Email <a href="mailto:hello@apps.n85.uk">hello@apps.n85.uk</a></p>
</div>

---

## 🤝 Contributing

We welcome contributions from the community!

<div class="contributing-section">
  <ul>
    <li>🐛 <strong>Bug Fixes</strong>: Submit pull requests for bug fixes</li>
    <li>✨ <strong>Feature Development</strong>: Propose and implement new features</li>
    <li>📖 <strong>Documentation</strong>: Improve guides, examples, and API docs</li>
    <li>🌍 <strong>Translations</strong>: Help translate the UI to other languages</li>
    <li>💬 <strong>Support</strong>: Help others in the community forums</li>
  </ul>

  <p>Read our <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/CONTRIBUTING.md">Contributing Guide</a> to get started.</p>
</div>

---

## 📈 Project Stats

<div class="stats-section">
  <div class="stat-card">
    <h4>Active Development</h4>
    <p>Regular updates and improvements</p>
  </div>
  <div class="stat-card">
    <h4>Multi-Architecture</h4>
    <p>amd64 + arm64 support</p>
  </div>
  <div class="stat-card">
    <h4>Production Ready</h4>
    <p>Battle-tested in real deployments</p>
  </div>
  <div class="stat-card">
    <h4>MIT Licensed</h4>
    <p>Free for personal & commercial use</p>
  </div>
</div>

---

<footer class="site-footer">
  <div class="footer-content">
    <p><strong>Built with ❤️ for the UNRAID community</strong></p>
    <p>Maintained by <a href="https://github.com/N85UK">@N85UK</a> | Licensed under <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/LICENSE">MIT</a></p>
    <p class="small">Docker images hosted on <a href="https://github.com/N85UK?tab=packages">GitHub Container Registry</a> | Source code on <a href="https://github.com/N85UK/UNRAID_Apps">GitHub</a></p>
    <p class="small">📧 Contact: <a href="mailto:hello@apps.n85.uk">hello@apps.n85.uk</a> | 🔒 Security: <a href="mailto:security@apps.n85.uk">security@apps.n85.uk</a></p>
  </div>
</footer>

<style>
/* Custom Styles for Enhanced Layout */
.hero {
  text-align: center;
  padding: 2rem 0 1rem 0;
  border-bottom: 3px solid #159957;
  margin-bottom: 2rem;
}

.hero h1 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.hero .subtitle {
  font-size: 1.3rem;
  color: #606c71;
  margin: 0.5rem 0;
}

.hero .version-info {
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.5rem;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.trust-badge {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #159957;
}

.app-showcase {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid #159957;
}

.app-header-large {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.app-icon-large {
  width: 128px;
  height: 128px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.app-title-block h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
  color: #159957;
}

.version-badge {
  background: #159957;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.badge {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
}

.badge-python { background: #3776ab; }
.badge-node { background: #339933; }
.badge-framework { background: #0ea5e9; }
.badge-frontend { background: #646cff; }
.badge-database { background: #336791; }
.badge-cloud { background: #ff9900; }
.badge-realtime { background: #8b5cf6; }

.install-buttons {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: #159957;
  color: white;
}

.btn-primary:hover {
  background: #0d7a43;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: #0ea5e9;
  color: white;
}

.btn-secondary:hover {
  background: #0284c7;
  transform: translateY(-2px);
}

.btn-tertiary {
  background: #6b7280;
  color: white;
}

.btn-tertiary:hover {
  background: #4b5563;
  transform: translateY(-2px);
}

.documentation-grid, .support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.doc-card, .support-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.doc-card:hover, .support-card:hover {
  border-color: #159957;
  box-shadow: 0 4px 12px rgba(21,153,87,0.1);
}

.doc-card h3, .support-card h3 {
  margin-top: 0;
  color: #159957;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stat-card {
  background: linear-gradient(135deg, #159957 0%, #0d7a43 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.stat-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.stat-card p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.site-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 2px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
}

.site-footer .footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.site-footer p {
  margin: 0.5rem 0;
}

.site-footer .small {
  font-size: 0.85rem;
  color: #9ca3af;
}

pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

code {
  background: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
}

pre code {
  background: transparent;
  padding: 0;
}

@media (max-width: 768px) {
  .app-header-large {
    flex-direction: column;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .install-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
