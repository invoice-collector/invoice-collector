
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TchiboMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "tchibo_mobil",
        name: "Tchibo Mobil",
        description: "i18n.collectors.tchibo_mobil.description",
        version: "0",
        website: "https://tchibo-mobil.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9221.jpg",
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
        entryUrl: "https://tchibo-mobil.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TchiboMobilCollector.CONFIG);
    }
}
