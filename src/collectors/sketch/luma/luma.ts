
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LumaCollector extends SketchCollector {

    static CONFIG = {
        id: "luma",
        name: "Luma",
        description: "i18n.collectors.luma.description",
        version: "0",
        website: "https://lu.ma/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175869.jpg",
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
        entryUrl: "https://lu.ma/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LumaCollector.CONFIG);
    }
}
