package carselling.selling.repository.messagerie;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import carselling.selling.entity.messagerie.Message;

public interface MessageRepository extends MongoRepository<Message, String>{
    
    List<Message> findByIdSenderOrIdReceiverOrderByDateTimeSendDesc(String idSender, String idReceiver);
}
