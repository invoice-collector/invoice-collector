
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PetersenBoeschCollector extends SketchCollector {

    static CONFIG = {
        id: "petersen_boesch",
        name: "Petersen-Boesch",
        description: "i18n.collectors.petersen_boesch.description",
        version: "0",
        website: "https://petersen-boesch.portal-bereich.de/html/#kanzleirechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4686882.jpg",
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
        entryUrl: "https://petersen-boesch.portal-bereich.de/html/#kanzleirechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PetersenBoeschCollector.CONFIG);
    }
}
