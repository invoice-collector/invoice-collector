
import { SketchCollector } from '../../sketchCollector';

export class HolviCollector extends SketchCollector {

    static CONFIG = {
        id: "holvi",
        name: "Holvi",
        description: "i18n.collectors.holvi.description",
        version: "0",
        website: "https://app.holvi.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53928.jpg",
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
        entryUrl: "https://app.holvi.com/login/",
    }

    constructor() {
        super(HolviCollector.CONFIG);
    }
}
