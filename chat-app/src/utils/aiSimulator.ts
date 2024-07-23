const messages = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Nesciunt tempore natus esse quisquam mollitia culpa quo repellat.",
  "Quod, blanditiis!",
] as const;

export function generateFixedMessage(): string {
  const randomIndex = Math.floor(Math.random() * messages.length)

  return messages[randomIndex];
}
