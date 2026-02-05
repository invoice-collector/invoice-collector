
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StardockStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "stardock_store",
        name: "Stardock Store",
        description: "i18n.collectors.stardock_store.description",
        version: "0",
        website: "https://identity.stardock.com/login?returnUrl=%2Fconnect%2Fauthorize%2Flogin%3Fclient_id%3Dstardock.com%26response_mode%3Dform_post%26response_type%3Did_token%26scope%3Dopenid%2520profile%2520email%2520steam.profile%26state%3DOpenIdConnect.AuthenticationP",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123505.jpg",
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
        loginUrl: "https://identity.stardock.com/login?returnUrl=%2Fconnect%2Fauthorize%2Flogin%3Fclient_id%3Dstardock.com%26response_mode%3Dform_post%26response_type%3Did_token%26scope%3Dopenid%2520profile%2520email%2520steam.profile%26state%3DOpenIdConnect.AuthenticationP",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StardockStoreCollector.CONFIG);
    }
}
