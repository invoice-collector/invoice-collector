
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TummeeCollector extends SketchCollector {

    static CONFIG = {
        id: "tummee",
        name: "Tummee",
        description: "i18n.collectors.tummee.description",
        version: "0",
        website: "https://www.tummee.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090215.jpg",
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
        entryUrl: "https://www.tummee.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TummeeCollector.CONFIG);
    }
}
