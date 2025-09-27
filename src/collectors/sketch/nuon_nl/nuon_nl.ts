
import { SketchCollector } from '../../sketchCollector';

export class NuonNlCollector extends SketchCollector {

    static CONFIG = {
        id: "nuon_nl",
        name: "nuon.nl",
        description: "i18n.collectors.nuon_nl.description",
        version: "0",
        website: "https://www.nuon.nl/service/mijn-nuon/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20442.jpg",
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
        entryUrl: "https://www.nuon.nl/service/mijn-nuon/",
    }

    constructor() {
        super(NuonNlCollector.CONFIG);
    }
}
