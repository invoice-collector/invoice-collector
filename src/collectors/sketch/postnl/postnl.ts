
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PostnlCollector extends SketchCollector {

    static CONFIG = {
        id: "postnl",
        name: "PostNL",
        description: "i18n.collectors.postnl.description",
        version: "0",
        website: "https://jouw.postnl.nl/account/overzicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20512.jpg",
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
        entryUrl: "https://jouw.postnl.nl/account/overzicht",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PostnlCollector.CONFIG);
    }
}
