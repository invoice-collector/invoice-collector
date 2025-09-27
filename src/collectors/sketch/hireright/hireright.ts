
import { SketchCollector } from '../../sketchCollector';

export class HirerightCollector extends SketchCollector {

    static CONFIG = {
        id: "hireright",
        name: "HireRight",
        description: "i18n.collectors.hireright.description",
        version: "0",
        website: "https://www.hireright.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108423.jpg",
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
        entryUrl: "https://www.hireright.com",
    }

    constructor() {
        super(HirerightCollector.CONFIG);
    }
}
