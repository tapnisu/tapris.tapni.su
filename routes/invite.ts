export function handler(_req: Request): Response {
  const INVITE_URL =
    "https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334";

  return Response.redirect(INVITE_URL, 307);
}
