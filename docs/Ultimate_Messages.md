---
layout: page
title: Ultimate_Messages
---
# Ultimate Messages

> **Unified Multi-Provider SMS Platform**  
> Enterprise-grade messaging solution combining Andrews & Arnold and AWS SNS/Pinpoint with intelligent routing, automation, and team collaboration.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)

---

## 🚀 Quick Start

### Prerequisites

- **Docker** & **Docker Compose**
- **Node.js** 22+ (for local development)
- **PostgreSQL** 17+ (if running without Docker)
- **Redis** 7+ (if running without Docker)

### Development Setup

1. **Clone the repository**:
   ```bash
   cd Apps/Ultimate_Messages
   ```

2. **Copy environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start services with Docker Compose**:
   ```bash
   docker-compose up
   ```

4. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - API Docs: http://localhost:3000/api-docs (coming soon)

### Manual Setup (Without Docker)

**Backend**:
```bash
cd backend
npm install
npm run dev
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```

---

## 📋 Project Overview
