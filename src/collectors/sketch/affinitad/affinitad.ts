
import { SketchCollector } from '../../sketchCollector';

export class AffinitadCollector extends SketchCollector {

    static CONFIG = {
        id: "affinitad",
        name: "affinitAD",
        description: "i18n.collectors.affinitad.description",
        version: "0",
        website: "http://www.affinitad.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52745.jpg",
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
        entryUrl: "http://www.affinitad.de/",
    }

    constructor() {
        super(AffinitadCollector.CONFIG);
    }
}
