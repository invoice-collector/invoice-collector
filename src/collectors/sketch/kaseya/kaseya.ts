
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KaseyaCollector extends SketchCollector {

    static CONFIG = {
        id: "kaseya",
        name: "Kaseya",
        description: "i18n.collectors.kaseya.description",
        version: "0",
        website: "https://one.kaseya.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/100357.jpg",
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
        entryUrl: "https://one.kaseya.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KaseyaCollector.CONFIG);
    }
}
