
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YocoCollector extends SketchCollector {

    static CONFIG = {
        id: "yoco",
        name: "Yoco",
        description: "i18n.collectors.yoco.description",
        version: "0",
        website: "https://portal.yoco.co.za/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245480.jpg",
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
        entryUrl: "https://portal.yoco.co.za/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YocoCollector.CONFIG);
    }
}
