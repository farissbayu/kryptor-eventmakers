export async function createEventAction(_, formData) {
  const eventDate = formData.get("eventDate");

  console.log(eventDate);
}
