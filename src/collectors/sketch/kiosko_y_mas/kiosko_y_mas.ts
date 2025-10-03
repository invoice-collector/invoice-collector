
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KioskoYMasCollector extends SketchCollector {

    static CONFIG = {
        id: "kiosko_y_mas",
        name: "Kiosko y mas",
        description: "i18n.collectors.kiosko_y_mas.description",
        version: "0",
        website: "https://www.kioskoymas.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3118843.jpg",
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
        entryUrl: "https://www.kioskoymas.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KioskoYMasCollector.CONFIG);
    }
}
