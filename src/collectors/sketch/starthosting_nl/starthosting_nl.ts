
import { SketchCollector } from '../../sketchCollector';

export class StarthostingNlCollector extends SketchCollector {

    static CONFIG = {
        id: "starthosting_nl",
        name: "starthosting.nl",
        description: "i18n.collectors.starthosting_nl.description",
        version: "0",
        website: "http://www.starthosting.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32261.jpg",
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
        entryUrl: "http://www.starthosting.nl",
    }

    constructor() {
        super(StarthostingNlCollector.CONFIG);
    }
}
