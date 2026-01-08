
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HotelSpiderCollector extends SketchCollector {

    static CONFIG = {
        id: "hotel_spider",
        name: "Hotel-Spider",
        description: "i18n.collectors.hotel_spider.description",
        version: "0",
        website: "https://extranet.hotel-spider.ch/hotel/#/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20609.jpg",
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
        loginUrl: "https://extranet.hotel-spider.ch/hotel/#/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HotelSpiderCollector.CONFIG);
    }
}
