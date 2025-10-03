
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LivezillaCollector extends SketchCollector {

    static CONFIG = {
        id: "livezilla",
        name: "LiveZilla",
        description: "i18n.collectors.livezilla.description",
        version: "0",
        website: "https://www.livezilla.net/shop/de/?action=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8132.jpg",
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
        entryUrl: "https://www.livezilla.net/shop/de/?action=login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LivezillaCollector.CONFIG);
    }
}
