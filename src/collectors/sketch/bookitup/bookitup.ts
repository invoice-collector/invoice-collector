
import { SketchCollector } from '../../sketchCollector';

export class BookitupCollector extends SketchCollector {

    static CONFIG = {
        id: "bookitup",
        name: "Bookitup",
        description: "i18n.collectors.bookitup.description",
        version: "0",
        website: "https://app.bookitup.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178787.jpg",
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
        entryUrl: "https://app.bookitup.de/login",
    }

    constructor() {
        super(BookitupCollector.CONFIG);
    }
}
