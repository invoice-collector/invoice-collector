
import { SketchCollector } from '../../sketchCollector';

export class Helium10Collector extends SketchCollector {

    static CONFIG = {
        id: "helium10",
        name: "Helium10",
        description: "i18n.collectors.helium10.description",
        version: "0",
        website: "https://members.helium10.com/profile/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70820.jpg",
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
        entryUrl: "https://members.helium10.com/profile/billing",
    }

    constructor() {
        super(Helium10Collector.CONFIG);
    }
}
