
import { SketchCollector } from '../../sketchCollector';

export class Uk2Collector extends SketchCollector {

    static CONFIG = {
        id: "uk2",
        name: "uk2",
        description: "i18n.collectors.uk2.description",
        version: "0",
        website: "https://chi.uk2.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30195.jpg",
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
        entryUrl: "https://chi.uk2.net",
    }

    constructor() {
        super(Uk2Collector.CONFIG);
    }
}
