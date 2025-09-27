
import { SketchCollector } from '../../sketchCollector';

export class GlobalNumbersCollector extends SketchCollector {

    static CONFIG = {
        id: "global_numbers",
        name: "global numbers",
        description: "i18n.collectors.global_numbers.description",
        version: "0",
        website: "https://www.globalnumbers.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/787589.jpg",
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
        entryUrl: "https://www.globalnumbers.de/",
    }

    constructor() {
        super(GlobalNumbersCollector.CONFIG);
    }
}
