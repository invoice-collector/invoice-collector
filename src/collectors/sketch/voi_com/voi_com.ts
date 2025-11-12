import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VoiComCollector extends SketchCollector {

    static CONFIG = {
        id: "voi_com",
        name: "Voi",
        description: "i18n.collectors.voi_com.description",
        version: "0",
        website: "https://www.voi.com",
        logo: "https://www.voi.com/logos/voi-coral.svg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VoiComCollector.CONFIG);
    }
}
