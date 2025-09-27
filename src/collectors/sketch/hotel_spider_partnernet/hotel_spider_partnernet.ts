
import { SketchCollector } from '../../sketchCollector';

export class HotelSpiderPartnernetCollector extends SketchCollector {

    static CONFIG = {
        id: "hotel_spider_partnernet",
        name: "Hotel-Spider Partnernet",
        description: "i18n.collectors.hotel_spider_partnernet.description",
        version: "0",
        website: "https://extranet.hotel-spider.ch/affiliation/#/commissions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517024.jpg",
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
        entryUrl: "https://extranet.hotel-spider.ch/affiliation/#/commissions",
    }

    constructor() {
        super(HotelSpiderPartnernetCollector.CONFIG);
    }
}
