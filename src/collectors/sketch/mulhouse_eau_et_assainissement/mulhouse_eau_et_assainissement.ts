
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MulhouseEauEtAssainissementCollector extends SketchCollector {

    static CONFIG = {
        id: "mulhouse_eau_et_assainissement",
        name: "Mulhouse - Eau et Assainissement",
        description: "i18n.collectors.mulhouse_eau_et_assainissement.description",
        version: "0",
        website: "https://e-services.mulhouse-alsace.fr/services/sde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4654935.jpg",
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
        entryUrl: "https://e-services.mulhouse-alsace.fr/services/sde",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MulhouseEauEtAssainissementCollector.CONFIG);
    }
}
