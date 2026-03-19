export function projectFactory(name = "New Project") {
  return {
    id: crypto.randomUUID(),
    name,
    tasks: [],
  };
}
