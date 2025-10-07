
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NostoCollector extends SketchCollector {

    static CONFIG = {
        id: "nosto",
        name: "Nosto",
        description: "i18n.collectors.nosto.description",
        version: "0",
        website: "https://my.nosto.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104673.jpg",
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
        entryUrl: "https://my.nosto.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NostoCollector.CONFIG);
    }
}
