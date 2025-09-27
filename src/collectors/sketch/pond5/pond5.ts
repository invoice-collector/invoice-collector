
import { SketchCollector } from '../../sketchCollector';

export class Pond5Collector extends SketchCollector {

    static CONFIG = {
        id: "pond5",
        name: "Pond5",
        description: "i18n.collectors.pond5.description",
        version: "0",
        website: "https://www.pond5.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33296.jpg",
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
        entryUrl: "https://www.pond5.com/login",
    }

    constructor() {
        super(Pond5Collector.CONFIG);
    }
}
