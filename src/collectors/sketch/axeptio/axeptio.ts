
import { SketchCollector } from '../../sketchCollector';

export class AxeptioCollector extends SketchCollector {

    static CONFIG = {
        id: "axeptio",
        name: "Axeptio",
        description: "i18n.collectors.axeptio.description",
        version: "0",
        website: "https://admin.axeptio.eu/projects/60a6104053946911d54de48d/config/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1423398.jpg",
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
        entryUrl: "https://admin.axeptio.eu/projects/60a6104053946911d54de48d/config/invoices",
    }

    constructor() {
        super(AxeptioCollector.CONFIG);
    }
}
