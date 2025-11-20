---
layout: default
title: N85UK UNRAID Applications
description: Production-ready Docker applications for UNRAID servers
keywords: unraid, docker, applications, sms, messaging, webhooks
author: N85UK
lang: en-GB
---

<div class="hero">
  <h1>UNRAID Applications — N85UK</h1>
  <p class="subtitle">Production-ready Docker containers for servers</p>
  <p class="version-info">Last Updated: November 4, 2025 | 5 Applications</p>
</div>

<div class="trust-badges">
  <span class="trust-badge">MIT Licensed</span>
  <span class="trust-badge">Maintained</span>
  <span class="trust-badge">Multi-Arch</span>
  <span class="trust-badge">GHCR</span>
</div>

## Ultimate Messages
**Enterprise SMS platform with multi-provider support (AA + AWS)**

**What it does:** Unified messaging with intelligent routing, team collaboration, and automation

**Key Features:**
- Multi-provider (Andrews & Arnold + AWS)
- Smart routing & cost optimization  
- Team collaboration with RBAC
- Automation & analytics
- Modern UI with dark mode

**Requirements:** PostgreSQL 15+, Redis 7+

[Template](https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/ultimate-messages.xml) | [Docs](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Ultimate_Messages) | [Image](https://github.com/N85UK/UNRAID_Apps/pkgs/container/ultimate-messages)

---

## AA SMS App
**Andrews & Arnold SMS management platform**

**What it does:** Send and receive SMS through Andrews & Arnold with conversation threading

**Key Features:**
- Bi-directional SMS
- Contact management
- Real-time updates
- Clean Material-UI interface

**Requirements:** MariaDB/MySQL, Andrews & Arnold account

[Template](https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/aa-sms-app.xml) | [Docs](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App) | [Image](https://github.com/N85UK/UNRAID_Apps/pkgs/container/aa-sms-app)

---

## AWS Ultimate Messaging
**AWS SNS/Pinpoint SMS platform**

**What it does:** Modern two-way SMS using AWS services with real-time updates

**Key Features:**
- AWS SNS/Pinpoint integration
- WebSocket real-time messaging
- Multi-user authentication
- Auto-replies & templates
- Analytics dashboard

**Requirements:** MariaDB/MySQL, AWS account

[Template](https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/aws-ultimate-messaging.xml) | [Docs](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AWS_Ultimate_Messaging) | [Image](https://github.com/N85UK/UNRAID_Apps/pkgs/container/aws-ultimate-messaging)

---

## X Webhook Receiver
**Event processing for UniFi Protect & custom webhooks**

**What it does:** Process webhooks from UniFi Protect and other services with custom actions

**Key Features:**
- UniFi Protect smart detections
- Gotify notifications
- PostgreSQL logging
- Custom webhook handlers
- Real-time event processing

**Requirements:** PostgreSQL 15+

[Template](https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/x-webhook-receiver.xml) | [Docs](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/X_Webhook-Receiver) | [Image](https://github.com/N85UK/UNRAID_Apps/pkgs/container/x-webhook-receiver)

---

## Octopus Energy Monitor
**Monitor Octopus Energy consumption & costs**

**What it does:** Track electricity usage and costs from Octopus Energy with Grafana dashboards

**Key Features:**
- Auto-discover meters
- Sync consumption data
- Cost calculations with tariffs
- SQLite or MySQL support
- Grafana dashboard templates

**Requirements:** SQLite or MySQL, Octopus Energy account

[Template](https://raw.githubusercontent.com/N85UK/UNRAID_App/main/templates/octopus-energy-monitor.xml) | [Docs](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Octopus_Energy_Monitor) | [Image](https://github.com/N85UK/UNRAID_Apps/pkgs/container/octopus-energy-monitor)

---

## Installation

1. Download the template XML file
2. In UNRAID, go to **Docker > Add Container**
3. Click **Template repositories** and add:
   `https://github.com/N85UK/UNRAID_App`
4. Select the app from the dropdown
5. Configure environment variables
6. Click **Apply**

## Support

- **Issues:** [GitHub Issues](https://github.com/N85UK/UNRAID_Apps/issues)
- **Source:** [UNRAID_Apps Repository](https://github.com/N85UK/UNRAID_Apps)
- **License:** MIT


<footer style="text-align: center; margin-top: 3rem; padding: 2rem; border-top: 1px solid #e5e7eb;">
  <p>Made for the UNRAID community</p>
  <p><a href="https://github.com/N85UK">GitHub</a> | <a href="https://github.com/N85UK/UNRAID_Apps/blob/main/LICENSE">License</a></p>
</footer>
