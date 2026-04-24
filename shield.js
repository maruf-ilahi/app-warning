const params = new URLSearchParams(window.location.search);
const reason = params.get("reason");

// Friendly messages for users
const reasons = {
    "00": {
        title: "Jailbroken Device Detected",
        message: "This device does not meet the required security standards.",
        event: "DEVICE_JAILBREAK",
        code: "SEC-00"
    },
    "01": {
        title: "Debugging Detected",
        message: "The application cannot run while debugging tools are active.",
        event: "DEBUGGER_DETECTED",
        code: "SEC-01"
    },
    "03": {
        title: "Screenshot Detected",
        message: "Screenshots are restricted for security reasons.",
        event: "SCREENSHOT_BLOCKED",
        code: "SEC-03"
    },
    "06": {
        title: "Screen Recording Detected",
        message: "Screen recording is not permitted for this application.",
        event: "SCREEN_RECORDING",
        code: "SEC-06"
    },
    "08": {
        title: "Emulator Detected",
        message: "This application cannot run in an emulator environment.",
        event: "EMULATOR_DETECTED",
        code: "SEC-08"
    }
};

// Default fallback
const data = reasons[reason] || {
    title: "Security Policy Triggered",
    message: "This application session was restricted due to a security policy.",
    event: "SECURITY_POLICY",
    code: "SEC-XX"
};

document.getElementById("title").textContent = data.title;
document.getElementById("message").textContent = data.message;
document.getElementById("event").textContent = `Event: ${data.event}`;
document.getElementById("code").textContent = `Code: ${data.code}`;