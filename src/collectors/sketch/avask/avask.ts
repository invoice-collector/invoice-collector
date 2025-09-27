
import { SketchCollector } from '../../sketchCollector';

export class AvaskCollector extends SketchCollector {

    static CONFIG = {
        id: "avask",
        name: "AVASK",
        description: "i18n.collectors.avask.description",
        version: "0",
        website: "https://clientportal.avask.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015059.jpg",
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
        entryUrl: "https://clientportal.avask.com",
    }

    constructor() {
        super(AvaskCollector.CONFIG);
    }
}
