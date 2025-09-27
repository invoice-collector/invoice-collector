
import { SketchCollector } from '../../sketchCollector';

export class BookbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "bookbeat",
        name: "BookBeat",
        description: "i18n.collectors.bookbeat.description",
        version: "0",
        website: "http://www.bookbeat.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49718.jpg",
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
        entryUrl: "http://www.bookbeat.com",
    }

    constructor() {
        super(BookbeatCollector.CONFIG);
    }
}
