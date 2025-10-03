
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneEsCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_es",
        name: "Vodafone.es",
        description: "i18n.collectors.vodafone_es.description",
        version: "0",
        website: "https://www.vodafone.es/empresas/es/login-ds/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8747.jpg",
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
        entryUrl: "https://www.vodafone.es/empresas/es/login-ds/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafoneEsCollector.CONFIG);
    }
}
