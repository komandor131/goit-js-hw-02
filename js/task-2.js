function formatMessage(message, maxLength) {
    const stringMessage = message.slice(0, maxLength);
    if (message.length <= maxLength) {
        return message
    } else {
        return `${stringMessage}...`
    }
}