
import { SketchCollector } from '../../sketchCollector';

export class BookbeatDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bookbeat_de",
        name: "BookBeat.de",
        description: "i18n.collectors.bookbeat_de.description",
        version: "0",
        website: "https://www.bookbeat.de/konto/belege",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778122.jpg",
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
        entryUrl: "https://www.bookbeat.de/konto/belege",
    }

    constructor() {
        super(BookbeatDeCollector.CONFIG);
    }
}
