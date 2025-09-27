
import { SketchCollector } from '../../sketchCollector';

export class CorrentlyCollector extends SketchCollector {

    static CONFIG = {
        id: "corrently",
        name: "Corrently",
        description: "i18n.collectors.corrently.description",
        version: "0",
        website: "https://corrently.de/service/quittung-list.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920852.jpg",
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
        entryUrl: "https://corrently.de/service/quittung-list.html",
    }

    constructor() {
        super(CorrentlyCollector.CONFIG);
    }
}
