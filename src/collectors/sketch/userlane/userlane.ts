
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UserlaneCollector extends SketchCollector {

    static CONFIG = {
        id: "userlane",
        name: "userlane",
        description: "i18n.collectors.userlane.description",
        version: "0",
        website: "https://www.userlane.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/572705.jpg",
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
        entryUrl: "https://www.userlane.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UserlaneCollector.CONFIG);
    }
}
