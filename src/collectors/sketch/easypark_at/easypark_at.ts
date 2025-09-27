
import { SketchCollector } from '../../sketchCollector';

export class EasyparkAtCollector extends SketchCollector {

    static CONFIG = {
        id: "easypark_at",
        name: "easypark(.at)",
        description: "i18n.collectors.easypark_at.description",
        version: "0",
        website: "https://easypark.at/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/852275.jpg",
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
        entryUrl: "https://easypark.at/de",
    }

    constructor() {
        super(EasyparkAtCollector.CONFIG);
    }
}
