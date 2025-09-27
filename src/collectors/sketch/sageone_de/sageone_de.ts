
import { SketchCollector } from '../../sketchCollector';

export class SageoneDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sageone_de",
        name: "SageOne.de",
        description: "i18n.collectors.sageone_de.description",
        version: "0",
        website: "https://app.de.sageone.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6479.jpg",
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
        entryUrl: "https://app.de.sageone.com/",
    }

    constructor() {
        super(SageoneDeCollector.CONFIG);
    }
}
