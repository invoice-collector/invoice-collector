
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MoreappCollector extends SketchCollector {

    static CONFIG = {
        id: "moreapp",
        name: "MoreApp",
        description: "i18n.collectors.moreapp.description",
        version: "0",
        website: "https://platform.moreapp.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776435.jpg",
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
        entryUrl: "https://platform.moreapp.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MoreappCollector.CONFIG);
    }
}
