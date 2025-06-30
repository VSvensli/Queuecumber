# Queuecumber

🥒 Event-Driven Notification System with TypeScript, SQS, SNS, and Postgres

Build a simplified microservice architecture that demonstrates an event-driven pipeline:

1. Receives events via a webhook (HTTP).
2. Publishes those events to an SNS topic.
3. Routes events to multiple SQS queues subscribed to the topic.
4. Consumes those events asynchronously.
5. Persists them into a PostgreSQL database via Amazon RDS.
6. Optionally logs or alerts based on event type.

---

## Project Structure

```
│
├── src/
│   ├── consumers/
│   │   ├── loggerConsumer.ts       # Logs event details
│   │   └── databaseConsumer.ts     # Writes events to local PostgreSQL
│   ├── publisher/
│   │   └── snsPublisher.ts         # Publishes to SNS
│   ├── server/
│   │   └── webhookReceiver.ts      # HTTP webhook for events
│   ├── services/
│   │   └── db.ts                   # Postgres client and table schema
│   └── types/
│       └── events.ts              # TypeScript event interfaces
│
├── docker/
│   └── postgres.Dockerfile         # Optional: local Postgres setup
│
├── scripts/
│   └── setupAWSResources.sh        # Bootstrap SNS & SQS
│
├── package.json
├── tsconfig.json
└── README.md
```

## ✅ To-Do List for Project Queuecumber 🥒

- [x] 🔧 **Setup Project**
      Initialize TypeScript project, install dependencies, and create base folder structure.

- [ ] 🌐 **Create Webhook Receiver**  
       Build a Hapi server that accepts JSON events via POST, validates structure.

- [ ] 📤 **Implement SNS Publisher**  
       Use `@aws-sdk/client-sns` to publish incoming events to the SNS topic.

- [ ] 📬 **Build SQS Logger Consumer**
      Poll an SQS queue and log each event's contents to the console.

- [ ] 🗃️ **Build SQS Postgres Consumer**
      Store relevant fields from incoming events into the local PostgreSQL DB.

- [ ] 🛢️ **Setup Local PostgreSQL**  
       Run a Postgres container via Docker and create necessary tables/schema.

- [ ] 🧪 **Define Event Types**
      Create reusable TypeScript interfaces/types for `user_signed_up`, `order_placed`, etc.

- [ ] 🧪 **Write Unit Tests**
      Add Jest-based tests for publisher and consumer logic.

- [ ] 🧰 **Write AWS Infra Script**  
       Bash or Node.js script to create SNS topic, SQS queues, and subscriptions.

- [ ] 📘 **Finalize Documentation**  
       Update README with setup instructions, architecture diagram (optional), and usage notes.

## 🧾 Supported Events

Each event is a JSON payload like:

```json
{
  "type": "order_placed",
  "payload": {
    "order_id": "xyz789",
    "user_id": "123",
    "total": 49.99,
    "timestamp": "2025-06-25T10:25:00Z"
  }
}
```
