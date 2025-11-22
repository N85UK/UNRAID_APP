---
layout: page
title: Octopus_Energy_Monitor
---
# Octopus Energy Monitor for Unraid

[![Docker Build](https://github.com/N85UK/UNRAID_Apps/actions/workflows/octopus-energy-cicd.yml/badge.svg)](https://github.com/N85UK/UNRAID_Apps/actions/workflows/octopus-energy-cicd.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready Unraid application for tracking Octopus Energy consumption, pricing, and costs. Exposes data via REST API, Prometheus metrics, and Grafana-ready SQLite database.

## Features

- ✅ **Automatic Meter Discovery** - Discovers MPAN/MPRN, meter serials, and active tariff codes from your account
- ⚡ **Half-Hourly Data** - Tracks electricity and gas consumption with 30-minute intervals
- 💰 **Cost Calculations** - Automatically joins consumption with tariff rates to compute costs
- 📊 **Agile Support** - Fetches day-ahead Agile prices (published 16:00-20:00)
- 🔌 **Prometheus Metrics** - Exposes `/metrics` endpoint for monitoring
- 📈 **Grafana Ready** - Includes starter dashboard and SQLite/MariaDB support
- 🔄 **Dual Authentication** - Bearer token (preferred) or HTTP Basic auth (fallback)
- 🏠 **GraphQL Optional** - Experimental Home Mini integration for near-real-time data
- 🐳 **Docker Native** - Single container, multi-arch (amd64/arm64)
- 🔒 **Secure** - Non-root user, health checks, secret masking

## Quick Start (Unraid)
