
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QuironprevencionCollector extends SketchCollector {

    static CONFIG = {
        id: "quironprevencion",
        name: "Quironprevencion",
        description: "i18n.collectors.quironprevencion.description",
        version: "0",
        website: "https://www.quironprevencion.com/es/area-privada/area-clientes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49774.jpg",
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
        loginUrl: "https://www.quironprevencion.com/es/area-privada/area-clientes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QuironprevencionCollector.CONFIG);
    }
}
