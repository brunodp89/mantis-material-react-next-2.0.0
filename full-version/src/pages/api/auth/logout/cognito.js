export default async function handler(req, res) {
  const returnTo = encodeURI(`${process.env.NEXTAUTH_URL}/api/auth/callback/cognito`);
  const logoutTo = encodeURI(`${process.env.NEXTAUTH_URL}/login`);
  res.redirect(
    `https://${process.env.COGNITO_DOMAIN}/logout?response_type=code&client_id=${process.env.COGNITO_CLIENT_ID}&redirect_uri=${returnTo}&logout_uri=${logoutTo}`
  );
}
