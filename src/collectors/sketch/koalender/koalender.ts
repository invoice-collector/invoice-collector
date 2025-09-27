
import { SketchCollector } from '../../sketchCollector';

export class KoalenderCollector extends SketchCollector {

    static CONFIG = {
        id: "koalender",
        name: "Koalender",
        description: "i18n.collectors.koalender.description",
        version: "0",
        website: "https://koalendar.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175415.jpg",
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
        entryUrl: "https://koalendar.com/dashboard",
    }

    constructor() {
        super(KoalenderCollector.CONFIG);
    }
}
