
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HotelSpiderPartnernetCollector extends SketchCollector {

    static CONFIG = {
        id: "hotel_spider_partnernet",
        name: "Hotel-Spider Partnernet",
        description: "i18n.collectors.hotel_spider_partnernet.description",
        version: "0",
        website: "https://extranet.hotel-spider.ch/affiliation/#/commissions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517024.jpg",
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
        loginUrl: "https://extranet.hotel-spider.ch/affiliation/#/commissions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HotelSpiderPartnernetCollector.CONFIG);
    }
}
