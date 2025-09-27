
import { SketchCollector } from '../../sketchCollector';

export class ChatbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "chatbase",
        name: "Chatbase",
        description: "i18n.collectors.chatbase.description",
        version: "0",
        website: "https://pay.chatbase.co/p/session/live_YWNjdF8xTVhTYUNBV1dvUEpGTDNRLF9Pc1NIdUZuYWFEMlIzWU1sZVVPWldvRDB6SlpCc0530100uq5TRkbG",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220153.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://pay.chatbase.co/p/session/live_YWNjdF8xTVhTYUNBV1dvUEpGTDNRLF9Pc1NIdUZuYWFEMlIzWU1sZVVPWldvRDB6SlpCc0530100uq5TRkbG",
    }

    constructor() {
        super(ChatbaseCollector.CONFIG);
    }
}
