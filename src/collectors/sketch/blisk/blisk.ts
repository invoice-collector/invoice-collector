
import { SketchCollector } from '../../sketchCollector';

export class BliskCollector extends SketchCollector {

    static CONFIG = {
        id: "blisk",
        name: "blisk",
        description: "i18n.collectors.blisk.description",
        version: "0",
        website: "https://app.blisk.io/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178526.jpg",
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
        entryUrl: "https://app.blisk.io/account",
    }

    constructor() {
        super(BliskCollector.CONFIG);
    }
}
