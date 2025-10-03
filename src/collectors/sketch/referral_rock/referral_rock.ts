
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReferralRockCollector extends SketchCollector {

    static CONFIG = {
        id: "referral_rock",
        name: "Referral Rock",
        description: "i18n.collectors.referral_rock.description",
        version: "0",
        website: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8768.jpg",
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
        entryUrl: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReferralRockCollector.CONFIG);
    }
}
