---
layout: page
title: AWS_Ultimate_Messaging
---
# AWS Ultimate Messaging

A modern, comprehensive SMS messaging platform for Unraid that combines enterprise-grade features with an intuitive interface. Send and receive SMS messages through AWS SNS/Pinpoint with real-time updates, multi-user support, and intelligent auto-replies.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Unraid-orange.svg)

## ✨ Features

### 💬 Bi-Directional Messaging
- **Send & Receive SMS** - Full two-way communication via AWS SNS/Pinpoint
- **Real-time Updates** - WebSocket integration for instant message delivery
- **Conversation Threading** - Messages automatically grouped by contact
- **Message History** - Complete audit trail with timestamps and status

### 🎨 Modern Interface
- **Three-Pane Layout** - Conversations, messages, and composer in one view
- **Dark/Light Theme** - AXYN theme with automatic mode switching
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Intuitive UX** - Clean, modern interface built with React + Tailwind CSS

### 🔐 Multi-User Authentication
- **Role-Based Access** - Admin and User roles with different permissions
- **JWT Authentication** - Secure token-based authentication
- **User Management** - Admin dashboard for managing users
- **Password Security** - Bcrypt hashing with configurable complexity

### 🤖 Intelligent Auto-Replies
- **Keyword Matching** - Trigger replies based on incoming message content
- **Match Types** - Exact, contains, starts with, ends with
- **Priority System** - Control which keywords take precedence
- **Case Sensitivity** - Optional case-sensitive matching
- **Usage Statistics** - Track how often each auto-reply is triggered

### 📊 Comprehensive Management
- **Conversation Search** - Find conversations by name, number, or content
- **Message Filtering** - Filter by status, date range, direction
- **Archive System** - Keep inbox organized without deleting
- **Contact Names** - Assign friendly names to phone numbers
- **Assignment** - Assign conversations to specific users

### 🔒 Security & Reliability
- **Rate Limiting** - Prevent abuse with configurable limits
- **Input Validation** - Comprehensive sanitization of all inputs
- **SQL Injection Protection** - Parameterized queries throughout
- **CORS Configuration** - Secure cross-origin resource sharing
- **Security Headers** - Helmet.js for additional protection

### 📈 Statistics & Insights
- **Message Analytics** - Track sent, received, delivered, failed messages
- **Daily Reports** - See messaging trends over time
- **Cost Estimation** - Estimate AWS costs by country
- **Segment Calculation** - Automatic SMS segment counting
- **Keyword Performance** - Monitor auto-reply effectiveness

## 🚀 Quick Start
