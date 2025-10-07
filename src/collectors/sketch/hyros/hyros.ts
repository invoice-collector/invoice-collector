
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HyrosCollector extends SketchCollector {

    static CONFIG = {
        id: "hyros",
        name: "Hyros",
        description: "i18n.collectors.hyros.description",
        version: "0",
        website: "https://app.hyros.com/public/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1193654.jpg",
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
        entryUrl: "https://app.hyros.com/public/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HyrosCollector.CONFIG);
    }
}
