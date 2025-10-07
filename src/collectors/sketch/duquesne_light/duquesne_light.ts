
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DuquesneLightCollector extends SketchCollector {

    static CONFIG = {
        id: "duquesne_light",
        name: "Duquesne Light",
        description: "i18n.collectors.duquesne_light.description",
        version: "0",
        website: "https://duquesnelight.com/account-billing/account-summary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2193914.jpg",
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
        entryUrl: "https://duquesnelight.com/account-billing/account-summary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DuquesneLightCollector.CONFIG);
    }
}
