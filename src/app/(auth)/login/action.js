export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log({ email });
}
