
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SohohouseCollector extends SketchCollector {

    static CONFIG = {
        id: "sohohouse",
        name: "SohoHouse",
        description: "i18n.collectors.sohohouse.description",
        version: "0",
        website: "https://identity.houseseven.com/sessions/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50633.jpg",
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
        entryUrl: "https://identity.houseseven.com/sessions/new",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SohohouseCollector.CONFIG);
    }
}
