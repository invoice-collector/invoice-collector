
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DedimaxCollector extends SketchCollector {

    static CONFIG = {
        id: "dedimax",
        name: "DEDIMAX",
        description: "i18n.collectors.dedimax.description",
        version: "0",
        website: "https://panel.dedimax.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931015.jpg",
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
        entryUrl: "https://panel.dedimax.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DedimaxCollector.CONFIG);
    }
}
