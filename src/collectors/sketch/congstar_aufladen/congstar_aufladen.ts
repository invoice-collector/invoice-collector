
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CongstarAufladenCollector extends SketchCollector {

    static CONFIG = {
        id: "congstar_aufladen",
        name: "congstar | Aufladen",
        description: "i18n.collectors.congstar_aufladen.description",
        version: "0",
        website: "https://www.congstaraufladen.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976559.jpg",
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
        entryUrl: "https://www.congstaraufladen.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CongstarAufladenCollector.CONFIG);
    }
}
