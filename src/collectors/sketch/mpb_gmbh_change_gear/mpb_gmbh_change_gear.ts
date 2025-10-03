
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MpbGmbhChangeGearCollector extends SketchCollector {

    static CONFIG = {
        id: "mpb_gmbh_change_gear",
        name: "MPB GmbH - Change Gear",
        description: "i18n.collectors.mpb_gmbh_change_gear.description",
        version: "0",
        website: "https://www.mpb.com/de-de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973185.jpg",
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
        entryUrl: "https://www.mpb.com/de-de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MpbGmbhChangeGearCollector.CONFIG);
    }
}
