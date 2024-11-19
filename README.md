# Tech test
- Didn't get around to writing tests as it's quite time consuming setting up a testing environment, I did use catches and logs while problem solving then removed them when I went to start writing tests, but ran out of time.
## How to
- `npm i`
- `npm run dev`
- Is pointing at the default api provided

## Task 1
Q - Review the eurocamp_api database and make notes on the current structure and state of the database. How would you improve it using relational database best practices? We're mainly interested in how you would improve the database theoretically

A - The current database is pretty bare-bones, with just three main tables: users, parcs, and bookings.
Current Structure:
Users: Just stores basic user details (id, name, email)
Parcs: Holds basic park info (id, name, description)
Bookings: Links users and parcs with basic booking info

The main issues that I see:

- There's no way to track when people are actually staying
- Can't handle different types of accommodation
- No way to track if bookings are confirmed, pending, or cancelled
- Missing crucial info about the parks (like location, facilities, etc.)

I'd improve this by adding a more accommodations specific db:

accommodations
- id
- parc_id
- type_id
- capacity
- price_per_night

The bookings table needs way more info:

bookings
- id
- user_id
- accommodation_id
- status_id
- check_in_date
- check_out_date
- created_at
- updated_at

And for the parcs, I'd add:

parcs
- id
- name
- location_id
- created_at
- updated_at

I feel like these changes are good because we now have: 
- Data normalization
- Meaningful foreign keys
- Data that is easier to maintain & query
- Timestamps
- Robustness

## Task 2
Q - Brief explanation of the latest practices in your respective field of expertise.
A - Here are my initial thoughts:
- Foremost I think the biggest change currently happening is adopting a server-first mentality, especially seen through popular frameworks like Nuxt & Next
- Typesafety has taken over, from Javascript having basically none to Typescript almost globally taking over, type security is a real thing now in web development and it continues to grow beyond basic TypeScript usage with additional tools being supported and released constantly.
- The development of UI Architecture has evolved massively from the crutch of basic component libraries, everything is a lot more dynamic now.
- Functional Programming is back and here to stay for web development.
- State Management has evolved beyond using a single store and having more *functional* applications by being more granular and purpose specific.
While there are a lot of trends in webdev, its such a fast flowing environment that the things that last longer than a breath are usually here to stay because they solve real, modern problems and the forethought of every problem is webapps should be: performance, maintanability, accessibility and development speed.
