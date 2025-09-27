
import { SketchCollector } from '../../sketchCollector';

export class Rent24Collector extends SketchCollector {

    static CONFIG = {
        id: "rent24",
        name: "rent24",
        description: "i18n.collectors.rent24.description",
        version: "0",
        website: "https://members.rent24.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47323.jpg",
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
        entryUrl: "https://members.rent24.com/",
    }

    constructor() {
        super(Rent24Collector.CONFIG);
    }
}
