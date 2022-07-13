export default function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard"
}

export function getFullYear() {
    return new Date().getFullYear();
  }

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD"
}