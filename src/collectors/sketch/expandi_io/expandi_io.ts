
import { SketchCollector } from '../../sketchCollector';

export class ExpandiIoCollector extends SketchCollector {

    static CONFIG = {
        id: "expandi_io",
        name: "EXPANDI.IO",
        description: "i18n.collectors.expandi_io.description",
        version: "0",
        website: "https://expandi.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532729.jpg",
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
        entryUrl: "https://expandi.io/",
    }

    constructor() {
        super(ExpandiIoCollector.CONFIG);
    }
}
