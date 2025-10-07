
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppsumoCollector extends SketchCollector {

    static CONFIG = {
        id: "appsumo",
        name: "Appsumo",
        description: "i18n.collectors.appsumo.description",
        version: "0",
        website: "https://www.appsumo.com/account/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9701.jpg",
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
        entryUrl: "https://www.appsumo.com/account/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppsumoCollector.CONFIG);
    }
}
