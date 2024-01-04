const api: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const APIS = {
  WAITLIST: {
    JOIN: `${api}/waitlist`,
  },
};
