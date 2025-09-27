
import { SketchCollector } from '../../sketchCollector';

export class NewEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "new_energie",
        name: "NEW Energie",
        description: "i18n.collectors.new_energie.description",
        version: "0",
        website: "https://meine.new-energie.de/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90707.jpg",
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
        entryUrl: "https://meine.new-energie.de/portal/",
    }

    constructor() {
        super(NewEnergieCollector.CONFIG);
    }
}
