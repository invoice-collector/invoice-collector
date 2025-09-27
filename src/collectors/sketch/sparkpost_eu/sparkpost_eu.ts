
import { SketchCollector } from '../../sketchCollector';

export class SparkpostEuCollector extends SketchCollector {

    static CONFIG = {
        id: "sparkpost_eu",
        name: "SparkPost EU",
        description: "i18n.collectors.sparkpost_eu.description",
        version: "0",
        website: "https://app.eu.sparkpost.com/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931536.jpg",
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
        entryUrl: "https://app.eu.sparkpost.com/auth",
    }

    constructor() {
        super(SparkpostEuCollector.CONFIG);
    }
}
