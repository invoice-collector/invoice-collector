
import { SketchCollector } from '../../sketchCollector';

export class StonlyCollector extends SketchCollector {

    static CONFIG = {
        id: "stonly",
        name: "Stonly",
        description: "i18n.collectors.stonly.description",
        version: "0",
        website: "https://stonly.com/authentication",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254829.jpg",
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
        entryUrl: "https://stonly.com/authentication",
    }

    constructor() {
        super(StonlyCollector.CONFIG);
    }
}
