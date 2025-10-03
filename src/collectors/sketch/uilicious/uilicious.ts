
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UiliciousCollector extends SketchCollector {

    static CONFIG = {
        id: "uilicious",
        name: "UIlicious",
        description: "i18n.collectors.uilicious.description",
        version: "0",
        website: "https://user.uilicious.com/profile/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75995.jpg",
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
        entryUrl: "https://user.uilicious.com/profile/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UiliciousCollector.CONFIG);
    }
}
