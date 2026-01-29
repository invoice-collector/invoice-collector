
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasyroommateUkRoomgoCollector extends SketchCollector {

    static CONFIG = {
        id: "easyroommate_uk_roomgo",
        name: "EasyRoommate UK(roomgo)",
        description: "i18n.collectors.easyroommate_uk_roomgo.description",
        version: "0",
        website: "https://www.roomgo.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21724.jpg",
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
        loginUrl: "https://www.roomgo.co.uk/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EasyroommateUkRoomgoCollector.CONFIG);
    }
}
