
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PayoneIngenicoDrmCollector extends SketchCollector {

    static CONFIG = {
        id: "payone_ingenico_drm",
        name: "Payone Ingenico DRM",
        description: "i18n.collectors.payone_ingenico_drm.description",
        version: "0",
        website: "https://ger-drm.mc.ingenico.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1679607.jpg",
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
        entryUrl: "https://ger-drm.mc.ingenico.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PayoneIngenicoDrmCollector.CONFIG);
    }
}
