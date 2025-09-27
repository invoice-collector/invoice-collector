
import { SketchCollector } from '../../sketchCollector';

export class VavVersicherungenCollector extends SketchCollector {

    static CONFIG = {
        id: "vav_versicherungen",
        name: "VAV Versicherungen",
        description: "i18n.collectors.vav_versicherungen.description",
        version: "0",
        website: "https://mein.vav.at/meinvav/meine-polizzen/polizzen-details?id=1495719001",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4365276.jpg",
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
        entryUrl: "https://mein.vav.at/meinvav/meine-polizzen/polizzen-details?id=1495719001",
    }

    constructor() {
        super(VavVersicherungenCollector.CONFIG);
    }
}
