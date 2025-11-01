# UNRAID Community Applications

Official UNRAID Community Applications repository for production-ready Docker containers.

🌐 **Website:** [https://apps.n85.uk](https://apps.n85.uk)  
📦 **Docker Images:** [GitHub Container Registry](https://github.com/N85UK?tab=packages)

---

## 📱 Applications

### Ultimate Messages
Enterprise-grade unified multi-provider SMS platform combining Andrews & Arnold and AWS SNS/Pinpoint.

- **Docker Image:** `ghcr.io/n85uk/ultimate-messages:latest`
- **Template:** [ultimate-messages.xml](templates/ultimate-messages.xml)
- **Support:** [GitHub Issues](https://github.com/N85UK/UNRAID_Apps/issues)
- **Documentation:** See [Apps/Ultimate_Messages/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Ultimate_Messages)

**Features:**
- Multi-user authentication with role-based access
- Dual SMS providers (Andrews & Arnold + AWS SNS/Pinpoint)
- Real-time messaging with WebSocket support
- Contact and conversation management
- Smart routing and intelligent automation
- Auto-replies and message templates
- Comprehensive analytics dashboard
- Progressive Web App (PWA) with dark mode
- Material-UI design system

**Requirements:**
- PostgreSQL 15+ database
- Redis 7+ for session management
- Provider API credentials (AA and/or AWS)

---

### AA SMS App
Professional Andrews & Arnold SMS messaging platform with automation and analytics.

- **Docker Image:** `ghcr.io/n85uk/aa-sms-app:latest`
- **Template:** [aa-sms-app.xml](templates/aa-sms-app.xml)
- **Support:** [GitHub Issues](https://github.com/N85UK/UNRAID_Apps/issues)
- **Documentation:** See [Apps/AA_SMS_App/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AA_SMS_App)

**Features:**
- Andrews & Arnold SMS API integration
- Contact management with groups
- Conversation threading
- Keyword automation
- Message scheduling
- Delivery tracking and analytics
- Modern React UI with dark mode
- RESTful API

**Requirements:**
- PostgreSQL database
- Andrews & Arnold account with SMS service

---

### AWS Ultimate Messaging
Enterprise-grade SMS/MMS messaging platform with AWS Pinpoint integration.

- **Docker Image:** `ghcr.io/n85uk/aws-ultimate-messaging:latest`
- **Template:** [aws-ultimate-messaging.xml](templates/aws-ultimate-messaging.xml)
- **Support:** [UNRAID Forums](https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/)
- **Documentation:** See [Apps/AWS_Ultimate_Messaging/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/AWS_Ultimate_Messaging)

**Features:**
- Two-way SMS/MMS communication via AWS Pinpoint/SNS
- Contact management with import/export
- Conversation threading
- Keyword automation & auto-replies
- Real-time WebSocket updates
- RESTful API
- Modern React UI with dark mode

**Requirements:**
- MariaDB/MySQL database
- AWS Account with Pinpoint/SNS configured
- Phone number provisioned in AWS

---

### X Webhook Receiver
Universal webhook processing platform with UniFi Protect integration.

- **Docker Image:** `ghcr.io/n85uk/x-webhook-receiver:latest`
- **Template:** [x-webhook-receiver.xml](templates/x-webhook-receiver.xml)
- **Support:** [GitHub Issues](https://github.com/N85UK/UNRAID_Apps/issues)
- **Documentation:** See [Apps/X_Webhook-Receiver/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/X_Webhook-Receiver)

**Features:**
- Universal webhook endpoint with HMAC verification
- UniFi Protect smart detection integration
- Custom webhook transformation with JSONPath
- PostgreSQL event storage
- Real-time WebSocket notifications
- Alert retention management
- Modern React dashboard

**Requirements:**
- PostgreSQL database

---

### Octopus Energy Monitor
Real-time energy usage and cost tracking for Octopus Energy customers.

- **Docker Image:** `ghcr.io/n85uk/octopus-energy-monitor:latest`
- **Template:** [octopus-energy-monitor.xml](templates/octopus-energy-monitor.xml)
- **Support:** [GitHub Issues](https://github.com/N85UK/UNRAID_Apps/issues)
- **Documentation:** See [Apps/Octopus_Energy_Monitor/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps/Octopus_Energy_Monitor)

**Features:**
- Automatic meter discovery from Octopus account
- Half-hourly electricity and gas consumption tracking
- Automatic tariff rate fetching (Agile, Flexible, etc.)
- Cost calculations per interval, day, week, month
- Prometheus metrics endpoint (/metrics)
- Grafana-ready SQLite database
- RESTful API for custom integrations
- Optional GraphQL support for Home Mini
- Multi-arch Docker images (amd64/arm64)

**Requirements:**
- Octopus Energy account with API key
- SQLite (default) or optional MariaDB/MySQL


---

## 🚀 Installation

### Via Community Applications (Recommended)

1. Open **Apps** tab in UNRAID
2. Search for the application name
3. Click **Install**
4. Configure settings
5. Click **Apply**

### Via Template URL

1. Go to **Docker** → **Add Container**
2. Select **Template repositories** → Add this repository URL
3. Choose your application from the dropdown
4. Configure and deploy

### Manual Docker Installation

See individual application documentation in the [Apps/](https://github.com/N85UK/UNRAID_Apps/tree/main/Apps) directory.

---

## 📋 Repository Structure

```
UNRAID_APP/
├── templates/              # UNRAID XML templates
│   ├── ultimate-messages.xml
│   ├── aa-sms-app.xml
│   ├── aws-ultimate-messaging.xml
│   └── x-webhook-receiver.xml
├── icons/                  # Application icons
├── docs/                   # Documentation
│   ├── ultimate-messages/
│   ├── aa-sms-app/
│   ├── aws-ultimate-messaging/
│   └── x-webhook-receiver/
├── .github/                # GitHub configuration
│   └── ISSUE_TEMPLATE/     # Issue templates
└── ca_profile.xml          # Developer profile
```

---

## 📖 Documentation

- **Website:** [https://apps.n85.uk](https://apps.n85.uk) - Application showcase and guides
- **Templates:** XML templates for UNRAID Community Applications
- **Source Code:** [UNRAID_Apps Repository](https://github.com/N85UK/UNRAID_Apps)
- **Support:** Individual forum threads and GitHub issues
- **Issues:** [GitHub Issues](https://github.com/N85UK/UNRAID_APP/issues)

---

## 🐛 Bug Reports & Feature Requests

Please use our [GitHub Issues](https://github.com/N85UK/UNRAID_APP/issues/new/choose) to:
- Report bugs
- Request features
- Ask for installation help

For application-specific bugs, please visit the respective support forum threads or the [UNRAID_Apps repository](https://github.com/N85UK/UNRAID_Apps/issues).

---

## 🔐 Docker Images

All Docker images are built automatically via GitHub Actions and published to GitHub Container Registry (GHCR):

- **Registry:** `ghcr.io/n85uk/`
- **Architectures:** `linux/amd64`, `linux/arm64`
- **Updates:** Automatic on code changes
- **Visibility:** Public (no authentication required)

---

## 📜 License

MIT License - See individual application documentation for details.

---

## 💬 Support

- **General Questions:** [GitHub Discussions](https://github.com/N85UK/UNRAID_APP/discussions)
- **Bug Reports:** [GitHub Issues](https://github.com/N85UK/UNRAID_APP/issues)
- **AWS Ultimate Messaging:** [Forum Thread](https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/)
- **Other Applications:** See individual documentation for support links

---

## 🤝 Contributing

This repository contains UNRAID application templates and documentation. Source code is managed in the [UNRAID_Apps repository](https://github.com/N85UK/UNRAID_Apps).

To contribute:
1. Fork this repository
2. Make your changes
3. Submit a pull request

---

**Maintained by:** [@N85UK](https://github.com/N85UK)  
**Last Updated:** November 1, 2025  
**Applications:** 5 Production-Ready Docker Containers
