export type JoinWaitlistTypes = {
  full_name: string;
  email: string;
};

export type ProviderState ={
  count: number
  next: any
  previous: any
  results: ProviderTypes[]
}

export type ProviderTypes ={
  id: number
  name: string
  payment_options: PaymentOptionTypes[]
  countries: string[]
  bio: string
  about: string
  accepted_methods: string
  target_audience: string
  logo: string
  average_rating: number
}

export type PaymentOptionTypes ={
  name: string
  logo: string
}