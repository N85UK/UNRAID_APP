# UNRAID Community Applications

Official UNRAID Community Applications repository for production-ready Docker containers.

🌐 **Website:** [https://git.n85.uk](https://git.n85.uk)  
📦 **Docker Images:** [GitHub Container Registry](https://github.com/N85UK?tab=packages)

---

## 📱 Applications

### AWS Ultimate Messaging
Enterprise-grade SMS/MMS messaging platform with AWS Pinpoint integration.

- **Docker Image:** `ghcr.io/n85uk/aws-ultimate-messaging:latest`
- **Template:** [aws-ultimate-messaging.xml](templates/aws-ultimate-messaging.xml)
- **Support:** [UNRAID Forums](https://forums.unraid.net/topic/194489-support-aws-ultimate-messaging-app/)
- **Documentation:** See [docs/aws-ultimate-messaging/](docs/aws-ultimate-messaging/)

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
- **Support:** [UNRAID Forums](https://forums.unraid.net/topic/XXXXX) *(coming soon)*
- **Documentation:** See [docs/x-webhook-receiver/](docs/x-webhook-receiver/)

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

See individual application documentation in the [docs/](docs/) directory.

---

## 📋 Repository Structure

```
UNRAID_APP/
├── templates/              # UNRAID XML templates
│   ├── aws-ultimate-messaging.xml
│   └── x-webhook-receiver.xml
├── icons/                  # Application icons
├── docs/                   # Documentation
│   ├── aws-ultimate-messaging/
│   └── x-webhook-receiver/
├── .github/                # GitHub configuration
│   └── ISSUE_TEMPLATE/     # Issue templates
└── ca_profile.xml          # Developer profile
```

---

## 📖 Documentation

- **Website:** [https://git.n85.uk](https://git.n85.uk) - Application showcase and guides
- **Templates:** XML templates for UNRAID Community Applications
- **Support:** Individual forum threads linked above
- **Issues:** [GitHub Issues](https://github.com/N85UK/UNRAID_APP/issues)

---

## 🐛 Bug Reports & Feature Requests

Please use our [GitHub Issues](https://github.com/N85UK/UNRAID_APP/issues/new/choose) to:
- Report bugs
- Request features
- Ask for installation help

For application-specific bugs, please visit the respective support forum threads.

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
- **X Webhook Receiver:** Forum Thread *(coming soon)*

---

## 🤝 Contributing

This repository contains UNRAID application templates and documentation. Source code is managed separately.

To contribute:
1. Fork this repository
2. Make your changes
3. Submit a pull request

---

**Maintained by:** [@N85UK](https://github.com/N85UK)  
**Last Updated:** October 2025
