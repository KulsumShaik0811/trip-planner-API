# ✈️ Trip Planner REST API

A RESTful API built with **Node.js, Express.js, MongoDB, and Mongoose** to manage travel plans. Users can create, retrieve, update, and delete trips, filter trips by travel mode, sort by budget, and retrieve booked trips.

## 🚀 Features

* **Create Trips:** Add trips with destination, budget, travel mode, booking status, and travel date.
* **View Trips:** Retrieve all trips or a specific trip by ID.
* **Update Trips:** Modify existing trip details.
* **Delete Trips:** Remove trips from the database.
* **Filter Trips:** Filter trips by travel mode.
* **Sort Trips:** Sort trips by budget in ascending order.
* **Booked Trips:** Retrieve trips that have been booked.
* **Data Validation:** Validate required fields, budget limits, and supported travel modes.
* **Error Handling:** Handle invalid IDs, missing trips, validation errors, and server errors.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Backend Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment Variables:** dotenv
* **API Testing:** Postman
* **Version Control:** Git and GitHub

## 📁 Project Structure

```text
trip-planner-api/
├── config/
│   └── db.js
├── controllers/
│   └── tripControllers.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── Trip.js
├── routes/
│   └── trip.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/trip-planner-api.git
cd trip-planner-api
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install dependencies

```bash
npm install
```

If the required packages are not already installed, run:

```bash
npm install express mongoose dotenv
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection URI.

**Important:** Never commit your `.env` file or expose your database credentials publicly.

### 4. Start the server

Use the start command configured in your `package.json`. If you have not configured a script yet, you can run:

```bash
node index.js
```

The API will run at:

```text
http://localhost:4000
```

## 📌 API Endpoints

Base URL: `http://localhost:4000`

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/`             | Check server status   |
| POST   | `/trips`        | Create a trip         |
| GET    | `/trips`        | Retrieve all trips    |
| GET    | `/trips/:id`    | Retrieve a trip by ID |
| PUT    | `/trips/:id`    | Update a trip         |
| DELETE | `/trips/:id`    | Delete a trip         |
| GET    | `/trips/booked` | Retrieve booked trips |

### Query Parameters

**Filter by travel mode**

```http
GET /trips?mode=train
```

Supported modes: `bus`, `train`, `flight`, `bike`.

**Sort by budget**

```http
GET /trips?sort=budget
```

Returns trips in ascending order of budget.

**Combine filtering and sorting**

```http
GET /trips?mode=train&sort=budget
```

Returns train trips sorted from lowest to highest budget.

## 📝 Trip Data Model

Each trip contains the following fields:

| Field      | Type    | Validation                                    |
| ---------- | ------- | --------------------------------------------- |
| `place`    | String  | Required; trims surrounding whitespace        |
| `budget`   | Number  | Required; minimum 500 and maximum 500000      |
| `mode`     | String  | Required; `bus`, `train`, `flight`, or `bike` |
| `booked`   | Boolean | Defaults to `false`                           |
| `tripDate` | Date    | Required                                      |

Mongoose also generates an `_id` and timestamps for each document.

## 📤 Example API Request

### Create a Trip

**Method:** `POST`

```http
http://localhost:4000/trips
```

Request body — JSON:

```json
{
  "place": "Araku Valley",
  "budget": 6000,
  "mode": "train",
  "booked": false,
  "tripDate": "2026-11-14"
}
```

A successful request returns `201 Created` and the saved trip.

### Example Response

```json
{
  "place": "Araku Valley",
  "budget": 6000,
  "mode": "train",
  "booked": false,
  "tripDate": "2026-11-14T00:00:00.000Z"
}
```

The actual response also includes the generated `_id`, `createdAt`, `updatedAt`, and `__v` fields.

## ⚠️ Error Handling

The API handles common errors with appropriate HTTP status codes:

| Status Code                 | Meaning                        |
| --------------------------- | ------------------------------ |
| `200 OK`                    | Request successful             |
| `201 Created`               | Trip created successfully      |
| `400 Bad Request`           | Invalid ID or validation error |
| `404 Not Found`             | Requested trip does not exist  |
| `500 Internal Server Error` | Unexpected server error        |

## 🧪 Testing

Use **Postman** to test the API endpoints.

Recommended tests:

1. Create a trip with valid data.
2. Retrieve all trips.
3. Filter trips by travel mode.
4. Sort trips by budget.
5. Retrieve a trip using its ID.
6. Update an existing trip.
7. Delete a trip.
8. Test invalid IDs and invalid trip data.
9. Retrieve only booked trips.

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

* Building RESTful APIs using Express.js.
* Implementing CRUD operations.
* Integrating MongoDB using Mongoose.
* Creating schemas and validating data.
* Implementing query-based filtering and sorting.
* Using middleware for centralized error handling.
* Testing APIs with Postman.
* Managing configuration through environment variables.

## 👩‍💻 Author

**Kulsum Shaik**

GitHub: [KulsumShaik0811](https://github.com/KulsumShaik0811)

---

*Built as a backend development practice project to strengthen REST API development, database integration, and server-side programming skills.*
