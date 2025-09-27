
import { SketchCollector } from '../../sketchCollector';

export class Worldwide101Collector extends SketchCollector {

    static CONFIG = {
        id: "worldwide101",
        name: "worldwide101",
        description: "i18n.collectors.worldwide101.description",
        version: "0",
        website: "https://dash.worldwide101.com/clients/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14256.jpg",
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
        entryUrl: "https://dash.worldwide101.com/clients/login/",
    }

    constructor() {
        super(Worldwide101Collector.CONFIG);
    }
}
