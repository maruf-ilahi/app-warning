const params = new URLSearchParams(window.location.search);
const reason = params.get("reason");

// Mapping of Shield shutdown reasons
const reasonMap = {
    "00": {
        title: "Device Security Restriction",
        subtitle: "This device does not meet security requirements.",
        message: "The application cannot run on a jailbroken device.",
        event: "DEVICE_JAILBREAK",
        code: "SEC-00"
    },
    "01": {
        title: "Debugging Detected",
        subtitle: "Debugging tools are active.",
        message: "The application cannot run while being debugged.",
        event: "DEBUGGER_DETECTED",
        code: "SEC-01"
    },
    "03": {
        title: "Screenshot Detected",
        subtitle: "Screenshots are restricted.",
        message: "Screenshots are not permitted for this application.",
        event: "SCREENSHOT_DETECTED",
        code: "SEC-03"
    },
    "04": {
        title: "Instrumentation Detected",
        subtitle: "The runtime environment could not be verified.",
        message: "An injected library was detected.",
        event: "INJECTED_LIBRARY",
        code: "SEC-04"
    },
    "05": {
        title: "Hooking Framework Detected",
        subtitle: "The input or runtime environment is not supported.",
        message: "Modified frameworks are not permitted.",
        event: "HOOKING_FRAMEWORK",
        code: "SEC-05"
    },
    "06": {
        title: "Screen Recording Detected",
        subtitle: "Screen recording is active.",
        message: "Screen recording is not permitted for this application.",
        event: "SCREEN_RECORDING",
        code: "SEC-06"
    },
    "07": {
        title: "Unsupported Platform",
        subtitle: "This application is running on macOS.",
        message: "This application is not supported on this platform.",
        event: "MACOS_RUNTIME",
        code: "SEC-07"
    },
    "08": {
        title: "Emulator Detected",
        subtitle: "This environment is not supported.",
        message: "The application cannot run in an emulator.",
        event: "EMULATOR_DETECTED",
        code: "SEC-08"
    },
    "09": {
        title: "Developer Mode Enabled",
        subtitle: "Developer Mode is active.",
        message: "The application cannot run while Developer Mode is enabled.",
        event: "DEVELOPER_MODE",
        code: "SEC-09"
    }
};

// Fallback
const data = reasonMap[reason] || {
    title: "Security Policy Triggered",
    subtitle: "This session could not continue.",
    message: "The application was closed due to a security policy.",
    event: "SECURITY_POLICY",
    code: "SEC-XX"
};

// Populate UI
document.getElementById("title").textContent = data.title;
document.getElementById("subtitle").textContent = data.subtitle;
document.getElementById("message").textContent = data.message;
document.getElementById("event").textContent = `Event: ${data.event}`;
document.getElementById("code").textContent = `Code: ${data.code}`;

// Debug output (all received parameters)
const debugLines = [];
params.forEach((value, key) => {
    debugLines.push(`${key}: ${value}`);
});

document.getElementById("debug").textContent =
    debugLines.length > 0
        ? debugLines.join("\n")
        : "No query parameters received.";