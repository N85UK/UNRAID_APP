---
layout: page
title: X_Webhook-Receiver
---
# X_Webhook-Receiver v1.0.0

A universal FastAPI-based webhook receiver designed for UNRAID servers that accepts webhooks from **any source**, including UniFi Protect, UCG Max, Uptime Robot, GitHub, Prometheus, and custom applications. Built with a modern gradient UI and intelligent field mapping to handle JSON payloads from any application.

## Naming Clarification

Despite the folder name "X_Webhook-Receiver", this application is a **universal webhook receiver** that works with:

- ✅ **UniFi Protect** (camera/alarm webhooks) - Motion, person/vehicle detection, doorbell
- ✅ **UniFi Network** (UCG Max, Dream Machine, etc. with Network 9.3+) - WAN offline, client events, security threats
- ✅ **UniFi Access** (door access system) - Potential support via Alarm Manager
- ✅ **Any other webhook source** (custom apps, monitoring tools, etc.)

The `/webhook/ucgmax` endpoint automatically detects UniFi Protect and Network formats and transforms them for storage.

For detailed setup instructions, see:

- [INSTALL.md](INSTALL.md) - General installation
- [UNIFI_PROTECT_SETUP.md](UNIFI_PROTECT_SETUP.md) - UniFi Protect & Network specific guide

## Features
