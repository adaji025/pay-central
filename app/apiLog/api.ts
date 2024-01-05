const api: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const gatewayApi: string | undefined = process.env.NEXT_PUBLIC_GATEWAY_URL;

export const APIS = {
  WAITLIST: {
    JOIN: `${api}/waitlist`,
  },
  GET_PROVIDERS: `${gatewayApi}`
};
