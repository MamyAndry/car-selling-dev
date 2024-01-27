----NO SQL
use messagerie;

db.createCollection("messages", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sender", "id_sender", "receiver", "id_receiver", "content", "date_time_send"],
      properties: {
        sender: {
          bsonType: "string",
          description: "Sender's name",
        },
        id_sender: {
          bsonType: "string",
          description: "Sender's ID",
        },
        receiver: {
          bsonType: "string",
          description: "Receiver's name",
        },
        id_receiver: {
          bsonType: "string",
          description: "Receiver's ID",
        },
        content: {
          bsonType: "string",
          description: "Message content",
        },
        date_time_send: {
          bsonType: "date",
          description: "Timestamp of when the message was sent",
        },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});

// Insert a document without an auto-incrementing field
db.messages.insertOne({
  sender: "John",
  id_sender: "123",
  receiver: "Alice",
  id_receiver: "456",
  content: "Hello, how are you?",
  date_time_send: new Date(),
});

