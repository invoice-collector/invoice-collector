
import { SketchCollector } from '../../sketchCollector';

export class DeutscheTelekomBreitbandCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_telekom_breitband",
        name: "Deutsche Telekom - Breitband",
        description: "i18n.collectors.deutsche_telekom_breitband.description",
        version: "0",
        website: "https://breitband.telekom-dienste.de/kundencenter-breitband/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23658.jpg",
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
        entryUrl: "https://breitband.telekom-dienste.de/kundencenter-breitband/",
    }

    constructor() {
        super(DeutscheTelekomBreitbandCollector.CONFIG);
    }
}
