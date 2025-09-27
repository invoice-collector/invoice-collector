
import { SketchCollector } from '../../sketchCollector';

export class MemomeisterCollector extends SketchCollector {

    static CONFIG = {
        id: "memomeister",
        name: "Memomeister",
        description: "i18n.collectors.memomeister.description",
        version: "0",
        website: "https://web.memomeister.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194678.jpg",
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
        entryUrl: "https://web.memomeister.com/settings/billing",
    }

    constructor() {
        super(MemomeisterCollector.CONFIG);
    }
}
