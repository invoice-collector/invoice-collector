
import { SketchCollector } from '../../sketchCollector';

export class Buroshop24Collector extends SketchCollector {

    static CONFIG = {
        id: "buroshop24",
        name: "buroshop24",
        description: "i18n.collectors.buroshop24.description",
        version: "0",
        website: "https://www.bueroshop24.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27198.jpg",
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
        entryUrl: "https://www.bueroshop24.de/login",
    }

    constructor() {
        super(Buroshop24Collector.CONFIG);
    }
}
