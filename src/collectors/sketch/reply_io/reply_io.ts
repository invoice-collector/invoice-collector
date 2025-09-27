
import { SketchCollector } from '../../sketchCollector';

export class ReplyIoCollector extends SketchCollector {

    static CONFIG = {
        id: "reply_io",
        name: "reply.io",
        description: "i18n.collectors.reply_io.description",
        version: "0",
        website: "https://run.reply.io/Home/Login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54475.jpg",
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
        entryUrl: "https://run.reply.io/Home/Login?ReturnUrl=%2f",
    }

    constructor() {
        super(ReplyIoCollector.CONFIG);
    }
}
