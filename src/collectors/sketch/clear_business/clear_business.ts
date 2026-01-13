
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClearBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "clear_business",
        name: "Clear Business",
        description: "i18n.collectors.clear_business.description",
        version: "0",
        website: "https://customerzone.clearbusiness.co.uk/Invoice/Index/34181673",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4545950.jpg",
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
        loginUrl: "https://customerzone.clearbusiness.co.uk/Invoice/Index/34181673",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClearBusinessCollector.CONFIG);
    }
}
