
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GkvSpitzenverbandCollector extends SketchCollector {

    static CONFIG = {
        id: "gkv_spitzenverband",
        name: "GKV-Spitzenverband",
        description: "i18n.collectors.gkv_spitzenverband.description",
        version: "0",
        website: "https://antraege.gkv-spitzenverband.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479842.jpg",
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
        entryUrl: "https://antraege.gkv-spitzenverband.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GkvSpitzenverbandCollector.CONFIG);
    }
}
