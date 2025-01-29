
In this project, I used a MaxPriorityQueue (max-heap) to efficiently manage and retrieve superheroes based on their humility scores. The main reasons for this choice are:

Efficient Sorting: A max-heap allows inserting superheroes in O(log n) time while ensuring the highest humility scores are easily accessible.
Fast Retrieval: When fetching superheroes, the priority queue ensures they are always returned in descending order of humility without needing additional sorting (which would take O(n log n)).
Scalability: If the dataset grows, the priority queue structure remains performant compared to sorting an array every time a new superhero is added.
However, if the dataset becomes too large or if persistent storage is introduced (e.g., a database), an indexed database query would be a better long-term solution than an in-memory heap.

If I had more time, I would:

Persist Data in a Database
Move from an in-memory data store to PostgreSQL or MongoDB, using an ORM like Prisma or TypeORM.
Implement Authentication & Authorization
Require API keys or JWT authentication to limit access.
Improve Error Handling & Validation
Use NestJS Pipes to validate input (ensuring humilityScore is between 1 and 10).
Add global exception handling for better API responses.
Build a Frontend Interface
Create a React frontend to visualize superheroes dynamically.
