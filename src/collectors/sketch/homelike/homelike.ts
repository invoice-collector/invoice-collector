
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HomelikeCollector extends SketchCollector {

    static CONFIG = {
        id: "homelike",
        name: "Homelike",
        description: "i18n.collectors.homelike.description",
        version: "0",
        website: "https://app.thehomelike.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119032.jpg",
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
        entryUrl: "https://app.thehomelike.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HomelikeCollector.CONFIG);
    }
}
