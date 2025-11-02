/**
 * Netlify Edge Function to force HTTPS
 * This ensures all requests use secure connections
 */
export default async (request: Request, context: any) => {
  const url = new URL(request.url);
  
  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  
  // Continue with the request
  return context.next();
};

export const config = { path: "/*" };

