export function taskFactory({
  title = "",
  description = "",
  date = "",
  priority = "low",
}) {
  return {
    title,
    id: crypto.randomUUID(),
    description,
    date,
    priority,
    completed: false,
  };
}
