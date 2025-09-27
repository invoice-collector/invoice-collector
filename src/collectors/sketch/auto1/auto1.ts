
import { SketchCollector } from '../../sketchCollector';

export class Auto1Collector extends SketchCollector {

    static CONFIG = {
        id: "auto1",
        name: "AUTO1",
        description: "i18n.collectors.auto1.description",
        version: "0",
        website: "http://www.auto1.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91351.jpg",
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
        entryUrl: "http://www.auto1.com",
    }

    constructor() {
        super(Auto1Collector.CONFIG);
    }
}
