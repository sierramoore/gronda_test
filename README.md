This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Viewing 

Run the following commands in your command line:

```bash
1) git clone https://github.com/sierramoore/gronda_test.git
2) cd gronda_test
3) npm install
4) npm run build
5) npm run start
```

To run the tests, run the following command in a second tab

```bash
1) npm run test
```
Then open [http://localhost:3000](http://localhost:3000) in your browser to view this project.

### About 
This project is comprised of a back end api and a single page front end.
The API has two end points: The first is the companies which lists the companies that are available for viewing.

The second end point is the kpis which takes a company id on the slug and a filter on the request and body. This end point calculates the time related data to show on the front end.

The front end is comprised of three components: statistics for showing each kpi, a drop down for the filtering the data, and a table component to display and choose companies.

The components are presentation only and all the data handling is managed on the view by callback functions on the components.

I have implemented testing using the jest library, the testing is done to ensure they correctly react to their inputs, use the callback functions, and show their outputs.