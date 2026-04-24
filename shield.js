const params = new URLSearchParams(window.location.search);
const reason = params.get("reason");

const scenario = document.body.dataset.scenario;

// Central configuration
const scenarios = {
    installer: {
        "default": {
            title: "Security Restriction",
            subtitle: "This installation could not be verified.",
            message:
                "For your security, please reinstall the application from an official source.",
            event: "INSTALLER_VERIFICATION_FAILED",
            code: "SEC-UI-01"
        }
    },

    keyboard: {
        "default": {
            title: "Unverified Input Detected",
            subtitle: "An input method could not be verified.",
            message:
                "For your security, please remove any untrusted keyboards and try again.",
            event: "INPUT_INTEGRITY_FAILED",
            code: "SEC-UI-02"
        }
    }
};

const pageConfig = scenarios[scenario]?.[reason]
    || scenarios[scenario]?.default
    || {
    title: "Security Policy Triggered",
    subtitle: "This configuration is not supported.",
    message: "This session was restricted for security reasons.",
    event: "SECURITY_POLICY",
    code: "SEC-XX"
};

document.getElementById("title").textContent = pageConfig.title;
document.getElementById("subtitle").textContent = pageConfig.subtitle;
document.getElementById("message").textContent = pageConfig.message;
document.getElementById("event").textContent = `Event: ${pageConfig.event}`;
document.getElementById("code").textContent = `Code: ${pageConfig.code}`;