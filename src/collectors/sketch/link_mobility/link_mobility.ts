
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LinkMobilityCollector extends SketchCollector {

    static CONFIG = {
        id: "link_mobility",
        name: "Link Mobility",
        description: "i18n.collectors.link_mobility.description",
        version: "0",
        website: "https://app.linkmobility.eu/de-AT/#/settings/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095679.jpg",
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
        entryUrl: "https://app.linkmobility.eu/de-AT/#/settings/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkMobilityCollector.CONFIG);
    }
}
