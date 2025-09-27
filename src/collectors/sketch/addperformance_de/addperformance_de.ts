
import { SketchCollector } from '../../sketchCollector';

export class AddperformanceDeCollector extends SketchCollector {

    static CONFIG = {
        id: "addperformance_de",
        name: "addperformance.de",
        description: "i18n.collectors.addperformance_de.description",
        version: "0",
        website: "https://www.addperformance.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899510.jpg",
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
        entryUrl: "https://www.addperformance.de/",
    }

    constructor() {
        super(AddperformanceDeCollector.CONFIG);
    }
}
