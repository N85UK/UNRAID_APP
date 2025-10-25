---
layout: default
title: N85UK UNRAID Applications
---

<div class="hero">
  <h1>UNRAID Applications</h1>
  <p class="subtitle">Production-ready Docker applications for UNRAID servers</p>
</div>

<div class="applications">
  <div class="app-card">
    <div class="app-header">
      <img src="icons/x-webhook-receiver.png" alt="X Webhook Receiver" class="app-icon">
      <h2>X Webhook Receiver</h2>
    </div>
    <p class="app-description">Universal webhook processing platform with support for UniFi Protect, GitHub, and custom webhooks. Transform, validate, and route webhook events with powerful mapping and alert capabilities.</p>
    
    <div class="app-features">
      <h3>Key Features</h3>
      <ul>
        <li>🔔 UniFi Protect smart detection alerts</li>
        <li>🔄 Universal webhook transformation</li>
        <li>📊 Real-time event dashboard</li>
        <li>🔐 HMAC signature verification</li>
        <li>📱 SMS/Email notifications via AWS</li>
        <li>🗄️ PostgreSQL event storage</li>
      </ul>
    </div>

    <div class="app-links">
      <a href="https://github.com/N85UK/UNRAID_APP" class="btn btn-primary">View Source</a>
      <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/x-webhook-receiver.xml" class="btn btn-secondary">Install Template</a>
      <a href="https://forums.unraid.net/" class="btn btn-tertiary">Support Forum</a>
    </div>

    <div class="app-tech">
      <span class="badge">Python</span>
      <span class="badge">FastAPI</span>
      <span class="badge">React</span>
      <span class="badge">PostgreSQL</span>
    </div>
  </div>

  <div class="app-card">
    <div class="app-header">
      <img src="icons/aws-ultimate-messaging.png" alt="AWS Ultimate Messaging" class="app-icon">
      <h2>AWS Ultimate Messaging</h2>
    </div>
    <p class="app-description">Professional SMS/MMS messaging platform powered by AWS Pinpoint. Two-way messaging, contact management, conversation threading, and automated keyword responses for businesses.</p>
    
    <div class="app-features">
      <h3>Key Features</h3>
      <ul>
        <li>💬 Two-way SMS/MMS messaging</li>
        <li>👥 Contact management system</li>
        <li>🧵 Threaded conversations</li>
        <li>🤖 Automated keyword responses</li>
        <li>📸 Media attachment support</li>
        <li>☁️ AWS Pinpoint integration</li>
      </ul>
    </div>

    <div class="app-links">
      <a href="https://github.com/N85UK/UNRAID_APP" class="btn btn-primary">View Source</a>
      <a href="https://github.com/N85UK/UNRAID_APP/blob/main/templates/aws-ultimate-messaging.xml" class="btn btn-secondary">Install Template</a>
      <a href="https://forums.unraid.net/" class="btn btn-tertiary">Support Forum</a>
    </div>

    <div class="app-tech">
      <span class="badge">Node.js</span>
      <span class="badge">Express</span>
      <span class="badge">React</span>
      <span class="badge">MySQL</span>
      <span class="badge">AWS Pinpoint</span>
    </div>
  </div>
</div>

<div class="installation-section">
  <h2>Quick Installation</h2>
  <div class="install-steps">
    <div class="step">
      <div class="step-number">1</div>
      <h3>Add Template Repository</h3>
      <p>In UNRAID, go to <strong>Docker → Add Container → Template repositories</strong></p>
      <code>https://github.com/N85UK/UNRAID_APP</code>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <h3>Search & Install</h3>
      <p>Search for "X Webhook Receiver" or "AWS Ultimate Messaging" in the Apps tab</p>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <h3>Configure & Deploy</h3>
      <p>Fill in the required environment variables and deploy your container</p>
    </div>
  </div>
</div>

<div class="support-section">
  <h2>Support & Documentation</h2>
  <div class="support-grid">
    <div class="support-card">
      <h3>📚 Documentation</h3>
      <p>Comprehensive guides and API documentation for each application</p>
      <a href="https://github.com/N85UK/UNRAID_APP">View Docs</a>
    </div>
    
    <div class="support-card">
      <h3>🐛 Bug Reports</h3>
      <p>Found an issue? Report bugs via GitHub Issues</p>
      <a href="https://github.com/N85UK/UNRAID_APP/issues/new/choose">Report Issue</a>
    </div>
    
    <div class="support-card">
      <h3>💬 Community</h3>
      <p>Join the discussion on UNRAID forums</p>
      <a href="https://forums.unraid.net/">Forum</a>
    </div>
    
    <div class="support-card">
      <h3>✨ Feature Requests</h3>
      <p>Suggest new features and improvements</p>
      <a href="https://github.com/N85UK/UNRAID_APP/issues/new/choose">Request Feature</a>
    </div>
  </div>
</div>

<footer>
  <p>Built with ❤️ for the UNRAID community | <a href="https://github.com/N85UK">@N85UK</a></p>
  <p class="small">Licensed under MIT | Docker images hosted on <a href="https://github.com/N85UK?tab=packages">GitHub Container Registry</a></p>
</footer>
