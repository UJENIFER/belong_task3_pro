# Article Management API

## Technologies
- Node.js
- Express.js
- MySQL
- REST API

## Endpoints
### POST /api/articles
Create a new article

### GET /api/articles/:id
Get article by ID

### GET /api/articles
Get all articles

### PUT /api/articles/:id
Update article's rating and status

### DELETE /api/articles/:id
Delete article

## Environment Variables
Rename `.env.example` to `.env` and provide your database credentials.

## SQL
Run `sql/create_articles_table.sql` to create the database and table.
