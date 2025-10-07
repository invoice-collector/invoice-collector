
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FotoworkshopStuttgartDeCollector extends SketchCollector {

    static CONFIG = {
        id: "fotoworkshop_stuttgart_de",
        name: "Fotoworkshop-Stuttgart.de",
        description: "i18n.collectors.fotoworkshop_stuttgart_de.description",
        version: "0",
        website: "https://www.fotoworkshop-stuttgart.de/konto/buchungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778996.jpg",
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
        entryUrl: "https://www.fotoworkshop-stuttgart.de/konto/buchungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FotoworkshopStuttgartDeCollector.CONFIG);
    }
}
