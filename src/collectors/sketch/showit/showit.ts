
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShowitCollector extends SketchCollector {

    static CONFIG = {
        id: "showit",
        name: "Showit",
        description: "i18n.collectors.showit.description",
        version: "0",
        website: "https://account.showit.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525337.jpg",
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
        entryUrl: "https://account.showit.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShowitCollector.CONFIG);
    }
}
