
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostingwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "hostingwerk",
        name: "Hostingwerk",
        description: "i18n.collectors.hostingwerk.description",
        version: "0",
        website: "https://hostingwerk.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/782244.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://hostingwerk.de/anmelden",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostingwerkCollector.CONFIG);
    }
}
