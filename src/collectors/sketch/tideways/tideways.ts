
import { SketchCollector } from '../../sketchCollector';

export class TidewaysCollector extends SketchCollector {

    static CONFIG = {
        id: "tideways",
        name: "Tideways",
        description: "i18n.collectors.tideways.description",
        version: "0",
        website: "https://app.tideways.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8062.jpg",
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
        entryUrl: "https://app.tideways.io/login",
    }

    constructor() {
        super(TidewaysCollector.CONFIG);
    }
}
