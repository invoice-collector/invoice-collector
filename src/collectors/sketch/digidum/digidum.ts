
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigidumCollector extends SketchCollector {

    static CONFIG = {
        id: "digidum",
        name: "Digidum",
        description: "i18n.collectors.digidum.description",
        version: "0",
        website: "https://digidum.uintertool.com/#/pinvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1914319.jpg",
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
        entryUrl: "https://digidum.uintertool.com/#/pinvoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigidumCollector.CONFIG);
    }
}
