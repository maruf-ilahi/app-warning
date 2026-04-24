# Shield Exit Pages (GitHub Pages)

This repository hosts **static security exit pages** used by **Shield Exit URLs**.  
When Shield terminates the mobile application based on a configured security policy, the user is redirected to one of these pages in the device’s browser with contextual information passed via query parameters.

The pages are hosted on **GitHub Pages** and are intentionally **informational only**.

---

## Purpose

Shield Exit URLs are designed to:

- Inform the user **why the application was closed**
- Explain **what action (if any) the user can take**
- Provide a **clear, safe, non-accusatory message**

They are **not** intended for:
- Security reporting
- Telemetry or analytics
- Compliance or audit logging

---

## How It Works

1. Shield terminates the app due to a security policy
2. Shield opens the device browser with a configured URL
3. Shield replaces placeholders (e.g. `%REASON%`, `%MODEL%`) with real values
4. A static GitHub Pages site reads these values and displays an explanation

Example URL opened by Shield: