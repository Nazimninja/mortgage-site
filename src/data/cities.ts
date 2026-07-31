export interface City {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  medianPrice: number;
  medianIncome: number;
  propertyTax: number;
  appreciation: number;
}

export const cities: City[] = [
  { slug: 'austin-tx', name: 'Austin', state: 'Texas', stateCode: 'TX', medianPrice: 550000, medianIncome: 82000, propertyTax: 0.0181, appreciation: 4.2 },
  { slug: 'miami-fl', name: 'Miami', state: 'Florida', stateCode: 'FL', medianPrice: 620000, medianIncome: 65000, propertyTax: 0.0097, appreciation: 5.1 },
  { slug: 'phoenix-az', name: 'Phoenix', state: 'Arizona', stateCode: 'AZ', medianPrice: 415000, medianIncome: 70000, propertyTax: 0.0062, appreciation: 6.3 },
  { slug: 'denver-co', name: 'Denver', state: 'Colorado', stateCode: 'CO', medianPrice: 560000, medianIncome: 80000, propertyTax: 0.0051, appreciation: 3.8 },
  { slug: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateCode: 'TN', medianPrice: 480000, medianIncome: 72000, propertyTax: 0.0068, appreciation: 5.5 },
  { slug: 'seattle-wa', name: 'Seattle', state: 'Washington', stateCode: 'WA', medianPrice: 820000, medianIncome: 102000, propertyTax: 0.0093, appreciation: 3.2 },
  { slug: 'los-angeles-ca', name: 'Los Angeles', state: 'California', stateCode: 'CA', medianPrice: 980000, medianIncome: 78000, propertyTax: 0.0074, appreciation: 2.9 },
  { slug: 'san-francisco-ca', name: 'San Francisco', state: 'California', stateCode: 'CA', medianPrice: 1350000, medianIncome: 130000, propertyTax: 0.0074, appreciation: 1.8 },
  { slug: 'new-york-ny', name: 'New York City', state: 'New York', stateCode: 'NY', medianPrice: 780000, medianIncome: 76000, propertyTax: 0.0088, appreciation: 2.1 },
  { slug: 'chicago-il', name: 'Chicago', state: 'Illinois', stateCode: 'IL', medianPrice: 340000, medianIncome: 67000, propertyTax: 0.0224, appreciation: 3.0 },
  { slug: 'charlotte-nc', name: 'Charlotte', state: 'North Carolina', stateCode: 'NC', medianPrice: 380000, medianIncome: 68000, propertyTax: 0.0084, appreciation: 6.1 },
  { slug: 'raleigh-nc', name: 'Raleigh', state: 'North Carolina', stateCode: 'NC', medianPrice: 420000, medianIncome: 74000, propertyTax: 0.0085, appreciation: 5.8 },
  { slug: 'dallas-tx', name: 'Dallas', state: 'Texas', stateCode: 'TX', medianPrice: 390000, medianIncome: 72000, propertyTax: 0.0178, appreciation: 4.7 },
  { slug: 'houston-tx', name: 'Houston', state: 'Texas', stateCode: 'TX', medianPrice: 315000, medianIncome: 63000, propertyTax: 0.0175, appreciation: 3.4 },
  { slug: 'atlanta-ga', name: 'Atlanta', state: 'Georgia', stateCode: 'GA', medianPrice: 410000, medianIncome: 71000, propertyTax: 0.0092, appreciation: 5.2 },
  { slug: 'tampa-fl', name: 'Tampa', state: 'Florida', stateCode: 'FL', medianPrice: 390000, medianIncome: 60000, propertyTax: 0.0093, appreciation: 6.0 },
  { slug: 'orlando-fl', name: 'Orlando', state: 'Florida', stateCode: 'FL', medianPrice: 365000, medianIncome: 58000, propertyTax: 0.0094, appreciation: 5.6 },
  { slug: 'san-diego-ca', name: 'San Diego', state: 'California', stateCode: 'CA', medianPrice: 890000, medianIncome: 92000, propertyTax: 0.0073, appreciation: 3.6 },
  { slug: 'portland-or', name: 'Portland', state: 'Oregon', stateCode: 'OR', medianPrice: 510000, medianIncome: 78000, propertyTax: 0.0099, appreciation: 2.4 },
  { slug: 'minneapolis-mn', name: 'Minneapolis', state: 'Minnesota', stateCode: 'MN', medianPrice: 350000, medianIncome: 72000, propertyTax: 0.0118, appreciation: 3.1 },
  { slug: 'columbus-oh', name: 'Columbus', state: 'Ohio', stateCode: 'OH', medianPrice: 290000, medianIncome: 62000, propertyTax: 0.0173, appreciation: 4.8 },
  { slug: 'indianapolis-in', name: 'Indianapolis', state: 'Indiana', stateCode: 'IN', medianPrice: 265000, medianIncome: 58000, propertyTax: 0.0084, appreciation: 4.5 },
  { slug: 'kansas-city-mo', name: 'Kansas City', state: 'Missouri', stateCode: 'MO', medianPrice: 255000, medianIncome: 60000, propertyTax: 0.0113, appreciation: 4.3 },
  { slug: 'memphis-tn', name: 'Memphis', state: 'Tennessee', stateCode: 'TN', medianPrice: 185000, medianIncome: 48000, propertyTax: 0.0126, appreciation: 3.5 },
  { slug: 'louisville-ky', name: 'Louisville', state: 'Kentucky', stateCode: 'KY', medianPrice: 240000, medianIncome: 57000, propertyTax: 0.0093, appreciation: 3.8 },
  { slug: 'san-antonio-tx', name: 'San Antonio', state: 'Texas', stateCode: 'TX', medianPrice: 285000, medianIncome: 57000, propertyTax: 0.0168, appreciation: 4.0 },
  { slug: 'jacksonville-fl', name: 'Jacksonville', state: 'Florida', stateCode: 'FL', medianPrice: 310000, medianIncome: 60000, propertyTax: 0.0089, appreciation: 5.0 },
  { slug: 'oklahoma-city-ok', name: 'Oklahoma City', state: 'Oklahoma', stateCode: 'OK', medianPrice: 210000, medianIncome: 56000, propertyTax: 0.0112, appreciation: 3.2 },
  { slug: 'pittsburgh-pa', name: 'Pittsburgh', state: 'Pennsylvania', stateCode: 'PA', medianPrice: 195000, medianIncome: 58000, propertyTax: 0.0156, appreciation: 3.0 },
  { slug: 'st-louis-mo', name: 'St. Louis', state: 'Missouri', stateCode: 'MO', medianPrice: 210000, medianIncome: 57000, propertyTax: 0.0140, appreciation: 2.8 },
];
