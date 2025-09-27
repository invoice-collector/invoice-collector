
import { SketchCollector } from '../../sketchCollector';

export class MentionMeCollector extends SketchCollector {

    static CONFIG = {
        id: "mention_me",
        name: "Mention Me",
        description: "i18n.collectors.mention_me.description",
        version: "0",
        website: "https://mention-me.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8757.jpg",
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
        entryUrl: "https://mention-me.com/login",
    }

    constructor() {
        super(MentionMeCollector.CONFIG);
    }
}
