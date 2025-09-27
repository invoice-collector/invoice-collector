
import { SketchCollector } from '../../sketchCollector';

export class HogrefeCollector extends SketchCollector {

    static CONFIG = {
        id: "hogrefe",
        name: "Hogrefe",
        description: "i18n.collectors.hogrefe.description",
        version: "0",
        website: "https://www.hogrefe.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132272.jpg",
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
        entryUrl: "https://www.hogrefe.com/de/",
    }

    constructor() {
        super(HogrefeCollector.CONFIG);
    }
}
