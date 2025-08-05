export const logEvent = (eventName, data) => {
  const timestamp = new Date().toISOString();
  console.log(`[Logger] ${eventName}`, { timestamp, ...data });

  // Simulate logging to a server if needed
  // fetch('/log', { method: 'POST', body: JSON.stringify(...) });
};
