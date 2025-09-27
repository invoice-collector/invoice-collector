
import { SketchCollector } from '../../sketchCollector';

export class DebounceCollector extends SketchCollector {

    static CONFIG = {
        id: "debounce",
        name: "Debounce",
        description: "i18n.collectors.debounce.description",
        version: "0",
        website: "https://app.debounce.io/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1256073.jpg",
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
        entryUrl: "https://app.debounce.io/payments",
    }

    constructor() {
        super(DebounceCollector.CONFIG);
    }
}
