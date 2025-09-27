
import { SketchCollector } from '../../sketchCollector';

export class ReselloCollector extends SketchCollector {

    static CONFIG = {
        id: "resello",
        name: "Resello",
        description: "i18n.collectors.resello.description",
        version: "0",
        website: "https://www.resello.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/511284.jpg",
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
        entryUrl: "https://www.resello.com/",
    }

    constructor() {
        super(ReselloCollector.CONFIG);
    }
}
