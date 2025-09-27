
import { SketchCollector } from '../../sketchCollector';

export class MemorykingCollector extends SketchCollector {

    static CONFIG = {
        id: "memoryking",
        name: "Memoryking",
        description: "i18n.collectors.memoryking.description",
        version: "0",
        website: "https://www.memoryking.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14401.jpg",
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
        entryUrl: "https://www.memoryking.de/account",
    }

    constructor() {
        super(MemorykingCollector.CONFIG);
    }
}
