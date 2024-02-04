import { APIGatewayEvent, Context, SNSEvent } from "aws-lambda";
import { main } from "./handler.js";

main({
    body: JSON.stringify({ messages: [
        { text: 'tell me a joke', sender: 'user' }      
    ]})
} as APIGatewayEvent, {} as Context)
.catch(e => {
    console.error(e);
    debugger;
})
