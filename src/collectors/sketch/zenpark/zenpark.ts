
import { SketchCollector } from '../../sketchCollector';

export class ZenparkCollector extends SketchCollector {

    static CONFIG = {
        id: "zenpark",
        name: "Zenpark",
        description: "i18n.collectors.zenpark.description",
        version: "0",
        website: "https://zenpark.com/espace-membre",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/662543.jpg",
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
        entryUrl: "https://zenpark.com/espace-membre",
    }

    constructor() {
        super(ZenparkCollector.CONFIG);
    }
}
