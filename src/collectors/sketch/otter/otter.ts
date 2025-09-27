
import { SketchCollector } from '../../sketchCollector';

export class OtterCollector extends SketchCollector {

    static CONFIG = {
        id: "otter",
        name: "Otter",
        description: "i18n.collectors.otter.description",
        version: "0",
        website: "https://otter.ai/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762509.jpg",
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
        entryUrl: "https://otter.ai/signin",
    }

    constructor() {
        super(OtterCollector.CONFIG);
    }
}
