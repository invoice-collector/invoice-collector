
import { SketchCollector } from '../../sketchCollector';

export class McgrundrissCollector extends SketchCollector {

    static CONFIG = {
        id: "mcgrundriss",
        name: "McGrundriss",
        description: "i18n.collectors.mcgrundriss.description",
        version: "0",
        website: "http://www.mcgrundriss.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/114556.jpg",
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
        entryUrl: "http://www.mcgrundriss.de",
    }

    constructor() {
        super(McgrundrissCollector.CONFIG);
    }
}
